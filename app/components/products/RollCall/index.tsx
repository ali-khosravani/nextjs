import React from 'react'
import './styled.css'
import Order from '../Order'

const RollCall = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="container">
              <h2 className='text-start fw-bold'>
                نرم افزار حضور و غیاب
              </h2>
              <p className='text-start py-3'>آیا هنوز هم از سیستم دستی برای ردیابی حضور و غیاب کارکنان شرکت خود استفاده می‌کنید؟ در این صورت، زمان آن فرا رسیده است که نرم افزار ردیابی حضور و غیاب را جایگزین آن کرده تا بتوانید به راحتی حضور و غیاب کارکنانتان را ردیابی کنید و زمان بیشتری را به سایر جنبه های کسب‌وکار خود اختصاص دهید.</p>
            </div>
            <div className='ul-box py-3'>
              <h5 className='text-start fw-bold py-3'>برخی از قابلیت ها و امکانات نرم افزار</h5>
              <ul className='text-start'>
                <li className='li-Network'><i className="bi bi-check-lg"></i> اضافه کاری اول و آخر وقت امکان جدا سازی روز کاری و غیر کاری زمان قابل اغماض و شب کاری</li>
                <li className='li-Network'><i className="bi bi-check-lg"></i>امکان تعریف گروههای کاری با دوره تناوب تا ۳۱ روز با ترکیب شیفتهای مختلف</li>
                <li className='li-Network'><i className="bi bi-check-lg"></i>تعیین حداقل و حد اکثر اضافه کار اول وقت آخر وقت</li>
                <li className='li-Network'><i className="bi bi-check-lg"></i>اجازه ویرایش در کلیه پارامترهای ورود ورود و خروج پرسنل مانند ساعات کارکرد اضافه کاری تعطیل کاری</li>
                <li className='li-Network'><i className="bi bi-check-lg"></i>تعریف اجازه اضافه کار اول وقت و آخر وقت به صورت جداگانه برای هر پرسنل </li>
                <li className='li-Network'><i className="bi bi-check-lg"></i>تعریف مرخصی های مختلف روزانه استفاده از آنها به همراه نمایش تعداد روز رفته و مانده و سقف مرخصی .</li>
                <li className='li-Network'><i className="bi bi-check-lg"></i>کنترل و اصلاح ورود و خروج های ناقص محاسبه کار کرد مدت حضور اضافه کاری مدت تاخیر کسر کار و …..</li>
                <li className='li-Network'><i className="bi bi-check-lg"></i>محاسبه مدت حضور فیزیکی و اضافه کار به تفکیک قسمت اداری جهت پرداخت کارانه و افزایش تولید. .</li>
                <li className='li-Network'><i className="bi bi-check-lg"></i> تعریف بدون محدودیت تبدیل در پارامترهای ورود و خروج پرسنل بر روی هر شیفت . .</li>
                <li className='li-Network'><i className="bi bi-check-lg"></i>ارسال پیام برای دستگاه جهت نمایش هنگام کارت زدن پرسنل (برای هزار نفر)</li>
                <li className='li-Network'><i className="bi bi-check-lg"></i>انواع گزارشهای روزانه فردی انتخابی و … مربوط به ورود و خروج پرسنل بر اساس محل خدمت شماره کارت .</li>
                <li className='li-Network'><i className="bi bi-check-lg"></i> گزارشات متنوع با امکان جابجایی و ذخیره سازی ستونهای گزارش بطور اتوماتیک .</li>
                <li className='li-Network'><i className="bi bi-check-lg"></i>گزارشگیری بر اساس شرایط تمامی فیلدهای موجود در گزارشات</li>
                <li className='li-Network'><i className="bi bi-check-lg"></i>امکان تعویض گروه کاری افراد از یک تاریخ به بعد و نگهداری محاسبات قبل از تغییرات شیفت و تعمیم به افراد انتخابی دیگر</li>
                <li className='li-Network'><i className="bi bi-check-lg"></i>امکان تعریف شیفتهایی که ساعت ورود و خروج آنها در دو روز متوالی قرار دارد. (۲۴ ساعت کار ۲۴ ساعت استراحت ۲۴ ساعت کار ۴۸ ساعت استراحت )</li>
                <li className='li-Network'><i className="bi bi-check-lg"></i> امکان گروه بندی برای انواع تیمهای کاری با ورود خروج مختلف.</li>
                <li className='li-Network'><i className="bi bi-check-lg"></i>دریافت و بازیابی اطلاعات ساعت حضور و غیاب توسط کامپیوتر</li>
                <li className='li-Network'><i className="bi bi-check-lg"></i>ارائه گزارش پرسنل ،حاضر و غایب ، مرخصی ساعتی ٫ ماموریت ساعتی و پرسنل سازمان که کارت ناقص زده اند</li>
              </ul>
            </div>

          </div>
        </div>
        <Order />
      </div>
    </>
  )
}

export default RollCall