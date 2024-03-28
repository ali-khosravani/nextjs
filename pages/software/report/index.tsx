import LinkBackToHome from '@/com/ui/BackToHome/Link'
import Head from 'next/head'

export default function Guarantee() {
  return (
    <>
      <Head>
        <title>شرایط ضمانت</title>
      </Head>
      <div className='vh-100'>
        <div className='w-100 h-25 d-flex justify-content-center align-items-center bg-dark'>
          <div className=''>
            <h1 className='text-white m-0 p-0'>شکوفالند</h1>
            <p className='m-2 p-0 text-white'>راهکاری جامع برای کنترل دسترسی در سازمان شما</p>
          </div>
        </div>
        <div className="container my-3">
          <div className="row">
            <div className="col-12">
              <h1>
                گزارش خطا و ارائه بهبود دهنده نرم افزار
              </h1>
            </div>
          </div>
        </div>
        <div className='my-3'>
          <LinkBackToHome />
        </div>
      </div>
    </>
  )
}
