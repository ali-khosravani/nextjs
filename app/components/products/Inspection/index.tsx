import React from 'react'
import './styled.css'
import Order from '../Order'

const Inspection = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center align-items-center Inspection-box">
              <h1>
                انواع بازرسی
              </h1>
            </div>
            <Order/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Inspection