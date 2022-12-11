import { withIronSessionSsr } from "iron-session/next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Praises } from "../../database/entities/Praises";
import { IslaamDatabase } from "../../database/IslaamDatabase";
import { CookieConfig, getIsAdminFromReq } from "../../utils/SessionUtils";
import { toJson } from "../../utils";
import { ListPage } from "../../components/ListPage/ListPage";
interface Props {
    praises: Praises[];
    canCreate?: boolean;
}
export default function ({ praises, canCreate }: Props) {
    const { highlight } = useRouter().query;

    return (
        <ListPage
            modelName={{ plural: "Praises", singular: "Praise" }}
            canCreate={canCreate}
            columnNames={["ID", "Praiser", "Praisee", "Title", "Topic"]}
            rows={praises.map(p => ({
                key: p.id,
                href: `/praises/${p.id}`,
                isActive: highlight === p.id.toString(),
                columns: [
                    <Link key={0} href={`/praises/${p.id}`}>
                        {p.id}
                    </Link>,
                    <Link key={1} href={`/people/${p.praiserId}`}>
                        {p.praiser.name}
                    </Link>,
                    <Link key={2} href={`/people/${p.praiseeId}`}>
                        {p.praisee.name}
                    </Link>,
                    <Link key={3} href={`/titles/${p.title}`}>
                        {p.title?.name}
                    </Link>,
                    <Link key={4} href={`/topics/${p.topic}`}>
                        {p.topic?.name}
                    </Link>,
                ],
            }))}
        />
    );
}

export const getServerSideProps = withIronSessionSsr(async ({ req }) => {
    const db = await IslaamDatabase.Praises;
    const praises = await db
        .find({
            relations: {
                praiser: true,
                praisee: true,
                topic: true,
                title: true,
            },
        })
        .then(p => toJson(p));
    const canCreate = getIsAdminFromReq(req);
    return { props: { praises, canCreate } };
}, CookieConfig);
