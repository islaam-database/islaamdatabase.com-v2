interface Props {
    title: string;
    children: JSX.Element | JSX.Element[];
}
export const DeletePage = (p: Props) => <>
    <h1>{p.title}</h1>
    <hr />
    {p.children}
    <form method="post">
        <button type="submit">Delete</button>
    </form>
</>;