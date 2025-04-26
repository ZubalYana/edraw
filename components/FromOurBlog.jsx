import React from 'react'
import blogPost1Img from '../public/blog post 1 img.png'
import blogPost2Img from '../public/blog post 2 img.png'
import blogPost3Img from '../public/blog post 3 img.png'
import BlogCart from './BlogCart'
export default function FromOurBlog() {
    let blogPosts = [
        {
            type: 'Fashion',
            img: blogPost1Img,
            title: '2021’S Biggest Sneaker Is Getting Us So Pumped For Summer',
            date: 'DESIGN JULY 11, 2021',
        },
        {
            type: 'Style',
            img: blogPost2Img,
            title: '2021’S Biggest Sneaker Is Getting Us So Pumped For Summer',
            date: 'DESIGN JULY 11, 2021',
        },
        {
            type: 'Sport',
            img: blogPost3Img,
            title: '2021’S Biggest Sneaker Is Getting Us So Pumped For Summer',
            date: 'DESIGN JULY 11, 2021',
        }
    ]
    return (
        <div className='w-full h-auto flex flex-col items-center bg-[#F3F3F3] py-10 px-[20px]'>
            <h1 className='text-[22px] w-[90%] text-center flex justify-center font-bold lg:text-[30px] lg:w-auto'>From the blog</h1>
            <p className='w-[90%] text-[10px] font-normal text-[#666666] text-center lg:w-[571px] lg:text-[16px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
            <div className='w-full flex flex-col justify-between mt-7 xl:flex-row xl:px-20'>
                {blogPosts.map((item, index) => (
                    <BlogCart
                        key={index}
                        type={item.type}
                        img={item.img}
                        title={item.title}
                        date={item.date}
                    />
                ))}

            </div>
        </div>
    )
}
