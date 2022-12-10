import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string;
}

export const LabelAndInput = (p: Props) => (
    <div>
        <label htmlFor={p.id}>{p.label}</label> <input {...p} />
    </div>
);
