import React from 'react'
import Link from 'next/link'
import './Styled.css'

const LinkBackToHome = () => {
  return (
    <>
    <p className='m-0'><Link href="/">Go back to home</Link></p>
    </>
  )
}

export default LinkBackToHome