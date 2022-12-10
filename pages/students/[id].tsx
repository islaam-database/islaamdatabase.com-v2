import { withIronSessionSsr } from "iron-session/next";
import { GetServerSidePropsResult } from "next";
import { People } from "../../database/entities/People";
import { TeacherStudents } from "../../database/entities/TeacherStudents";
import { IslaamDatabase } from "../../database/IslaamDatabase";
import { toJson } from "../../utils";
import { CookieConfig, getIsAdminFromReq } from "../../utils/SessionUtils";
import { FormPage } from "../../components/forms/FormPage";
import { StudentFormFields } from "../../components/forms/StudentFormFields";
import { parseBody } from "next/dist/server/api-utils/node";

interface Props extends SSProps {
    teacherStudent: TeacherStudents;
    people: People[];
    canEdit: boolean;
}

export default (p: Props) => {
    return (
        <FormPage title={`Teacher Student ${p.teacherStudent?.id}`} canDelete={p.canEdit} canEdit={p.canEdit}>
            <StudentFormFields canEdit={p.canEdit} people={p.people} teacherStudent={p.teacherStudent} />
        </FormPage>
    );
};

export const getServerSideProps = withIronSessionSsr(async ({ req }) => {
    const id = parseInt(req.url?.split("/").at(-1) as string);
    const isEditing = req.method?.toLowerCase() === "post";
    const isAdmin = getIsAdminFromReq(req);

    if (isEditing) {
        if (!isAdmin) throw "Unauthorized";
        const { teacher, student, source } = (await parseBody(req, "1mb")) as Record<string, string>;
        const newTeacherStudent = {
            id,
            studentId: parseInt(student.split(".")[0]),
            teacherId: parseInt(teacher.split(".")[0]),
            source,
        } as TeacherStudents;
        await IslaamDatabase.TeacherStudents.then(ts => ts.save(newTeacherStudent));
        return {
            redirect: {
                destination: `/students?highlight=${id}`,
                permanent: false,
            },
        };
    }

    const teacherStudent = await IslaamDatabase.TeacherStudents.then(ts =>
        ts.findOne({
            relations: {
                teacher: true,
                student: true,
            },
            where: { id },
        })
    ).then(toJson);
    const people = await IslaamDatabase.People.then(p => p.find()).then(toJson);
    return {
        props: { teacherStudent, people, canEdit: isAdmin },
    } as GetServerSidePropsResult<Props>;
}, CookieConfig);
