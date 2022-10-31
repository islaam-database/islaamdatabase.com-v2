import { useState } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { UserContext } from "./UserContext";

interface Props {
    children: JSX.Element;
}

export const Layout = ({ children }: Props) => {
    const [user, setUser] = useState<string>();
    const onLogin = (username: string, password: string) => fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
    })
        .then(async r => {
            if (r.status !== 200) return window.alert(await r.text());
            const { username, password, isLoggedIn } = (await r.json());
            setUser(username);
        });

    return <UserContext.Provider value={user}>
        <div id="layout">
            <Navbar onLogin={onLogin} />
            <div style={{ padding: "0 1rem" }}>
                {children}
            </div>
        </div>
        <Footer />
    </UserContext.Provider>;
};
