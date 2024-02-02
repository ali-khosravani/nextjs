import React from 'react'
import Image from 'next/image'
import './Styled.css'

import SocialMedia from '@/com/social_media/SocialMedia'
import telephone from '@/public/icons/public-icon/phone-solid.svg'
import envelope from '@/public/icons/public-icon/envelope-solid.svg'

const TopHeader = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center justify-content-lg-around">
        <div className="col-lg-6 col-md-8">
          <ul className="list-inline mb-0 contact-box">
            <li className="list-inline-item">
              <p className='mb-0 d-inline-block'>0912-7622665</p>
              <Image src={telephone} alt='Fullow us' height={20} width={20} />
            </li>
            <li className="list-inline-item">
              <p className='mb-0 d-inline-block'>ali.khosravani.f@gmail.com</p>
              <Image src={envelope} alt='Fullow us' height={20} width={20} />
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-4 mt-3 mt-md-0">
          <SocialMedia heightValue="20" widthValue="20"/>
        </div>
        <div className="col-lg-2 d-none d-lg-block">
          <button className='btn btn-link btn-sm'>ورود</button>
          <button className='btn btn-link btn-sm'>ثبت نام</button>
        </div>
      </div>
    </div>

  )
}

export default TopHeader