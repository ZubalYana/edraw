import React from 'react'
import topCollectionImg1 from '../public/topCollection img 1.png'
import topCollectionImg2 from '../public/topCollection img 2.png'
import Image from 'next/image'
import Button from '@mui/material/Button';

export default function TopCollections() {
    return (
        <div className='w-full h-[650px] bg-white flex justify-around items-center px-[20px] lg:px-[70px] xl:px-[100px]'>
            <div className='w-[570px] h-[450px] bg-[#C4C4C4] flex'>
                <div className='w-[55%] h-full flex items-end'>
                    <Image src={topCollectionImg1} alt="topCollectionImg1" className='w-auto max-h-[500px]' />
                </div>
                <div className='w-[45%] flex flex-col justify-center pl-4'>
                    <p className='text-[#023047] text-[12px] font-semibold'>Top Collections</p>
                    <h3 className='text-[24px] font-semibold uppercase'>Women Shop</h3>
                    <Button
                        variant="contained"
                        sx={{
                            textTransform: 'none',
                            backgroundColor: '#023047',
                            color: '#fff',
                            width: '150px',
                            height: '60px',
                            fontSize: '16px',
                            fontWeight: 600,
                            marginTop: '20px',
                            borderRadius: '6px',
                            transition: 'all 0.3s ease-in-out',
                            boxShadow: 'none',
                            '&:hover': {
                                backgroundColor: '#fff',
                                color: '#023047',
                                boxShadow: '0 4px 20px rgba(156,222,255,0.3)',
                            },
                        }}
                    >
                        Shop Now
                    </Button>
                </div>
            </div>
            <div className='w-[570px] h-[450px] bg-[#C4C4C4] flex'>
                <div className='w-[55%] h-full flex items-end'>
                    <Image src={topCollectionImg2} alt="topCollectionImg1" className='w-auto max-h-[420px]' />
                </div>
                <div className='w-[45%] flex flex-col justify-center pl-4'>
                    <p className='text-[#023047] text-[12px] font-semibold'>New Collection</p>
                    <h3 className='text-[24px] font-semibold uppercase'>Summer Collection</h3>
                    <Button
                        variant="contained"
                        sx={{
                            textTransform: 'none',
                            backgroundColor: '#023047',
                            color: '#fff',
                            width: '150px',
                            height: '60px',
                            fontSize: '16px',
                            fontWeight: 600,
                            marginTop: '20px',
                            borderRadius: '6px',
                            transition: 'all 0.3s ease-in-out',
                            boxShadow: 'none',
                            '&:hover': {
                                backgroundColor: '#fff',
                                color: '#023047',
                                boxShadow: '0 4px 20px rgba(156,222,255,0.3)',
                            },
                        }}
                    >
                        Shop Now
                    </Button>
                </div>
            </div>
        </div>
    )
}
