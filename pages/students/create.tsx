import { withIronSessionSsr } from "iron-session/next";
import { GetServerSidePropsResult } from "next";
import { parseBody } from "next/dist/server/api-utils/node";
import { CreateEditPage } from "../../components/CreateEditPage";
import { LabelAndInput } from "../../components/LabelAndInput";
import { People } from "../../database/entities/People";
import { TeacherStudents } from "../../database/entities/TeacherStudents";
import { IslaamDatabase } from "../../database/IslaamDatabase";
import { toJson } from "../../utils";
import { CookieConfig, getIsAdminFromReq } from "../../utils/SessionUtils";

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
        <LabelAndInput label="Teacher" name="teacher" list="people" required />
        <LabelAndInput label="Student" name="student" list="people" required />
        <LabelAndInput label="Source" name="source" required />
        <button type="submit">Submit</button>
    </form>
</CreateEditPage>;

export const getServerSideProps = withIronSessionSsr(async ({ req }) => {
    if (req.method?.toLowerCase() === "get") {
        const people = await IslaamDatabase.People.then(ts => ts.find()).then(toJson);
        return {
            props: { people }
        } as GetServerSidePropsResult<Props>;

    }
    const isAdmin = getIsAdminFromReq(req);
    if (!isAdmin) throw "Unauthorized";
    const { teacher, student, source } = await parseBody(req, "1mb") as Record<string, string>;
    const teacherStudent = {
        teacherId: parseInt(teacher.split(".")[0]),
        studentId: parseInt(student.split(".")[0]),
        source
    } as TeacherStudents;
    const newId = await IslaamDatabase.TeacherStudents.then(ts => ts.save(teacherStudent));
    return {
        redirect: {
            destination: `/students?highlight=${newId}`,
            permanent: false,
        }
    }
}, CookieConfig);

