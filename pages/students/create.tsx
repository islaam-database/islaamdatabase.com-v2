import { withIronSessionSsr } from "iron-session/next";
import { GetServerSidePropsResult } from "next";
import { CreateEditPage } from "../../components/CreateEditPage";
import { People } from "../../database/entities/People";
import { IslaamDatabase } from "../../database/IslaamDatabase";
import { toJson } from "../../utils";
import { CookieConfig } from "../../utils/SessionUtils";

interface Props extends SSProps {
    people: People[];
}

export default (p: Props) => <CreateEditPage
    modelName={{ plural: "Students", singular: "student" }}
    dataLists={[
        {
            id: "people",
            options: p.people.map(({ id, name }) => ({
                label: `${id}. ${name}`,
            })),
        }
    ]}
>
    <form>
        <div>
            <label>Teacher</label>
            {' '}
            <input name="teacher" list="people" required />
        </div>
    </form>
</CreateEditPage>;

export const getServerSideProps = withIronSessionSsr(async ({ req }) => {
    const people = await IslaamDatabase.People.then(ts => ts.find()).then(toJson);
    return {
        props: { people }
    } as GetServerSidePropsResult<Props>;
}, CookieConfig);