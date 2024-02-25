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
                                <h1>
                                    کنترل تردد
                                </h1>
                            </div>
                            <div>
                                <ul>
                                    <li>کنترل تردد</li>
                                    <li>کنترل تردد</li>
                                    <li>کنترل تردد</li>
                                    <li>کنترل تردد</li>
                                    <li>کنترل تردد</li>
                                    <li>کنترل تردد</li>
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