import React from 'react'
import './styled.css'
import Order from '../Order'

const RollCall = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center align-items-center RollCall-box">
              <h1>
                حضور و غیاب
              </h1>
            </div>
            <Order/>
          </div>
        </div>
      </div>
    </>
  )
}

export default RollCall