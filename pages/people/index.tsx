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
    return <PeopleTable people={people} />;
}

export const getServerSideProps = withIronSessionSsr(
    async (context) => {
        const db = await IslaamDatabase.getInstance();
        const query = db
            .getRepository(People)
            .createQueryBuilder("people")
            .orderBy("people.deathYear", "ASC", "NULLS LAST")
            .getMany();
        const people = toJson(await query);
        const user = context.req.session.user || null;
        return {
            props: { user, people }
        }
    }, CookieConfig);
