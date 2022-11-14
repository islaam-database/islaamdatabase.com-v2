import React from "react";

interface ParamPageProps {
    params: {
        id: string;
    };
    searchParams: {
        id: string;
    };
}

export default ({ params }: ParamPageProps) => {
    return <>
        <h1>Praise</h1>
        {JSON.stringify(params)}
    </>;
};
