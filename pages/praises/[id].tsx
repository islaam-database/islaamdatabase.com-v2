import { withIronSessionSsr } from "iron-session/next"
import { People } from "../../database/entities/People";
import { Praises } from "../../database/entities/Praises";
import { Titles } from "../../database/entities/Titles";
import { Topics } from "../../database/entities/Topics";
import { IslaamDatabase } from "../../database/IslaamDatabase";
import { CookieConfig, SessionProps } from "../SessionUtils";
import { toJson } from "../../utils";
import PraiseForm from "./form";
import { parseBody } from "next/dist/server/api-utils/node";
import { GetServerSidePropsResult } from "next";

interface Props extends SessionProps {
    praise: Praises;
    people: People[]
    titles: Titles[];
    topics: Topics[];
    canEdit: boolean;
}

export default function ({ praise, people, titles, topics, canEdit }: Props) {
    return <>
        <h1>Praise {praise.id}</h1>
        <hr />
        <PraiseForm
            praiseEditing={praise}
            people={people}
            titles={titles}
            topics={topics}
            disabled={!canEdit}
        />
    </>;
}

export const getServerSideProps = withIronSessionSsr(async ({ req }) => {
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

        const created = await IslaamDatabase.Praises.then(p => p.create(newPraise));
        return {
            redirect: {
                destination: `/praises?highlight=${created.id}`,
            },
        } as GetServerSidePropsResult<Props>
    }
    const id = parseInt(req.url?.split("/").at(-1) as string);
    const [people, titles, topics, praise] = await Promise.all([
        IslaamDatabase.People.then(p => p.find()).then(toJson),
        IslaamDatabase.Titles.then(p => p.find()).then(toJson),
        IslaamDatabase.Topics.then(p => p.find()).then(toJson),
        IslaamDatabase.Praises.then(praises => praises.findOne({
            relations: {
                praisee: true,
                praiser: true,
                title: true,
                topic: true,
            },
            where: { id }
        }))
    ]).then(toJson)
    const canEdit = req.session.user ? req.session.user?.role.name === "admin" : false;
    const props = { people, titles, topics, praise, canEdit };
    return { props } as GetServerSidePropsResult<Props>;
}, CookieConfig)