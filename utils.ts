export function toJson<T>(x: T) {
    return JSON.parse(JSON.stringify(x)) as T;
}
