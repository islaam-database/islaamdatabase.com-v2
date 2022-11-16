import {
    Column,
    Entity,
    Index,
    JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Statuses } from "./Statuses";
import { People } from "./People";
import { SelectableOption } from "../../types";

@Index("PK_Generations", ["id"], { unique: true })
@Index("IX_Generations_StatusId", ["statusId"], { unique: true })
@Entity("Generations", { schema: "public", synchronize: false })
export class Generations implements SelectableOption {
    @PrimaryGeneratedColumn({ type: "integer", name: "Id" })
    id: number;

    @Column("text", { name: "Name" })
    name: string;

    @Column("integer", { name: "StatusId", nullable: true })
    statusId: number | null;

    @OneToOne(() => Statuses, statuses => statuses.generations, {
        onDelete: "RESTRICT",
    })
    @JoinColumn([{ name: "StatusId", referencedColumnName: "rank" }])
    status: Statuses;

    @OneToMany(() => People, people => people.generation)
    people: People[];
}
