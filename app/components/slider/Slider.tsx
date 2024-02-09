"use client"
import React from 'react'

import { useState } from "react";
import { items } from "@/public/images/Slider/Slider.json";
import { Carousel } from "react-bootstrap";


export const Slider = () => {
    const { bootstrap } = items;
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: any) => {
        setIndex(selectedIndex);
    };
    return (
       <div className='d-none d-lg-block'>
         <Carousel activeIndex={index} onSelect={handleSelect}>
            {bootstrap.map((item) => (
                <Carousel.Item key={item.id} className={'h-100 w-100'} interval={10000}>
                    <img src={item.imageUrl} alt="New Slide" />
                    <Carousel.Caption className={'text-center'}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                        <button className="btn btn-info">بیشتر</button>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
       </div>
    );
}