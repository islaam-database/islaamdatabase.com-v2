import { withIronSessionSsr } from "iron-session/next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import { AppRoles } from "../../database/entities/AppRoles";
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
    const { highlight } = useRouter().query;
    return <>
        <h1 style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Praises ({praises.length})</span>
            {
                role.name === "admin" && <Link href="/praises/create">Create praise</Link>
            }
        </h1>
        <hr />
        <Table
            columnNames={[
                "ID",
                "Praiser",
                "Praisee",
                "Title",
                "Topic",
            ]}
            rows={praises.map(p => ({
                key: p.id,
                isActive: highlight === p.id.toString(),
                values: [
                    p.id,
                    { text: p.praiser.name, href: `/people/${p.praiserId}` },
                    { text: p.praisee.name, href: `/people/${p.praiseeId}` },
                    { text: p.title?.name, href: `/titles/${p.title}` },
                    { text: p.topic?.name, href: `/topics/${p.topic}` },
                ],
            }))}
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