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
              <Image src={ZK} alt="ZK" priority width={280} height={150}/>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="m-3">
              <Image src={Suprema} alt="Suprema" priority width={280} height={150}/>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="m-3">
              <Image src={PW} alt="Processing World" priority width={280} height={150}/>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="m-3">
              <Image src={Virdi} alt="Virdi" priority width={280} height={150}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Brands;