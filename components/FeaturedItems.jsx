import React, { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query';
import ItemCard from './ItemCard';
const fetchServerData = async () => {
    const res = await fetch('http://localhost:5000/items');
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    const json = await res.json();
    return json.items;
};

export default function FeaturedItems() {
    const { data, error, isLoading } = useQuery({
        queryKey: ['serverData'],
        queryFn: fetchServerData,
    });

    const [cart, setCart] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedCart = localStorage.getItem('cart');
            return storedCart ? JSON.parse(storedCart) : [];
        }
        return [];
    });


    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);


    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;



    return (
        <div className='w-full h-auto flex flex-col items-center bg-[#F3F3F3] py-10 px-[20px]'>
            <h1 className='text-[22px] w-[90%] text-center flex justify-center font-bold lg:text-[30px] lg:w-auto'>Our Featured Products:</h1>
            <p className='w-[90%] text-[10px] font-normal text-[#666666] text-center lg:w-[571px] lg:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <div className="sorting w-[90%] hidden justify-between items-center mt-3 lg:w-auto lg:flex">
                <div className='activeSorting py-[20px] px-[25px] bg-[#023047] text-[14px] font-semibold text-[#fff]'>Hoodie</div>
                <div className='py-[20px] px-[25px] text-[16px] font-semibold text-[#333] cursor-pointer'>Accessories</div>
                <div className='py-[20px] px-[25px] text-[16px] font-semibold text-[#333] cursor-pointer'>Mens</div>
                <div className='py-[20px] px-[25px] text-[16px] font-semibold text-[#333] cursor-pointer'>Womans</div>
                <div className='py-[20px] px-[25px] text-[16px] font-semibold text-[#333] cursor-pointer'>Trendy</div>
                <div className='py-[20px] px-[25px] text-[16px] font-semibold text-[#333] cursor-pointer'>T-Shirt</div>
            </div>
            <div className="flex flex-wrap gap-6 justify-center py-6">
                {data.map((item) => (
                    <ItemCard
                        key={item._id}
                        image={item.img}
                        title={item.name}
                        description={item.description}
                        prices={item.prices}
                        rating={item.rate}
                        onAddToCart={() => addToCart(item)}
                    />
                ))}

            </div>

        </div>
    )
}
