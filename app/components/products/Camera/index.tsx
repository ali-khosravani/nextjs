import React from 'react'
import './styled.css'
import Order from '../Order'

const Camera = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-12">
          <div className='container'>
            <div className="my-3">
            <h1>
              انواع دوربین مدار بسته
            </h1>
            </div>
            <div>
              <ul>
                <li>دوربین پلاک خوان</li>
                <li>دوربین پلاک خوان</li>
                <li>دوربین پلاک خوان</li>
                <li>دوربین پلاک خوان</li>
                <li>دوربین پلاک خوان</li>
                <li>دوربین پلاک خوان</li>
                <li>دوربین پلاک خوان</li>
                <li>دوربین پلاک خوان</li>
                <li>دوربین پلاک خوان</li>
              </ul>
            </div>
          </div>

        </div>
        <div className="col-lg-6 col-12">
          <div className='container'>
            <h1>
              انواع دوربین مدار بسته
            </h1>
          </div>

        </div>
      </div>
      <Order />
    </div>
  )
}

export default Camera