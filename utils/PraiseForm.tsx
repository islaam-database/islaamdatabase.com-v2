import { useRouter } from "next/router";
import { useState } from "react";
import { Praises } from "../database/entities/Praises";
import { SelectableOption, toOptionLabel } from "../utils";

interface Props {
    praiseEditing?: Praises;
    people: SelectableOption[];
    titles: SelectableOption[];
    topics: SelectableOption[];
    disabled?: boolean;
}

export default function PraiseForm({
    praiseEditing,
    people,
    titles,
    topics,
    disabled,
}: Props) {
    const router = useRouter();
    const [praisee, setPraisee] = useState(toOptionLabel(praiseEditing?.praisee));
    const [praiser, setPraiser] = useState(toOptionLabel(praiseEditing?.praiser));
    const [title, setTitle] = useState(toOptionLabel(praiseEditing?.title));
    const [topic, setTopic] = useState(toOptionLabel(praiseEditing?.topic));
    const deleteLink = praiseEditing && `/praises/${praiseEditing.id}/delete`;
    return <>
        <>
            <datalist id="people">
                {people.map(p => <option key={p.id}>{toOptionLabel(p)}</option>)}
            </datalist>
            <datalist id="titles">
                {titles.map(t => <option key={t.id}>{toOptionLabel(t)}</option>)}
            </datalist>
            <datalist id="topics">
                {topics.map(t => <option key={t.id}>{toOptionLabel(t)}</option>)}
            </datalist>
        </>
        <form method="post">
            <div>
                <label htmlFor="praiser">Praiser: </label>
                {' '}
                <input value={praiser} onChange={e => setPraiser(e.target.value)} readOnly={disabled} name="praiser" required list="people" />
            </div>
            <div>
                <label htmlFor="praisee">Praisee: </label>
                {' '}
                <input value={praisee} onChange={e => setPraisee(e.target.value)} readOnly={disabled} name="praisee" required list="people" />
            </div>
            <div>
                <label htmlFor="title">Title:</label>
                {' '}
                <input value={title} onChange={e => setTitle(e.target.value)} readOnly={disabled} name="title" list="titles" />
            </div>
            <div>
                <label htmlFor="topic">Topic:</label>
                {' '}
                <input value={topic} onChange={e => setTopic(e.target.value)} readOnly={disabled} name="topic" list="topics" />
            </div>
            <div>
                <label htmlFor="source">Source: </label>
                <input value={praiseEditing?.source} readOnly={disabled} name="source" required />
            </div>

            {!disabled && <div className="buttons">
                <hr />
                {praiseEditing && deleteLink && <button
                    type="button"
                    name="is-deleting"
                    onClick={() => window.confirm(`Delete praise ${praiseEditing.id}?`) && router.push(deleteLink)}
                >
                    Delete
                </button>}
                <button type="submit">Submit</button>
            </div>}
        </form>
    </>
}