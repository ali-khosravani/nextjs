import React from 'react'
import Link from 'next/link'


const TopFooter = () => {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className='col-lg-2 col-6'>
          <div className='m-1 p-1'>
            <h4 className='fw-bold text-start'>خدمات مشتریان</h4>
            <ul className='text-start'>
              <li className="pt-2"><Link href="/attendance">کنترل تردد</Link></li>
              <li className="pt-2"><Link href="/hardware">سخت افزار</Link></li>
              <li className="pt-2"><Link href="/software">نرم افزار</Link></li>
              <li className="pt-2"><Link href="/">بازرسی</Link></li>
              <li className="pt-2"><Link href="/">برد کنترل</Link></li>
            </ul>
          </div>

        </div>
        <div className='col-lg-2 col-6'>
          <div className='m-1 p-1'>
            <h4 className='fw-bold text-start'>راهنمای استفاده</h4>
            <ul className='text-start'>
              <li className="pt-2"><Link href="/support">خدمات پشتیبانی</Link></li>
              <li className="pt-2"><Link href="/learn">آموزش</Link></li>
              <li className="pt-2"><Link href="/contract">قرارداد</Link></li>
              <li className="pt-2"><Link href="/guarantee">ضمانت کالا</Link></li>
            </ul>
          </div>
        </div>
        <div className='col-lg-2 col-6'>
          <div className='m-1 p-1'>
            <h4 className='fw-bold text-start'>دسترسی سریع</h4>
            <ul className='text-start'>
              <li className="pt-2"><Link href="/Rule">قوانین</Link></li>
              <li className="pt-2"><Link href="/About">درباره ما</Link></li>
              <li className="pt-2"><Link href="/Contact">ارتباط با ما</Link></li>
              <li className="pt-2"><Link href="/Careers">همکاری با ما</Link></li>
              <li className="pt-2"><Link href="/Privacy">حریم خصوصی</Link></li>
              <li className="pt-2"><Link href="/Faq">سوالات متداول</Link></li>
            </ul>
          </div>
        </div>

        <div className='col-lg-2 col-6'>
          <div className='m-1 p-1'>
            <h4 className='fw-bold text-start'>با شکوفالند</h4>
            <ul className='text-start'>
              <li className="pt-2"><Link href="/blog/posts">آخرین مقالات</Link></li>
              <li className="pt-2"><Link href="/#"></Link>پیگیری سفارشات</li>
              <li className="pt-2"><Link href="/#">گزارش خطا</Link></li>           
              <li className="pt-2"><Link href="/#">سفارشی سازی</Link></li>           
            </ul>
          </div>
        </div>

        <div className='col-lg-4 col-12'>
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