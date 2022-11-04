import {
  Column,
  Entity,
  Index,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Generations } from "./Generations";
import { Titles } from "./Titles";

@Index("PK_Statuses", ["rank"], { unique: true })
@Entity("Statuses", { schema: "public" })
export class Statuses {
  @PrimaryGeneratedColumn({ type: "integer", name: "Rank" })
  rank: number;

  @Column("text", { name: "Name", nullable: true })
  name: string | null;

  @Column("boolean", { name: "MentionPraisesOfEqualStatuses" })
  mentionPraisesOfEqualStatuses: boolean;

  @Column("boolean", { name: "MentionPraisesOfGreaterStatuses" })
  mentionPraisesOfGreaterStatuses: boolean;

  @OneToOne(() => Generations, (generations) => generations.status)
  generations: Generations;

  @OneToMany(() => Titles, (titles) => titles.status)
  titles: Titles[];
}
