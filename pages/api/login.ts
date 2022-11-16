// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { withIronSessionApiRoute } from "iron-session/next";
import type { NextApiRequest, NextApiResponse } from "next";
import { AppUsers } from "../../database/entities/AppUsers";
import { IslaamDatabase } from "../../database/IslaamDatabase";
import { CookieConfig } from "../CookieConfig";
import { toJson } from "../../utils";

export default withIronSessionApiRoute(async function (req, res) {
    try {
        if (!req.body)
            return res.status(400).json({ message: "Missing request body" });
        const { userName, password } = JSON.parse(req.body);
        // validate query params
        if (!userName)
            return res.status(400).json({ message: "Missing username" });
        if (!password)
            return res.status(400).json({ message: "Missing password" });

        // get user from db
        const db = await IslaamDatabase.getInstance();
        const user = await db
            .getRepository(AppUsers)
            .findOne({ relations: { role: true }, where: { userName } });
        if (!user)
            return res.status(401).json({
                message: `There is no user with username ${userName}`,
            });

        // validate password
        const validPassword = await user.checkPassword(password);
        if (!validPassword)
            return res.status(401).json({ message: "Wrong password" });

        req.session.user = toJson(user);

        await req.session.save();
        res.json(user);
    } catch (e) {
        console.error(e);
        res.status(500).json({
            message: "We couldn't log you in. That's all we can say.",
        });
    }
}, CookieConfig);
