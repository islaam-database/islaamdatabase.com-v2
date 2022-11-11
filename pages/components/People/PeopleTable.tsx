import React from "react";
import { useRouter } from "next/router";
import { People } from "../../../database/entities/People";
import { Table } from "../Table";

export function PeopleTable({ people }: { people: People[]; }) {
    return <Table
        headTr={<tr>
            <td>Name</td>
            <td>Death</td>
            <td>Birth</td>
            <td>Generation</td>
        </tr>}
        bodyTrs={people.map(p => <PersonTableRow key={p.id} {...p} />)}
    />
}

function PersonTableRow(p: People) {
    const router = useRouter();
    return <tr onClick={() => router.push(`/people/${p.id}`)}>
        <td>{p.name}</td>
        <td>{p.deathYear} {getSuffix(p.deathYear)}</td>
        <td>{p.birthYear} {getSuffix(p.birthYear)}</td>
        <td></td>
    </tr>;
}

const getSuffix = (year: number | null) => year != null && "AH";