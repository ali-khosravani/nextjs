import React from 'react'

import Image from 'next/image'

import ComingSoon from '@/public/images/coming-soon.png'
import 'bootstrap/dist/css/bootstrap.rtl.css'
import LinkBackToHome from '@/com/ui/BackToHome/Link'

const Career = () => {
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
    <div className=''>
      <Image src={ComingSoon} alt='' />
     <LinkBackToHome/>
    </div>
  </div>
  )
}

export default Career
