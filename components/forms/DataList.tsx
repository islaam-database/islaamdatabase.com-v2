import { SelectableOption, toOptionLabel } from "../../utils";

interface Props {
    id: string;
    items: SelectableOption[];
}
export const DataList = (p: Props) => <datalist id={p.id}>
    {p.items.map(i => <option key={i.id}>{toOptionLabel(i)}</option>)}
</datalist>


