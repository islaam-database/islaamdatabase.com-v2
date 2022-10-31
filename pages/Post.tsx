import Image from "next/image";
import Link from "next/link";
import KabahImg from "../public/Kabah.png";

export function Post({ post }: { post: Post; }) {
    const href = `/post/${post.id}`;
    return <div style={{ display: "flex", gap: "1rem" }}>
        <Image style={{ width: "1rem", height: "1rem" }} src={KabahImg} alt="Picture of the Ka'bah" />
        <Link href={href}>{post.title}</Link>
    </div>;
}
