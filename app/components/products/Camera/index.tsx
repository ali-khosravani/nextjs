import React from 'react'
import './styled.css'
import Order from '../Order'

const Camera = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className='d-flex justify-content-center align-items-center Camera-box'>
            <h1>
              انواع دوربین مدار بسته
            </h1>
          </div>
          <Order/>
        </div>
      </div>
    </div>
  )
}

export default Camera