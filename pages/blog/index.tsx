import Head from 'next/head'
import CommingSoonPage from '@/com/ui/CommingSoon/CommingSoon'
import React from 'react'
export default function Blog() {
  return (
    <>
    <Head>
      <title>وبلاگ</title>
    </Head>
      <CommingSoonPage />
    </>
  )
}