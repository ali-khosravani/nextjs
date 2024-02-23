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
        <div className='bg-light border rounded d-flex align-items-center' style={{ height: '500px', width: '400px' }}>
          <div className='my-5'>
            <Image src={Logo} height={100} width={400} priority alt='Logo' />
            <h1>شکوفالند</h1>
          </div>
        </div>
        <div className='bg-light border rounded' style={{ height: '500px', width: '400px' }}>
          <form action="">
            <div className='w-100 h-25 text-center my-5'>
              <h1>شکوفالند</h1>
            </div>
            <div className='w-100 my-5'>
              <div className='container'>
                <h3 className='text-start px-5'>نام کاربری</h3>
                <input type="text" placeholder='نام کاربری' className='text-start px-2' />
              </div>
              <div className='container'>
                <h3 className='text-start px-5'>رمز عبور</h3>
                <input type="password" placeholder='رمز عبور' className='text-start px-2' />
              </div>
            </div>
            <div className="form-check text-start mx-5">
              <input className="form-check-input" type="checkbox" checked value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault" />
              من را به خاطر بسپار
            </div>
            <div className='my-5 d-flex justify-content-center mx-5'>
              <input type="submit" value='ورود' className='w-100 btn btn-primary' />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

