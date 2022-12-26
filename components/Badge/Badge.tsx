import style from "./style.module.css";
export const Badge = (p: { children: JSX.Element }) => <div className={style.badge}>{p.children}</div>;
