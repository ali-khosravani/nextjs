import React from 'react'
import Image from 'next/image';
import './Styled.css';
import SocialMedia from '@/com/social_media/SocialMedia';


const Footer2 = () => {
    return (
        <>
            <div className="container-fluid my-3">
                <div className="container py-3 social-box rounded-5">
                    <div className="row justify-content-between">
                        <div className="col-auto">
                            <h4 className='mb-0'>ارائه جدیدترین دستگاه های فلزیاب و X-Ray</h4>
                        </div>
                        <div className="col-auto">
                            <div className="social-box-ul">
                                <span className='d-inline-block mb-0'>مارا در شبکه های اجتماعی دنبال کنید:</span>
                                <SocialMedia />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer2