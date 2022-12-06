import { useState } from "react";
import { People } from "../../database/entities/People";
import { Praises } from "../../database/entities/Praises";
import { Titles } from "../../database/entities/Titles";
import { Topics } from "../../database/entities/Topics";
import { toOptionLabel } from "../../utils";
import { DataList } from "./DataList";
import { LabelAndInput } from "./LabelAndInput";

interface Props {
    praiseEditing?: Praises;
    disabled?: boolean;
    people: People[];
    titles: Titles[];
    topics: Topics[];
}

export default function PraiseFormFields(p: Props) {
    const [praisee, setPraisee] = useState(toOptionLabel(p.praiseEditing?.praisee));
    const [praiser, setPraiser] = useState(toOptionLabel(p.praiseEditing?.praiser));
    const [title, setTitle] = useState(toOptionLabel(p.praiseEditing?.title));
    const [topic, setTopic] = useState(toOptionLabel(p.praiseEditing?.topic));
    const [source, setSource] = useState(p.praiseEditing?.source);
    return (
        <>
            <DataList id="people" items={p.people} />
            <DataList id="titles" items={p.titles} />
            <DataList id="topics" items={p.topics} />

            <LabelAndInput
                label="Praiser"
                id="praiser"
                value={praiser}
                onChange={(e) => setPraiser(e.target.value)}
                readOnly={p.disabled}
                name="praiser"
                required
                list="people"
            />
            <LabelAndInput
                label="Praisee"
                id="praisee"
                value={praisee}
                onChange={(e) => setPraisee(e.target.value)}
                readOnly={p.disabled}
                name="praisee"
                required
                list="people"
            />
            <LabelAndInput
                label="Title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                readOnly={p.disabled}
                name="title"
                list="titles"
            />
            <LabelAndInput
                label="Topic"
                id="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                readOnly={p.disabled}
                name="topic"
                list="topics"
            />
            <LabelAndInput
                label="Source"
                id="source"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                readOnly={p.disabled}
                name="source"
                required
            />
        </>
    );
}
