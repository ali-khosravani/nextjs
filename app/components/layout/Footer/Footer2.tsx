import React from 'react'
import './Styled.css';
import '../../../../public/fontawesome-free-6.5.1-web/css/all.css'

const Footer2 = () => {
    return (
        <>
            <div className="container-fluid my-3">
                <div className="container py-3 social-box rounded-5">
                    <div className="row justify-content-between">
                        <div className="col-auto">
                            <h4 className='mb-0'>ارائه جدیدترین دستگاه های فلزیاب و X-Ray</h4>
                        </div>
                        <div className="col-auto">
                            <div className="social-box-ul">
                                <span className='d-inline-block mb-0'>مارا در شبکه های اجتماعی دنبال کنید</span>
                                <ul className="list-inline d-inline-block mb-0 px-2">
                                    <li className="list-inline-item"><a href="/"><i className="fa-brands fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="/"><i className="fa-brands fa-whatsapp"></i></a></li>
                                    <li className="list-inline-item"><a href="/"><i className="fa-brands fa-telegram"></i></a></li>
                                    <li className="list-inline-item"><a href="/"><i className="fa-brands fa-github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer2