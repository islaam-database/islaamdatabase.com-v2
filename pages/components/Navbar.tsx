import { useContext } from "react";
import { UserContext } from "../UserContext";

type onUserNameAndPassword = (userNameAndPassword: { userName: string, password: string }) => any;

interface Props {
    onLoginRequest: onUserNameAndPassword;
    onRegisterRequest: onUserNameAndPassword;
    onLogoutRequest: () => any;
}

export const Navbar = ({ onLoginRequest, onRegisterRequest, onLogoutRequest }: Props) => {
    return <div id="navbar" style={{ display: "flex", justifyContent: "flex-end" }}>
        <UserLogin onLoginRequest={onLoginRequest} onRegisterRequest={onRegisterRequest} onLogoutRequest={onLogoutRequest} />
    </div>;
};

function UserLogin({ onLoginRequest, onRegisterRequest, onLogoutRequest }: Props) {
    const user = useContext(UserContext);
    if (user) return <button onClick={onLogoutRequest}>Assalaamu 'Alaikum, {user.userName}!</button>;
    return <>
        <button onClick={() => onLoginRequest(getUserNameAndPasswordFromPopup())}>Login</button>
        <button onClick={() => onRegisterRequest(getUserNameAndPasswordFromPopup())}>Register</button>
    </>;
}

const getUserNameAndPasswordFromPopup = () => {
    return {
        userName: window.prompt("Username", "askyous") || "",
        password: window.prompt("Password", "password") || ""
    }
}