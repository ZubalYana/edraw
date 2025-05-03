'use client'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function Footer() {
    return (
        <div className='w-full bg-[#F3F3F3] text-sm text-gray-700 py-10'>
            <div className='max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-10 justify-between'>
                <div className='w-full lg:w-[370px]'>
                    <h1 className='text-2xl font-bold text-[#0A3558] mb-2'>ebRaw</h1>
                    <p className='mb-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                    </p>
                    <div className='flex space-x-3 mb-2 text-[#0A3558]'>
                        <FacebookIcon className='cursor-pointer' />
                        <TwitterIcon className='cursor-pointer' />
                        <InstagramIcon className='cursor-pointer' />
                        <LinkedInIcon className='cursor-pointer' />
                    </div>
                    <a href='#' className='underline text-gray-600'>Check our shop in Google Map</a>
                </div>

                <div className='w-full lg:w-[60%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {[
                        {
                            title: 'Support Links',
                            links: ['Product Guides', 'Terms & Conditions', 'Delivery Policy', 'Privacy Policy', 'Feedback']
                        },
                        {
                            title: 'Quick Links',
                            links: ['Company', 'Terms & Conditions', 'Delivery Policy', 'Privacy Policy', 'Feedback']
                        },
                        {
                            title: 'Support Links',
                            links: ['Product Guides', 'Terms & Conditions', 'Delivery Policy', 'Privacy Policy', 'Feedback']
                        },
                        {
                            title: 'Help',
                            links: ['Product Guides', 'Terms & Conditions', 'Delivery Policy', 'Privacy Policy', 'Feedback']
                        }
                    ].map((section, i) => (
                        <div key={i}>
                            <h2 className='font-semibold mb-2'>{section.title}</h2>
                            <ul>
                                {section.links.map((link, j) => (
                                    <li key={j}><a href='#' className='hover:underline'>{link}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
