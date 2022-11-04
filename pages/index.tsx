import { withIronSessionSsr } from "iron-session/next";
import { People } from "../database/entities/People";
import { IslaamDatabase } from "../database/IslaamDatabase";
import { CookieConfig } from "./CookieConfig";

interface Props {
  people: People[];
  user: User | null
}

export default function ({ people, user }: Props) {
  return <>
    <h1>{user?.username || "Not signed in"}</h1>
    {people.map(p => <>
      {p.name}<br />
    </>)}
  </>;
}

export const getServerSideProps = withIronSessionSsr(
  async function ({ req }) {
    const db = await IslaamDatabase.getInstance();
    const people = toJson(await db.getRepository(People).find());
    const user = req.session.user || null;
    return {
      props: { user, people } as Props
    }
  }, CookieConfig);

const toJson = (x: any) => JSON.parse(JSON.stringify(x));