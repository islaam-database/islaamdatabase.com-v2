import { People } from "../../../database/entities/People";


export function PersonTableRow(p: People) {
    return <tr>
        <td>{p.name}</td>
        <td>{p.deathYear} {getSuffix(p.deathYear)}</td>
        <td>{p.birthYear} {getSuffix(p.birthYear)}</td>
        <td></td>
    </tr>;
}

function getSuffix(year: number | null) {
    return year == null ? null : "AH";
}