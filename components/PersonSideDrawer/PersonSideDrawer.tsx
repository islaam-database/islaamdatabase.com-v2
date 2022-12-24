import { People } from "../../database/entities/People";
import { getHijriYearDisplayText } from "../../utils/utils";
import { SideDrawer } from "../SideDrawer/SideDrawer";
import styles from "./style.module.css";
export const PersonSideDrawer = ({ person, isLoading }: { person?: People; isLoading?: boolean }) => {
    if (!person) return;
    if (isLoading) return "Loading...";
    return (
        <SideDrawer>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <div className={styles.heading}>
                        <h2 className={styles.name}>{person.name}</h2>
                        <h3 className={styles.generation}>{person.generation?.name}</h3>
                    </div>
                    {person.birthYear ? (
                        <div className={styles.quickInfo}>
                            <div className={styles.left}>
                                <label>Birth</label>
                                <label>{getHijriYearDisplayText(person.birthYear)}</label>
                            </div>
                            <div className={styles.right}></div>
                        </div>
                    ) : (
                        "(No birth year recorded)"
                    )}
                    <div>
                        <strong>Praised by ({person.praisesReceived.length})</strong>
                        <br />
                        {person.praisesReceived.map(p => (
                            <div key={p.id}>{p.praiser.name}</div>
                        ))}
                    </div>
                    <div>
                        <strong>Praised ({person.praisesGiven.length})</strong>
                        <br />
                        {person.praisesGiven.map(p => (
                            <div key={p.id}>{p.praisee.name}</div>
                        ))}
                    </div>
                    <div>
                        <strong>Teachers ({person.teachers.length})</strong>
                        <br />
                        {person.teachers.map(ts => (
                            <div key={ts.id}>{ts.teacher.name}</div>
                        ))}
                    </div>
                    <div>
                        <strong>Students ({person.students.length})</strong>
                        {person.students.map(ts => (
                            <div key={ts.id}>{ts.student.name}</div>
                        ))}
                    </div>
                </div>
            )}
        </SideDrawer>
    );
};
