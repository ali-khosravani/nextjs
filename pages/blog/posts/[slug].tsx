import Head from 'next/head'
import React from 'react'
import CommingSoonPage from '@/com/ui/ComingSoon/ComingSoon'
function Post() {
  return (
    <>
      <Head>
        <title>وبلاگ</title>
      </Head>
      <div className='vh-100 d-flex justify-content-center align-items-center'>
        <CommingSoonPage />
      </div>
    </>
  )
}
export default Post




