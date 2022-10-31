import { useRouter } from "next/router"

export default function () {
    const id = useRouter().query.id;
    return <h1>{id}</h1>
}