import React from 'react'
import Image from 'next/image'

export default function Banners() {
    return (
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 px-4 py-10">
            <div className="relative w-full lg:w-[570px] h-[350px] overflow-hidden">
                <Image
                    src="/discountBanner.png"
                    alt="Discount Banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
                    <p className="text-xl">SAVE UP</p>
                    <p className="text-5xl font-bold">50%</p>
                    <p className="text-xl">OFF</p>
                </div>
            </div>

            <div className="relative w-full lg:w-[570px] h-[350px] overflow-hidden">
                <Image
                    src="/newsletterBanner.png"
                    alt="Sign Up Banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-6 text-white">
                    <h2 className="text-2xl font-semibold mb-2">Sign Up Now & Get 10% Off</h2>
                    <p className="text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="p-2 text-black w-full sm:w-auto flex-1 bg-[#FFFFFF]"
                        />
                        <button className="bg-[#333333] text-[#fff] px-4 py-2 font-normal hover:bg-gray-200 transition">Subscribe Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
