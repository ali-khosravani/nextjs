import 'bootstrap/dist/css/bootstrap.rtl.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import 'app/globals.css';
import Head from 'next/head';

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1'/>            
        </Head>
            <Component {...pageProps} />
        </>
    )
}
export default MyApp;