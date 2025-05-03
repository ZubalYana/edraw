import React from 'react'
import Image from 'next/image'

export default function InstagramPost({ img, index }) {
    return (
        <div
            key={index}
            className='group w-full h-[285px] relative cursor-pointer mb-8 md:w-[285px] xl:h-[285px] xl:m-0 overflow-hidden'
        >
            <Image
                src={img}
                alt="post"
                className='w-full h-full object-cover absolute z-0'
                width={370}
                height={450}
            />
            <div
                className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
            >
                <Image src="/instagram.svg" alt="Instagram Icon" width={40} height={40} />
            </div>
        </div>
    )
}
