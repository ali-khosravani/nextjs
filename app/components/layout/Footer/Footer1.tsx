import React from 'react'
import MoreButton from '@/com/ui/Buttons/MoreButton'
import Image from 'next/image'
import Parking from '@/public/images/Footer1/Parking.png'
import Attendance from '@/public/images/Footer1/Attendance.png'
import SelfService from '@/public/images/Footer1/SelfService.png'
import Visitor from '@/public/images/Footer1/Visitor.png'


const Footer1 = () => {
    return (
        <div className='container-fluid p-4'>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <Image src={Attendance} alt='Home' width={96} height={96} className="m-3" />

                    <h2 className="fw-normal SocialMedia-font pt-3">کنترل تردد</h2>
                    <p>راهکاری جامع برای کنترل تردد در سازمان شما</p>
                    <MoreButton linkValue='/software' />
                </div>
                <div className="col-lg-3 col-md-6">
                    <Image src={Visitor} alt='Home' width={96} height={96} className="m-3" />

                    <h2 className="fw-normal SocialMedia-font pt-3">مراجعین</h2>
                    <p>راهنمایی و هدایت مراجعه کنندگان به سازمان</p>
                    <MoreButton linkValue='/software'/>
                </div>
                <div className="col-lg-3 col-md-6">
                    <Image src={Parking} alt='Home' width={96} height={96} className="m-3" />

                    <h2 className="fw-normal SocialMedia-font pt-3">پارکینگ</h2>
                    <p>نرم افزاری کامل و مرجع برای مدیریت پارکینگ</p>
                    <MoreButton linkValue='/software'/>
                </div>
                <div className="col-lg-3 col-md-6">
                    <Image src={SelfService} alt='Home' width={94} height={94} className="m-3" />

                    <h2 className="fw-normal SocialMedia-font pt-3">سلف غذا خوری</h2>
                    <p>کاملتربن راهکار برای مدیریت سلف غذا خوری</p>
                    <MoreButton linkValue='/software'/>
                </div>
            </div>
       
        </div>
    )
}
export default Footer1