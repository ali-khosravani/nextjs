import React from 'react'
import Image from 'next/image'
import ComingSoon from '@/public/images/coming-soon.png'
import 'bootstrap/dist/css/bootstrap.rtl.css'
import { useRouter } from "next/router";
import LinkBackToHome from '@/com/ui/BackToHome/Link';

function Post() {
  const router = useRouter()
  const { slug } = router.query
  return (
    <div>
      <div className='vh-100 d-flex justify-content-center align-items-center'>
        <div className=''>
          <Image src={ComingSoon} alt='' priority />
          <p className='text-center'>محتوای درخواستی در مسیر {slug} وجود ندارد</p>
          <LinkBackToHome />
        </div>
      </div>
    </div>
  )
}
export default Post




