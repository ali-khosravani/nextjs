import React from 'react'
import Image from 'next/image';
import './Styled.css';
import eeta from './../../../../public/icons/SocialMedia/eitaa.svg'
import instagram from './../../../../public/icons/SocialMedia/instagram.svg'
import whatsapp from './../../../../public/icons/SocialMedia/whatsapp.svg'
import telegram from './../../../../public/icons/SocialMedia/telegram.svg'
import bale from './../../../../public/icons/SocialMedia/bale.svg'
import rubika from './../../../../public/icons/SocialMedia/rubika.svg'
import aparat from './../../../../public/icons/SocialMedia/aparat.svg'


const Footer2 = () => {
    return (
        <>
            <div className="container-fluid my-3">
                <div className="container py-3 social-box rounded-5">
                    <div className="row justify-content-between">
                        <div className="col-auto">
                            <h4 className='mb-0'>ارائه جدیدترین دستگاه های فلزیاب و X-Ray</h4>
                        </div>
                        <div className="col-auto">
                            <div className="social-box-ul">
                                <span className='d-inline-block mb-0'>مارا در شبکه های اجتماعی دنبال کنید:</span>
                                <ul className="list-inline d-inline-block mb-0 px-2">
                                    <li className="list-inline-item"><a href="/"><Image src={eeta} alt='Fullow us' height={30} width={30}/></a></li>
                                    <li className="list-inline-item"><a href="/"><Image src={instagram} alt='Fullow us' height={30} width={30} /></a></li>
                                    <li className="list-inline-item"><a href="/"><Image src={whatsapp} alt='Fullow us' height={30} width={30}/></a></li>
                                    <li className="list-inline-item"><a href="/"><Image src={telegram} alt='Fullow us' height={30} width={30}/></a></li>
                                    <li className="list-inline-item"><a href="/"><Image src={bale} alt='Fullow us' height={30} width={30}/></a></li>
                                    <li className="list-inline-item"><a href="/"><Image src={rubika} alt='Fullow us' height={30} width={30}/></a></li>
                                    <li className="list-inline-item"><a href="/"><Image src={aparat} alt='Fullow us' height={30} width={30}/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer2