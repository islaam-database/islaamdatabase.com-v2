import { useState } from "react";
import { Generations } from "../../database/entities/Generations";
import { People } from "../../database/entities/People";
import { Titles } from "../../database/entities/Titles";
import { toOptionLabel } from "../../utils";
import { DataList } from "./DataList";
import { LabelAndInput } from "./LabelAndInput";

interface Props {
    generations: Generations[];
    titles: Titles[];
    personEditing?: People;
}
export const PersonFormFields = (p: Props) => {
    const [name, setName] = useState(p.personEditing?.name);
    const [source, setSource] = useState(p.personEditing?.source || "");
    const [mainTitle, setMainTitle] = useState(toOptionLabel(p.personEditing?.mainTitle));
    const [mainTitleSource, setMainTitleSource] = useState(p.personEditing?.mainTitleSource || "");
    const [fullName, setFullName] = useState(p.personEditing?.fullName || "");
    const [fullNameSource, setFullNameSource] = useState(p.personEditing?.fillNameSource || "");
    const [deathYear, setDeathYear] = useState(p.personEditing?.deathYear?.toString());
    const [deathYearSource, setDeathYearSource] = useState(p.personEditing?.deathYearSource?.toString());
    const [birthYear, setBirthYear] = useState(p.personEditing?.birthYear?.toString());
    const [birthYearSource, setBirthYearSource] = useState(p.personEditing?.birthYearSource?.toString());
    const [generation, setGeneration] = useState(toOptionLabel(p.personEditing?.generation));
    const [generationSource, setGenerationSource] = useState(p.personEditing?.generationSource?.toString());
    const [taqreebId, setTaqreebId] = useState(p.personEditing?.taqreedId?.toString() || "");
    const [useMascPronoun, setUseMascPronoun] = useState(p.personEditing?.useMascPron);
    const [location, setLocation] = useState(p.personEditing?.location || "");
    const [locationSource, setLocationSource] = useState(p.personEditing?.location || "");

    return (
        <>
            <DataList id="titles" options={p.titles} />
            <DataList id="generations" options={p.generations} />
            <LabelAndInput
                name="name"
                id="name"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <LabelAndInput
                label="Source"
                name="source"
                id="source"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                required
            />
            <LabelAndInput
                label="Main title"
                name="mainTitle"
                list="titles"
                id="main-title"
                value={mainTitle}
                onChange={(e) => setMainTitle(e.target.value)}
            />
            <LabelAndInput
                label="Main title source"
                name="mainTitleSource"
                id="main-title-source"
                value={mainTitleSource}
                onChange={(e) => setMainTitleSource(e.target.value)}
            />
            <LabelAndInput
                label="Full name"
                id="full-name"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
            />
            <LabelAndInput
                label="Full name source"
                id="full-name-source"
                name="fullNameSource"
                value={fullNameSource}
                onChange={(e) => setFullNameSource(e.target.value)}
            />
            <LabelAndInput
                label="Death year"
                id="deathYear"
                name="deathYear"
                value={deathYear}
                onChange={(e) => setDeathYear(e.target.value)}
            />
            <LabelAndInput
                label="Death year source"
                id="deathYearSource"
                name="deathYearSource"
                value={deathYearSource}
                onChange={(e) => setDeathYearSource(e.target.value)}
            />
            <LabelAndInput
                label="Birth year"
                id="birthYear"
                name="birthYear"
                value={birthYear}
                onChange={(e) => setBirthYear(e.target.value)}
            />
            <LabelAndInput
                label="Birth year source"
                id="birthYearSource"
                name="birthYearSource"
                value={birthYearSource}
                onChange={(e) => setBirthYearSource(e.target.value)}
            />
            <LabelAndInput
                label="Generation"
                list="generations"
                id="generation"
                name="generation"
                value={generation}
                onChange={(e) => setGeneration(e.target.value)}
            />
            <LabelAndInput
                label="Generation source"
                id="generationSource"
                name="generationSource"
                value={generationSource}
                onChange={(e) => setGenerationSource(e.target.value)}
            />
            <LabelAndInput
                label="Taqreeb at-Tahdheeb ID"
                id="taqreeb-id"
                name="taqreebId"
                value={taqreebId}
                onChange={(e) => setTaqreebId(e.target.value)}
            />
            <LabelAndInput
                label="Use masculine pronoun"
                id="use-masc-pron"
                name="useMascPron"
                checked={useMascPronoun}
                type="checkbox"
                onChange={(e) => setUseMascPronoun(e.target.checked)}
            />
            <LabelAndInput
                label="Location"
                id="location"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <LabelAndInput
                label="Location source"
                id="location-source"
                name="location-source"
                value={locationSource}
                onChange={(e) => setLocationSource(e.target.value)}
            />
        </>
    );
};
