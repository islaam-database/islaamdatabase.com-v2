import Link from "next/link";
import { useContext, useState } from "react";
import { UserContext } from "../utils/UserContext";
import { AuthDialog } from "./AuthDialog";

interface Credentials { userName: string, password: string }

interface Props {
    onLoginRequest: (credentials: Credentials) => any;
    onRegisterRequest: (credentials: Credentials) => any;
    onLogoutRequest: VoidFunction;
}

export const Navbar = ({ onLoginRequest, onRegisterRequest, onLogoutRequest }: Props) => {
    const [authState, setAuthState] = useState<"logging-in" | "registering">();
    return <div id="navbar" style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: "1rem" }}>
            <Link href="/">App Name</Link>
            <Link href="/people">People</Link>
            <Link href="/praises">Praises</Link>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
            <AuthDialog
                isOpen={authState != null}
                onCloseRequest={() => setAuthState(undefined)}
                submitText={authState == "logging-in" ? "Log in" : "Register"}
                onSubmit={authState === "logging-in" ? onLoginRequest : onRegisterRequest}
            />
            <UserLogin
                onLoginRequest={() => setAuthState("logging-in")}
                onRegisterRequest={() => setAuthState("registering")}
                onLogoutRequest={onLogoutRequest}
            />
        </div>
    </div>;
};

interface UserLoginProps {
    onLoginRequest: VoidFunction;
    onRegisterRequest: VoidFunction;
    onLogoutRequest: VoidFunction;
}

function UserLogin({ onLoginRequest, onRegisterRequest, onLogoutRequest }: UserLoginProps) {
    const user = useContext(UserContext);
    if (user) return <button onClick={onLogoutRequest}>Assalaamu 'Alaikum, {user.userName}!</button>;
    return <>
        <button onClick={onLoginRequest}>Login</button>
        <button onClick={onRegisterRequest}>Register</button>
    </>;
}