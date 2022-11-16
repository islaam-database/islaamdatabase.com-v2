import { withIronSessionSsr } from "iron-session/next"
import { People } from "../../database/entities/People";
import { Praises } from "../../database/entities/Praises";
import { Titles } from "../../database/entities/Titles";
import { Topics } from "../../database/entities/Topics";
import { IslaamDatabase } from "../../database/IslaamDatabase";
import { CookieConfig } from "../CookieConfig";
import { toJson } from "../../utils";
import PraiseForm from "./components/form";
import { parseBody } from "next/dist/server/api-utils/node";

interface Props {
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
        const isAdmin = req.session.user?.role.name === "admin";
        if (!isAdmin) return {
            redirect: {
                statusCode: 401,
                destination: req.url,
            }
        };

        const body = await parseBody(req, "1mb");
        const newPraise = new Praises();
        newPraise.praiserId = parseInt(body.praiser.split(".")[0]);
        newPraise.praiseeId = parseInt(body.praisee.split(".")[0]);
        newPraise.topicId = body.praiser.split(".")[0];
        newPraise.titleId = parseInt(body.title.split(".")[0]);
        newPraise.source = body.source;

        const created = await IslaamDatabase.Praises.then(p => p.create(newPraise));
        return {
            redirect: {
                destination: `/praises?highlight=${created.id}`,
            }
        }
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
    const props = { people, titles, topics, praise, canEdit } as Props;
    return { props };
}, CookieConfig);