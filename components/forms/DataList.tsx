import { SelectableOption, toOptionLabel } from "../../utils/utils";

interface Props {
    id: string;
    options: SelectableOption[];
}
export const DataList = (p: Props) => (
    <datalist id={p.id}>
        {p.options.map(i => (
            <option key={i.id}>{toOptionLabel(i)}</option>
        ))}
    </datalist>
);
