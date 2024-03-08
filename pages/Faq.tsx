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
            <h3 className='m-0 p-0 fw-bold'>دسته بندی سوالات</h3>
            <div className="my-3">
              <div className="row d-flex justify-content-around">
                <div className="col-lg-3">
                  <h5 className='text-black'>ثبت نام</h5>
                </div>
                <div className="col-lg-3">
                 <h5 className='text-black'> ثبت سفارش</h5>
                  </div>
                <div className="col-lg-3">
                 <h5 className='text-black'> پشتیبانی محصولات</h5>
                  </div>
                <div className="col-lg-3">
                  <h5 className='text-black'>درخواست مشاوره</h5>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  چگونه می توانیم در سایت ثبت نام کنیم؟
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">برای ثبت نام می توانید از منوی سایت و گزینه ثبت نام را انتخاب کنید</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  چگونه می توانیم سفارش خود را ثبت کنیم؟
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">برای ثبت سفارش و مشاوره لطفاً با مشاورین ما درتماس باشید شماره تماس 09127622665</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  برای ثبت قرارداد پشتیبانی چه مراحلی را باید انجام دهیم؟
                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">مدت قراردادهای پشتیبانی یک سال و دو سال می باشد که در سه مدل نوع یک و نوع دو و نوع سه قابل تنظیم می باشد. </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='my-5'>
            <p>پاسخ سوال خود را پیدا نکردید؟ 09127622665<i className="bi bi-telephone-fill px-1"></i></p>
          </div>
        </div>
      </div>
    </>
  )
}


