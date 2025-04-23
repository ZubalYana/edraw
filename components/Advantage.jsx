import React from 'react'
import Image from 'next/image'
export default function Advantage({ key, icon, title, subtitle, isHighlighted }) {
    return (
        <div className={`w-[270px] h-[80px] border px-[10px] py-[20px] flex items-center ${isHighlighted ? 'border-[#023047]' : 'border-[#CCCCCC]'}`} key={key}>
            <div className='w-[45px] h-[45px] flex items-center justify-center'>
                <Image src={icon} alt="icon" />
            </div>
            <div className='flex flex-col ml-[15px]'>
                <p className='text-[24px] font-semibold text-[#333333]'>{title}</p>
                <p className='text-[14px] font-normal text-[#666666]'>{subtitle}</p>
            </div>
        </div>
    )
}
