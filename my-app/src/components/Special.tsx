import React from 'react'
import image_1 from '../assets/image1.jpeg'
import image_2 from '../assets/image2.jpeg'
import image_3 from '../assets/image3.jpeg'
import Image from 'next/image'

const Special = () => {
    return (
        <div className='mt-28' id='special'>
            <p className='text-center text-lg font-sans font-bold'>What We offer</p>
            <h2 className='text-center smm:text-5xl smd:text-3xl font-bold '>Our Specialists</h2>
            <div className='md:flex smd:items-center smd:justify-evenly mt-16 mmd:gap-0 sm:gap-5 smd:p-4'>
                <div className='w-80 border-4 p-4 border-orange-950 bg-orange-950 rounded-lg transition-all hover:-translate-y-10 smd:mb-12 md:m-0 sm:ml-44'>
                    <Image src={image_1} alt='' className='rounded-lg' width={350} />

                    <h2 className='text-2xl font-bold text-center text-white my-4'>Outward Bound</h2>
                    <p className='text-center text-white'>Outward Bound is a leading provider of outdoor adventure programs focused on personal growth, teamwork, and leadership skills.</p>
                </div>

                <div className='w-80 border-4 p-4 border-orange-950 bg-orange-950 rounded-lg transition-all hover:-translate-y-10 md:m-0 smd:mb-20 sm:ml-44'>
                    <Image src={image_2} alt="" width={350} className='rounded-lg ' />
                    <h2 className='text-2xl font-bold text-center text-white  my-4'>Outward Bound</h2>
                    <p className='text-center text-white'>Outward Bound is a leading provider of outdoor adventure programs focused on personal growth, teamwork, and leadership skills.</p>
                </div>

                <div className='w-80 border-4 p-4 border-orange-950 bg-orange-950 rounded-lg transition-all hover:-translate-y-10 md:m-0 sm:ml-44'>
                    <Image src={image_3} alt="" width={350} className='rounded-lg' />
                    <h2 className='text-2xl font-bold text-center text-white my-4'>Outward Bound</h2>
                    <p className='text-center text-white'>Outward Bound is a leading provider of outdoor adventure programs focused on personal growth, teamwork, and leadership skills.</p>
                </div>


            </div>

        </div>
    )
}

export default Special
