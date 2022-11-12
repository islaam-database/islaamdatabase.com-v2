import { useState } from "react"
import { People } from "../../database/entities/People";
import { Titles } from "../../database/entities/Titles";
import { Topics } from "../../database/entities/Topics";
import { IslaamDatabase } from "../../database/IslaamDatabase";
import { toJson } from "../utils";

interface Props {
    people: People[]
    titles: Titles[],
    topics: Topics[],
}

export default function ({ people, titles, topics }: Props) {
    const [praiserId, setPraiserId] = useState("");
    const [praiseeId, setPraiseeId] = useState("");
    const [source, setSource] = useState("");
    return <>
        <datalist id="people">
            {people.map(p => <option key={p.id} value={`${p.id}. ${p.name}`} />)}
        </datalist>
        <h1>New praise</h1>
        <hr />
        <form>
            <div>
                <label htmlFor="praiser">Praiser: </label>
                {' '}
                <input
                    id="praiser"
                    required
                    onChange={e => setPraiserId(e.target.value)}
                    value={praiserId}
                    list="people"
                />
            </div>
            <div>
                <label htmlFor="praisee">Praisee: </label>
                {' '}
                <input
                    id="praisee"
                    required
                    onChange={e => setPraiseeId(e.target.value)}
                    value={praiseeId}
                    list="people"
                />
            </div>
            <div>
                <label htmlFor="source">Source: </label>
                <input
                    value={source}
                    required
                    onChange={e => setSource(e.target.value)}
                />
            </div>
        </form>
    </>
}

export const getServerSideProps = async () => {
    const people = toJson(
        await IslaamDatabase.People.then(x => x.find())
    );
    const titles = toJson(
        await IslaamDatabase.Titles.then(t => t.find())
    );
    const topics = toJson(
        await IslaamDatabase.Topics.then(t => t.find())
    );
    return {
        props: { people, titles, topics } as Props
    }
}