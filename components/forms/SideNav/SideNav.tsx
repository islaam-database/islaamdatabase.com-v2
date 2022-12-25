import { useContext, useState } from "react";
import { UserContext } from "../../../utils/UserContext";
import { AuthDialog } from "../../AuthDialog";
import { NavLink } from "./NavLink/NavLink";
import styles from "./style.module.css";

interface Credentials {
    userName: string;
    password: string;
}

interface Props {
    onLoginRequest: (credentials: Credentials) => void;
    onRegisterRequest: (credentials: Credentials) => void;
    onLogoutRequest: VoidFunction;
}

export const SideNav = ({ onLoginRequest, onRegisterRequest, onLogoutRequest }: Props) => {
    const [authState, setAuthState] = useState<"logging-in" | "registering">();
    return (
        <div className={styles.sidenav}>
            <NavLink href="/" text="Islaam Database" />
            <NavLink href="/people" text="People" icon="👥" />
            <NavLink href="/praises" text="Praises" icon="👍" />
            <NavLink href="/students" text="Students" icon="🏫" />
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
        </div>
    );
};

interface UserLoginProps {
    onLoginRequest: VoidFunction;
    onRegisterRequest: VoidFunction;
    onLogoutRequest: VoidFunction;
}

function UserLogin({ onLoginRequest, onRegisterRequest, onLogoutRequest }: UserLoginProps) {
    const user = useContext(UserContext);
    if (user) return <button onClick={onLogoutRequest}>Assalaamu 'Alaikum, {user.userName}!</button>;
    return (
        <>
            <button onClick={onLoginRequest}>Login</button>
            <button onClick={onRegisterRequest}>Register</button>
        </>
    );
}
