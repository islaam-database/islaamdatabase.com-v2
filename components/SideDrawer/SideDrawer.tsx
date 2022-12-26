import React, { ReactNode } from "react";
import styles from "./style.module.css";

type Props = {
    children: ReactNode;
};

export const SideDrawer: React.FC<Props> = p => <div className={styles.sideDrawer}>{p.children}</div>;
