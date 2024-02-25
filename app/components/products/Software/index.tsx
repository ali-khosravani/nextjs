import React from 'react'
import './styled.css'
import Order from '../Order'

const Software = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="container">
              <h1>
                نرم افزار
              </h1>
            </div>
            <div>
              <ul>
                <li>   نرم افزار</li>
                <li>   نرم افزار</li>
                <li>   نرم افزار</li>
                <li>   نرم افزار</li>
                <li>   نرم افزار</li>
              </ul>
            </div>
          </div>
        </div>
        <Order />
      </div>
    </>
  )
}

export default Software