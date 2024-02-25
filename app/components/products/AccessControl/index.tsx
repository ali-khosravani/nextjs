import React from 'react'
import './styled.css'
import Order from '../Order'

const AccessControl = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className='d-flex justify-content-center align-items-center Access-box'>
                            <h1>
                                کنترل تردد
                            </h1>
                        </div>
                        <Order/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccessControl