import { withIronSessionApiRoute } from "iron-session/next";
import { CookieConfig } from "../CookieConfig";

export default withIronSessionApiRoute((req, res) => {
    req.session.destroy();
    res.status(200).send("Signed out.");
}, CookieConfig);
