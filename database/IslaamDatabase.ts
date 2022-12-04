import { DataSource } from "typeorm";
import { AppUsers } from "./entities/AppUsers";
import { AppRoles } from "./entities/AppRoles";
import { Books } from "./entities/Books";
import { Generations } from "./entities/Generations";
import { People } from "./entities/People";
import { Praises } from "./entities/Praises";
import { Statuses } from "./entities/Statuses";
import { TeacherStudents } from "./entities/TeacherStudents";
import { Titles } from "./entities/Titles";
import { Topics } from "./entities/Topics";

const IslaamDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST as string,
    port: parseInt(process.env.DB_PORT as string),
    username: process.env.DB_USERNAME as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_NAME as string,
    logging: process.env.DB_LOGGING === "true", // warning: annoying if true
    synchronize: process.env.DB_SYNC === "true",
    entities: [
        Books,
        Generations,
        People,
        Praises,
        Statuses,
        TeacherStudents,
        Titles,
        Topics,
        AppUsers,
        AppRoles,
    ],
});

export class IslaamDatabase {
    private static instance: DataSource;
    public static async getInstance(): Promise<DataSource> {
        return (this.instance =
            this.instance || (await IslaamDataSource.initialize()));
    }
    static get AppUsers() {
        return IslaamDatabase.getInstance().then(i =>
            i.getRepository(AppUsers),
        );
    }
    static get People() {
        return IslaamDatabase.getInstance().then(i => i.getRepository(People));
    }
    static get Praises() {
        return IslaamDatabase.getInstance().then(i => i.getRepository(Praises));
    }
    static get Topics() {
        return IslaamDatabase.getInstance().then(i => i.getRepository(Topics));
    }
    static get Titles() {
        return IslaamDatabase.getInstance().then(i => i.getRepository(Titles));
    }
    static get TeacherStudents() {
        return IslaamDatabase.getInstance().then(i =>
            i.getRepository(TeacherStudents),
        );
    }
}
