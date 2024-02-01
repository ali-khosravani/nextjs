import React from 'react'
import Image from 'next/image'
import eeta from './../../../public/icons/SocialMedia/eitaa.svg'
import instagram from './../../../public/icons/SocialMedia/instagram.svg'
import whatsapp from './../../../public/icons/SocialMedia/whatsapp.svg'
import telegram from './../../../public/icons/SocialMedia/telegram.svg'
import bale from './../../../public/icons/SocialMedia/bale.svg'
import rubika from './../../../public/icons/SocialMedia/rubika.svg'
import aparat from './../../../public/icons/SocialMedia/aparat.svg'

const SocialMedia = () => {
    return (
        <>
            <ul className="list-inline d-inline-block mb-0 px-2">
                <li className="list-inline-item"><a href="/"><Image src={eeta} alt='Fullow us' height={20} width={20} /></a></li>
                <li className="list-inline-item"><a href="/"><Image src={instagram} alt='Fullow us' height={20} width={20} /></a></li>
                <li className="list-inline-item"><a href="/"><Image src={whatsapp} alt='Fullow us' height={20} width={20} /></a></li>
                <li className="list-inline-item"><a href="/"><Image src={telegram} alt='Fullow us' height={20} width={20} /></a></li>
                <li className="list-inline-item"><a href="/"><Image src={bale} alt='Fullow us' height={20} width={20} /></a></li>
                <li className="list-inline-item"><a href="/"><Image src={rubika} alt='Fullow us' height={20} width={20} /></a></li>
                <li className="list-inline-item"><a href="/"><Image src={aparat} alt='Fullow us' height={20} width={20} /></a></li>
            </ul>
        </>
    )
}

export default SocialMedia