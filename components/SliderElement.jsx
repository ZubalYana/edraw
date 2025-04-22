import React from 'react'
import Image from 'next/image'
import Button from '@mui/material/Button';

export default function SliderElement({ title, titleHighlighted, description, image }) {
    return (
        <div className='w-full h-[430px] pt-2 flex flex-col-reverse justify-between items-start px-[10px] lg:px-[80px] lg:flex-row lg:h-[550px] lg:items-center lg:pt-0'>

            <div>
                <p className='text-[14px] font-normal text-[#9CDEFF]'>New Inspirations</p>
                <h2 className='text-[28px] font-bold text-[#fff] lg:text-[48px]'>
                    {title} <br />
                    <span className='text-[#9CDEFF]'>{titleHighlighted}</span>
                </h2>
                <p className='text-[14px] font-medium text-[#fff]'>{description}</p>
                <Button
                    variant="contained"
                    sx={{
                        textTransform: 'none',
                        backgroundColor: '#fff',
                        color: '#023047',
                        width: '130px',
                        height: '50px',
                        fontSize: '14px',
                        fontWeight: 600,
                        marginTop: '20px',
                        borderRadius: '6px',
                        transition: 'all 0.3s ease-in-out',
                        boxShadow: 'none',
                        '&:hover': {
                            backgroundColor: '#023047',
                            color: '#fff',
                            boxShadow: '0 4px 20px rgba(156,222,255,0.3)',
                        },
                    }}
                >
                    Shop Now
                </Button>

            </div>

            <div className='flex items-center justify-center h-[200px] lg:h-full'>
                <Image
                    src={image}
                    alt='sliderImg'
                    className='max-h-[450px] w-auto'
                />
            </div>
        </div>
    )
}
