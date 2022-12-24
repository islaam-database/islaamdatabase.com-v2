import { withIronSessionSsr } from "iron-session/next";
import { GetServerSidePropsResult } from "next";
import { parseBody } from "next/dist/server/api-utils/node";
import { People } from "../../database/entities/People";
import { TeacherStudents } from "../../database/entities/TeacherStudents";
import { IslaamDatabase } from "../../database/IslaamDatabase";
import { toJson } from "../../utils/utils";
import { CookieConfig, getIsAdminFromReq } from "../../utils/SessionUtils";
import { StudentFormFields } from "../../components/forms/StudentFormFields";
import { FormPage } from "../../components/forms/FormPage";

export interface Props extends SSProps {
    people: People[];
}

export default (p: Props) => (
    <FormPage title="New teacher/student">
        <StudentFormFields people={p.people} />
    </FormPage>
);

export const getServerSideProps = withIronSessionSsr(async ({ req }) => {
    if (req.method?.toLowerCase() === "get") {
        const people = await IslaamDatabase.People.then(ts => ts.find()).then(toJson);
        return {
            props: { people },
        } as GetServerSidePropsResult<Props>;
    }
    const isAdmin = getIsAdminFromReq(req);
    if (!isAdmin) throw "Unauthorized";
    const { teacher, student, source } = (await parseBody(req, "1mb")) as Record<string, string>;
    const teacherStudent = {
        teacherId: parseInt(teacher.split(".")[0]),
        studentId: parseInt(student.split(".")[0]),
        source,
    } as TeacherStudents;
    const { id } = await IslaamDatabase.TeacherStudents.then(ts => ts.save(teacherStudent));
    return {
        redirect: {
            destination: `/students?highlight=${id}`,
            permanent: false,
        },
    };
}, CookieConfig);
