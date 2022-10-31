// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

/** cookie ID, username */
const sessions = new Map<string, string>();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = req.cookies._ga || Math.random().toString();
  const fromSession = sessions.get(cookie || "");
  if (fromSession) return fromSession;
  const { username, password } = JSON.parse(req.body);
  if (username == "askyous" && password == "printery")
    sessions.set(cookie, "Yousef Shanawany");
  return res.status(200).json({ name: sessions.get(cookie) });
}
