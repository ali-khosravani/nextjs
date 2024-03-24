import Order from '../Order'

const Camera = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-12">
          <div className='container'>
            <div className="my-3">
              <h4 className='text-start fw-bold'>
                فروش دوربین مدار بسته و تجهیزات وابسته 
              </h4>
              <h5 className='text-start fw-bold'>مشاوره ، طراحی و اجرای دوربین های مدار بسته</h5>
            </div>
            <div >
              <ul className='text-start'>
                <li className='my-2 fw-bold'><i className="bi bi-check-lg p-2"></i>انواع دوربین پلاک خوان</li>
                <li className='my-2 fw-bold'><i className="bi bi-check-lg p-2"></i>دوربین های ضدآب</li>
                <li className='my-2 fw-bold'><i className="bi bi-check-lg p-2"></i>دوربین تحت شبکه</li>
                <li className='my-2 fw-bold'><i className="bi bi-check-lg p-2"></i>دوربین دید در شب</li>
                <li className='my-2 fw-bold'><i className="bi bi-check-lg p-2"></i>دوربین اسپید دام</li>
                <li className='my-2 fw-bold'><i className="bi bi-check-lg p-2"></i>وب کم</li>
                <li className='my-2 fw-bold'><i className="bi bi-check-lg p-2"></i>اتصالات دوربین مدار بسته</li>
                <li className='my-2 fw-bold'><i className="bi bi-check-lg p-2"></i>سیستم و DVR</li>
                <li className='my-2 fw-bold'><i className="bi bi-check-lg p-2"></i>انواع هارد</li>
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