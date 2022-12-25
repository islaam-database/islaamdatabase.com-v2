import Link from "next/link";
import { People } from "../../database/entities/People";
import { getHijriYearDisplayText } from "../../utils/utils";
import { SideDrawer } from "../SideDrawer/SideDrawer";
import styles from "./style.module.css";
export const PersonSideDrawer = ({ person, isLoading }: { person?: People; isLoading?: boolean }) => {
    if (!person) return;
    if (isLoading) return "Loading...";
    return (
        <SideDrawer>
            <div className={styles.container}>
                {isLoading ? (
                    <h1>Loading...</h1>
                ) : (
                    <>
                        <div className={styles.heading}>
                            <h2 className={styles.name}>{person.name}</h2>
                            <h3 className={styles.generation}>{person.generation?.name}</h3>
                        </div>
                        {person.birthYear && (
                            <div className={styles.quickInfo}>
                                <div className={styles.left}>
                                    <label>Birth</label> <label>{getHijriYearDisplayText(person.birthYear)}</label>
                                </div>
                                <div className={styles.right}></div>
                            </div>
                        )}
                        <hr className={styles.divider} />
                        <div className={styles.section}>
                            <strong>Praised by ({person.praisesReceived.length})</strong>
                            {person.praisesReceived.map(p => (
                                <div key={p.id}>
                                    <Link href={`praises/${p.id}`}>{p.praiser.name}</Link>
                                </div>
                            ))}
                        </div>
                        <div className={styles.section}>
                            <strong>Praised ({person.praisesGiven.length})</strong>
                            {person.praisesGiven.map(p => (
                                <div key={p.id}>
                                    <Link href={`praises/${p.id}`}>{p.praisee.name}</Link>
                                </div>
                            ))}
                        </div>
                        <div className={styles.section}>
                            <strong>Teachers ({person.teachers.length})</strong>
                            {person.teachers.map(ts => (
                                <div key={ts.id}>{ts.teacher.name}</div>
                            ))}
                        </div>
                        <div className={styles.section}>
                            <strong>Students ({person.students.length})</strong>
                            {person.students.map(ts => (
                                <div key={ts.id}>{ts.student.name}</div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </SideDrawer>
    );
};
