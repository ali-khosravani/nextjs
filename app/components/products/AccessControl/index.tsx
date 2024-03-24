import Order from '../Order'

const AccessControl = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className='container'>
                            <div className='my-1'>
                                <h4 className='text-start fw-bold'>
                                    بهترین راهکار برای مدیریت کنترل تردد در سازمان و اداره شما
                                </h4>
                            </div>
                            <div className='my-1'>
                                <ul className='text-start'>
                                    <li className='fw-bold my-2'><i className="bi bi-check-lg p-2"></i>نرم افزار کنترل تردد</li>
                                    <li className='fw-bold my-2'><i className="bi bi-check-lg p-2"></i>دستگاه کنترل تردد</li>
                                    <li className='fw-bold my-2'><i className="bi bi-check-lg p-2"></i>انواع برد کنترل تردد</li>
                                    <li className='fw-bold my-2'><i className="bi bi-check-lg p-2"></i>لوازم جانبی کنترل تردد</li>
                                    <li className='fw-bold my-2'><i className="bi bi-check-lg p-2"></i>انواع reader</li>                                    
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