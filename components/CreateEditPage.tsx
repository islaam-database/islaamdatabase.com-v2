interface Props {
    modelName: { singular: string, plural: string };
    dataLists?: Map<string, Map<string, string>[]>;
    children?: JSX.Element[] | JSX.Element;
    title?: string;
}
export function CreateEditPage(p: Props) {
    const dataLists = Array
        .from(p.dataLists?.entries() || [])
        .map(([id, options]) => <datalist id={id}>
            {options.map(([key, value]) => <option value={key}>{value}</option>)}
        </datalist>);
    return <>
        <h1>{p.title || `New ${p.modelName.singular}`}</h1>
        <hr />
        {dataLists}
        {p.children}
    </>;
}