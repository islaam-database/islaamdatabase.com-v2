import {
    Column,
    Entity,
    Index,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    Relation,
} from "typeorm";
import { SelectableOption } from "../../utils";
import { Generations } from "./Generations";
import { Titles } from "./Titles";

@Index("PK_Statuses", ["rank"], { unique: true })
@Entity("Statuses", { schema: "public", synchronize: false })
export class Statuses extends SelectableOption {
    get id() {
        return this.rank;
    }
    @PrimaryGeneratedColumn({ type: "integer", name: "Rank" })
    rank: number;

    @Column("text", { name: "Name", nullable: true })
    name: string | null;

    @Column("boolean", { name: "MentionPraisesOfEqualStatuses" })
    mentionPraisesOfEqualStatuses: boolean;

    @Column("boolean", { name: "MentionPraisesOfGreaterStatuses" })
    mentionPraisesOfGreaterStatuses: boolean;

    @OneToOne(() => Generations, generations => generations.status)
    generations: Relation<Generations>;

    @OneToMany(() => Titles, titles => titles.status)
    titles: Titles[];
}
