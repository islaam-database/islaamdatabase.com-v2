import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { UserContext } from "./UserContext";

interface Props {
    children: JSX.Element;
}

export const Layout = ({ children }: Props) => {
    const [user, setUser] = useState<User>();

    useEffect(() => {
        fetch("/api/me").then(async r => {
            if (r.status == 404) return;
            const me = await r.json();
            setUser(me);
        })
    }, []);

    const onLogin = (username: string, password: string) => fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
    })
        .then(async r => {
            if (r.status !== 200) return window.alert(await r.text());
            setUser(await r.json() as User);
        });

    return <UserContext.Provider value={user}>
        <Navbar onLogin={onLogin} />
        <div style={{ padding: "0 1rem" }}>
            {children}
        </div>
        <Footer />
    </UserContext.Provider>;
};
