import React from 'react'
import './styled.css'
import Order from '../Order'

const Software = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center align-items-center Software-box">
              <h1>
                نرم افزار
              </h1>
            </div>
            <Order/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Software