"use client"
import React from 'react'
import Head from 'next/head'
import OurTeam from '@/com/team/OurTeam'

import "bootstrap/dist/css/bootstrap.rtl.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./../app/globals.css";

const About = () => {
  return (
    <>
    <Head>
      <title>
        در باره ما
      </title>
    </Head>
    <div>
      <h2>About</h2>
      <OurTeam />
    </div>
  </>
  )
}
export default About