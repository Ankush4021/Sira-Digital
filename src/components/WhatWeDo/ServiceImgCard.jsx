import React from 'react'

const ServiceImgCard = ({title, image}) => {
    return (
        <div className="w-64 shrink-0 text-center sm:m-auto">

            {/* Image */}
            <div className="h-40 w-full overflow-hidden rounded-xl border border-slate-800">
                <img
                    src={image}
                    alt={title}
                    loading='lazy'
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Heading (image ke niche) */}
            <p className="mt-3 text-lg font-medium text-slate-500">
                {title}
            </p>
        </div>
    )
}

export default ServiceImgCard
