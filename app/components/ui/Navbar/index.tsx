"use client"
import { useState } from 'react'
import './Styled.css'
import '@/styles/bootstrapBreakpoints.css';

export const NavbarHeader = () => {
  const [collapsOpen, setCollapseOpen] = useState(false)
  return (

    <nav className="navbar navbar-expand-md bg-light justify-content-between border-bottom border-3">
      <div className="navbar-brand ms-3">
        <a href="/" className="text-black">شکوفالند</a>
      </div>
      <button className="navbar-toggler toggle" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarToggleCollapse" aria-controls="navbarcollapse"
        aria-expanded="true" aria-label="Toggle navigation"
        onClick={() => setCollapseOpen(prev => !prev)}
      >
        {/* {!navbarOpen ? 'Open' : 'Close'} */}
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${collapsOpen ? 'menu-nav show-menu' : 'navbar-collapse collapse justify-content-around'}`} id="navbarToggleCollapse">
        <ul className="navbar-nav home-icon">
          <li className="nav-item p-3 "><a href="/"><i className="bi bi-house-fill"></i></a></li>
          <li className="nav-item p-3">کنترل تردد</li>
          <li className="nav-item p-3 dropdown"><a href="/hardware">سخت افزار</a></li>
          <li className="nav-item p-3 dropdown"><a href="/software">نرم افزار</a></li>
          <li className="nav-item p-3"><a href="/blog">بلاگ</a></li>
          <li className="nav-item p-3"><a href="/Contact">ارتباط با ما</a></li>
          <li className="nav-item p-3"><a href="/About">درباره ما</a></li>
        </ul>
      </div>
      <form className="search-box d-none d-lg-inline-block me-5 position-relative">
        <i className="bi bi-search"></i>
        <input className="form-control" type="search" placeholder="جستجو..." aria-label="Search" />
      </form>
    </nav>
  )
}

