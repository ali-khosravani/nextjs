import Order from '../Order'
import Image from 'next/image'
import NetworkImage from '@/public/images/Product/ProductNetworkComponent.webp'
const Network = () => {
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="container">
              <div className='my-3'>
                <h3 className='text-start fw-bold'>
                  مشاوره،طراحی واجرای شبکه در سازمان شما
                </h3>
              </div>
              <div className='py-3'>
                <ul className='text-start'>
                  <li className='fw-bold my-2'><i className="bi bi-check-lg p-2"></i>امنیت بالا</li>
                  <li className='fw-bold my-2'><i className="bi bi-check-lg p-2"></i>مقرون به صرفه</li>
                  <li className='fw-bold my-2'><i className="bi bi-check-lg p-2"></i>مدت زمان کوتاه انجام پروژه</li>
                  <li className='fw-bold my-2'><i className="bi bi-check-lg p-2"></i>تیم عملیاتی مجرب</li>
                  <li className='fw-bold my-2'><i className="bi bi-check-lg p-2"></i>پشتیبانی فنی</li>
                  <li className='fw-bold my-2'><i className="bi bi-check-lg p-2"></i>پاسخگویی به نیاز های کارفرما</li>
                  <li className='fw-bold my-2'><i className="bi bi-check-lg p-2"></i>Nameمطابق با استانداردهای جهانی</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="container">
              <div className='d-flex justify-content-center align-items-center Network-box'>
                <Image
                  src={NetworkImage}
                  alt='Network'
                  height={0}
                  width={0}
                  style={{height:'auto' , width:'100%'}}
                  placeholder='blur'
                  blurDataURL='NetworkImage' />
              </div>
            </div>
          </div>
        </div>
        <Order />
      </div>
    </>
  )
}

export default Network