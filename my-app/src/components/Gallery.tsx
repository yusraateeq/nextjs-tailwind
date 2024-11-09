import React from 'react'
import Image from 'next/image'
import gallery_1 from '../assets/gallery1.jpeg'
import gallery_2 from '../assets/gallery2.jpeg'
import gallery_3 from '../assets/gallery3.jpeg'
import gallery_4 from '../assets/gallery4.jpeg'
import gallery_5 from '../assets/gallery5.jpeg'
import gallery_6 from '../assets/gallery6.jpeg'

const Gallery = () => {
    return (
        <div className='mt-28' id='gallery'>
            <h2 className='text-center text-6xl font-bold'>Gallery</h2>
            <div className='sm:flex items-center justify-center gap-10 '>
                <div className='mt-20 transition-all'>
                    <Image src={gallery_1} alt="" width={350} className='rounded-lg transition-all hover:-translate-y-10 smd:w-full'/>
                    <Image src={gallery_2} alt="" width={350} className='rounded-lg mt-10 transition-all hover:-translate-y-10 smd:w-full'/>
                </div>
                <div className='mt-20'>
                <Image src={gallery_3} alt="" width={350} className='rounded-lg transition-all hover:-translate-y-10 smd:w-full'/>
                <Image src={gallery_4} alt="" width={350} className='rounded-lg mt-10 transition-all hover:-translate-y-10 smd:w-full'/>
                </div>
                <div className='mt-20'>
                    <Image src={gallery_5} alt="" width={350} className='rounded-lg transition-all hover:-translate-y-10 smd:w-full'/>
                    <Image src={gallery_6} alt="" width={350} className='rounded-lg mt-10 transition-all hover:-translate-y-10 smd:w-full'/>
                </div>

            </div>
        </div>
    )
}

export default Gallery
