import Document, { Head, Main, NextScript, Html } from "next/document";
import React, { Component } from 'react'

export default class MyDocument extends Component {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <Html lang="fa" dir="rtl">
                <Head>
                    
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
