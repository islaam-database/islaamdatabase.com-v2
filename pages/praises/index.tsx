import { withIronSessionSsr } from "iron-session/next";
import Link from "next/link";
import { AppRoles } from "../../database/entities/AppUsers";
import { Praises } from "../../database/entities/Praises";
import { IslaamDatabase } from "../../database/IslaamDatabase";
import { Table } from "../components/Table";
import { CookieConfig } from "../CookieConfig";
import { toJson } from "../utils";
interface Props {
    praises: Praises[];
    role: AppRoles;
}
export default function ({ praises, role }: Props) {
    return <>
        <h1>
            <span>Praises ({praises.length})</span>
            {
                role.name === "admin" && <button>Create praise</button>
            }
        </h1>
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
            bodyTrs={praises.map(p => <tr key={p.id}>
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

export const getServerSideProps = withIronSessionSsr(async ({ req }) => {
    const db = await IslaamDatabase.Praises;
    const praises = await db.find({
        relations: {
            praiser: true,
            praisee: true,
            topic: true,
            title: true,
        }
    }).then(p => toJson(p));
    const role = toJson(req.session.user?.role || null);
    return { props: { praises, role } }
}, CookieConfig)