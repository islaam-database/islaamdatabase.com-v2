import Link from "next/link";
import { Suspense, useEffect, useRef } from "react";

interface Row {
    isActive: boolean;
    values: JSX.Element[];
    key: string | number;
}

interface Props {
    /** The `<tr>` that goes in the `<thead>` */
    columnNames: string[];
    /** The `<tr>`s that go in the `<tbody>` */
    rows: Row[];
}
export function Table({ columnNames, rows }: Props) {
    const activeTr = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        setTimeout(() => activeTr.current?.scrollIntoView({ behavior: "smooth" }), 500);
    }, [activeTr.current]);

    return <table className="table">
        <thead>
            <tr className="header">
                {columnNames.map((cn, i) => <th key={i}>{cn}</th>)}
            </tr>
        </thead>
        <tbody>
            {rows.map(({ values, isActive, key }) => <tr
                key={key}
                className={isActive ? "active" : ""}
            >
                {values.map((val, i) => <td key={i}>{val}</td>)}
            </tr>
            )}
        </tbody>
    </table>
}