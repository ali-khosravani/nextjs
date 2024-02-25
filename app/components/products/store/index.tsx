import React from 'react'
import './styled.css'

const Store = () => {
    return (
        <>
            <div className="container-fluid">
                <div className='row'>
                    <div className="col-lg-6 col-md-12">
                        <div className='d-flex justify-content-center align-items-center Store-box'>
                            <h1>
                                انبار گردانی
                            </h1>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className='d-flex justify-content-center align-items-center Store-box'>
                            <h1>
                                انبار داری
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Store