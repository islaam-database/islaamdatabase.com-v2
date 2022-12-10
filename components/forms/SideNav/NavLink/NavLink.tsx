import Link from "next/link";
import styles from "./style.module.css";

interface Props {
    icon: string;
    text: string;
    href: string;
}

export const NavLink = (p: Props) => (
    <Link className={styles.navLink} href={p.href}>
        <span>{p.icon}</span>
        <span>{p.text}</span>
    </Link>
);
