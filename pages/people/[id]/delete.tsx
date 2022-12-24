import { withIronSessionSsr } from "iron-session/next";
import { GetServerSidePropsResult } from "next";
import { DeletePage } from "../../../components/forms/DeletePage";
import { PersonFormFields } from "../../../components/forms/PersonFormFields";
import { People } from "../../../database/entities/People";
import { IslaamDatabase } from "../../../database/IslaamDatabase";
import { toJson } from "../../../utils/utils";
import { CookieConfig, getIsAdminFromReq } from "../../../utils/SessionUtils";

interface Props extends SSProps {
    person: People;
}
export default (p: Props) => (
    <DeletePage title={`Are you sure you want to delete ${p.person.name}?`}>
        <PersonFormFields readonly generations={[]} titles={[]} personEditing={p.person} />
    </DeletePage>
);
export const getServerSideProps = withIronSessionSsr(async ({ req, params }) => {
    const db = await IslaamDatabase.People;
    const id = parseInt(params?.id as string);
    const person = await db.findOne({ where: { id } }).then(toJson);

    if (!person) return { notFound: true };

    if (req.method?.toLowerCase() !== "post")
        return {
            props: { person },
        } as GetServerSidePropsResult<Props>;

    if (!getIsAdminFromReq(req)) throw "Unauthorized";

    await db.remove(person);
    return {
        redirect: {
            destination: "/people",
            permanent: false,
        },
    };
}, CookieConfig);
