import React from 'react';
import Image from 'next/image';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

export default function ItemCard({ image, title, description, prices, rating, onAddToCart }) {
    return (
        <div className='w-full h-fit-content pb-3 bg-white shadow-md lg:w-[370px] lg:h-[460px]'>
            <div className='w-full h-[350px] relative'>
                <Image src={image} alt={title} layout='fill' objectFit='cover' />
            </div>
            <div className='mt-3 w-full flex justify-between px-3'>
                <h3 className='text-[18px] font-medium'>{title}</h3>
                <Rating value={rating} precision={0.5} readOnly size="small" />
            </div>
            <div className='mt-2 w-full flex justify-between items-center px-3'>
                <Button
                    variant="contained"
                    onClick={onAddToCart}
                    sx={{
                        textTransform: 'none',
                        backgroundColor: '#fff',
                        border: '1px solid #333333',
                        color: '#333333',
                        width: { xs: '130px', sm: '130px', xl: '130px' },
                        height: { xs: '40px', sm: '40px', xl: '40px' },
                        fontSize: { xs: '14px', sm: '14px', xl: '14px' },
                        fontWeight: 600,
                        borderRadius: '0',
                        transition: 'all 0.3s ease-in-out',
                        boxShadow: 'none',
                        '&:hover': {
                            backgroundColor: '#333333',
                            color: '#fff',
                            boxShadow: '0 4px 20px rgba(156,222,255,0.3)',
                        },
                    }}
                >
                    Add to cart
                </Button>
                <p className='text-[18px] font-medium'>${prices && prices.length > 0 ? prices[prices.length - 1] : 'No price available'}</p>
            </div>
        </div>
    );
}
