"use client"
import React from 'react'

import { useState } from "react";
import { items } from "@/public/images/Slider/Slider.json";
import { Carousel } from "react-bootstrap";


const Slider = () => {
    const { bootstrap } = items;
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: any, e: any) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {bootstrap.map((item) => (
                <Carousel.Item key={item.id} className={'h-100 w-100'} interval={3000}>
                    <img src={item.imageUrl} alt="New Slide" className='w-100' height={790} />
                    <Carousel.Caption className={'text-center'}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                        <button className="btn btn-danger">Visit Docs</button>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}



export default Slider