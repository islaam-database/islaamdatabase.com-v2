import { NextConfig } from "next";
import { People } from "../../database/entities/People";
import { Titles } from "../../database/entities/Titles";
import { Topics } from "../../database/entities/Topics";
import { Praises } from "../../database/entities/Praises";
import { IslaamDatabase } from "../../database/IslaamDatabase";
import { toJson } from "../utils";
import { parseBody } from "next/dist/server/api-utils/node";
import { withIronSessionSsr } from "iron-session/next";
import { CookieConfig } from "../CookieConfig";

interface Props {
    people: People[]
    titles: Titles[],
    topics: Topics[],
}

export default function ({ people, titles, topics }: Props) {
    return <>
        <datalist id="people">
            {people.map(p => <option key={p.id}>{p.id}. {p.name}</option>)}
        </datalist>
        <datalist id="titles">
            {titles.map(t => <option key={t.id}>{t.id}. {t.name}</option>)}
        </datalist>
        <datalist id="topics">
            {topics.map(t => <option key={t.id}>{t.id}. {t.name}</option>)}
        </datalist>
        <h1>New praise</h1>
        <hr />
        <form method="post">
            <div>
                <label htmlFor="praiser">Praiser: </label>
                {' '}
                <input name="praiser" required list="people" />
            </div>
            <div>
                <label htmlFor="praisee">Praisee: </label>
                {' '}
                <input name="praisee" required list="people" />
            </div>
            <div>
                <label htmlFor="title">Title:</label>
                {' '}
                <input name="title" list="titles" />
            </div>
            <div>
                <label htmlFor="topic">Topic:</label>
                {' '}
                <input name="topic" list="topics" />
            </div>
            <div>
                <label htmlFor="source">Source: </label>
                <input name="source" required />
            </div>
            <button type="submit">Submit</button>
        </form>
    </>
}

export const getServerSideProps = withIronSessionSsr(
    async ({ req }) => {
        const isAdmin = false && req.session.user?.role?.name === "admin";
        if (req.method === "POST") {
            if (!isAdmin) return {
                redirect: `/praises/create?error=You must be an admin to create entities`
            }
            const { praiser, praisee, title, topic, source } = await parseBody(req, "1mb");
            const newPraise = await (await IslaamDatabase.Praises).save({
                praiserId: praiser.split(".")[0],
                praiseeId: praisee.split(".")[0],
                titleId: title.split(".")[0],
                topicId: topic.split(".")[0],
                source
            } as Praises);
            return {
                redirect: {
                    destination: `/praises?highlight=${newPraise.id}`,
                }
            }
        }
        const people = toJson(
            await IslaamDatabase.People.then(x => x.find())
        );
        const titles = toJson(
            await IslaamDatabase.Titles.then(t => t.find())
        );
        const topics = toJson(
            await IslaamDatabase.Topics.then(t => t.find())
        );
        return {
            props: { people, titles, topics } as Props
        }
    }, CookieConfig);