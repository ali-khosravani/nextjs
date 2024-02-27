import React from 'react'
import './styled.css'
import Order from '../Order'

const AccessControl = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className='container'>
                            <div className='my-3'>
                                <h4 className='text-start fw-bold'>
                                    بهترین راهکار برای مدیریت کنترل تردد در سازمان و اداره شما
                                </h4>
                            </div>
                            <div className='ul-box py-3'>
                                <ul className='text-start'>
                                    <li className='li-Network'><i className="bi bi-check-lg"></i>نرم افزار کنترل تردد</li>
                                    <li className='li-Network'><i className="bi bi-check-lg"></i>دستگاه کنترل تردد</li>
                                    <li className='li-Network'><i className="bi bi-check-lg"></i>انواع برد کنترل تردد</li>
                                    <li className='li-Network'><i className="bi bi-check-lg"></i>لوازم جانبی کنترل تردد</li>
                                    <li className='li-Network'><i className="bi bi-check-lg"></i>انواع reader</li>                                    
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 col-12">
                        <div className='container'>

                        </div>
                    </div>
                </div>
                <Order />
            </div>
        </>
    )
}

export default AccessControl