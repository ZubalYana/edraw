import React from 'react'
import topCollectionImg1 from '../public/topCollection img 1.png'
import topCollectionImg2 from '../public/topCollection img 2.png'
import Image from 'next/image'
import Button from '@mui/material/Button';

export default function TopCollections() {
    return (
        <div className='w-full h-[650px] mt-6 bg-white flex flex-col justify-around items-center px-[20px] lg:px-[70px] lg:flex-row xl:px-[100px] xl:mt-0'>
            <div className='w-full h-[450px] bg-[#C4C4C4] flex flex-col-reverse p-4 pb-0 xl:w-[570px] xl:flex-row xl:p-0 xl:h-[450px]'>
                <div className='w-[55%] h-full flex items-end mt-5 xl:mt-0'>
                    <Image src={topCollectionImg1} alt="topCollectionImg1" className='w-auto max-h-[300px] xl:max-h-[500px]' />
                </div>
                <div className='w-full flex flex-col justify-center pl-2 xl:pl-4 xl:w-[45%]'>
                    <p className='text-[#023047] text-[12px] font-semibold'>Top Collections</p>
                    <h3 className='text-[18px] font-semibold uppercase xl:text-[24px]'>Women Shop</h3>
                    <Button
                        variant="contained"
                        sx={{
                            textTransform: 'none',
                            backgroundColor: '#023047',
                            color: '#fff',
                            width: { xs: '120px', sm: '140px', xl: '150px' },
                            height: { xs: '50px', sm: '55px', xl: '60px' },
                            fontSize: { xs: '14px', sm: '15px', xl: '16px' },
                            fontWeight: 600,
                            marginTop: { xs: '10px', xl: '20px' },
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
            <div className='w-full h-[450px] bg-[#C4C4C4] flex flex-col-reverse p-4 pb-0 xl:w-[570px] xl:flex-row xl:p-0 xl:h-[450px] mt-10 lg:mt-0 lg:ml-5'>
                <div className='w-[40%] h-full flex items-end mt-5 xl:mt-0'>
                    <Image src={topCollectionImg2} alt="topCollectionImg2" className='w-auto max-h-[300px] xl:max-h-[500px]' />
                </div>
                <div className='w-full flex flex-col justify-center pl-2 xl:pl-4 xl:w-[45%]'>
                    <p className='text-[#023047] text-[12px] font-semibold'>New Collection</p>
                    <h3 className='text-[18px] font-semibold uppercase xl:text-[24px]'>Summer Collection</h3>
                    <Button
                        variant="contained"
                        sx={{
                            textTransform: 'none',
                            backgroundColor: '#023047',
                            color: '#fff',
                            width: { xs: '120px', sm: '140px', xl: '150px' },
                            height: { xs: '50px', sm: '55px', xl: '60px' },
                            fontSize: { xs: '14px', sm: '15px', xl: '16px' },
                            fontWeight: 600,
                            marginTop: { xs: '10px', xl: '20px' },
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
