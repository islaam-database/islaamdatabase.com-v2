// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { withIronSessionApiRoute } from "iron-session/next";
import type { NextApiRequest, NextApiResponse } from "next";
import { AppUsers } from "../../database/entities/AppUsers";
import { IslaamDatabase } from "../../database/IslaamDatabase";
import { CookieConfig } from "../CookieConfig";
import { toJson } from "../utils";

export default withIronSessionApiRoute(async function (req, res) {
    const { userName, password } = JSON.parse(req.body);

    // validate query params
    if (!userName) return res.status(400).send("Missing username");
    if (!password) return res.status(400).send("Missing password");

    // get user from db
    const db = await IslaamDatabase.getInstance();
    const user = await db.getRepository(AppUsers).findOneBy({ userName });
    if (!user)
        return res
            .status(401)
            .send(`There is no user with username ${userName}`);

    // validate password
    const validPassword = await user.checkPassword(password);
    if (!validPassword) return res.status(401).send("Wrong password");

    req.session.user = toJson(user);

    await req.session.save();
    res.json(user);
}, CookieConfig);
