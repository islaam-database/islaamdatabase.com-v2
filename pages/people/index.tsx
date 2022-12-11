import { withIronSessionSsr } from "iron-session/next";
import { People } from "../../database/entities/People";
import { IslaamDatabase } from "../../database/IslaamDatabase";
import { CookieConfig, getIsAdminFromReq } from "../../utils/SessionUtils";
import { toJson } from "../../utils";
import { useRouter } from "next/router";
import Link from "next/link";
import { GetServerSidePropsResult } from "next";
import { ListPage } from "../../components/ListPage/ListPage";
import { Badge } from "../../components/Badge";
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
            rows={p.people
                .filter(person => {
                    if (!query) return true;
                    if (person.name.toLowerCase().includes(query)) return true;
                    if (person.nameArabic?.toLowerCase().includes(query)) return true;
                    return false;
                })
                .map(person => ({
                    isActive: highlight === person.id.toString(),
                    key: person.id,
                    href: `/people/${person.id}`,
                    columns: [
                        <Link key={0} href={`/people/${person.id}`}>
                            {person.id.toString()}
                        </Link>,
                        <>
                            {person.name}
                            {person.nameArabic && (
                                <>
                                    <br />
                                    {person.nameArabic}
                                </>
                            )}
                        </>,
                        person.deathYear != null && `${person.deathYear} AH`,
                        person.birthYear != null && `${person.birthYear} AH`,
                        person.generationId && (
                            <Badge key={4}>
                                <Link key={1} href={`/generations/${person.generationId}`}>
                                    {person.generation.name}
                                </Link>
                            </Badge>
                        ),
                    ],
                }))}
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
