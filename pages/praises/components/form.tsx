import { Praises } from "../../../database/entities/Praises";
import { SelectableOption } from "../../../types";

interface Props {
    praiseEditing?: Praises;
    people: SelectableOption[];
    titles: SelectableOption[];
    topics: SelectableOption[];
    disabled: boolean;
}

export default function PraiseForm({
    praiseEditing,
    people,
    titles,
    topics,
    disabled,
}: Props) {
    return <>
        <datalist id="people">
            {people.map(p => <option key={p.id}>{p.id}. {p.name}</option>)}
        </datalist>
        <datalist id="titles">
            {titles.map(t => <option key={t.id}>{t.id}. {t.name}</option>)}
        </datalist>
        <datalist id="topics">
            {topics.map(t => <option key={t.id}>{t.id}. {t.name}</option>)}
        </datalist>
        <form method="post">
            <div>
                <label htmlFor="praiser">Praiser: </label>
                {' '}
                <input readOnly={disabled} name="praiser" required list="people" />
            </div>
            <div>
                <label htmlFor="praisee">Praisee: </label>
                {' '}
                <input readOnly={disabled} name="praisee" required list="people" />
            </div>
            <div>
                <label htmlFor="title">Title:</label>
                {' '}
                <input readOnly={disabled} name="title" list="titles" />
            </div>
            <div>
                <label htmlFor="topic">Topic:</label>
                {' '}
                <input readOnly={disabled} name="topic" list="topics" />
            </div>
            <div>
                <label htmlFor="source">Source: </label>
                <input readOnly={disabled} name="source" required />
            </div>

            {!disabled && <div className="buttons">
                {praiseEditing && <button type="button" name="is-deleting">Delete</button>}
                <button type="submit">Submit</button>
            </div>}
        </form>
    </>
}