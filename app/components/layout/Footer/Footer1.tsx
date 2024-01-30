import React from 'react'


const Footer1 = () => {
    return (
        <div className='container-fluid p-4'>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <img src={"icons/Footer1/Attendance.png"} alt='Home' width={96} height={96} className="m-3" />

                    <h2 className="fw-normal SocialMedia-font pt-3">کنترل تردد</h2>
                    <p className="SocialMedia-Para">راهکاری جامع برای کنترل تردد در سازمان شما</p>
                    <p className="SocialMedia-Button"><a className="btn btn-secondary" href="/">بیشتر &raquo;</a></p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <img src={"icons/Footer1/Visitor.png"} alt='Home' width={96} height={96} className="m-3" />

                    <h2 className="fw-normal SocialMedia-font pt-3">مراجعین</h2>
                    <p className="SocialMedia-Para">راهنمایی و هدایت مراجعه کنندگان به سازمان</p>
                    <p className="SocialMedia-Button"><a className="btn btn-secondary" href="/">بیشتر &raquo;</a></p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <img src={"icons/Footer1/Parking.png"} alt='Home' width={96} height={96} className="m-3" />

                    <h2 className="fw-normal SocialMedia-font pt-3">پارکینگ</h2>
                    <p className="SocialMedia-Para">نرم افزاری کامل و مرجع برای مدیریت پارکینگ</p>
                    <p className="SocialMedia-Button"><a className="btn btn-secondary" href="/">بیشتر &raquo;</a></p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <img src={"icons/Footer1/SelfService.png"} alt='Home' width={96} height={96} className="m-3" />

                    <h2 className="fw-normal SocialMedia-font pt-3">سلف غذا خوری</h2>
                    <p className="SocialMedia-Para">کاملتربن راهکار برای مدیریت سلف غذا خوری</p>
                    <p className="SocialMedia-Button"><a className="btn btn-secondary " href="/">بیشتر &raquo;</a></p>
                </div>
            </div>
       
        </div>
    )
}
export default Footer1