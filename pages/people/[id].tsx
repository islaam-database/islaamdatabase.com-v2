import { GetServerSideProps, NextApiRequest, NextApiResponse } from "next";
import Link from "next/link";
import { NextRequest } from "next/server";
import { People } from "../../database/entities/People";
import { IslaamDatabase } from "../../database/IslaamDatabase";
import { toJson } from "../utils";

export default function ({ person }: { person: People }) {
    return <>
        <h1>{person.name}</h1>
        <hr />

        <dl>
            <dt>Name</dt>
            <dd>{person.name}</dd>

            <dt>Source</dt>
            <dd>{person.source}</dd>

            <dt>Main title</dt>
            <dd>{person.mainTitleId}</dd>

            <dt>Main title source</dt>
            <dd>{person.mainTitleSource}</dd>

            <dt>Full name</dt>
            <dd>{person.fillNameSource}</dd>

            <dt>Death year</dt>
            <dd>{person.deathYear}</dd>

            <dt>Death year source</dt>
            <dd>{person.deathYearSource}</dd>

            <dt>Birth year</dt>
            <dd>{person.birthYearSource}</dd>

            <dt>Death year</dt>
            <dd>{person.deathYear}</dd>

            <dt>Death year source</dt>
            <dd>{person.deathYearSource}</dd>

            <dt>Generation</dt>
            <dt>{person.generationId}</dt>

            <dt>Generation source</dt>
            <dd>{person.generationSource}</dd>

            <dt>Taqreeb at-Tahdheeb ID</dt>
            <dd>{person.taqreedId}</dd>

            <dt>Location</dt>
            <dd>{person.location}</dd>

            <dt>Location source</dt>
            <dd>{person.locationSource}</dd>
        </dl>
        <div>
            <Link href={`people/${person.id}/edit`}>Edit</Link>
            {' '}
            <Link href={`people/${person.id}/delete`}>Delete</Link>
        </div>
    </>;
}

export async function getServerSideProps(req: NextApiRequest) {
    if (typeof req.query.id !== "string") throw Error("Invalid ID query parameter");
    const id = parseInt(req.query.id || "");
    if (isNaN(id)) throw Error("Invalid ID query parameter");
    const db = await IslaamDatabase.getInstance();
    const response = await db.getRepository(People).findOneBy({ id });
    const person = toJson(response);
    return { props: { person }, notFound: person == null }
}