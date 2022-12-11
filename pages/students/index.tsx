import { withIronSessionSsr } from "iron-session/next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ListPage } from "../../components/ListPage/ListPage";
import { TeacherStudents } from "../../database/entities/TeacherStudents";
import { IslaamDatabase } from "../../database/IslaamDatabase";
import { toJson } from "../../utils";
import { CookieConfig, getIsAdminFromReq } from "../../utils/SessionUtils";
interface Props extends SSProps {
    canCreate: boolean;
    students: TeacherStudents[];
}
export default function (p: Props) {
    const { highlight } = useRouter().query;
    return (
        <ListPage
            columnNames={["ID", "Student", "Teacher", "Source"]}
            modelName={{ plural: "Students", singular: "Student" }}
            canCreate={p.canCreate}
            rows={p.students.map(s => ({
                key: s.id,
                isActive: highlight === s.id.toString(),
                columns: [
                    <Link key={0} href={`/students/${s.id}`}>
                        {s.id}
                    </Link>,
                    <Link key={1} href={`/people/${s.teacherId}`}>
                        {s.teacher.name}
                    </Link>,
                    <Link key={2} href={`/people/${s.studentId}`}>
                        {s.student.name}
                    </Link>,
                    s.source,
                ],
            }))}
        />
    );
}

export const getServerSideProps = withIronSessionSsr(async ({ req }) => {
    const students = await IslaamDatabase.TeacherStudents.then(ts =>
        ts.find({
            relations: {
                student: true,
                teacher: true,
            },
        })
    ).then(toJson);
    return {
        props: { canCreate: getIsAdminFromReq(req), students } as Props,
    };
}, CookieConfig);
