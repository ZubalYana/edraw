import React from 'react'
import InstagramPost from './InstagramPost'
export default function Instagram() {
    let posts = [
        {
            img: '/instagram post 1.png',
        },
        {
            img: '/instagram post 2.png',
        },
        {
            img: '/instagram post 3.png',
        },
        {
            img: '/instagram post 4.png',
        },
    ]
    return (
        <div className='w-full h-auto flex flex-col items-center py-10 px-[20px] bg-[#F3F3F3]'>
            <h1 className='text-[22px] w-[90%] text-center flex justify-center font-bold lg:text-[24px] lg:w-auto'>Follow us in instagram @graphic_raz</h1>
            <div className='w-full flex flex-col justify-between mt-7 md:flex-wrap md:flex-row md:px-10 lg:px-20 xl:flex-nowrap'>
                {posts.map((item, index) => (
                    <InstagramPost key={index} img={item.img} />
                ))}
            </div>
        </div>
    )
}
