interface Props {
    /** The `<tr>` that goes in the `<thead>` */
    headTr: JSX.Element;
    /** The `<tr>`s that go in the `<tbody>` */
    bodyTrs: JSX.Element[];
}
export function Table({ headTr, bodyTrs }: Props) {
    return <table className="table">
        <thead>{headTr}</thead>
        <tbody>{bodyTrs}</tbody>
    </table>
}