import { useState } from "react";
import { LabelAndInput } from "./LabelAndInput";
import { TeacherStudents } from "../../database/entities/TeacherStudents";
import { People } from "../../database/entities/People";
import { DataList } from "./DataList";
import { toOptionLabel } from "../../utils/utils";

export interface Props {
    teacherStudent?: TeacherStudents;
    canEdit?: boolean;
    people?: People[];
}

export const StudentFormFields = (p: Props) => {
    const [teacher, setTeacher] = useState(toOptionLabel(p.teacherStudent?.teacher));
    const [student, setStudent] = useState(toOptionLabel(p.teacherStudent?.student));
    const [source, setSource] = useState(p.teacherStudent?.source || "");
    return (
        <>
            <DataList id="people" options={p.people || []} />
            <LabelAndInput
                readOnly={!p.canEdit}
                value={teacher}
                onChange={e => setTeacher(e.target.value)}
                label="Teacher"
                name="teacher"
                list="people"
                required
            />
            <LabelAndInput
                readOnly={!p.canEdit}
                value={student}
                onChange={e => setStudent(e.target.value)}
                label="Student"
                name="student"
                list="people"
                required
            />
            <LabelAndInput
                readOnly={!p.canEdit}
                value={source}
                onChange={e => setSource(e.target.value)}
                label="Source"
                name="source"
                required
            />
        </>
    );
};
