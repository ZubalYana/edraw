import React from 'react'
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

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className='w-full h-auto flex flex-col items-center bg-[#F3F3F3] py-7'>
            <h1 className='text-[30px] font-bold'>Our Featured Products:</h1>
            <p className='text-[16px] font-normal text-[#666666] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <div className="sorting flex justify-between items-center">
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
                    />
                ))}

            </div>

        </div>
    )
}
