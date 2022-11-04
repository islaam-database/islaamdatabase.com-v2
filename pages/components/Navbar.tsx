import { useContext, useState } from "react";
import { UserContext } from "../UserContext";

interface Props {
    onLogin: (username: string, password: string) => any;
}

export const Navbar = ({ onLogin }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const user = useContext(UserContext);
    return <div id="navbar" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "open" : "closed"}
        <h1>Navbar</h1>
        {user ? user.username : <button onClick={() => onLogin(
            window.prompt("Username", "askyous") || "",
            window.prompt("Password", "password") || "",
        )}>Login</button>}
    </div>;
};
