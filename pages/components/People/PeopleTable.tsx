import React from "react";
import { People } from "../../../database/entities/People";
import { PersonTableRow } from "./PersonTableRow";

export function PeopleTable({ people }: { people: People[]; }) {
    return <table className="people-table">
        <thead>
            <tr>
                <td>Name</td>
                <td>Death</td>
                <td>Birth</td>
                <td>Status</td>
            </tr>
        </thead>
        <tbody>
            {people.map(p => <PersonTableRow {...p} />)}
        </tbody>
    </table>;
}
