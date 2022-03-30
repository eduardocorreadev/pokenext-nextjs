import Head from "next/head";

import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({children}) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/images/favicon.ico"></link>
                
                <title>PokeNext</title>
            </Head>

            <Navbar />
                <main className="main-container">{children}</main>
            <Footer />
        </>
    )
}