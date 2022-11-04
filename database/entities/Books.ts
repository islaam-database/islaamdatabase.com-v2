import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    Relation,
} from "typeorm";
import { People } from "./People";

@Index("IX_Books_AuthorId", ["authorId"], {})
@Index("PK_Books", ["id"], { unique: true })
@Entity("Books", { schema: "public" })
export class Books {
    @PrimaryGeneratedColumn({ type: "integer", name: "Id" })
    id: number;

    @Column("text", { name: "Title", nullable: true })
    title: string | null;

    @Column("integer", { name: "AuthorId", nullable: true })
    authorId: number | null;

    @Column("text", { name: "Source", nullable: true })
    source: string | null;

    @ManyToOne(() => People, (people) => people.books, { onDelete: "RESTRICT" })
    @JoinColumn([{ name: "AuthorId", referencedColumnName: "id" }])
    author: Relation<People>;
}
