import 'bootstrap/dist/css/bootstrap.rtl.css'
import 'app/globals.css';

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}
export default MyApp;