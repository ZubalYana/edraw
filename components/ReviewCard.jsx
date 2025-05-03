import React from 'react'
import Image from 'next/image'
import { Rating } from '@mui/material'
export default function ReviewCard({ name, position, rate, img, text, index }) {
    return (
        <div className='w-[270px] h-[214px] border-1 border-[#CCCCCC] p-[20px] flex flex-col items-center mt-4' key={index}>
            <Rating
                value={rate}
                precision={0.5}
                readOnly
                size="small"
                sx={{
                    color: '#023047',
                }}
            />
            <p className='w-full text-center font-normal mt-3 text-[14px]'>{text}</p>
            <div className="review_user flex mt-4 items-center">
                <div>
                    <Image src={img} alt={name} width={40} height={40} />
                </div>
                <div className='flex flex-col ml-2'>
                    <h3 className='text-[12px] font-normal'>{name}</h3>
                    <p className='text-[10px] font-normal'>{position}</p>
                </div>
            </div>
        </div>
    )
}
