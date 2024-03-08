"use client"
import './Styled.css'
import Logo from '@/public/Shekofa-land-logo.svg'
import Image from 'next/image';

import { NavDropdown, Nav, Navbar } from 'react-bootstrap';

export const NavbarHeader = () => {
  return (

    <nav className="navbar navbar-expand-md bg-light justify-content-between border-bottom border-3">
      <div className="navbar-brand mx-3">
        <Navbar.Brand href="/About"><Image src={Logo} height={40} width={50} alt='Logo' priority /></Navbar.Brand>
      </div>
      <button className="navbar-toggler toggle mx-3" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarToggleCollapse" aria-controls="navbarcollapse"
        aria-expanded="true" aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className='navbar-collapse collapse justify-content-around' id="navbarToggleCollapse">
        <ul className="navbar-nav home-icon">
          <li className="nav-item"><Nav.Link href="#home"><i className="bi bi-house-fill"></i></Nav.Link></li>
          <li className="nav-item">
            <NavDropdown className='text-black fw-bold' title="کنترل تردد" id="basic-nav-dropdown">
              <NavDropdown.Item className='text-black fw-bold' href="/attendance">انواع دستگاه کنترل تردد</NavDropdown.Item>
              <NavDropdown.Item className='text-black fw-bold' href="/attendance">
                انواع راهبند
              </NavDropdown.Item>
              <NavDropdown.Item className='text-black fw-bold' href="/attendance">انواع Board</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='text-black fw-bold' href="/attendance">
                سایر محصولات کنترل تردد
              </NavDropdown.Item>
            </NavDropdown>
          </li>
          <li className="nav-item">
            <NavDropdown className='text-black fw-bold' title="سخت افزار" id="basic-nav-dropdown">
              <NavDropdown.Item className='text-black fw-bold' href="/hardware">تجهیزات شبکه</NavDropdown.Item>
              <NavDropdown.Item className='text-black fw-bold' href="/hardware">
                سخت افزار کامپیوتر
              </NavDropdown.Item>
              <NavDropdown.Item className='text-black fw-bold' href="/hardware">انواع فلزیاب</NavDropdown.Item>
              <NavDropdown.Item className='text-black fw-bold' href="/hardware">X-Ray</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='text-black fw-bold' href="/hardware">
                سایر تجهیزات سخت افزاری
              </NavDropdown.Item>
            </NavDropdown>
          </li>
          <li className="nav-item">
            <NavDropdown  className='text-black fw-bold' title="نرم افزار" id="basic-nav-dropdown">
              <NavDropdown.Item className='text-black fw-bold' href="/software">نرم افزار مدیریت کنترل تردد</NavDropdown.Item>
              <NavDropdown.Item className='text-black fw-bold' href="/software">نرم افزار حضور و غیاب</NavDropdown.Item>
              <NavDropdown.Item className='text-black fw-bold' href="/software">نرم افزار مدیریت پارکینگ</NavDropdown.Item>
              <NavDropdown.Item className='text-black fw-bold' href="/software">
                نرم افزار مدیریت سلف غذا خوری
              </NavDropdown.Item>
              <NavDropdown.Item className='text-black fw-bold' href="/software">نرم افزار مدیریت ارباب رجوع</NavDropdown.Item>
              <NavDropdown.Item className='text-black fw-bold' href="/software">نرم افزار مدیریت گشت و نگهبانی</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='text-black fw-bold' href="/software">
                سایر نرم افزارها
              </NavDropdown.Item>
            </NavDropdown>
          </li>
          <li className="nav-item"><Nav.Link className='text-black fw-bold' href="/blog">بلاگ</Nav.Link></li>
          <li className="nav-item"><Nav.Link className='text-black fw-bold' href="/Contact">ارتباط با ما</Nav.Link></li>
          <li className="nav-item"><Nav.Link className='text-black fw-bold' href="About">در باره ما</Nav.Link></li>
        </ul>
      </div>
      <form className="search-box d-none d-lg-inline-block me-5 position-relative">
        <i className="bi bi-search"></i>
        <input className="form-control" type="search" placeholder="جستجو..." aria-label="Search" />
      </form>
    </nav>
  )
}