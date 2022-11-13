import Link from "next/link";
import { useEffect, useRef } from "react";

interface Row {
    isActive: boolean;
    values: TD[];
    key: string | number | boolean;
}
type TD = undefined | null | string | number | boolean | {
    text: JSX.Element | string | number;
    href: string;
}

interface Props {
    /** The `<tr>` that goes in the `<thead>` */
    columnNames: string[];
    /** The `<tr>`s that go in the `<tbody>` */
    rows: Row[];
}
export function Table({ columnNames, rows }: Props) {
    const activeTr = useRef<HTMLTableRowElement>(null);

    useEffect(() => {
        setTimeout(() => activeTr.current?.scrollIntoView({ behavior: "smooth" }), 500);
    }, [activeTr.current]);

    return <table className="table">
        <thead>
            <tr>
                {columnNames.map(cn => <th>{cn}</th>)}
            </tr>
        </thead>
        <tbody>
            {rows.map(({ values, isActive }) => <tr
                className={isActive ? "active" : ""}
                ref={isActive ? activeTr : null}
            >
                {values.map((val) => <td>
                    {typeof val === "string" && val}
                    {typeof val === "number" && val}
                    {typeof val === "boolean" && val}
                    {typeof val === "object"
                        && val != null
                        && <Link href={val.href}>{val.text}</Link>
                    }
                </td>)}
            </tr>)}
        </tbody>
    </table>
}