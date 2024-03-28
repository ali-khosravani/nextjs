import Head from 'next/head'
import MoreButton from '@/com/ui/Buttons/MoreButton'
import LinkBackToHome from '@/com/ui/BackToHome/Link'

export default function Blog() {
  return (
    <>
      <Head>
        <title>مجله اینترنتی شکوفالند</title>
      </Head>
      <div className='vh-100'>
        <div className='w-100 h-25 d-flex justify-content-center align-items-center bg-dark'>
          <div className='p-0'>
            <h1 className='text-white m-0 p-0'>شکوفالند</h1>
            <p className='m-2 p-0 text-white'>راهکاری جامع برای کنترل دسترسی در سازمان شما</p>
          </div>
        </div>
        <div className='container'>
          <div className="card my-3">
            <div className="card-body">
              <h3 className="card-title">مقالات</h3>
              <p className="card-text">دربافت آخرین مقالات را از اینجا می توانید ببینید</p>
              <MoreButton linkValue='/blog/posts'/>
            </div>
          </div>
          <div className='text-center'>
            <div className="card my-3">
              <div className="card-body">
                <h3 className="card-title">لیست کاتالوگ</h3>
                <p className="card-text">لیست و کاتالوگ محصولات را از اینجا می توانید دریافت کنید</p>
                <MoreButton linkValue='/blog/posts'/>
              </div>
            </div>
          </div>
          <div className='text-center'>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">اخبار</h3>
                <p className="card-text">دریافت آخرین اخبار متنوع از دنیای فن آوری در زمینه کنترل تردد را از اینجا دنبال کنید</p>
                <MoreButton linkValue='/blog/posts'/>
              </div>
            </div>
          </div>
        </div>
        <div className='container my-5'>
          <LinkBackToHome/>
        </div>
      </div>
    </>
  )
}