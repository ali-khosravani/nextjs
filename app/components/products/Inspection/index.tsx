import React from 'react'
import './styled.css'
import Order from '../Order'

const Inspection = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="container">
              <h1>
                انواع بازرسی
              </h1>
            </div>
            <div>
              <ul>
                <li>انواع بازرسی</li>
                <li>انواع بازرسی</li>
                <li>انواع بازرسی</li>
                <li>انواع بازرسی</li>
                <li>انواع بازرسی</li>
                <li>انواع بازرسی</li>
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