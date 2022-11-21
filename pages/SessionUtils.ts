import { IronSessionOptions } from "iron-session";
import { NextIncomingMessage } from "next/dist/server/request-meta";
import { AppUsers } from "../database/entities/AppUsers";

export const CookieConfig = {
    cookieName: "idb-cookie",
    password: process.env.COOKIE_SESSION_ID,
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
} as IronSessionOptions;

declare module "iron-session" {
    interface IronSessionData {
        user?: AppUsers;
    }
}

export const getIsAdminFromReq = (
    req: NextIncomingMessage & { session: { user?: AppUsers } },
) => req.session.user?.role?.name === "admin";
