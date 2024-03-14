import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import SupportImage from '@/public/images/Contract/support.jpg';
import ContractSoftware from '@/public/images/Contract/support-technical-support.jpg';
import ContractHardware from '@/public/images/Contract/shutterstock_378586735.jpg';
import MoreButton from '@/com/ui/Buttons/MoreButton';
import LinkBackToHome from '@/com/ui/BackToHome/Link';

export default function Contract(props: any) {
    console.log(props)
    return (
        <>
            <Head>
                <title>انواع قرارداد پشتیبانی</title>
                <meta name='description' content=' انواع قرارداد پشتیبانی که به صورت سالانه بوده و مشتریان می توانند از خدمات این پشتیبانی در طول سال استفاده کنند' />
                <meta name='keywords' content='Access Control , حضور و غیاب,Attendance,کنترل تردد' />
            </Head>
            <div className='vh-100'>
                <div className='h-25 d-flex justify-content-center align-items-center bg-dark'>
                    <div className=''>
                        <h1 className='text-white m-0 p-0'>شکوفالند</h1>
                        <p className='m-2 p-0 text-white'>راهکاری جامع برای کنترل دسترسی در سازمان شما</p>
                    </div>
                </div>
                <div className='container'>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="card my-3">
                                <Image src={ContractSoftware} className="card-img-top" alt="..." priority height={400} />
                                <div className="card-body">
                                    <h5 className="card-title">انواع قرارداد فروش کالا و تجهیزات سخت افزاری</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <MoreButton />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="card my-3">
                                <Image src={ContractHardware} className="card-img-top" alt="..." priority height={400} />
                                <div className="card-body">
                                    <h5 className="card-title">انواع قرارداد فروش نرم افزار</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <MoreButton />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="card my-3">
                                <Image src={SupportImage} className="card-img-top" alt="..." priority height={400} />
                                <div className="card-body">
                                    <h5 className="card-title">انواع قرارداد پشتیبانی نرم افزار</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <MoreButton />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-3">
                        <LinkBackToHome />
                    </div>
                </div>
            </div>
        </>
    )
}
