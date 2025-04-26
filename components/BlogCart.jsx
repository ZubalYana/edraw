import React from 'react'
import Image from 'next/image'
import Button from '@mui/material/Button';

export default function BlogCart({ type, img, title, date, index }) {
    return (
        <div className='group w-full h-[450px] relative cursor-pointer mb-8 xl:w-[370px] xl:h-[450px] xl:m-0' key={index}>
            <Image src={img} alt={title} className='w-full h-full bg-center object-cover absolute z-1' />
            <div
                className="infoLayout z-5 absolute bottom-0 w-full h-[80px] p-3 bg-[#F0F0F0] transition-all duration-500 group-hover:animate-infoLayoutAnimation"
            >
                <p className='text-[14px] font-medium text-white absolute top-[-360px] left-3 infoLayout_type'>{type}</p>
                <p className='text-[10px] font-medium infoLayout_date'>{date}</p>
                <p className='text-[14px] font-medium infoLayout_title'>{title}</p>
                <Button
                    variant="contained"
                    className='infoLayout_btn'
                    sx={{
                        textTransform: 'none',
                        backgroundColor: '#fff',
                        color: '#333333',
                        width: { xs: '130px', sm: '130px', xl: '130px' },
                        height: { xs: '40px', sm: '40px', xl: '40px' },
                        fontSize: { xs: '14px', sm: '14px', xl: '14px' },
                        fontWeight: 600,
                        borderRadius: '0',
                        transition: 'all 0.3s ease-in-out',
                        boxShadow: 'none',
                        display: 'none',
                        '&:hover': {
                            backgroundColor: '#333333',
                            color: '#fff',
                            boxShadow: '0 4px 20px rgba(156,222,255,0.3)',
                        },
                    }}
                >
                    View More
                </Button>
            </div>
        </div>
    )
}
