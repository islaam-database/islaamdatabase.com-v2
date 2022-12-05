interface Props {
    modelName: { singular: string, plural: string };
    dataLists?: {
        id: string,
        options: {
            value?: number | string,
            label: number | string,
        }[]
    }[]
    children?: JSX.Element[] | JSX.Element;
    title?: string;
}
export function CreateEditPage(p: Props) {
    const dataLists = p.dataLists?.map(({ id, options }) => <datalist key={id} id={id}>
        {options.map(({ label, value }) => <option key={value} value={value}>{label}</option>)}
    </datalist>)
    return <>
        <h1>{p.title || `New ${p.modelName.singular}`}</h1>
        <hr />
        {dataLists}
        {p.children}
    </>;
}