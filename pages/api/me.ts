import { withIronSessionApiRoute } from "iron-session/next";
import { CookieConfig } from "../CookieConfig";

export default withIronSessionApiRoute(
  async (req, res) => res.json(req.session.user),
  CookieConfig
);
