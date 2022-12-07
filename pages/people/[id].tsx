import { withIronSessionSsr } from "iron-session/next";
import { GetServerSidePropsResult } from "next";
import { parseBody } from "next/dist/server/api-utils/node";
import Link from "next/link";
import { FormPage } from "../../components/forms/FormPage";
import { PersonFormFields } from "../../components/forms/PersonFormFields";
import { Generations } from "../../database/entities/Generations";
import { People } from "../../database/entities/People";
import { Titles } from "../../database/entities/Titles";
import { IslaamDatabase } from "../../database/IslaamDatabase";
import { toJson } from "../../utils";
import { CookieConfig, getIsAdminFromReq } from "../../utils/SessionUtils";

interface Props extends SSProps {
    person: People;
    generations: Generations[];
    titles: Titles[];
    canEdit: boolean;
}

export default (p: Props) => (
    <FormPage {...p} title={p.person.name} canDelete={p.canEdit}>
        <PersonFormFields personEditing={p.person} {...p} />
    </FormPage>
);

export const getServerSideProps = withIronSessionSsr(async ({ req }) => {
    const id = parseInt(req.url?.split("/").at(-1) || "");
    if (req.method?.toLowerCase() !== "post") {
        if (isNaN(id)) throw Error("Invalid ID query parameter");
        const db = await IslaamDatabase.getInstance();
        const [titles, generations, person] = await Promise.all([
            IslaamDatabase.Titles.then((t) => t.find()).then(toJson),
            IslaamDatabase.Generations.then((g) => g.find()).then(toJson),
            db.getRepository(People).findOneBy({ id }).then(toJson),
        ]);
        return {
            props: {
                person,
                canEdit: getIsAdminFromReq(req),
                titles,
                generations,
            },
            notFound: person == null,
        } as GetServerSidePropsResult<Props>;
    }
    const isAdmin = getIsAdminFromReq(req);
    if (!isAdmin) throw "Unauthorized";
    const body = await parseBody(req, "1mb");
    const personUpdateReq = People.fromReqBody(body, id);
    await IslaamDatabase.People.then((p) => p.save(personUpdateReq));
    return {
        redirect: {
            destination: `/people?highlight=${id}`,
            permanent: false,
        },
    };
}, CookieConfig);
