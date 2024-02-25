import React from 'react'
import './styled.css'
import Order from '../Order'

const Hardware = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="container">
              <h1>
                راکت فلزیاب
              </h1>
            </div>
            <div>
              <ul>
                <li>راکت فلزیاب</li>
                <li>راکت فلزیاب</li>
                <li>راکت فلزیاب</li>
                <li>راکت فلزیاب</li>
                <li>راکت فلزیاب</li>
                <li>راکت فلزیاب</li>
              </ul>
            </div>
            <Order/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hardware