import { withIronSessionSsr } from "iron-session/next";
import { People } from "../database/entities/People";
import { IslaamDatabase } from "../database/IslaamDatabase";
import { CookieConfig } from "./CookieConfig";
import { PeopleTable } from "./components/People/PeopleTable";

interface Props {
    people: People[];
    user: User | null
}

export default function ({ people, user }: Props) {
    console.log(people.map(p => p.deathYear))
    return <>
        <h1>{user?.username || "Not signed in"}</h1>
        <PeopleTable people={people} />
    </>;
}

export const getServerSideProps = withIronSessionSsr(
    async function ({ req }) {
        const db = await IslaamDatabase.getInstance();
        const query = db
            .getRepository(People)
            .createQueryBuilder("people")
            .orderBy("people.deathYear", "ASC", "NULLS LAST")
            .getMany();
        const people = toJson(await query);
        const user = req.session.user || null;
        return {
            props: { user, people } as Props
        }
    }, CookieConfig);

const toJson = (x: any) => JSON.parse(JSON.stringify(x));