
interface Props {
    id: string;
    items: SelectableOption[];
}
export const DataList = (p: Props) => <datalist id={p.id}>
    {p.items.map(i => <option key={i.id}>{toOptionLabel(i)}</option>)}
</datalist>


export abstract class SelectableOption {
    abstract id: string | number;
    abstract name: string;
}

export const toOptionLabel = (item?: SelectableOption) =>
    item ? `${item.id}. ${item.name}` : "";