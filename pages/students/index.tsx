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
            items={p.students}
            itemToTr={s => (
                <tr>
                    <td>
                        <Link href={`/students/${s.id}`}>{s.id}</Link>
                    </td>
                    <td>
                        <Link href={`/people/${s.teacherId}`}>{s.teacher.name}</Link>
                    </td>
                    <td>
                        <Link href={`/people/${s.studentId}`}>{s.student.name}</Link>
                    </td>
                    <td>{s.source}</td>
                </tr>
            )}
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
