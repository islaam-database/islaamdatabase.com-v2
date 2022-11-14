import { withIronSessionSsr } from "iron-session/next";
import { Praises } from "../../database/entities/Praises";
import { IslaamDatabase } from "../../database/IslaamDatabase";
import { CookieConfig } from "../CookieConfig";
import { toJson } from "../utils";

interface Props {
    praise: Praises;
}
export default ({ praise }: Props) => {
    return <h1>{praise.id}</h1>
}

export const getServerSideProps = withIronSessionSsr(async ({ req }) => {
    if (!req.url) throw Error("Missing request URL");
    const id = parseInt(req.url.split("/").at(-1) as string);
    const praise = toJson(
        await IslaamDatabase.Praises.then(p => p.find({
            relations: {
                praiser: true,
                praisee: true,
                title: true,
                topic: true,
            },
            where: { id }
        }))
    );

    return {
        props: { praise }
    }
}, CookieConfig)