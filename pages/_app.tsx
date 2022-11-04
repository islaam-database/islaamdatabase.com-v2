import type { AppProps } from 'next/app'
import { Layout } from "./Layout";
import "reflect-metadata"
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>;
}