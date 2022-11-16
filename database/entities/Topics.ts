import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from "typeorm";
import { SelectableOption } from "../../utils";
import { Praises } from "./Praises";
import { TeacherStudents } from "./TeacherStudents";

@Index("PK_Topics", ["id"], { unique: true })
@Index("IX_Topics_ParentTopicId", ["parentTopicId"], {})
@Entity("Topics", { schema: "public", synchronize: false })
export class Topics extends SelectableOption {
    @Column("text", { name: "Name", default: () => "''" })
    name: string;

    @Column("text", { name: "ParentTopicId", nullable: true })
    parentTopicId: string | null;

    @Column("text", { primary: true, name: "Id", default: () => "''" })
    id: string;

    @Column("text", { name: "Description", nullable: true })
    description: string | null;

    @OneToMany(() => Praises, praises => praises.topic)
    praises: Praises[];

    @OneToMany(() => TeacherStudents, teacherStudents => teacherStudents.topic)
    teacherStudents: TeacherStudents[];

    @ManyToOne(() => Topics, topics => topics.topics, { onDelete: "RESTRICT" })
    @JoinColumn([{ name: "ParentTopicId", referencedColumnName: "id" }])
    parentTopic: Topics;

    @OneToMany(() => Topics, topics => topics.parentTopic)
    topics: Topics[];
}
