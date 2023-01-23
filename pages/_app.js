import React from "react";
import "../styles/styles.css";
import "../styles/nav.css";
import "../styles/global.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { Lato } from "@next/font/google";
import localFont from "@next/font/local";

const lato = Lato({
    subsets: ['latin'],
    weight: ['100','300','400','700','900']
})

const marketDeco = localFont({
    src: "../public/Market_Deco.ttf",
    variable: "--font-market-deco"
})

function MyApp({ Component, pageProps }) {
    return (
        <main className={`${lato.className} ${marketDeco.variable}`}>
            <Component {...pageProps} />
        </main>
    )
}

export default MyApp;