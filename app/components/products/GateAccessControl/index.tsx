import React from 'react'
import './styled.css'
import Order from '../Order'
const Gate = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className='container'>
              <h1>
                انواع گیت های کنترل تردد
              </h1>
            </div>
            <div>
              <ul>
                <li>راهبند</li>
                <li>راهبند</li>
                <li>راهبند</li>
                <li>راهبند</li>
                <li>راهبند</li>
                <li>راهبند</li>
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