import React from 'react'

const HamburgerMenu = () => {
    return (
        <>
            <li className="nav-item p-3 "><a href="/"><i className="bi bi-house-fill"></i></a></li>
            <li className="nav-item p-3"><a href="/attendance">کنترل تردد</a></li>
            <li className="nav-item p-3"><a href="/hardware">سخت افزار</a></li>
            <li className="nav-item p-3"><a href="/software">نرم افزار</a></li>
            <li className="nav-item p-3"><a href="/blog">بلاگ</a></li>
            <li className="nav-item p-3"><a href="/Contact">ارتباط با ما</a></li>
            <li className="nav-item p-3"><a href="/About">درباره ما</a></li>
        </>
    )
}

export default HamburgerMenu