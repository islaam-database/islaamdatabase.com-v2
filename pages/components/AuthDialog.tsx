import { useState } from "react";

interface Props {
    /** The text to show on the submit button (eg: Sign in, Register) */
    submitText: string;
    onSubmit: (credentials: { userName: string, password: string }) => any;
    isOpen: boolean;
    onCloseRequest: () => any;
}

/** Prompts the user for their username and password */
export const AuthDialog = ({ submitText, onSubmit, isOpen }: Props) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    return <dialog className="auth-dialog" open={isOpen}>
        <form onSubmit={() => onSubmit({ userName, password })}>
            <label htmlFor="username">Username</label>
            <input required value={userName} onInput={(e) => setUserName(e.currentTarget.value)} />
            <br />

            <label htmlFor="password">Password</label>
            <input required value={password} onInput={(e) => setPassword(e.currentTarget.value)} />
            <br />

            <button type="submit">{submitText}</button>
        </form>
    </dialog>;
};
