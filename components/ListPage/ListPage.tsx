import Link from "next/link";
import { Table, TableProps } from "../Table/Table";
import style from "./style.module.css";

interface Props extends TableProps {
    modelName: { singular: string; plural: string };
    canCreate?: boolean;
    onSearch?: (query: string) => void;
    query?: string;
}
export const ListPage = function (p: Props) {
    const createLink = `/${p.modelName.plural.toLowerCase()}/create`;
    return (
        <>
            <h1 style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: 0 }}>
                {p.onSearch && (
                    <input
                        className={style.search}
                        placeholder="🔍 Search"
                        value={p.query || ""}
                        onChange={e => p.onSearch?.(e.target.value.toLowerCase())}
                    />
                )}
                {p.canCreate && <Link href={createLink}>New</Link>}
            </h1>
            <Table {...p} />
        </>
    );
};
