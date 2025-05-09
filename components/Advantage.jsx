import React from 'react'
import Image from 'next/image'
export default function Advantage({ index, icon, title, subtitle, isHighlighted }) {
    return (
        <div className={`w-[270px] h-[80px] border px-[10px] py-[20px] flex items-center ${isHighlighted ? 'border-[#023047]' : 'border-[#CCCCCC]'}`} key={index}>
            <div className='w-[45px] h-[45px] flex items-center justify-center'>
                <Image src={icon} alt="icon" />
            </div>
            <div className='flex flex-col ml-[15px]'>
                <p className='text-[24px] font-semibold text-[#333333] lg:text-[16px] xl:text-[24px]'>{title}</p>
                <p className='text-[14px] font-normal text-[#666666] lg:text-[12px] xl:text-[14px]'>{subtitle}</p>
            </div>
        </div>
    )
}
