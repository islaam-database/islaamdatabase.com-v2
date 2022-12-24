import { withIronSessionSsr } from "iron-session/next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Praises } from "../../database/entities/Praises";
import { IslaamDatabase } from "../../database/IslaamDatabase";
import { CookieConfig, getIsAdminFromReq } from "../../utils/SessionUtils";
import { toJson } from "../../utils/utils";
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
            trs={praises.map(praise => (
                <tr key={praise.id}>
                    <td>
                        <Link href={`/praises/${praise.id}`}>{praise.id}</Link>
                    </td>
                    <td>
                        <Link href={`/people/${praise.praiserId}`}>{praise.praiser.name}</Link>
                    </td>
                    <td>
                        <Link href={`/people/${praise.praiseeId}`}>{praise.praisee.name}</Link>
                    </td>
                    <td>
                        <Link href={`/titles/${praise.title}`}>{praise.title?.name}</Link>
                    </td>
                    <td>
                        <Link href={`/topics/${praise.topic}`}>{praise.topic?.name}</Link>
                    </td>
                </tr>
            ))}
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
