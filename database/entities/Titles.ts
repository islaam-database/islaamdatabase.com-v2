import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { People } from "./People";
import { Praises } from "./Praises";
import { Statuses } from "./Statuses";

@Index("PK_Titles", ["id"], { unique: true })
@Index("IX_Titles_StatusId", ["statusId"], {})
@Entity("Titles", { schema: "public" })
export class Titles {
  @PrimaryGeneratedColumn({ type: "integer", name: "Id" })
  id: number;

  @Column("text", { name: "Name" })
  name: string;

  @Column("integer", { name: "StatusId", nullable: true })
  statusId: number | null;

  @OneToMany(() => People, (people) => people.mainTitle)
  people: People[];

  @OneToMany(() => Praises, (praises) => praises.title)
  praises: Praises[];

  @ManyToOne(() => Statuses, (statuses) => statuses.titles)
  @JoinColumn([{ name: "StatusId", referencedColumnName: "rank" }])
  status: Statuses;
}
