import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import Logo from '@/public/Shekofa-land-logo.svg'
import Link from 'next/link'

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
        <div className='bg-light border rounded d-none d-md-flex align-items-center' style={{ height: '500px', width: '400px' }}>
          <div className='my-3'>
            <Image src={Logo} height={100} width={400} priority alt='Logo' />
            <h1>شکوفالند</h1>
          </div>
        </div>
        <div className='bg-light border rounded' style={{ height: '500px', width: '400px' }}>
          <form action="" id='LoginForm'>
            <div className='w-100 h-25 text-center my-5'>
              <h1>شکوفالند</h1>
            </div>
            <div className='w-100 justify-content-center my-3 px-5'>              
                <div className='h4 text-start my-3'>نام کاربری</div>
                <input type="text" placeholder='نام کاربری' className='text-start px-5 w-100 form-control' />              
                <div className='h4 text-start my-3'>رمز عبور</div>
                <input type="password" placeholder='رمز عبور' className='text-start px-5 w-100 form-control' />             
            </div>
            <div className="form-check text-start mx-5">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault" />
              من را به خاطر بسپار
            </div>
            <div className='my-3 d-flex justify-content-center mx-5'>
              <input type="submit" value='ورود' className='w-100 btn btn-primary' />
            </div>
            <div className='d-flex justify-content-around container w-75'>
              <p className='p-0 m-0'><a href="/Rule">قوانین سایت</a></p>
              <p className='p-0 m-0'><a href="/Privacy">حریم خصوصی</a></p>
            </div>
          </form>
          <p className='text-start mt-2 px-5'>برای ثبت نام <Link href={'/users/Register'} style={{color:'blue'}}>اینجا </Link>را کلیک کنید</p>
        </div>
      </div>
    </>
  )
}

