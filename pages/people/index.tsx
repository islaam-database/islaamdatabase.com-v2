import { withIronSessionSsr } from "iron-session/next";
import { People } from "../../database/entities/People";
import { IslaamDatabase } from "../../database/IslaamDatabase";
import { CookieConfig } from "../CookieConfig";
import { toJson } from "../utils";
import { AppUsers } from "../../database/entities/AppUsers";
import { Table } from "../components/Table";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
    people: People[];
    user: AppUsers | null
}

export default function ({ people }: Props) {
    const { highlight } = useRouter().query;
    return <>
        <h1>People ({people.length})</h1>
        <hr />
        <Table
            columnNames={
                [
                    "Name",
                    "Death",
                    "Birth",
                    "Generation",
                ]
            }
            rows={people.map(p => ({
                isActive: highlight === p.id.toString(),
                key: p.id,
                href: `/people/${p.id}`,
                columns: [
                    p.name,
                    p.deathYear != null && `${p.deathYear} AH`,
                    p.birthYear != null && `${p.birthYear} AH`,
                    <Link href={`/generations/${p.generationId}`}>{p.generation?.name}</Link>
                ]
            }))}
        />
    </>;
}

export const getServerSideProps = withIronSessionSsr(
    async ({ req }) => {
        const db = await IslaamDatabase.getInstance();
        const query = db
            .getRepository(People)
            .createQueryBuilder("people")
            .orderBy("people.deathYear", "ASC", "NULLS LAST")
            .leftJoinAndSelect("people.generation", "generation")
            .getMany();
        const people = toJson(await query);
        const user = req.session.user || null;
        return {
            props: { user, people }
        }
    }, CookieConfig);
