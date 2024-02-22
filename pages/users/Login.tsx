import Head from 'next/head'
import React from 'react'
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
        <div className='bg-light border rounded' style={{ height: '600px', width: '500px' }}>
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
            <div className="form-check text-start">
              <input className="form-check-input" type="checkbox" checked value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                من را به خاطر بسپار
              </label>
              <div className='my-5 align-items-center justify-content-center'>
                <input type="submit" value='ورود' />
              </div>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}

