import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ItemCard from './ItemCard';
import { useCartStore } from '../store/cartStore';
import { useUIStore } from '../store/uiStore';

const fetchServerData = async () => {
    const res = await fetch('http://localhost:5000/items');
    if (!res.ok) throw new Error('Network response was not ok');
    const json = await res.json();
    return json.items;
};

const categories = ['Hoodie', 'Accessories', 'Men', 'Women', 'Trendy', 'T-shirt'];

export default function FeaturedItems() {
    const { data, error, isLoading } = useQuery({
        queryKey: ['serverData'],
        queryFn: fetchServerData,
    });

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    const addToCart = useCartStore((state) => state.addToCart);
    const showSnackbar = useUIStore((state) => state.showSnackbar);

    const handleAddToCart = (item) => {
        addToCart(item);
        showSnackbar('Item added to cart!', 'success');
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const filteredItems = data
        .filter((item) => item.type === selectedCategory)
        .slice(0, 6);

    return (
        <div className="w-full h-auto flex flex-col items-center bg-[#F3F3F3] py-10 px-[20px]">
            <h1 className="text-[22px] w-[90%] text-center font-bold lg:text-[30px] lg:w-auto">
                Our Featured Products:
            </h1>
            <p className="w-[90%] text-[10px] font-normal text-[#666666] text-center lg:w-[571px] lg:text-[16px]">
                Lorem ipsum dolor sit amet...
            </p>

            <div className="sorting w-[90%] hidden justify-between items-center mt-3 lg:w-auto lg:flex">
                {categories.map((cat, i) => (
                    <div
                        key={i}
                        onClick={() => setSelectedCategory(cat)}
                        className={`py-[20px] px-[25px] font-semibold cursor-pointer transition-colors duration-200 ${selectedCategory === cat
                            ? 'bg-[#023047] text-white text-[14px]'
                            : 'text-[#333] text-[16px] hover:text-[#023047]'
                            }`}
                    >
                        {cat}
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap gap-6 justify-center py-6">
                {filteredItems.length === 0 ? (
                    <p>No items found for "{selectedCategory}"</p>
                ) : (
                    filteredItems.map((item) => (
                        <ItemCard
                            key={item._id}
                            image={item.img}
                            title={item.name}
                            description={item.description}
                            prices={item.prices}
                            rating={item.rate}
                            onAddToCart={() => handleAddToCart(item)}
                        />
                    ))
                )}
            </div>
        </div>
    );
}
