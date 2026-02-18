import React from 'react'
import ServiceImgCard from "../../../components/WhatWeDo/ServiceImgCard";

const ServicesScroller = ({items}) => {
    return (
        <div className="hidden md:block overflow-hidden ">
            <div className="flex gap-8 marquee px-4">
                {[...items, ...items].map((text, index) => (
                    <ServiceImgCard  
                    key={index}
                    title={text.title}
                    image={text.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default ServicesScroller