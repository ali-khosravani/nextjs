import React from 'react'
import Image from 'next/image'
import ComingSoon from '@/public/images/coming-soon.png'
import 'bootstrap/dist/css/bootstrap.rtl.css'


export default function Blog({posts}:any) {
  const showPost = posts.map((post:any)=><p className='text-center' key={post.id}><a href="/">{post.title}</a></p>)
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
      <div className=''>
        <Image src={ComingSoon} alt='' priority />
        {showPost}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts=[
    {
      id:1,
      title:'Go back to home'
    }
  ]
  return{
    props:{
      posts
    }
  }
}
