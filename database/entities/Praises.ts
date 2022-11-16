import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    Relation,
} from "typeorm";
import { SelectableOption } from "../../utils";
import { People } from "./People";
import { Titles } from "./Titles";
import { Topics } from "./Topics";

@Index("PK_Praises", ["id"], { unique: true })
@Index("IX_Praises_PraiseeId", ["praiseeId"], {})
@Index("IX_Praises_PraiserId", ["praiserId"], {})
@Index("IX_Praises_TitleId", ["titleId"], {})
@Index("IX_Praises_TopicId", ["topicId"], {})
@Entity("Praises", { schema: "public", synchronize: false })
export class Praises {
    @PrimaryGeneratedColumn({ type: "integer", name: "Id" }) id: number;

    @Column("integer", { name: "PraiserId" }) praiserId: number;

    @Column("integer", { name: "PraiseeId" }) praiseeId: number;

    @Column("text", { name: "Source" }) source: string;

    @Column("integer", { name: "TitleId", nullable: true }) titleId:
        | number
        | null;

    @Column("text", { name: "TopicId", nullable: true }) topicId: string | null;

    @ManyToOne(() => People, people => people.praises, {
        onDelete: "CASCADE",
    })
    @JoinColumn([{ name: "PraiseeId", referencedColumnName: "id" }])
    praisee: Relation<People>;

    @ManyToOne(() => People, people => people.praises2, {
        onDelete: "CASCADE",
    })
    @JoinColumn([{ name: "PraiserId", referencedColumnName: "id" }])
    praiser: Relation<People>;

    @ManyToOne(() => Titles, titles => titles.praises, {
        onDelete: "RESTRICT",
    })
    @JoinColumn([{ name: "TitleId", referencedColumnName: "id" }])
    title: Relation<Titles>;

    @ManyToOne(() => Topics, topics => topics.praises, {
        onDelete: "RESTRICT",
    })
    @JoinColumn([{ name: "TopicId", referencedColumnName: "id" }])
    topic: Topics;
}
