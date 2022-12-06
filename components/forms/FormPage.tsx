import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
    title: string;
    formControls: JSX.Element;
    canEdit?: boolean;
    canDelete?: boolean;
}
export const FormPage = (p: Props) => {
    const { id } = useRouter().query;
    return <>
        <h1>{p.title}</h1>
        <hr />
        <form method="post">
            {p.formControls}
            <div>
                {p.canEdit && <button>Submit</button>}
                {p.canDelete && <Link href={`${id}/delete`}>Delete</Link>}
            </div>
        </form>
    </>;
};
