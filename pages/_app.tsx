import 'app/globals.css';
import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.rtl.css'

function MyApp({ Component, pageProps }: AppProps) {

    return (
        <>
            <Component {...pageProps} />
        </>
    )

}
export default MyApp;