import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    Unique,
} from "typeorm";
import { AppUsers } from "./AppUsers";

@Unique(["name"] as (keyof AppRoles)[])
@Entity("AppRoles")
export class AppRoles {
    @PrimaryGeneratedColumn() id: number;
    @Column() name: string;
    @Column() description: string;
    @OneToMany(() => AppUsers, user => user.role) users: AppUsers[];
}
