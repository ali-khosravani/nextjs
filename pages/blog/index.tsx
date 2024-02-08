import React from 'react'
import Image from 'next/image'

import ComingSoon from '@/public/images/coming-soon.png'
import 'bootstrap/dist/css/bootstrap.rtl.css'

const Blog = () => {
  return (
      <div className='d-flex justify-content-center align-items-center vh-100'>
        <Image  src={ComingSoon} alt=''/>
      </div>
  )
}

