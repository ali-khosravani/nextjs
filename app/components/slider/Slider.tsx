"use client"
import React from 'react'
import { useState } from "react";
import  Slide  from './json';
import { Carousel } from "react-bootstrap";
import MoreButton from '../ui/Buttons/MoreButton';

export const Slider = () => {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: any) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='d-none d-lg-block'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {Slide.items.map((item) => (
                    <Carousel.Item key={item.id} className={'h-100 w-100'} interval={10000}>
                        <img src={item.imageUrl} alt="New Slide" className='img-fluid' />
                        <Carousel.Caption className={'text-center'}>
                            <h3>{item.title}</h3>
                            <p>{item.body}</p>
                            <MoreButton/>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}