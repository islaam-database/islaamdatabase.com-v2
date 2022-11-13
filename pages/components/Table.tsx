import Link from "next/link";
import { useEffect, useRef } from "react";

interface Row {
    isActive: boolean;
    values: TD[];
    key: string | number | boolean;
    href: string;
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

    return <div className="table">
        <tr>
            {columnNames.map((cn, i) => <th key={i}>{cn}</th>)}
        </tr>
        {rows.map(({ values, isActive }, i) => <tr
            key={i}
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
    </div>
}