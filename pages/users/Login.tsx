import Head from 'next/head'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.rtl.css'
export default function Login() {
  return (
    <>
      <Head>
        <title>
          صفحه ورود
        </title>
      </Head>
      <div className='d-flex justify-content-center vh-100 align-items-center'>
        <div className='bg-light ' style={{ height: '600px', width: '500px' }}>
          <form action="">
            <div className='w-100 h-25 text-center my-5'>
              <h2>فرم ورود</h2>
            </div>
            <div className='w-100 my-5'>
              <h3 className='text-start px-5'>نام کاربری</h3>
              <input type="text" placeholder='نام کاربری' className='text-start px-2'  />
              <h3 className='text-start px-5'>رمز عبور</h3>
              <input type="text" placeholder='رمز عبور' className='text-start px-2' />
            </div>
            <div className="form-check text-start">
              <input className="form-check-input" type="checkbox" checked value="" id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  من را به خاطر بسپار
                </label>
                <div className='my-5 align-items-center '>
                  <input type="submit" value='ورود' />
                </div>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}

