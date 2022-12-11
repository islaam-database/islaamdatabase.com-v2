import styles from "./style.module.css";
interface Props {
    children: JSX.Element;
    isOpen: boolean;
}

export const SideDrawer = (p: Props) => <div className={styles.sideDrawer}>{p.children}</div>;
