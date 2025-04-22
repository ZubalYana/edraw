import React from 'react'
import Image from 'next/image'
import menuVector from '../public/menuVector.svg'
export default function NavigationMenu() {
    return (
        <div className='w-full h-[45px] px-[100px] text-[#333333] flex justify-between items-center'>
            <div className='flex items-center'>
                <Image src={menuVector} alt="menuVector" />
                <p className='text-[14px] ml-[10px] font-medium'>All Departments</p>
            </div>

            <ul className='w-[665px] flex justify-between items-center text-[13px] font-normal [&>li]:cursor-pointer'>
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
