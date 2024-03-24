import Order from '../Order'

const Inspection = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="container">
              <h3 className='text-start fw-bold'>
                انواع بازرسی
              </h3>
            </div>
            <div className='py-1'>
              <ul className='text-start'>
                <li className='fw-bold my-2'> <i className="bi bi-check-lg p-2"></i>بازرسی ماشین</li>
                <li className='fw-bold my-2'> <i className="bi bi-check-lg p-2"></i>بازرسی افراد</li>
                <li className='fw-bold my-2'> <i className="bi bi-check-lg p-2"></i>راکت فلزیاب</li>
                <li className='fw-bold my-2'> <i className="bi bi-check-lg p-2"></i>راکت موبایل یاب</li>
                <li className='fw-bold my-2'> <i className="bi bi-check-lg p-2"></i>دستگاه X-Ray</li>
                <li className='fw-bold my-2'> <i className="bi bi-check-lg p-2"></i>اسکتر کف خودرو</li>
              </ul>
            </div>
           
          </div>
        </div>
        <Order/>
      </div>
    </>
  )
}

export default Inspection