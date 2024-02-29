import Head from 'next/head'
import React from 'react'
export default function Faq() {
  return (
    <>
      <Head>
        <title>
          سوالات متداول
        </title>
      </Head>

      <div className='vh-100'>
        <div className='h-25 d-flex justify-content-center align-items-center bg-dark'>
          <div className=''>
            <h1 className='text-white m-0 p-0'>شکوفالند</h1>
            <p className='m-2 p-0 text-white'>راهکاری جامع برای کنترل دسترسی در سازمان شما</p>
          </div>
        </div>
        <div className='py-3 d-flex justify-content-center align-items-center bg-light'>
          <div className='container'>
            <h3 className='m-0 p-0'>دسته بندی سوالات</h3>
            <div className="my-3">
              <div className="row d-flex justify-content-around">
                <div className="col-lg-3">ثبت نام</div>
                <div className="col-lg-3">ثبت سفارش</div>
                <div className="col-lg-3">پشتیبانی محصولات</div>
                <div className="col-lg-3">درخواست مشاوره</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
       
        </div>
        <div className='container'>
          <div>
            <p>پاسخ سوال خود را پیدا نکردید؟ <i className="bi bi-telephone-fill"></i>09127622665</p>         
          </div>
        </div>
      </div>
    </>
  )
}


