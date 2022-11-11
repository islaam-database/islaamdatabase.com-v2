import { withIronSessionSsr } from "iron-session/next";
import { People } from "../../database/entities/People";
import { IslaamDatabase } from "../../database/IslaamDatabase";
import { CookieConfig } from "../CookieConfig";
import { PeopleTable } from "../components/people/PeopleTable";
import { toJson } from "../utils";
import { AppUsers } from "../../database/entities/AppUsers";

interface Props {
    people: People[];
    user: AppUsers | null
}

export default function ({ people }: Props) {
    return <>
        <h1>People ({people.length})</h1>
        <hr />
        <PeopleTable people={people} />
    </>;
}

export const getServerSideProps = withIronSessionSsr(
    async ({ req }) => {
        const db = await IslaamDatabase.getInstance();
        const query = db
            .getRepository(People)
            .createQueryBuilder("people")
            .orderBy("people.deathYear", "ASC", "NULLS LAST")
            .getMany();
        const people = toJson(await query);
        const user = req.session.user || null;
        return {
            props: { user, people }
        }
    }, CookieConfig);
