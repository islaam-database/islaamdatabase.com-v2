import { ReactNode, useEffect, useState } from "react";
import { AppUsers } from "./database/entities/AppUsers";
import { Footer } from "./components/Footer";
import { SideNav } from "./components/forms/SideNav/SideNav";
import { UserContext } from "./utils/UserContext";

interface Props {
    children: ReactNode;
}

export const Layout = ({ children }: Props) => {
    const [user, setUser] = useState<AppUsers>();

    useEffect(() => {
        fetch("/api/me").then(async r => {
            if (r.status == 404) return;
            const me = await r.json();
            setUser(me);
        });
    }, []);

    return (
        <UserContext.Provider value={user}>
            <div data-test="layout" style={{ display: "flex", justifyContent: "flex-start" }}>
                <SideNav
                    onRegisterRequest={async userNameAndPassword => {
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
                        }).then(async r => {
                            if (r.status !== 200) return window.alert(await r.text());
                            setUser((await r.json()) as AppUsers);
                        });
                    }}
                />
                {children}
            </div>
            <Footer />
        </UserContext.Provider>
    );
};
