import Link from "next/link";
import { Table, TableProps } from "./Table";

interface Props extends TableProps {
    modelName: { singular: string, plural: string };
    canCreate?: boolean;
}
export const ListPage = function (p: Props) {
    return <>
        <h1 style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{p.modelName.plural} ({p.rows.length})</span>
            {
                p.canCreate && <Link href={`/${p.modelName.plural.toLowerCase()}/create`}>
                    Create {p.modelName.singular}
                </Link>
            }
        </h1>
        <hr />
        <Table  {...p} />
    </>
}