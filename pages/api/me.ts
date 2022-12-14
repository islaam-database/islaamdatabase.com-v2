import { withIronSessionApiRoute } from "iron-session/next";
import { CookieConfig } from "../../utils/SessionUtils";

export default withIronSessionApiRoute(
    async (req, res) =>
        req.session.user
            ? res.json(req.session.user)
            : res.status(404).send("Not signed in."),
    CookieConfig,
);
