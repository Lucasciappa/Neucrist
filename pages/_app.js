import React from 'react';
import '../styles/styles.css';
import "../styles/nav.css";
import "../styles/global.css";
import "@fortawesome/fontawesome-free/js/all.js";

function MyApp({ Component, pageProps }) {
    return (
            <Component {...pageProps} />
    )
}

export default MyApp