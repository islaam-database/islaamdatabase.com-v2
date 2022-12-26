import Link from "next/link";
import { Table, TableProps } from "../Table/Table";
import styles from "./style.module.css";

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
            {p.onSearch && (
                <input
                    className={styles.search}
                    placeholder="🔍 Search"
                    value={p.query || ""}
                    onChange={e => p.onSearch?.(e.target.value.toLowerCase())}
                />
            )}
            {p.canCreate && <Link href={createLink}>New</Link>}
            <Table {...p} />
        </>
    );
};
