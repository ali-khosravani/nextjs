import React from 'react'
import './styled.css'

const Category = () => {
    return (
        <>
            <div className='container-fluid my-5'>
                <div className='row'>
                    <div className="col-12 col-lg-4 mb-2">
                        <div className='d-flex justify-content-center align-items-center Category-box'>
                            <div>
                                <h1>نرم افزار</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4  mb-2">
                        <div className='d-flex justify-content-center align-items-center Category-box'>
                            <h1> سخت افزار</h1>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className='d-flex justify-content-center align-items-center Category-box'>
                            <h1>شبکه</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Category