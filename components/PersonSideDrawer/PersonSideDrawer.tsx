import Link from "next/link";
import { People } from "../../database/entities/People";
import { getHijriYearDisplayText } from "../../utils/utils";
import { SideDrawer } from "../SideDrawer/SideDrawer";
import styles from "./style.module.css";
type Props = {
    person?: People;
    isLoading?: boolean;
    canEdit?: boolean;
};

export const PersonSideDrawer = ({ person, isLoading, canEdit }: Props) => {
    if (!person)
        return (
            <SideDrawer>
                <></>
            </SideDrawer>
        );
    if (isLoading) return <SideDrawer>Loading..</SideDrawer>;
    const praisesReceived = person.praisesReceived.sort((a, b) => sortByDeathYear(a.praiser, b.praiser));
    const praisesGiven = person.praisesGiven.sort((a, b) => sortByDeathYear(a.praiser, b.praiser));
    return (
        <SideDrawer>
            <div className={styles.container}>
                {isLoading ? (
                    <h1>Loading...</h1>
                ) : (
                    <>
                        <div className={styles.heading}>
                            <h2 className={styles.name}>{person.name}</h2>
                            <h2 className={styles.name}>{person.nameArabic}</h2>
                            <h3 className={styles.generation}>{person.generation?.name}</h3>
                        </div>
                        {person.deathYear && (
                            <div className={styles.quickInfo}>
                                <div className={styles.left}>
                                    <strong>Death</strong> <label>{getHijriYearDisplayText(person.deathYear)}</label>
                                </div>
                                <div className={styles.right}></div>
                            </div>
                        )}
                        {person.birthYear && (
                            <div className={styles.quickInfo}>
                                <div className={styles.left}>
                                    <strong>Birth</strong> <label>{getHijriYearDisplayText(person.birthYear)}</label>
                                </div>
                                <div className={styles.right}></div>
                            </div>
                        )}
                        <hr className={styles.divider} />
                        <div className={styles.section}>
                            <strong>Praised by ({praisesReceived.length})</strong>
                            {praisesReceived.map(p => (
                                <div key={p.id}>
                                    <Link href={`praises/${p.id}`}>{p.praiser.name}</Link>
                                </div>
                            ))}
                        </div>
                        <div className={styles.section}>
                            <strong>Praised ({praisesGiven.length})</strong>
                            {praisesGiven.map(p => (
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
                <div>{canEdit && <Link href={`/people/${person.id}`}>Edit</Link>}</div>
            </div>
        </SideDrawer>
    );
};
function sortByDeathYear(a: People, b: People) {
    if (a.deathYear == null) return 1;
    if (b.deathYear == null) return -1;
    return a.deathYear - b.deathYear;
}
