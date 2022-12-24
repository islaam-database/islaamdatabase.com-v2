import { NextApiRequest, NextApiResponse } from "next";
import { IslaamDatabase } from "../../database/IslaamDatabase";
import { toJson } from "../../utils/utils";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    if (typeof id !== "string") return res.status(404).send("ID Missing");

    const person = await IslaamDatabase.People.then(p =>
        p.findOne({
            where: { id: parseInt(id) },
            relations: {
                teachers: {
                    student: true,
                    teacher: true,
                },
                students: {
                    student: true,
                    teacher: true,
                },
                praisesReceived: {
                    praisee: true,
                    praiser: true,
                },
                praisesGiven: {
                    praisee: true,
                    praiser: true,
                },
                generation: true,
                mainTitle: true,
            },
        })
    );
    if (!person) return res.status(404).send(`No person found with ID ${id}`);
    res.json(toJson(person));
};
