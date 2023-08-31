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
) => {
    const role = req.session?.user?.role?.name;
    return role === "admin";
};

export interface SessionProps {
    [key: string]: unknown;
}
