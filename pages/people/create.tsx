import { withIronSessionSsr } from "iron-session/next";
import { GetServerSidePropsResult } from "next";
import { parseBody } from "next/dist/server/api-utils/node";
import { FormPage } from "../../components/forms/FormPage";
import { PersonFormFields } from "../../components/forms/PersonFormFields";
import { Generations } from "../../database/entities/Generations";
import { People } from "../../database/entities/People";
import { Titles } from "../../database/entities/Titles";
import { IslaamDatabase } from "../../database/IslaamDatabase";
import { toJson } from "../../utils";
import { CookieConfig, getIsAdminFromReq } from "../../utils/SessionUtils";

interface Props extends SSProps {
    generations: Generations[];
    titles: Titles[];
}
export default (p: Props) => (
    <FormPage title="New person" {...p} canEdit>
        <PersonFormFields {...p} />
    </FormPage>
);

export const getServerSideProps = withIronSessionSsr(async ({ req }) => {
    if (req.method?.toLowerCase() !== "post") {
        return {
            props: {
                titles: await IslaamDatabase.Titles.then(t => t.find()).then(toJson),
                generations: await IslaamDatabase.Generations.then(t => t.find()).then(toJson),
            },
        } as GetServerSidePropsResult<Props>;
    }
    const isAdmin = getIsAdminFromReq(req);
    if (!isAdmin) throw "Unauthorized";
    const { id } = await parseBody(req, "1mb").then(body =>
        IslaamDatabase.People.then(p => p.save(People.fromReqBody(body)))
    );
    return {
        redirect: {
            destination: `/people?highlight=${id}`,
            permanent: false,
        },
    };
}, CookieConfig);
