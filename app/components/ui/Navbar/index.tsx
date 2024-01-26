
export const NavbarHeader = () => {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-md fixed-top w-100 bg-dark d-flex justify-content-between">
        <div className="container-fluid">
          <div className="text-white navbar-brand">
            <a href="/">شکوفالند</a>
          </div>

          <button className="navbar-toggler text-white" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="navbar-collapse collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item p-2"><a href="/" className="text-white"><i className="bi bi-house text-white"></i></a></li>
              <li className="nav-item p-2"><a href="/attendance" className="text-white">کنترل تردد</a></li>
              <li className="nav-item p-2"><a href="/hardware" className="text-white">سخت افزار</a></li>
              <li className="nav-item p-2"><a href="/software" className="text-white">نرم افزار</a></li>
              <li className="nav-item p-2"><a href="/blog" className="text-white">بلاگ</a></li>
              <li className="nav-item p-2"><a href="/Contact" className="text-white">ارتباط با ما</a></li>
              <li className="nav-item p-2"><a href="/About" className="text-white">درباره ما</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

