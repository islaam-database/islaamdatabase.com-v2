import { DataSource } from "typeorm";
import { People } from "./entities/People";

export const IslaamDatabase = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    synchronize: process.env.DB_SYNC === "true",
    logging: process.env.DB_LOGGING === "true",
    entities: [People],
});
