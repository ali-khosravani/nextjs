"use client"
import React, { useState } from 'react'
import Slide from './json';
import { Carousel } from "react-bootstrap";
import MoreButton from '@/com/ui/Buttons/MoreButton';
import Image from 'next/image';

export const Slider = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: any) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='d-none d-lg-block'>
            <Carousel activeIndex={index} onSelect={handleSelect} variant='dark'>
                {Slide.items.map((item) => (
                    <Carousel.Item key={item.id} className={'h-100 w-100'} interval={10000}>

                        <Image
                            src={item.imageUrl}
                            height={0}
                            width={0}
                            alt="New Slide"
                            className='img-fluid'                            
                            style={{ width: '60%', height: 'auto' }}
                            placeholder='blur'
                            blurDataURL={item.imageUrl}
                        />
                        <Carousel.Caption className={'text-center text-black'}>
                            <h3 className='text-black text-center'>{item.title}</h3>
                            <p className='text-black text-center'>{item.body}</p>
                            <MoreButton linkValue='/attendance' title='شروع کنید' />
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}