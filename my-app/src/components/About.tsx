import React from 'react'
import image_1 from '../assets/image1.jpeg'
import image_2 from '../assets/image2.jpeg'
import image_3 from '../assets/image3.jpeg'
import Image from 'next/image'

const About = () => {
    return (
        <div className='mt-36' id='about'>

            <div className='mmd:flex items-center justify-around bg-gray-200'>
                <div className='sm:ml-10 sm:mr-10  pt-10 pb-12'>
                    <div className=' border-l-8 border-orange-800 border-spacing-7'>
                        <h2 className='text-5xl font-bold mb-8 font-mono ml-4'>About</h2>
                    </div>
                    <p className='mb-4 smm:text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam cumque quam voluptatem, aperiam maiores a, nulla enim sed dolorem saepe distinctio? Odio, repudiandae. Ea nihil vero illum maiores rerum blanditiis.</p>
                    <p className='mb-4 smm:text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi et officiis, inventore nisi eos dolores quas fugiat id non laboriosam voluptas sunt facilis quasi quod numquam consequatur harum iure? Cumque.</p>
                    <p className='mb-4 smm:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eum natus ut corrupti placeat dolorum laborum eius fuga soluta. Atque esse facere aut animi delectus qui facilis provident distinctio unde.</p>
                    <button className='text-center  border-2 border-gray-700 rounded-full w-36 h-12 mt-4 font-bold'>Book Now</button>
                </div>
                <div>
                    <Image src={image_1} alt="" width={1700} />
                </div>
            </div>


            <div className='mmd:flex items-center justify-around bg-gray-200 mt-28'>
                <div>
                    <Image src={image_2} alt="" width={3500} />
                </div>
                <div className='sm:mr-10 sm:pl-12 pt-10 pb-12'>
                    <div className=' border-l-8 border-orange-800 border-spacing-7'>
                        <h2 className='smmd:text-4xl smd:text-3xl font-bold mb-8 font-mono ml-4'>Reach New Heights</h2>
                    </div>
                    <p className='mb-4'>Experience the thrill of hot air ballooning as you float above stunning landscapes and capture breathtaking views from a whole new perspective. Go Adventure offers unforgettable airborne experiences that will take your wanderlust to new heights. Let us elevate your journey and help you make memories that last a lifetime.</p>
                    <div className=' border-l-8 border-orange-800 border-spacing-7'>

                        <h2 className='smmd:text-4xl smd:text-2xl font-bold mb-8 font-mono ml-4'>Unleash Your Adventure</h2>
                    </div>

                    <p className='mb-4'>Whether you are seeking serene skies or adrenaline-packed adventures, Go Adventure is here to make your dreams a reality. From tranquil hot air balloon rides to thrilling outdoor explorations, our tours are crafted to bring out the adventurer in you. Discover awe-inspiring destinations and create stories worth sharing with Go Adventure.</p>
                    <button className='text-center  border-2 border-gray-700 rounded-full w-36 h-12 mt-4 font-bold'>Find Out More</button>
                </div>

            </div>

            <div className='mmd:flex items-center justify-around bg-gray-200 mt-28'>

                <div className='sm:mr-10 sm:pl-12 pt-10 pb-12'>
                    <div className=' border-l-8 border-orange-800 border-spacing-7'>
                        <h2 className='smmd:text-4xl smd:text-2xl font-bold mb-8 font-mono ml-4'>Escape to Paradise</h2>
                    </div>
                    <p className='mb-4'>Discover pristine beaches, crystal-clear waters, and hidden tropical gems with Go Adventure. Let us guide you to paradise, where every moment is filled with peace, beauty, and unforgettable scenery. Whether it’s a solo journey or a family trip, we make your dream getaway a reality.</p>
                    <div className=' border-l-8 border-orange-800 border-spacing-7'>

                        <h2 className='smmd:text-4xl smd:text-2xl font-bold mb-8 font-mono ml-4'>Sail into Adventure</h2>
                    </div>

                    <p className='mb-4'>Set sail on a journey of discovery with Go Adventure. Explore stunning coastlines, vibrant marine life, and breathtaking islands. Our customized tours offer the perfect escape from the ordinary, giving you the freedom to explore and experience nature at its best.</p>
                    <button className='text-center  border-2 border-gray-700 rounded-full w-36 h-12 mt-4 font-bold'>Find Out More</button>
                </div>
                <div>
                    <Image src={image_3} alt="" width={2300} />
                </div>
            </div>

        </div>
    )
}

export default About
