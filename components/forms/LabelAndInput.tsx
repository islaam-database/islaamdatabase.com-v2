import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string;
}

export const LabelAndInput = (p: Props) => (
    <div style={{ display: "flex", gap: ".5rem", marginBottom: ".5rem", alignItems: "center" }}>
        <label style={{ fontWeight: p.required ? "bold" : "unset" }} htmlFor={p.id}>
            {p.label}
        </label>
        <input style={{ flex: 1, padding: ".5rem" }} {...p} />
    </div>
);
