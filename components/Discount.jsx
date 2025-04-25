import React from 'react'
import Image from 'next/image'
import discountBg from '../public/discount bg.png'
export default function Discount() {
    return (
        <div className='w-full h-[300px] flex justify-center items-center p-3 relative'>
            <Image src={discountBg} alt="discountBg" className='w-full h-full bg-center object-cover absolute z-5 lg:h-full' />
            <div className='w-full h-full absolute bg-[#000000] opacity-75 flex justify-center items-center z-10'></div>
            <div className='w-full h-fit-content bg-[#E5F6FF] flex flex-col justify-center items-center p-[20px] z-20 lg:w-[970px] lg:h-[100px] lg:flex-row lg-p-[45px]'>
                <span className='text-[20px] font-medium text-center mb-3 lg:mb-0 lg:text-[24px]'>Super discount for your first purchase</span>
                <div className='w-[170px] h-[50px] border-dashed border-2 border-[#023047] flex justify-center items-center mx-[25px]'>FREE10DELIVERY</div>
                <span className='text-[16px] font-medium text-center mt-3 lg:mt-0 lg:text-[18px]'>Use discount code in checkout!</span>
            </div>

        </div>
    )
}
