import React from 'react'

import Image from 'next/image'

import ComingSoon from '@/public/images/coming-soon.png'
import 'bootstrap/dist/css/bootstrap.rtl.css'

const Contact = () => {
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
    <div className=''>
      <Image src={ComingSoon} alt='' />
      <p className='text-center'><a href="/">Back to home</a></p>
    </div>
  </div>
  )
}

export default Contact
