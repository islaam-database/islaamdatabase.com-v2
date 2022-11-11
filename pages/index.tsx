import { useRouter } from "next/router";
import { useEffect } from "react";
import { IslaamDatabase } from "../database/IslaamDatabase";

export default function () {
    const router = useRouter();
    useEffect(() => {
        IslaamDatabase.AppUsers.then(users => users.find())
        router.push("/people")
    });
    return <></>;
}