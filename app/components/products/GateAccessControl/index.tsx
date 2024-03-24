import Order from '../Order'
const Gate = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className='container'>
              <h1 className='text-start fw-bold'>
                انواع گیت های کنترل تردد
              </h1>
            </div>
            <div className='py-1'>
              <ul className='text-start'>
                <li className='my-2 fw-bold'><i className="bi bi-check-lg p-2"></i>راهبند</li>
                <li className='my-2 fw-bold'><i className="bi bi-check-lg p-2"></i>گیت مترویی</li>
                <li className='my-2 fw-bold'><i className="bi bi-check-lg p-2"></i>گیت تردد میله ای</li>
                <li className='my-2 fw-bold'><i className="bi bi-check-lg p-2"></i>گیت کنترل تمام قد</li>
                <li className='my-2 fw-bold'><i className="bi bi-check-lg p-2"></i>گیت بار</li>
              </ul>
            </div>
            <Order/>
          </div>
        </div>
      </div>
    </>
  )
}
export default Gate