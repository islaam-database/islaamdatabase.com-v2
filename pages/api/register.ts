import { withIronSessionApiRoute } from "iron-session/next";
import { AppUsers } from "../../database/entities/AppUsers";
import { IslaamDatabase } from "../../database/IslaamDatabase";
import { CookieConfig } from "../CookieConfig";

export default withIronSessionApiRoute(async function (req, res) {
    const { userName, password } = JSON.parse(req.body) as {
        userName?: string;
        password?: string;
    };

    // validate username
    const userNameMinChar = parseInt(process.env.USERNAME_MIN_CHAR || "");
    if (!userName || userName.length < userNameMinChar)
        return res
            .status(400)
            .send(
                `Username must be at least ${userNameMinChar} characters long.`,
            );

    // validate password
    const passwordMinChar = parseInt(process.env.PASSWORD_MIN_CHAR || "");
    if (!password || password?.length < passwordMinChar) {
        return res
            .status(400)
            .send(
                `Password must be at least ${passwordMinChar} characters long.`,
            );
    }

    const db = await IslaamDatabase.AppUsers;

    // check if username is already taken
    const usernameAlreadyExists = await db.findOneBy({ userName });
    console.log({ usernameAlreadyExists });
    if (usernameAlreadyExists)
        return res
            .status(400)
            .send(
                `Username ${userName} already exists. User names must be unique.`,
            );

    // save user
    const user = new AppUsers();
    user.userName = userName;
    await user.storePassword(password);
    await db.save(user);

    return res.json(user);
}, CookieConfig);
