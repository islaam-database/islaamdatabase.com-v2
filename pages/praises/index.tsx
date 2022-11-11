import { withIronSessionSsr } from "iron-session/next";
import { Praises } from "../../database/entities/Praises";
import { IslaamDatabase } from "../../database/IslaamDatabase";
import { Table } from "../components/Table";
import { CookieConfig } from "../CookieConfig";
import { toJson } from "../utils";
interface Props {
    praises: Praises[];
}
export default function ({ praises }: Props) {
    return <>
        <h1>Praises ({praises.length})</h1>
        <hr />
        <Table
            headTr={<tr>
                <td>ID</td>
                <td>Praiser</td>
                <td>Praisee</td>
                <td>Source</td>
                <td>Title</td>
                <td>Topic</td>
            </tr>}
            bodyTrs={praises.map(p => <tr>
                <td>{p.id}</td>
                <td>{p.praiser.name}</td>
                <td>{p.praisee.name}</td>
                <td>{p.source}</td>
                <td>{p.title?.name}</td>
                <td>{p.topic?.name}</td>
            </tr>)}
        />
    </>;
}

export const getServerSideProps = withIronSessionSsr(async () => {
    const db = await IslaamDatabase.Praises;
    const praises = db.find({
        relations: {
            praiser: true,
            praisee: true,
            topic: true,
            title: true,
        }
    }).then(p => toJson(p));
    return { props: { praises: await praises } }
}, CookieConfig)