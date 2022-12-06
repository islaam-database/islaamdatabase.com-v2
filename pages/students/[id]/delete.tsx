import { TeacherStudents } from "../../../database/entities/TeacherStudents";
import { StudentFormFields } from "../../../components/forms/StudentFormFields";
import { FormPage } from "../../../components/forms/FormPage";

interface Props {
    teacherStudent: TeacherStudents;
}
export default (p: Props) => <FormPage
    title={`Are you sure you want to delete teacher/student ${p.teacherStudent.id}?`}
    canDelete
>
    <StudentFormFields teacherStudent={p.teacherStudent} />
</FormPage>;