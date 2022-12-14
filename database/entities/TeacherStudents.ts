import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import type { Relation } from "typeorm";
import { People } from "./People";
import { Topics } from "./Topics";

@Index("PK_TeacherStudents", ["id"], { unique: true })
@Index("IX_TeacherStudents_StudentId", ["studentId"], {})
@Index("IX_TeacherStudents_TeacherId", ["teacherId"], {})
@Index("IX_TeacherStudents_SubjectId", ["topicId"], {})
@Entity("TeacherStudents", { schema: "public", synchronize: false })
export class TeacherStudents {
    @PrimaryGeneratedColumn({ type: "integer", name: "Id" })
    id: number;

    @Column("integer", { name: "TeacherId", nullable: true })
    teacherId: number | null;

    @Column("integer", { name: "StudentId", nullable: true })
    studentId: number | null;

    @Column("text", { name: "TopicId", nullable: true })
    topicId: string | null;

    @Column("text", { name: "Source", default: () => "''" })
    source: string;

    @ManyToOne(() => People, people => people.teachers, {
        onDelete: "RESTRICT",
    })
    @JoinColumn([{ name: "StudentId", referencedColumnName: "id" }])
    student: Relation<People>;

    @ManyToOne(() => People, people => people.students, {
        onDelete: "RESTRICT",
    })
    @JoinColumn([{ name: "TeacherId", referencedColumnName: "id" }])
    teacher: Relation<People>;

    @ManyToOne(() => Topics, topics => topics.teacherStudents, {
        onDelete: "RESTRICT",
    })
    @JoinColumn([{ name: "TopicId", referencedColumnName: "id" }])
    topic: Relation<Topics>;
}
