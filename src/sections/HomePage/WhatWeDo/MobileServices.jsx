import React from 'react'
import ServiceImgCard from "../../../components/WhatWeDo/ServiceImgCard";

const MobileServices = ({ items = [] }) => {
    return (
        <div className="md:hidden mt-4 space-y-4 p-4 flex flex-col justify-center items-center gap-6">
            {items.map((item, index) => (
                <ServiceImgCard
                    key={index}
                    title={item.title}
                    image={item.image}
                />
            ))}
        </div>

    )
}

export default MobileServices
