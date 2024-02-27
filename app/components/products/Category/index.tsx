import React from 'react'
import './styled.css'

const Category = () => {
    return (
        <>
            <div className='container my-5'>
                <div className='row'>
                    <div className="col-12 col-lg-4 mb-2">
                        <div className='container'>
                            <div>
                                <h3 className='text-start fw-bold'>نرم افزار</h3>
                            </div>
                            <div className='ul-box py-3'>
                                <ul className='text-start'>
                                    <li className='li-Network'><i className="bi bi-check-lg"></i>نرم افزار کنترل تردد</li>
                                    <li className='li-Network'><i className="bi bi-check-lg"></i>نرم افزار مراحعین</li>
                                    <li className='li-Network'><i className="bi bi-check-lg"></i>نرم افزار مدیریت پارکینگ</li>
                                    <li className='li-Network'><i className="bi bi-check-lg"></i>نرم افزار گشت و نگهبانی</li>
                                    <li className='li-Network'><i className="bi bi-check-lg"></i>نرم افزار حضور و غیاب</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4  mb-2">
                        <div className='container'>
                            <h3 className='text-start fw-bold'> سخت افزار</h3>
                        </div>
                        <div className='ul-box py-3'>
                            <ul className='text-start'>
                                <li className='li-Network'><i className="bi bi-check-lg"></i>انواع راهبند</li>
                                <li className='li-Network'><i className="bi bi-check-lg"></i>انواع گیت تردد</li>
                                <li className='li-Network'><i className="bi bi-check-lg"></i>آنتن UHF</li>
                                <li className='li-Network'><i className="bi bi-check-lg"></i>انواع Board</li>
                                <li className='li-Network'><i className="bi bi-check-lg"></i>کنترل دسترسی آسانسور</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className='container'>
                            <h3 className='text-start fw-bold'>شبکه</h3>
                        </div>
                        <div className='ul-box py-3'>
                            <ul className='text-start'>
                                <li className='li-Network'><i className="bi bi-check-lg"></i>سوئیچ</li>
                                <li className='li-Network'><i className="bi bi-check-lg"></i>روتر</li>
                                <li className='li-Network'><i className="bi bi-check-lg"></i>کابل شبکه</li>
                                <li className='li-Network'><i className="bi bi-check-lg"></i>انواع کانکتور</li>
                                <li className='li-Network'><i className="bi bi-check-lg"></i>طراحی و اجرای اتاق سرور</li>
                                <li className='li-Network'><i className="bi bi-check-lg"></i>انواع آنتی ویروس</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Category