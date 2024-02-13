import Image from 'next/image'
import React from 'react'
import LinkBackToHome from '@/com/ui/BackToHome/Link'
import ComingSoon from '@/public/images/coming-soon.png'
import 'bootstrap/dist/css/bootstrap.rtl.css'
const Attendance = () => {
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
      <div className=''>
        <Image src={ComingSoon} alt='' />
        <LinkBackToHome />
      </div>
    </div>
  )
}
export default Attendance