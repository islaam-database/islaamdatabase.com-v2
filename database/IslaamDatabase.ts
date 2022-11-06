import { DataSource } from "typeorm";
import { AppRoles } from "./entities/AppRoles";
import { Books } from "./entities/Books";
import { Generations } from "./entities/Generations";
import { People } from "./entities/People";
import { Praises } from "./entities/Praises";
import { Statuses } from "./entities/Statuses";
import { TeacherStudents } from "./entities/TeacherStudents";
import { Titles } from "./entities/Titles";
import { Topics } from "./entities/Topics";
console.log(process.env.DB_SYNC === "true");
const IslaamDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: process.env.DB_LOGGING === "true",
    entities: [
        Books,
        Generations,
        People,
        Praises,
        Statuses,
        TeacherStudents,
        Titles,
        Topics,
        AppRoles,
    ],
});

export class IslaamDatabase {
    private static dataSource: DataSource;
    public static async getInstance(): Promise<DataSource> {
        return (this.dataSource =
            this.dataSource || (await IslaamDataSource.initialize()));
    }
}
