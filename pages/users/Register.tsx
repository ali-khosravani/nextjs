import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import Logo from '@/public/Shekofa-land-logo.svg'

export default function Login() {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <title>
          صفحه ورود
        </title>
      </Head>
      <div className='d-flex justify-content-center vh-100 align-items-center'>
        <div className='bg-light border rounded d-none d-md-flex align-items-center justify-content-center' style={{ height: '700px', width: '400px' }}>
          <div className='m-0'>
            <Image src={Logo} height={200} width={400} priority alt='Logo' />
            <h1 className='m-0 fw-bold'>شکوفالند</h1>
          </div>
        </div>
        <div className='bg-light border rounded' style={{ height: '700px', width: '500px' }}>
          <form action="">
            <div className='w-100 h-25 text-center my-5'>
              <h1 className='fw-bold'>شکوفالند</h1>
            </div>
            <div className='w-100 justify-content-center my-3 px-5'>
              <div className='h4 text-start my-1'>ایمیل</div>
              <input type="text" placeholder='ایمیل خود را وارد کنید' className='text-start px-5 w-100 form-control' />
              <div className='h4 text-start my-1'>شماره موبایل</div>
              <input type="password" placeholder='موبایل خود را وارد کنید' className='text-start px-5 w-100 form-control' />
            </div>
            <div className='w-100 justify-content-center my-3 px-5'>
              <div className='h4 text-start my-1'>نام کاربری</div>
              <input type="text" placeholder='نام کاربری خود را وارد کنید' className='text-start px-5 w-100 form-control' />
              <div className='h4 text-start my-1'>رمز عبور</div>
              <input type="password" placeholder='رمز خود را وارد کنید' className='text-start px-5 w-100 form-control' />
              <div className='h4 text-start my-1'>تکرار رمز عبور</div>
              <input type="password" placeholder='تکرار رمز خود را وارد کنید' className='text-start px-5 w-100 form-control' />
            </div>
            <div className="form-check text-start mx-5">
              <input className="form-check-input" type="checkbox" checked value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault" />
              من را به خاطر بسپار
            </div>
            <div className="form-check text-start mx-5">
              <input className="form-check-input" type="checkbox" value="" id="Accept" />
              <label className="form-check-label" htmlFor="Accept" />
              قوانین سایت را می پذیرم
            </div>
            <div className='my-1 d-flex justify-content-center mx-5'>
              <input type="submit" value='ثبت نام' className='w-100 btn btn-primary' />
            </div>
            <div className='d-flex justify-content-around container w-50'>
              <p className='p-0 m-0'><a href="/Rule">قوانین سایت</a></p>
              <p className='p-0 m-0'><a href="/Privacy">حریم خصوصی</a></p>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}

