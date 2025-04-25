import React from 'react'
import Image from 'next/image'
export default function BlogCart({ type, img, title, date, index }) {
    return (
        <div className='w-[370px] h-[450px] relative' key={index}>
            <Image src={img} alt={title} className='w-full h-full bg-center object-cover absolute z-1' />
            <div className="infoLayout z-5 absolute bottom-0 w-full h-[80px] p-3 bg-[#F0F0F0]">
                <p className='text-[14px] font-medium text-white absolute top-[-360px] left-3'>{type}</p>
                <p className='text-[10px] font-medium'>{date}</p>
                <p className='text-[14px] font-medium'>{title}</p>
            </div>
        </div>
    )
}
