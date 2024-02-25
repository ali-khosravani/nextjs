import React from 'react'
import './styled.css'
import Order from '../Order'

const Hardware = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center align-items-center Hardware-box">
              <h1>
                راکت فلزیاب
              </h1>
            </div>
            <Order/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hardware