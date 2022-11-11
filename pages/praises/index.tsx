import { withIronSessionSsr } from "iron-session/next";
import Link from "next/link";
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
                <td>Title</td>
                <td>Topic</td>
                <td>Source</td>
            </tr>}
            bodyTrs={praises.map(p => <tr>
                <td>{p.id}</td>
                <td>
                    <Link href={`/people/${p.praiserId}`}>{p.praiser.name}</Link>
                </td>
                <td>
                    <Link href={`/people/${p.praiseeId}`}>{p.praisee.name}</Link>
                </td>
                <td>
                    <Link href={`/titles/${p.titleId}`}>{p.title?.name}</Link>
                </td>
                <td>
                    <Link href={`/topics/${p.topicId}`}>
                        {p.topic?.name}
                    </Link>
                </td>
                <td>{p.source}</td>
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