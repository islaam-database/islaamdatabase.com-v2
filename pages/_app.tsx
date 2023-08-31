import type { AppProps } from "next/app";
import "reflect-metadata";
import { Layout } from "../Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
