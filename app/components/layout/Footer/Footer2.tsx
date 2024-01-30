import React from 'react'
import './Styled.css';


const Footer2 = () => {
    return (
        <>
            <div className="container footer2Class">
                <div className="row h-100">
                    <div className='col'>
                        <h5 className='text-center'>ما را در شبکه های اجتماعی دنبال کنید</h5>
                    </div>
                    <div className='col'>
                        <div className='d-flex justify-content-center'>
                            <h3><a href="/"><i className="bi bi-instagram p-2"></i></a></h3>
                            <h3><a href="/"><i className="bi bi-telegram p-2"></i></a></h3>
                            <h3><a href="/"><i className="bi bi-github p-2"></i></a></h3>
                            <h3><a href="/"><i className="bi bi-whatsapp p-2"></i></a></h3>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Footer2