export function toJson<T>(x: T) {
    return JSON.parse(JSON.stringify(x)) as T;
}
export abstract class SelectableOption {
    abstract id: string | number;
    abstract name: string;
}

export const toOptionLabel = (item?: SelectableOption) => (item ? `${item.id}. ${item.name}` : "");

export const getHijriYearDisplayText = (year?: number) => {
    if (year == null) return null;
    return `${year} AH`;
};
