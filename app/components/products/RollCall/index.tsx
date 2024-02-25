import React from 'react'
import './styled.css'
import Order from '../Order'

const RollCall = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="container">
              <h1>
              حضور و غیاب
              </h1>
            </div>
            <div>
              <ul>
                <li> حضور و غیاب</li>
                <li> حضور و غیاب</li>
                <li> حضور و غیاب</li>
                <li> حضور و غیاب</li>
                <li> حضور و غیاب</li>
                <li> حضور و غیاب</li>
              </ul>
            </div>
            
          </div>
        </div>
        <Order/>
      </div>
    </>
  )
}

export default RollCall