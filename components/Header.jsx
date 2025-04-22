import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.svg'
import heart from '../public/heart.svg'
import shoppingCart from '../public/shoppingCart.svg'
import userLogout from '../public/userLogout.svg'
import { Autocomplete, TextField } from '@mui/material'
import dropdownStroke from '../public/dropdownStroke.svg'
const staticGoods = ['iPhone 14', 'Samsung Galaxy', 'MacBook Pro', 'AirPods', 'Apple Watch']

export default function Header() {
    return (
        <div className='w-full h-[110px] flex justify-between items-center px-[100px]'>
            <Image src={logo} alt="logo" className='w-[130px]' />

            <div className="flex rounded-md overflow-hidden border-[1.5px] border-[#023047] w-[650px] h-[50px]">
                <Autocomplete
                    freeSolo
                    disableClearable
                    options={staticGoods}
                    sx={{ flexGrow: 1 }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            placeholder="Search in 20,000 Products..."
                            variant="standard"
                            InputProps={{
                                ...params.InputProps,
                                disableUnderline: true,
                                style: {
                                    padding: '12px 16px',
                                    fontSize: '14px',
                                },
                            }}
                            inputProps={{
                                ...params.inputProps,
                                type: 'search',
                            }}
                        />
                    )}
                />
                <div className="flex items-center px-5 text-sm text-gray-500 border-l border-[#ccc] cursor-pointer">
                    All <span className="ml-[5px] mt-1"><Image src={dropdownStroke} alt="dropdownStroke" /></span>
                </div>
                <button className="bg-[#023047] px-7 text-white font-semibold text-sm cursor-pointer">
                    Search
                </button>
            </div>

            <div className="flex items-center gap-5 ml-6">
                <div className='relative'>
                    <Image src={shoppingCart} alt="shoppingCart" className='w-[25px]' />
                    <span className='w-[16px] h-[16px] rounded-full bg-[#023047] flex justify-center items-center border-[0.5px] border-[#fff] text-[#fff] text-[10px] font-semibold absolute top-[-6px] right-[-6px]'>2</span>
                </div>
                <Image src={heart} alt="heart" className='w-[25px]' />
                <Image src={userLogout} alt="userLogout" className='w-[25px]' />
            </div>
        </div>
    )
}
