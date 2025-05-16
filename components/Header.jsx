import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../public/logo.svg';
import heart from '../public/heart.svg';
import shoppingCart from '../public/shoppingCart.svg';
import userLogout from '../public/userLogout.svg';
import dropdownStroke from '../public/dropdownStroke.svg';
import { Autocomplete, TextField } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useCartStore } from '../store/cartStore';
import { useUIStore } from '@/store/uiStore';
import { Plus, Heart } from 'lucide-react';

const fetchServerGoods = async () => {
    const res = await fetch('http://localhost:5000/items');
    const data = await res.json();
    return data;
};

export default function Header() {
    const [items, setItems] = useState([]);
    const cart = useCartStore((state) => state.cart);
    const showCartModal = useUIStore((state) => state.showCartModal);

    const { data } = useQuery({
        queryKey: ['serverGoods'],
        queryFn: fetchServerGoods,
    });

    useEffect(() => {
        if (data?.items) {
            setItems(data.items);
        }
    }, [data]);


    return (
        <div className="w-full h-[70px] flex justify-between items-center px-[20px] shadow lg:px-[70px] lg:h-[100px] xl:px-[100px]">
            <Image src={logo} alt="logo" className="w-[70px] xl:w-[130px]" />

            <div className="w-[30px] h-[20px] flex flex-col justify-between lg:hidden">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-full h-1 bg-[#023047] rounded-xs" />
                ))}
            </div>

            <div className="hidden rounded-md overflow-hidden border-[1.5px] border-[#023047] w-[530px] h-[50px] lg:flex xl:w-[650px]">
                <Autocomplete
                    freeSolo
                    disableClearable
                    options={items}
                    getOptionLabel={(option) => option.name}
                    sx={{ flexGrow: 1 }}
                    renderOption={(props, option) => (
                        <li {...props} key={option._id} className="flex items-center justify-between p-4 hover:bg-gray-200 cursor-pointer">
                            <div className='flex gap-2 items-center'>
                                <Image src={option.img} alt={option.name} width={50} height={30} />
                                {option.name}
                            </div>
                            <div className='flex gap-3 text-[#121212] items-center text-[20px]'>
                                <Plus />
                                <Heart />
                            </div>



                        </li>
                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            placeholder="Search in 20,000 Products..."
                            variant="standard"
                            InputProps={{
                                ...params.InputProps,
                                disableUnderline: true,
                                style: { padding: '12px 16px', fontSize: '14px' },
                            }}
                            inputProps={{
                                ...params.inputProps,
                                type: 'search',
                            }}
                        />
                    )}
                />

                <div className="flex items-center px-5 text-sm text-gray-500 border-l border-[#ccc] cursor-pointer">
                    All <span className="ml-[5px] mt-1"><Image src={dropdownStroke} alt="dropdown" /></span>
                </div>
                <button className="bg-[#023047] px-7 text-white font-semibold text-sm cursor-pointer">
                    Search
                </button>
            </div>

            <div className="items-center gap-5 ml-6 hidden lg:flex">
                <div className="relative cursor-pointer" onClick={showCartModal}>
                    <Image src={shoppingCart} alt="shoppingCart" className="w-[25px]" />
                    <span className="w-[16px] h-[16px] rounded-full bg-[#023047] flex justify-center items-center border-[0.5px] border-[#fff] text-[#fff] text-[10px] font-semibold absolute top-[-6px] right-[-6px]">
                        {cart.length}
                    </span>
                </div>
                <Image src={heart} alt="heart" className="w-[25px]" />
                <Image src={userLogout} alt="userLogout" className="w-[25px]" />
            </div>
        </div>
    );
}
