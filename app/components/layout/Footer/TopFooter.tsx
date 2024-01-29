import React from 'react'

const TopFooter = () => {
  return (
    <>
      <footer>
        <div className='container-fluid'>
          <div className="row">
          <div className='w-100 d-flex justify-content-between border border-3'>
            <div className='col-lg-3 col-md-6 col-sm-12 col-12 p-3 m-2'>
              <div>
                <h4>خدمات مشتریان</h4>
                <ul>
                  <li className="pt-2"><a href="/">کنترل تردد</a></li>
                  <li className="pt-2"><a href="/">سخت افزار</a></li>
                  <li className="pt-2"><a href="/">نرم افزار</a></li>
                  <li className="pt-2"><a href="/">بازرسی</a></li>
                  <li className="pt-2"><a href="/">برد کنترل</a></li>
                </ul>
              </div>

            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 col-12 p-3 m-2'>
              <div>               
                <h4>راهنمای استفاده</h4>
                <ul>
                  <li className="pt-2"><a href="/">خدمات پشتیبانی</a></li>
                  <li className="pt-2"><a href="/">آموزش</a></li>
                  <li className="pt-2"><a href="/">انتقادات و پیشنهادات</a></li>
                  <li className="pt-2"><a href="/">خدمات ضمانت کالا</a></li>
                  <li className="pt-2"><a href="/"> </a></li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 col-12 p-3 m-2'>
              <div>
              <h4>دسترسی سریع</h4>
                <ul>
                  <li className="pt-2"><a href="/Rule">قوانین</a></li>
                  <li className="pt-2"><a href="/About">درباره ما</a></li>
                  <li className="pt-2"><a href="/Contact">ارتباط با ما</a></li>
                  <li className="pt-2"><a href="/">همکاری با ما</a></li>
                  <li className="pt-2"><a href="/Privacy">حریم خصوصی</a></li>
                  <li className="pt-2"><a href="/Faq">سوالات متداول</a></li>
                </ul>
              </div>

            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 col-12 p-3 m-2'>
              <div className='p-2 m-1'>
                <p>شماره پشتیبانی:09127622665</p>
                <p>پشتیبانی ساعات اداری از 8:30 الی 17 عصر</p>
              </div>
              <div className='m-1 p-2'>
                <h5>ما را در شبکه های اجتماعی دنبال کنید</h5>                
              </div>
              <div className='m-1 p-2'>
                <h5>عضویت در خبر نامه</h5>
              </div>
              <div className='m-1 p-2'>
                <h5>مجوزها</h5>
              </div>
            </div>
          </div>
          </div>
        </div>

      </footer>
    </>
  )
}

export default TopFooter