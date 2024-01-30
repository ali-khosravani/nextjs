import React from 'react'
import Copyright from './Copyright'
import DesignBy from './DesignBy'
import TopFooter from './TopFooter'
import Footer1 from './Footer1'

export const Footer = () => {
  return (
    <>
      <Footer1 />
      <TopFooter />
      <div className="container-fluid bg-dark justify-content-between">
        <div className="row gx-5">
          <div className="col">
            <div className="p-2 text-start align-middle"><Copyright /></div>
          </div>
          <div className="col">
            <div className="p-2 text-end align-middle"><DesignBy /></div>
          </div>
        </div>
      </div>
    </>
  )
}
