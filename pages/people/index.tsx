import { withIronSessionSsr } from "iron-session/next";
import { People } from "../../database/entities/People";
import { IslaamDatabase } from "../../database/IslaamDatabase";
import { CookieConfig, getIsAdminFromReq } from "../../utils/SessionUtils";
import { toJson } from "../../utils";
import { useRouter } from "next/router";
import Link from "next/link";
import { GetServerSidePropsResult } from "next";
import { ListPage } from "../../components/ListPage";

interface Props {
    people: People[];
    canCreate: boolean;
    [key: string]: any;
}

export default function (p: Props) {
    const { highlight } = useRouter().query;
    return <ListPage
        canCreate={p.canCreate}
        modelName={{ plural: "People", singular: "Person" }}
        columnNames={[
            "Id",
            "Name",
            "Death",
            "Birth",
            "Generation",
        ]}
        rows={p.people.map(p => ({
            isActive: highlight === p.id.toString(),
            key: p.id,
            href: `/people/${p.id}`,
            columns: [
                <Link href={`/people/${p.id}`}>{p.id.toString()}</Link>,
                p.name,
                p.deathYear != null && `${p.deathYear} AH`,
                p.birthYear != null && `${p.birthYear} AH`,
                <Link href={`/generations/${p.generationId}`}>{p.generation?.name}</Link>
            ]
        }))}
    />;
}

export const getServerSideProps = withIronSessionSsr(
    async ({ req }) => {
        const db = await IslaamDatabase.getInstance();
        const query = db
            .getRepository(People)
            .createQueryBuilder("people")
            .orderBy("people.deathYear", "ASC", "NULLS LAST")
            .leftJoinAndSelect("people.generation", "generation")
            .getMany();
        const people = toJson(await query);
        const user = req.session.user || null;
        return {
            props: {
                canCreate: getIsAdminFromReq(req),
                people
            }
        } as GetServerSidePropsResult<Props>;
    }, CookieConfig);
