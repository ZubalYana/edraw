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
        slidesToShow: 1,
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
            description: 'Fancy spring collection for women',
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
        <div className='w-full h-[470px] relative bg-[#023047] overflow-hidden lg:h-[724px]'>
            <Image
                src={sliderBgImg}
                alt='sliderBgImg'
                className='opacity-50 w-full h-auto absolute right-0 z-0 lg:h-full lg:w-auto'
            />
            <div className='relative z-10 px-[30px] h-full lg:px-[100px]'>
                <Slider {...settings} className='h-full flex items-center'>
                    {sliderInfo.map((slide, index) => (
                        <SliderElement key={index} {...slide} />
                    ))}
                </Slider>
            </div>
        </div>
    )
}
