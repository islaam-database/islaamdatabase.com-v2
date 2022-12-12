import { useEffect, useRef } from "react";
import styles from "./style.module.css";
export interface TableProps {
    /** The `<tr>` that goes in the `<thead>` */
    columnNames: string[];
    trs: JSX.Element[];
}

export function Table(p: TableProps) {
    const activeTr = useRef<HTMLTableRowElement>(null);

    useEffect(() => {
        setTimeout(() => activeTr.current?.scrollIntoView({ behavior: "smooth" }), 500);
    }, [activeTr.current]);

    return (
        <table className={styles.table}>
            <thead>
                <tr className={styles.active}>
                    {p.columnNames.map((cn, i) => (
                        <th key={i}>{cn}</th>
                    ))}
                </tr>
            </thead>
            <tbody>{p.trs}</tbody>
        </table>
    );
}
