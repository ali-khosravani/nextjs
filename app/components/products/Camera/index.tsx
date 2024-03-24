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
                <li className='li-Network'><i className="bi bi-check-lg"></i>انواع دوربین پلاک خوان</li>
                <li className='li-Network'><i className="bi bi-check-lg"></i>دوربین های ضدآب</li>
                <li className='li-Network'><i className="bi bi-check-lg"></i>دوربین تحت شبکه</li>
                <li className='li-Network'><i className="bi bi-check-lg"></i>دوربین دید در شب</li>
                <li className='li-Network'><i className="bi bi-check-lg"></i>دوربین اسپید دام</li>
                <li className='li-Network'><i className="bi bi-check-lg"></i>وب کم</li>
                <li className='li-Network'><i className="bi bi-check-lg"></i>اتصالات دوربین مدار بسته</li>
                <li className='li-Network'><i className="bi bi-check-lg"></i>سیستم و DVR</li>
                <li className='li-Network'><i className="bi bi-check-lg"></i>انواع هارد</li>
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