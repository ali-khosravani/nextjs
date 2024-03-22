import React from 'react'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.rtl.css'

import LinkBackToHome from '@/com/ui/BackToHome/Link'
import ComingSoon from '@/public/images/coming-soon.png'

const ComingSoonPage = () => {
  return (
    <>
      <div className='vh-100 d-flex justify-content-center align-items-center'>
        <div className=''>
          <Image
            src={ComingSoon}
            width={0}
            height={0}
            placeholder='blur'
            blurDataURL='@/public/images/coming-soon.png'
            alt='Comming Soon'
            style={{height:'auto' , width:'100%'}}
          />
          <LinkBackToHome />
        </div>
      </div>
    </>
  )
}

export default ComingSoonPage
