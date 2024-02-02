import React from 'react'
import Copyright from './Copyright'
import DesignBy from './DesignBy'
import TopFooter from './TopFooter'
import Footer1 from './Footer1'
import Footer2 from './Footer2'

export const Footer = () => {
  return (
    <>
      <Footer1 />
      <Footer2 />
      <TopFooter />
      <div className="container-fluid bg-dark py-1">
        <div className="row justify-content-around">
          <div className="col-auto"><Copyright /></div>
          <div className="col-auto"><DesignBy /></div>
        </div>
      </div>
    </>
  )
}
