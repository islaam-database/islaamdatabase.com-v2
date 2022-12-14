import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Books } from "./Books";
import { Generations } from "./Generations";
import { Titles } from "./Titles";
import { Praises } from "./Praises";
import { TeacherStudents } from "./TeacherStudents";
import { SelectableOption } from "../../utils/utils";

@Index("IX_People_GenerationId", ["generationId"], {})
@Index("PK_People", ["id"], { unique: true })
@Index("IX_People_MainTitleId", ["mainTitleId"], {})
@Entity("People", { schema: "public", synchronize: false })
export class People extends SelectableOption {
    @PrimaryGeneratedColumn({ type: "integer", name: "Id" })
    id: number;

    @Column("text", { name: "Name" })
    name: string;
    @Column("text", { name: "NameArabic" })
    nameArabic: string | null;

    @Column("text", { name: "Source", nullable: true })
    source: string | null;

    @Column("integer", { name: "MainTitleId", nullable: true })
    mainTitleId: number | null;

    @Column("text", { name: "FullName", nullable: true })
    fullName: string | null;

    @Column("text", { name: "FillNameSource", nullable: true })
    fillNameSource: string | null;

    @Column("integer", { name: "DeathYear", nullable: true })
    deathYear: number | null;

    @Column("text", { name: "DeathYearSource", nullable: true })
    deathYearSource: string | null;

    @Column("text", { name: "BirthYearSource", nullable: true })
    birthYearSource: string | null;

    @Column("integer", { name: "GenerationId", nullable: true })
    generationId: number | null;

    @Column("text", { name: "GenerationSource", nullable: true })
    generationSource: string | null;

    @Column("integer", { name: "TaqreedId", nullable: true })
    taqreedId: number | null;

    @Column("boolean", { name: "UseMascPron" })
    useMascPron: boolean;

    @Column("text", { name: "Location", nullable: true })
    location: string | null;

    @Column("text", { name: "LocationSource", nullable: true })
    locationSource: string | null;

    @Column("integer", { name: "BirthYear", nullable: true })
    birthYear: number | null;

    @Column("text", { name: "MainTitleSource", nullable: true })
    mainTitleSource: string | null;

    @OneToMany(() => Books, books => books.author)
    books: Books[];

    @ManyToOne(() => Generations, generations => generations.people, {
        onDelete: "RESTRICT",
    })
    @JoinColumn([{ name: "GenerationId", referencedColumnName: "id" }])
    generation: Generations;

    @ManyToOne(() => Titles, titles => titles.people)
    @JoinColumn([{ name: "MainTitleId", referencedColumnName: "id" }])
    mainTitle: Titles;

    @OneToMany(() => Praises, praises => praises.praisee)
    praisesReceived: Praises[];

    @OneToMany(() => Praises, praises => praises.praiser)
    praisesGiven: Praises[];

    @OneToMany(() => TeacherStudents, teacherStudents => teacherStudents.student)
    teachers: TeacherStudents[];

    @OneToMany(() => TeacherStudents, teacherStudents => teacherStudents.teacher)
    students: TeacherStudents[];
    static fromReqBody(body: Record<string, string>, id?: string | number) {
        return {
            id: id ? parseInt(id.toString()) : undefined,
            name: body.name,
            nameArabic: body.nameArabic,
            useMascPron: ["on", "true"].includes(body.useMascPron),
            location: body.location,
            locationSource: body.locationSource,
            taqreedId: body.taqreebId ? parseInt(body.taqreebId) : undefined,
            source: body.source,
            mainTitleId: body.mainTitle ? parseInt(body.mainTitle?.split(".")[0]) : undefined,
            mainTitleSource: body.mainTitleSource,
            fullName: body.fullName,
            fillNameSource: body.fullNameSource,
            deathYear: body.deathYear ? parseInt(body.deathYear) : undefined,
            deathYearSource: body.deathYearSource,
            birthYear: body.birthYear ? parseInt(body.birthYear) : undefined,
            birthYearSource: body.birthYearSource,
            generationId: body.generation ? parseInt(body.generation.split(".")[0]) : undefined,
            generationSource: body.generationSource,
        } as Partial<People>;
    }
}
