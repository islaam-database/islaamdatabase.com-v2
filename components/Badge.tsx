export const Badge = (p: { children: JSX.Element }) => (
    <div
        style={{
            display: "inline-block",
            padding: ".3rem .5rem",
            backgroundColor: "lightgray",
            borderRadius: "10rem",
            textAlign: "center",
        }}
    >
        {p.children}
    </div>
);
