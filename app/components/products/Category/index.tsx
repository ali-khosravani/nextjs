import React from 'react'
import './styled.css'

const Category = () => {
    return (
        <>
            <div className='container-fluid my-5'>
                <div className='row'>
                    <div className="col-12 col-lg-4 mb-2">
                        <div className='container'>
                            <div>
                                <h1>نرم افزار</h1>
                            </div>
                            <div>
                                <ul>
                                    <li>نرم افزار</li>
                                    <li>نرم افزار</li>
                                    <li>نرم افزار</li>
                                    <li>نرم افزار</li>
                                    <li>نرم افزار</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4  mb-2">
                        <div className='container'>
                            <h1> سخت افزار</h1>
                        </div>
                        <div>
                            <ul>
                                <li>سخت افزار</li>
                                <li>سخت افزار</li>
                                <li>سخت افزار</li>
                                <li>سخت افزار</li>
                                <li>سخت افزار</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className='container'>
                            <h1>شبکه</h1>
                        </div>
                        <div>
                            <ul>
                                <li>شبکه</li>
                                <li>شبکه</li>
                                <li>شبکه</li>
                                <li>شبکه</li>
                                <li>شبکه</li>
                                <li>شبکه</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Category