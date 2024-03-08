import React from 'react'
import Head from 'next/head'
import CommingSoonPage from '@/com/ui/CommingSoon/CommingSoon'


export default function Contract(props:any) {
    console.log(props)
    return (
        <>
            <Head>
                <title>انواع قرارداد پشتیبانی</title>
                <meta name='description' content=' انواع قرارداد پشتیبانی که به صورت سالانه بوده و مشتریان می توانند از خدمات این پشتیبانی در طول سال استفاده کنند' />
                <meta name='keywords' content='Access Control , حضور و غیاب,Attendance,کنترل تردد' />
            </Head>
            < CommingSoonPage />
        </>
    )
}
 