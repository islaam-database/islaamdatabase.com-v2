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

@Index("PK_Generations", ["id"], { unique: true })
@Index("IX_Generations_StatusId", ["statusId"], { unique: true })
@Entity("Generations", { schema: "public" })
export class Generations {
  @PrimaryGeneratedColumn({ type: "integer", name: "Id" })
  id: number;

  @Column("text", { name: "Name" })
  name: string;

  @Column("integer", { name: "StatusId", nullable: true })
  statusId: number | null;

  @OneToOne(() => Statuses, (statuses) => statuses.generations, {
    onDelete: "RESTRICT",
  })
  @JoinColumn([{ name: "StatusId", referencedColumnName: "rank" }])
  status: Statuses;

  @OneToMany(() => People, (people) => people.generation)
  people: People[];
}
