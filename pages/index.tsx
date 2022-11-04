import { withIronSessionSsr } from "iron-session/next";
import { People } from "../database/entities/People";
import { CookieConfig } from "./CookieConfig";

interface Props {
  people: People[];
  user: User | null
}

export default function ({ people, user }: Props) {
  return <>
    <h1>{user?.username || "Not signed in."}</h1>
    <h1>Posts ({people.length})</h1>
    {people.map(p => <div>{p.name}</div>)}
  </>;
}

export const getServerSideProps = withIronSessionSsr(
  async function ({ req }) {
    const people = await IslaamDataSource.getRepository(People).find();
    const user = req.session.user || null;
    return {
      props: { user, people } as Props
    }
  }, CookieConfig);

