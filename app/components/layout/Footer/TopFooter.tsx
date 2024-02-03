import React from 'react'
import Link from 'next/link'


const TopFooter = () => {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
          <div className='m-1 p-1'>
            <h4>خدمات مشتریان</h4>
            <ul>
              <li className="pt-2"><Link href="/attendance">کنترل تردد</Link></li>
              <li className="pt-2"><Link href="/hardware">سخت افزار</Link></li>
              <li className="pt-2"><Link href="/software">نرم افزار</Link></li>
              <li className="pt-2"><a href="/">بازرسی</a></li>
              <li className="pt-2"><a href="/">برد کنترل</a></li>
            </ul>
          </div>

        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
          <div className='m-1 p-1'>
            <h4>راهنمای استفاده</h4>
            <ul>
              <li className="pt-2"><Link href="/support">خدمات پشتیبانی</Link></li>
              <li className="pt-2"><Link href="/learn">آموزش</Link></li>
              <li className="pt-2"><Link href="/">انتقادات و پیشنهادات</Link></li>
              <li className="pt-2"><Link href="/guarantee">خدمات ضمانت کالا</Link></li>
              <li className="pt-2"><a href="/"> </a></li>
            </ul>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
          <div className='m-1 p-1'>
            <h4>دسترسی سریع</h4>
            <ul>
              <li className="pt-2"><Link href="/Rule">قوانین</Link></li>
              <li className="pt-2"><Link href="/About">درباره ما</Link></li>
              <li className="pt-2"><Link href="/Contact">ارتباط با ما</Link></li>
              <li className="pt-2"><Link href="/Careers">همکاری با ما</Link></li>
              <li className="pt-2"><Link href="/Privacy">حریم خصوصی</Link></li>
              <li className="pt-2"><Link href="/Faq">سوالات متداول</Link></li>
            </ul>
          </div>

        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
          <div className='p-2 m-1'>
            <p>شماره پشتیبانی:09127622665</p>
            <p>پشتیبانی ساعات اداری از 8:30 الی 17 عصر</p>
          </div>
          <div className='m-1 p-2'>
            <form action="">
              <h5>عضویت در خبر نامه</h5>
              <input type="text" placeholder='وارد کردن ایمیل' className='m-2' />
              <input type="submit" value={'ثبت'} />
            </form>
          </div>
          <div className='m-1 p-2'>
            <h5>مجوزها</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopFooter