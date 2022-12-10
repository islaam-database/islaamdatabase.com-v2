import { TeacherStudents } from "../../../database/entities/TeacherStudents";
import { StudentFormFields } from "../../../components/forms/StudentFormFields";
import { withIronSessionSsr } from "iron-session/next";
import { CookieConfig, getIsAdminFromReq } from "../../../utils/SessionUtils";
import { IslaamDatabase } from "../../../database/IslaamDatabase";
import { toJson } from "../../../utils";
import { GetServerSidePropsResult } from "next";
import { DeletePage } from "../../../components/forms/DeletePage";

interface Props extends SSProps {
    teacherStudent: TeacherStudents;
}
export default (p: Props) => (
    <DeletePage title={`Are you sure you want to delete teacher/student ${p.teacherStudent.id}?`}>
        <StudentFormFields teacherStudent={p.teacherStudent} />
    </DeletePage>
);

export const getServerSideProps = withIronSessionSsr(async ({ req }) => {
    const id = parseInt(req.url?.split("/").at(-2) as string);
    if (req.method?.toLowerCase() === "post") {
        const isAdmin = getIsAdminFromReq(req);
        if (!isAdmin) throw "Unauthorized";
        await IslaamDatabase.TeacherStudents.then(ts => ts.delete({ id }));
        return {
            redirect: {
                destination: "/students",
                permanent: false,
            },
        };
    }
    const teacherStudent = await IslaamDatabase.TeacherStudents.then(ts =>
        ts.findOne({
            where: { id },
            relations: { teacher: true, student: true },
        })
    ).then(toJson);
    return {
        props: {
            teacherStudent,
        },
    } as GetServerSidePropsResult<Props>;
}, CookieConfig);
