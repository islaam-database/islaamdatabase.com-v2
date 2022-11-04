import { IronSessionOptions } from "iron-session";

export const CookieConfig = {
    cookieName: "idb-cookie",
    password: process.env.COOKIE_SESSION_ID,
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
} as IronSessionOptions;
