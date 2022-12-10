import { useEffect, useRef } from "react";

interface Row {
    isActive: boolean;
    columns: (JSX.Element | string | boolean)[];
    key: string | number;
}

export interface TableProps {
    /** The `<tr>` that goes in the `<thead>` */
    columnNames: string[];
    /** The `<tr>`s that go in the `<tbody>` */
    rows: Row[];
}
export function Table({ columnNames, rows }: TableProps) {
    const activeTr = useRef<HTMLTableRowElement>(null);

    useEffect(() => {
        setTimeout(() => activeTr.current?.scrollIntoView({ behavior: "smooth" }), 500);
    }, [activeTr.current]);

    return (
        <table className="table">
            <thead>
                <tr className="header">
                    {columnNames.map((cn, i) => (
                        <th key={i}>{cn}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map(({ columns, isActive, key }) => (
                    <tr ref={isActive ? activeTr : undefined} key={key} className={isActive ? "active" : ""}>
                        {columns.map((val, i) => (
                            <td key={i}>{val}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
