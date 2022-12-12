import { withIronSessionSsr } from "iron-session/next";
import { People } from "../../database/entities/People";
import { IslaamDatabase } from "../../database/IslaamDatabase";
import { CookieConfig, getIsAdminFromReq } from "../../utils/SessionUtils";
import { toJson } from "../../utils";
import { useRouter } from "next/router";
import Link from "next/link";
import { GetServerSidePropsResult } from "next";
import { ListPage } from "../../components/ListPage/ListPage";
import { Badge } from "../../components/Badge/Badge";
import { useState } from "react";

interface Props extends SSProps {
    people: People[];
    canCreate: boolean;
}

export default function (p: Props) {
    const [query, setQuery] = useState("");
    const { highlight } = useRouter().query;
    return (
        <ListPage
            onSearch={setQuery}
            query={query}
            canCreate={p.canCreate}
            modelName={{ plural: "People", singular: "Person" }}
            columnNames={["Id", "Name", "Death", "Birth", "Generation"]}
            trs={p.people
                .map(p => ({ ...p, key: p.id.toString() }))
                .filter(person => {
                    if (!query) return true;
                    if (person.name.toLowerCase().includes(query)) return true;
                    if (person.nameArabic?.toLowerCase().includes(query)) return true;
                    return false;
                })
                .map(person => (
                    <tr key={person.id} className={highlight === person.id.toString() ? "active" : ""}>
                        <td>
                            <Link href={`/people/${person.id}`}>{person.id.toString()}</Link>
                        </td>
                        <td>
                            {person.name}
                            {person.nameArabic && (
                                <>
                                    <br />
                                    {person.nameArabic}
                                </>
                            )}
                        </td>
                        <td>{person.deathYear != null && `${person.deathYear} AH`}</td>
                        <td>{person.birthYear != null && `${person.birthYear} AH`}</td>
                        <td>
                            {person.generationId && (
                                <Badge>
                                    <Link href={`/generations/${person.generationId}`}>{person.generation.name}</Link>
                                </Badge>
                            )}
                        </td>
                    </tr>
                ))}
        />
    );
}

export const getServerSideProps = withIronSessionSsr(async ({ req }) => {
    const db = await IslaamDatabase.getInstance();
    const query = db
        .getRepository(People)
        .createQueryBuilder("people")
        .orderBy("people.deathYear", "ASC", "NULLS LAST")
        .leftJoinAndSelect("people.generation", "generation")
        .getMany();
    const people = toJson(await query);
    return {
        props: {
            canCreate: getIsAdminFromReq(req),
            people,
        },
    } as GetServerSidePropsResult<Props>;
}, CookieConfig);
