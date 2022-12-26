import { withIronSessionSsr } from "iron-session/next";
import { GetServerSidePropsResult } from "next";
import { Praises } from "../../../database/entities/Praises";
import { IslaamDatabase } from "../../../database/IslaamDatabase";
import { toJson } from "../../../utils/utils";
import { CookieConfig, getIsAdminFromReq } from "../../../utils/SessionUtils";
import PraiseFormFields from "../../../components/forms/PraiseFormFields";

interface Props extends SSProps {
    praise?: Praises;
    error?: string;
    removed?: boolean;
}
export default function ({ praise, error, removed }: Props) {
    if (error) throw error;
    if (!praise) throw "Missing praise or error message";
    return (
        <>
            {removed && <h1>This praise has been successfully deleted.</h1>}
            <h1>Are you sure you want to delete praise {praise.id}?</h1>
            <hr />
            <PraiseFormFields
                people={[praise.praiser, praise.praisee]}
                titles={[praise.title]}
                topics={[praise.topic]}
                disabled
                praiseEditing={praise}
            />
            <hr />
            <form method="post">
                <button type="submit">Delete</button>
            </form>
        </>
    );
}

export const getServerSideProps = withIronSessionSsr(async ({ req }) => {
    const id = parseInt(req.url?.split("/").at(-2) as string);
    if (req.method === "POST") {
        const isAdmin = getIsAdminFromReq(req);
        if (!isAdmin) return { props: { error: "Unauthorized" } };
        const praiseToDelete = await IslaamDatabase.Praises.then(praises => praises.findOne({ where: { id } }));
        if (!praiseToDelete) return { props: { error: "That praise doesn't exist" } };
        await IslaamDatabase.Praises.then(p => p.remove(praiseToDelete));
        return {
            props: {
                praise: toJson(praiseToDelete),
                removed: true,
            },
            redirect: "/praises",
        } as GetServerSidePropsResult<Props>;
    }
    const praise = await IslaamDatabase.Praises.then(praises =>
        praises.findOne({
            relations: {
                praisee: true,
                praiser: true,
                title: true,
                topic: true,
            },
            where: { id },
        })
    ).then(toJson);
    return { props: { praise } } as GetServerSidePropsResult<Props>;
}, CookieConfig);
