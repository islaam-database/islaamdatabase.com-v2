// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { withIronSessionApiRoute } from "iron-session/next";
import type { NextApiRequest, NextApiResponse } from "next";
import { CookieConfig } from "../CookieConfig";

export default withIronSessionApiRoute(async function (
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { username, password } = JSON.parse(req.body);

    if (username != "askyous" || password != "password")
        return res.status(401).send("Wrong username or password");

    const user = { username, password, isLoggedIn: true };
    req.session.user = user;
    await req.session.save();
    res.json(user);
},
CookieConfig);
