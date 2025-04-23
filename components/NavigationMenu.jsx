import React from 'react'
import Image from 'next/image'
import menuVector from '../public/menuVector.svg'
export default function NavigationMenu() {
    return (
        <div className='w-full h-auto mb-2 px-[20px] text-[#333333] flex flex-col justify-between items-start lg:px-[100px] lg:flex-row lg:items-center lg:h-[45px] lg:mb-0'>
            <div className='flex items-center mt-3 lg:m-0'>
                <Image src={menuVector} alt="menuVector" />
                <p className='text-[14px] ml-[10px] font-medium'>All Departments</p>
            </div>

            <ul className='w-full flex justify-between flex-wrap gap-x-2 items-center text-[13px] font-normal [&>li]:cursor-pointer lg:w-[665px] lg:justify-between mt-3 lg:flex-nowrap lg:gap-0 lg:m-0 lg:text-[16px]'>
                <li>Home</li>
                <li>Shop</li>
                <li>Categories</li>
                <li>Man</li>
                <li>Woman</li>
                <li>Accessories</li>
                <li>Blog</li>
                <li>Page</li>
                <li>Elements</li>
            </ul>


            <span className='text-[13px] font-normal cursor-pointer'>Recent Viewed</span>
        </div>
    )
}
