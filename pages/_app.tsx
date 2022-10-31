import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>;
}

const Layout = ({ children }: { children: JSX.Element }) => {
  return <div id="layout" >
    <Navbar />
    <div style={{ padding: "0 1rem" }}>
      {children}
    </div>
    <Footer />
  </div >
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <div id="navbar" onClick={() => setIsOpen(!isOpen)}>
    {isOpen ? "open" : "closed"}
    <h1>Navbar</h1>
  </div>
}

const Footer = () => <div id="footer">
  <h1>Footer</h1>
</div>;