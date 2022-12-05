import { People } from "../../database/entities/People";
import { Titles } from "../../database/entities/Titles";
import { Topics } from "../../database/entities/Topics";
import { Praises } from "../../database/entities/Praises";
import { IslaamDatabase } from "../../database/IslaamDatabase";
import { toJson } from "../../utils";
import { parseBody } from "next/dist/server/api-utils/node";
import { withIronSessionSsr } from "iron-session/next";
import { CookieConfig } from "../../utils/SessionUtils";
import PraiseForm from "../../components/PraiseForm";
import { GetServerSidePropsResult } from "next";
import { CreateEditPage } from "../../components/CreateEditPage";

interface Props {
    people: People[]
    titles: Titles[],
    topics: Topics[],
    error?: string,
    [key: string]: any;
}

export default function ({ people, titles, topics, error }: Props) {
    if (error) throw error;
    return <CreateEditPage modelName={{ plural: "Praises", singular: "praise" }}>
        <PraiseForm
            people={people}
            titles={titles}
            topics={topics}
        />
    </CreateEditPage>
}

export const getServerSideProps = withIronSessionSsr(
    async ({ req }) => {
        const isAdmin = req.session.user?.role?.name === "admin";
        if (req.method === "POST") {
            if (!isAdmin) {
                const error = "You must be an admin to create entities.";
                return {
                    props: { error } as Props,
                }
            }
            const { praiser, praisee, title, topic, source } = await parseBody(req, "1mb");
            const { id } = await IslaamDatabase.Praises.then(p => p.save(
                {
                    praiserId: parseInt(praiser.split(".")[0]),
                    praiseeId: parseInt(praisee.split(".")[0]),
                    titleId: parseInt(title?.split(".")[0]),
                    topicId: topic?.split(".")[0],
                    source,
                } as Praises)
            );
            return {
                redirect: {
                    destination: `/praises?highlight=${id}`,
                }
            } as GetServerSidePropsResult<Props>;
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
        const props = { people, titles, topics } as Props;
        return { props } as GetServerSidePropsResult<Props>;
    }, CookieConfig);