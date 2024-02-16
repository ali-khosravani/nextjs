import React from 'react'
import './Styled.css'

import SocialMedia from '@/com/social_media/SocialMedia'
import Link from 'next/link'

const TopHeader = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center justify-content-lg-around">
        <div className="col-lg-6 col-md-8">
          <ul className="list-inline mb-0 contact-box">
            <li className="list-inline-item">
              <p className='mb-0 d-inline-block pe-2'>0912-7622665</p>
              <i className="bi bi-telephone-fill"></i>
            </li>
            <li className="list-inline-item">
              <p className='mb-0 d-inline-block pe-2'>ali.khosravani.f@gmail.com</p>
              <i className="bi bi-envelope-fill"></i>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-4 mt-3 mt-md-0">
          <SocialMedia heightValue="20" widthValue="20"/>
        </div>
        <div className="col-lg-2 d-none d-lg-block">
          <Link href="/users/Login"><button className='btn btn-sm text-black'>ورود</button></Link>
          <Link href="/users/Register"><button className='btn btn-sm text-black'>ثبت نام</button></Link>
        </div>
      </div>
    </div>
  )
}
export default TopHeader