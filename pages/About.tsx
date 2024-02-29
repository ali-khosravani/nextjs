import Head from 'next/head';
import Image from 'next/image'
import React from 'react'
import AboutUs from '@/public/images/About/About-US.webp'
import BackToHome from '@/com/ui/BackToHome/Link'
import OurTeam from '@/com/team/OurTeam';
export default function About() {

  return (
    <>
      <Head>
        <title>درباره ما</title>
      </Head>
      <div className='vh-100'>
        <div className='w-100 h-25 d-flex justify-content-center align-items-center bg-dark'>
          <div className=''>
            <h1 className='text-white m-0 p-0'>شکوفالند</h1>
            <p className='m-2 p-0 text-white'>راهکاری جامع برای کنترل دسترسی در سازمان شما</p>
          </div>
        </div>
        <div className='container'>
          <div className='row my-5 px-1 d-flex justify-content-around'>
            <div className='col-12 col-lg-6'>
              <h2 className='my-2 text-center'>شکوفالند</h2>
              <p className='text-start'>شرکت <span className='fw-bold'>پوشش کالا پویان و پارسا</span> با نام تجاری <span className='fw-bold'>شکوفالند</span> در تاریخ 28-12-1399 در تهران ثبت و شروع به فعالیت کرد</p>
              <p className='text-start'>عمده فعالیت شرکت در زمینه تجهیزات کنترل دسترسی می باشد</p>
              <p className='text-start'>نرم افزار های مدیریت پارکینگ و مدیریت سلف غذاخوری و مدیریت مراجعین و مهمان ها به سازمان شما از مهمترین فعالیت های شکوفالند می باشد.</p>
            </div>
            <div className='col-12 col-lg-6 d-none d-sm-flex'>
              <Image src={AboutUs} alt='About US' priority />
            </div>
          </div>
        </div>
        <div className="container my-5">
          <OurTeam />
        </div>
        <div className='container my-5'>
          <BackToHome />
        </div>
        <div className="my-5" style={{ height: '10px' }}></div>
      </div>
    </>
  )
}