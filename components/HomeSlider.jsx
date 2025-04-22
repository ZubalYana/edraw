import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import sliderImg1 from '../public/sliderImg1.png'
import sliderImg2 from '../public/sliderImg2.jpg'
import sliderImg3 from '../public/sliderImg3.jpg'
import sliderBgImg from '../public/sliderBgImg.png'
import SliderElement from './SliderElement'

export default function HomeSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // show only one slide at a time
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
    }

    const sliderInfo = [
        {
            title: 'Men',
            titleHighlighted: 'Collection 2025',
            description: 'Trendy for man and woman collections',
            image: sliderImg1,
        },
        {
            title: 'Women',
            titleHighlighted: 'Collection 2025',
            description: 'Fancy spring collection for women and girls',
            image: sliderImg2,
        },
        {
            title: 'Spring',
            titleHighlighted: 'Collection 2025',
            description: "Show the season you're as much stylish",
            image: sliderImg3,
        },
    ]

    return (
        <div className='w-full h-[550px] relative bg-[#023047] overflow-hidden'>
            <Image
                src={sliderBgImg}
                alt='sliderBgImg'
                className='opacity-50 h-full w-auto absolute right-0 z-0'
            />
            <div className='relative z-10 px-[100px] h-full'>
                <Slider {...settings} className='h-full flex items-center'>
                    {sliderInfo.map((slide, index) => (
                        <SliderElement key={index} {...slide} />
                    ))}
                </Slider>
            </div>
        </div>
    )
}
