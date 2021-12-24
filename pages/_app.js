import React from 'react';
import Head from 'next/head';
import '../styles/styles.css';
import "@fortawesome/fontawesome-free/js/all.js";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="viewport-fit=cover" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <link rel="icon" type="image/png" href="../public/images/favicon.png"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp