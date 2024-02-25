import React from 'react'
import './styled.css'
import Order from '../Order'
const Gate = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className='d-flex justify-content-center align-items-center Gate-box'>
              <h1>
                انواع گیت های کنترل تردد
              </h1>
            </div>
            <Order/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Gate