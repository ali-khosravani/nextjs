import LinkBackToHome from '@/com/ui/BackToHome/Link';
import Head from 'next/head';

export default function Support() {
  return (
    <>
      <Head>
        <title>
          پضتیبانی رسمی محصولات
        </title>
      </Head>
      <div className='vh-100'>
        <div className='w-100 h-25 d-flex justify-content-center align-items-center bg-dark'>
          <div className=''>
            <h1 className='text-white m-0 p-0'>شکوفالند</h1>
            <p className='m-2 p-0 text-white'>راهکاری جامع برای کنترل دسترسی در سازمان شما</p>
          </div>
        </div>
        <div className='container my-5'>
          <div className="row">
            <div className="col-12 col-lg-4">
              <h1>
                پشتیبانی سخت افزار
              </h1>
            </div>
            <div className="col-12 col-lg-4">
              <h1>
                پشتیبانی نرم افزار
              </h1>
            </div>
            <div className="col-12 col-lg-4">
              <h1>
                خدمات گارانتی
              </h1>
            </div>
          </div>
        </div>
        <div className="my-2">
          <LinkBackToHome />
        </div>
      </div>
    </>
  )
}

