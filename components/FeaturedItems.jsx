import React from 'react';
import { useQuery } from '@tanstack/react-query';
import ItemCard from './ItemCard';
import { useCartStore } from '../store/cartStore';

const fetchServerData = async () => {
    const res = await fetch('http://localhost:5000/items');
    if (!res.ok) throw new Error('Network response was not ok');
    const json = await res.json();
    return json.items;
};

export default function FeaturedItems() {
    const { data, error, isLoading } = useQuery({
        queryKey: ['serverData'],
        queryFn: fetchServerData,
    });

    const addToCart = useCartStore((state) => state.addToCart);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="w-full h-auto flex flex-col items-center bg-[#F3F3F3] py-10 px-[20px]">
            <h1 className="text-[22px] w-[90%] text-center font-bold lg:text-[30px] lg:w-auto">
                Our Featured Products:
            </h1>
            <p className="w-[90%] text-[10px] font-normal text-[#666666] text-center lg:w-[571px] lg:text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>

            <div className="sorting w-[90%] hidden justify-between items-center mt-3 lg:w-auto lg:flex">
                {['Hoodie', 'Accessories', 'Mens', 'Womans', 'Trendy', 'T-Shirt'].map((cat, i) => (
                    <div
                        key={i}
                        className={`py-[20px] px-[25px] font-semibold cursor-pointer ${i === 0
                                ? 'bg-[#023047] text-[#fff] text-[14px]'
                                : 'text-[#333] text-[16px]'
                            }`}
                    >
                        {cat}
                    </div>
                ))}
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
    );
}
