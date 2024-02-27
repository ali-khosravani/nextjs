import React from 'react'
import './styled.css'
import Order from '../Order'
const Gate = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className='container'>
              <h1 className='text-start fw-bold'>
                انواع گیت های کنترل تردد
              </h1>
            </div>
            <div className='ul-box py-3'>
              <ul className='text-start'>
                <li className='li-Network'><i className="bi bi-check-lg"></i>راهبند</li>
                <li className='li-Network'><i className="bi bi-check-lg"></i>گیت مترویی</li>
                <li className='li-Network'><i className="bi bi-check-lg"></i>گیت تردد میله ای</li>
                <li className='li-Network'><i className="bi bi-check-lg"></i>گیت کنترل تمام قد</li>
                <li className='li-Network'><i className="bi bi-check-lg"></i>گیت بار</li>
              </ul>
            </div>
            <Order/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Gate