import React from 'react'
import { useQuery } from '@tanstack/react-query'
import ReviewCard from './ReviewCard'

export default function Reviews() {
    let reviews = [
        {
            name: 'Wade Warren',
            position: 'UI Designer',
            rate: 5,
            img: '/review1.png',
            text: 'These settings don’t provide big changes but only some small css changes in spaces or borders for example.'
        },
        {
            name: 'Wade Warren',
            position: 'UI Designer',
            rate: 5,
            img: '/review2.png',
            text: 'These settings don’t provide big changes but only some small css changes in spaces or borders for example.'
        },
        {
            name: 'Wade Warren',
            position: 'UI Designer',
            rate: 4,
            img: '/review3.png',
            text: 'These settings don’t provide big changes but only some small css changes in spaces or borders for example.'
        },
        {
            name: 'Wade Warren',
            position: 'UI Designer',
            rate: 5,
            img: '/review4.png',
            text: 'These settings don’t provide big changes but only some small css changes in spaces or borders for example.'
        },
    ]
    return (
        <div className='w-full h-auto flex flex-col items-center py-10 px-[20px]'>
            <h1 className='text-[22px] w-[90%] text-center flex justify-center font-bold lg:text-[30px] lg:w-auto'>What Say Our Regular Customer</h1>
            <p className='w-[90%] text-[10px] font-normal text-[#666666] text-center lg:w-[571px] lg:text-[16px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
            <div className='w-full flex flex-col mt-7 items-center md:flex-row md:flex-wrap md:px-20 md:gap-x-5 lg:flex-nowrap lg:justify-between lg:px-[20px] xl:px-20'>
                {reviews.map((item, index) => (
                    <ReviewCard
                        key={index}
                        name={item.name}
                        position={item.position}
                        rate={item.rate}
                        img={item.img}
                        text={item.text}
                    />
                ))}
            </div>
        </div>
    )
}
