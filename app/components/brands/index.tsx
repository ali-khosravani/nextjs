import Image from "next/image"

import ZK from '@/public/images/Brands/zk.png'
import Suprema from '@/public/images/Brands/suprema.png'
import Virdi from '@/public/images/Brands/virdi.png'
import PW from '@/public/images/Brands/processingWorld.png'

function Brands() {
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-12 col-md-6 col-xl-3">
            <div className="m-3">
              <Image src={ZK} alt="ZK" width={280} height={150} placeholder='blur' blurDataURL='@/public/images/Brands/zk.png'/>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="m-3">
              <Image src={Suprema} alt="Suprema" width={280} height={150} placeholder='blur' blurDataURL='@/public/images/Brands/suprema.png'/>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="m-3">
              <Image src={PW} alt="Processing World" width={280} height={150} placeholder='blur' blurDataURL='@/public/images/Brands/virdi.png'/>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="m-3">
              <Image src={Virdi} alt="Virdi" width={280} height={150} placeholder='blur' blurDataURL='@/public/images/Brands/virdi.png'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Brands;