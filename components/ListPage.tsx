import Link from "next/link";
import { Table, TableProps } from "./Table";

interface Props extends TableProps {
    canCreate: boolean;
    modelName: { singular: string, plural: string };
}
export const ListPage = function (p: Props) {
    return <>
        <h1 style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{p.modelName.plural} ({p.rows.length})</span>
            {
                p.canCreate && <Link href={`/${p.modelName}/create`}>Create {p.modelName.singular}</Link>
            }
        </h1>
        <hr />
        <Table  {...p} />
    </>
}