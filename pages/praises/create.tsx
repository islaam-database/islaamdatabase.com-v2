import { People } from "../../database/entities/People";
import { Titles } from "../../database/entities/Titles";
import { Topics } from "../../database/entities/Topics";
import { Praises } from "../../database/entities/Praises";
import { IslaamDatabase } from "../../database/IslaamDatabase";
import { toJson } from "../../utils";
import { parseBody } from "next/dist/server/api-utils/node";
import { withIronSessionSsr } from "iron-session/next";
import { CookieConfig } from "../../utils/SessionUtils";
import PraiseFormFields from "../../components/forms/PraiseFormFields";
import { GetServerSidePropsResult } from "next";
import { FormPage } from "../../components/forms/FormPage";

interface Props extends SSProps {
    people: People[];
    titles: Titles[];
    topics: Topics[];
    error?: string;
}

export default function ({ people, titles, topics, error }: Props) {
    if (error) throw error;
    return (
        <FormPage canEdit title="New praise">
            <PraiseFormFields people={people} titles={titles} topics={topics} />
        </FormPage>
    );
}

export const getServerSideProps = withIronSessionSsr(async ({ req }) => {
    const isAdmin = req.session.user?.role?.name === "admin";
    if (req.method === "POST") {
        if (!isAdmin) {
            const error = "You must be an admin to create entities.";
            return {
                props: { error } as Props,
            };
        }
        const { praiser, praisee, title, topic, source } = await parseBody(req, "1mb");
        const { id } = await IslaamDatabase.Praises.then((p) =>
            p.save({
                praiserId: parseInt(praiser.split(".")[0]),
                praiseeId: parseInt(praisee.split(".")[0]),
                titleId: parseInt(title?.split(".")[0]) || undefined,
                topicId: topic?.split(".")[0] || undefined,
                source,
            } as Praises)
        );
        return {
            redirect: {
                destination: `/praises?highlight=${id}`,
            },
        } as GetServerSidePropsResult<Props>;
    }
    const people = await IslaamDatabase.People.then((x) => x.find()).then(toJson);
    const titles = await IslaamDatabase.Titles.then((t) => t.find()).then(toJson);
    const topics = await IslaamDatabase.Topics.then((t) => t.find()).then(toJson);
    const props = { people, titles, topics } as Props;
    return { props } as GetServerSidePropsResult<Props>;
}, CookieConfig);
