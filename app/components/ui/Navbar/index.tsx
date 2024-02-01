import Image from "next/image"
import House from './../../../../public/icons/public-icon/house-solid.svg'
export const NavbarHeader = () => {
  return (
    <nav className="navbar navbar-expand-md bg-white w-100 d-flex justify-content-between border-bottom border-3">
      <div className="container-fluid">
        <div className="navbar-brand">
          <a href="/" className="text-black">شکوفالند</a>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarcollapse" aria-controls="navbarcollapse"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse justify-content-center" id="navbarcollapse">
          <ul className="navbar-nav">
            <li className="nav-item p-3"><a href="/"><Image src={House} width={25} height={25} alt="Home page"/></a></li>
            <li className="nav-item p-3"><a href="/attendance">کنترل تردد</a></li>
            <li className="nav-item p-3"><a href="/hardware">سخت افزار</a></li>
            <li className="nav-item p-3"><a href="/software">نرم افزار</a></li>
            <li className="nav-item p-3"><a href="/blog">بلاگ</a></li>
            <li className="nav-item p-3"><a href="/Contact">ارتباط با ما</a></li>
            <li className="nav-item p-3"><a href="/About">درباره ما</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

