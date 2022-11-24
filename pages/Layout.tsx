import { useEffect, useState } from "react";
import { AppUsers } from "../database/entities/AppUsers";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { UserContext } from "../utils/UserContext";

interface Props {
    children: JSX.Element;
}

export const Layout = ({ children }: Props) => {
    const [user, setUser] = useState<AppUsers>();

    useEffect(() => {
        fetch("/api/me").then(async r => {
            if (r.status == 404) return;
            const me = await r.json();
            setUser(me);
        })
    }, []);


    return <UserContext.Provider value={user}>
        <Navbar
            onRegisterRequest={async (userNameAndPassword) => {
                const res = await fetch("/api/register", {
                    method: "POST",
                    body: JSON.stringify(userNameAndPassword),
                });
                if (res.status != 200) return window.alert(await res.text());
                const registeredUser = await res.json();
                setUser(registeredUser);
            }}
            onLogoutRequest={async () => {
                await fetch("/api/logout");
                setUser(undefined);
            }}
            onLoginRequest={({ userName, password }) => {
                fetch("/api/login", {
                    method: "POST",
                    body: JSON.stringify({ userName, password }),
                })
                    .then(async r => {
                        if (r.status !== 200) return window.alert(await r.text());
                        setUser(await r.json() as AppUsers);
                    });
            }} />
        <div style={{ padding: "0 1rem", maxWidth: "1024px", margin: "0 auto" }}>
            {children}
        </div>
        <Footer />
    </UserContext.Provider>;
};
