import { AppUsers } from "../database/entities/AppUsers";

export const toJson = (x: any) => JSON.parse(JSON.stringify(x));

declare module "iron-session" {
    interface IronSessionData {
        user?: AppUsers;
    }
}
