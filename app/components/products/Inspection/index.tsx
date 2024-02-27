import React from 'react'
import './styled.css'
import Order from '../Order'

const Inspection = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="container">
              <h3 className='text-start fw-bold'>
                انواع بازرسی
              </h3>
            </div>
            <div className='ul-box py-3'>
              <ul className='text-start'>
                <li className='li-Network'> <i className="bi bi-check-lg"></i>بازرسی ماشین</li>
                <li className='li-Network'> <i className="bi bi-check-lg"></i>بازرسی افراد</li>
                <li className='li-Network'> <i className="bi bi-check-lg"></i>راکت فلزیاب</li>
                <li className='li-Network'> <i className="bi bi-check-lg"></i>راکت موبایل یاب</li>
                <li className='li-Network'> <i className="bi bi-check-lg"></i>دستگاه X-Ray</li>
                <li className='li-Network'> <i className="bi bi-check-lg"></i>اسکتر کف خودرو</li>
              </ul>
            </div>
           
          </div>
        </div>
        <Order/>
      </div>
    </>
  )
}

export default Inspection