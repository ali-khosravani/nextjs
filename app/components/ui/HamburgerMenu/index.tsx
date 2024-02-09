import Link from 'next/link'
import React from 'react'

const HamburgerMenu = () => {
    return (
        <>
            <li className="nav-item p-3 "><Link href="/"><i className="bi bi-house-fill"></i></Link></li>
            <li className="nav-item p-3"><Link href="/attendance">کنترل تردد</Link></li>
            <li className="nav-item p-3"><Link href="/hardware">سخت افزار</Link></li>
            <li className="nav-item p-3"><Link href="/software">نرم افزار</Link></li>
            <li className="nav-item p-3"><Link href="/blog">بلاگ</Link></li>
            <li className="nav-item p-3"><Link href="/Contact">ارتباط با ما</Link></li>
            <li className="nav-item p-3"><Link href="/About">درباره ما</Link></li>
        </>
    )
}

export default HamburgerMenu