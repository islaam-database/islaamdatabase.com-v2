import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { People } from "../../../database/entities/People";

export function PeopleTable({ people }: { people: People[]; }) {
    return <>
        <h1>People ({people.length})</h1>
        <table className="people-table">
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Death</td>
                    <td>Birth</td>
                    <td>Generation</td>
                </tr>
            </thead>
            <tbody>
                {people.map(p => <PersonTableRow key={p.id} {...p} />)}
            </tbody>
        </table>
    </>;
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

function getSuffix(year: number | null) {
    return year == null ? null : "AH";
}