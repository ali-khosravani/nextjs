import React from 'react'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.rtl.css'

import LinkBackToHome from '@/com/ui/BackToHome/Link'
import ComingSoon from '@/public/images/coming-soon.png'

const CommingSoonImage = () => {
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
      <div className=''>
        <Image src={ComingSoon} alt='' className='img-fluid' />
        <LinkBackToHome />
      </div>
    </div>
  )
}

export default CommingSoonImage
