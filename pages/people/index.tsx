import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Badge } from "../../components/Badge/Badge";
import { ListPage } from "../../components/ListPage/ListPage";
import { PersonSideDrawer } from "../../components/PersonSideDrawer/PersonSideDrawer";
import { IslaamDatabase } from "../../database/IslaamDatabase";
import { People } from "../../database/entities/People";
import { getIsAdminFromReq } from "../../utils/SessionUtils";
import { toJson } from "../../utils/utils";

interface Props extends SSProps {
    people: People[];
    canCreate: boolean;
}

export default function (p: Props) {
    const [query, setQuery] = useState("");
    const { highlight } = useRouter().query;
    const [activePersonId, setActivePersonId] = useState<number>();
    const [activePerson, setActivePerson] = useState<People>();

    useEffect(() => {
        if (!activePersonId) return;
        const url = `/api/getPersonDetails?id=${activePersonId}`;
        fetch(url)
            .then(res => res.json())
            .then(setActivePerson);
    }, [activePersonId]);

    return (
        <div data-list="people-index" style={{ flex: 1, display: "flex" }}>
            <div style={{ flex: 1 }} data-test="list-page-container">
                <ListPage
                    data-test="ListPage"
                    onSearch={setQuery}
                    query={query}
                    canCreate={p.canCreate}
                    modelName={{ plural: "People", singular: "Person" }}
                    columnNames={["Death", "Name", "Birth", "Generation"]}
                    trs={p.people
                        .map(p => ({ ...p, key: p.id.toString() }))
                        .filter(person => {
                            if (!query) return true;
                            if (person.name.toLowerCase().includes(query)) return true;
                            if (person.nameArabic?.toLowerCase().includes(query)) return true;
                            return false;
                        })
                        .map(person => (
                            <tr
                                key={person.id}
                                className={highlight === person.id.toString() ? "active" : ""}
                                onClick={() => setActivePersonId(person.id)}
                            >
                                <td style={{ fontWeight: "bold" }}>
                                    {person.name}
                                    {person.nameArabic && (
                                        <>
                                            <br />
                                            {person.nameArabic}
                                        </>
                                    )}
                                </td>
                                <td>{person.birthYear != null && `${person.birthYear} AH`}</td>
                                <td>{person.deathYear != null && `${person.deathYear} AH`}</td>
                                <td>
                                    {person.generationId && (
                                        <Badge>
                                            <Link href={`/generations/${person.generationId}`}>
                                                {person.generation.name}
                                            </Link>
                                        </Badge>
                                    )}
                                </td>
                            </tr>
                        ))}
                />
            </div>
            {activePersonId && (
                <PersonSideDrawer canEdit={p.canCreate} isLoading={activePerson == null} person={activePerson} />
            )}
        </div>
    );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ req }) => {
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
    };
};
