import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { AspNetUsers } from "./AspNetUsers";

@Index("PK_AspNetUserTokens", ["loginProvider", "name", "userId"], {
  unique: true,
})
@Entity("AspNetUserTokens", { schema: "public" })
export class AspNetUserTokens {
  @Column("text", { primary: true, name: "UserId" })
  userId: string;

  @Column("character varying", {
    primary: true,
    name: "LoginProvider",
    length: 128,
  })
  loginProvider: string;

  @Column("character varying", { primary: true, name: "Name", length: 128 })
  name: string;

  @Column("text", { name: "Value", nullable: true })
  value: string | null;

  @ManyToOne(() => AspNetUsers, (aspNetUsers) => aspNetUsers.aspNetUserTokens, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "UserId", referencedColumnName: "id" }])
  user: AspNetUsers;
}
