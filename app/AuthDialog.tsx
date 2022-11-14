"use client";

import { useState } from "react";

interface Props {
    /** The text to show on the submit button (eg: Sign in, Register) */
    submitText: string;
    onSubmit: (credentials: { userName: string, password: string }) => any;
    isOpen: boolean;
    onCloseRequest: () => any;
}

/** Prompts the user for their username and password */
export const AuthDialog = ({ submitText, onSubmit, isOpen, onCloseRequest }: Props) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    return <dialog className="auth-dialog" open={isOpen} >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "3rem" }}>
            <h3>Enter your username and password</h3>
            <button onClick={onCloseRequest}>ⅹ</button>
        </div>
        <form
            onSubmit={() => {
                onSubmit({ userName, password });
                onCloseRequest();
            }}>
            <label htmlFor="username">Username</label>
            <input id="username" autoFocus required value={userName} onInput={(e) => setUserName(e.currentTarget.value)} />
            <br />

            <label htmlFor="password">Password</label>
            <input id="password" type="password" required value={password} onInput={(e) => setPassword(e.currentTarget.value)} />
            <br />

            <button type="submit">{submitText}</button>
        </form>
    </dialog>;
};
