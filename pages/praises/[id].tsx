import { withIronSessionSsr } from "iron-session/next";
import { People } from "../../database/entities/People";
import { Praises } from "../../database/entities/Praises";
import { Titles } from "../../database/entities/Titles";
import { Topics } from "../../database/entities/Topics";
import { IslaamDatabase } from "../../database/IslaamDatabase";
import { CookieConfig, SessionProps } from "../../utils/SessionUtils";
import { toJson, toOptionLabel } from "../../utils";
import PraiseFormFields from "../../components/forms/PraiseFormFields";
import { parseBody } from "next/dist/server/api-utils/node";
import { GetServerSidePropsResult } from "next";
import { FormPage } from "../../components/forms/FormPage";

interface Props extends SessionProps {
    praise: Praises;
    people: People[];
    titles: Titles[];
    topics: Topics[];
    canEdit: boolean;
}

export default function (p: Props) {
    return (
        <FormPage title={`Praise ${p.praise.id}`} canEdit={p.canEdit}>
            <PraiseFormFields praiseEditing={p.praise} disabled={!p.canEdit} {...p} />
        </FormPage>
    );
}

export const getServerSideProps = withIronSessionSsr(async ({ req }) => {
    const idEditing = parseInt(req.url?.split("/").at(-1) as string);
    const isEditing = !isNaN(idEditing);

    if (req.method === "POST") {
        // user is creating a praise
        const isAdmin = req.session.user?.role.name === "admin";
        if (!isAdmin) throw "Unauthorized";

        const { praiser, praisee, title, source, topic } = (await parseBody(req, "1mb")) as Record<string, string>;
        const newPraise = new Praises();
        newPraise.praiserId = parseInt(praiser.split(".")[0]);
        newPraise.praiseeId = parseInt(praisee.split(".")[0]);
        newPraise.topicId = praiser.split(".")[0];
        newPraise.titleId = title ? parseInt(title.split(".")[0]) : null;
        newPraise.topicId = topic.split(".")[0];
        newPraise.source = source;
        if (isEditing) newPraise.id = idEditing;

        const created = await IslaamDatabase.Praises.then((p) => (isEditing ? p.save(newPraise) : p.create(newPraise)));
        return {
            redirect: {
                destination: `/praises?highlight=${created.id || idEditing}`,
            },
        } as GetServerSidePropsResult<Props>;
    }
    const [people, titles, topics, praise] = await Promise.all([
        IslaamDatabase.People.then((p) => p.find()).then(toJson),
        IslaamDatabase.Titles.then((p) => p.find()).then(toJson),
        IslaamDatabase.Topics.then((p) => p.find()).then(toJson),
        IslaamDatabase.Praises.then((praises) =>
            praises.findOne({
                relations: {
                    praisee: true,
                    praiser: true,
                    title: true,
                    topic: true,
                },
                where: { id: idEditing },
            })
        ),
    ]).then(toJson);
    const canEdit = req.session.user ? req.session.user?.role.name === "admin" : false;
    const props = { people, titles, topics, praise, canEdit };
    return { props } as GetServerSidePropsResult<Props>;
}, CookieConfig);
