"use client"
import { useState } from 'react'
import './Styled.css'
import '@/styles/bootstrapBreakpoints.css';
import Link from 'next/link';

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
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${collapsOpen ? 'menu-nav show-menu' : 'navbar-collapse collapse justify-content-around'}`} id="navbarToggleCollapse">
        <ul className="navbar-nav home-icon">
          <li className="nav-item p-3 text-black"><Link href="/"><i className="bi bi-house-fill"></i></Link></li>
          <li className="nav-item p-3 text-black"><Link href="/attendance">کنترل تردد</Link></li>
          <li className="nav-item p-3 text-black dropdown"><Link href="/hardware">سخت افزار</Link></li>
          <li className="nav-item p-3 text-black dropdown"><Link href="/software">نرم افزار</Link></li>
          <li className="nav-item p-3 text-black"><Link href="/blog">بلاگ</Link></li>
          <li className="nav-item p-3 text-black"><Link href="/Contact">ارتباط با ما</Link></li>
          <li className="nav-item p-3 text-black"><Link href="/About">درباره ما</Link></li>
        </ul>
      </div>
      <form className="search-box d-none d-lg-inline-block me-5 position-relative">
        <i className="bi bi-search"></i>
        <input className="form-control" type="search" placeholder="جستجو..." aria-label="Search" />
      </form>
    </nav>
  )
}

