import React from 'react'

const Contact = () => {
    return (
        <div className='mt-28' id='contact'>
            <div className='bg-gradient-to-r from-orange-950 to-black  items-center justify-evenly pt-16 p-10'>
                <li className='text-4xl font-bold text-white text-center list-none'><a href="#hero">Go Adventure</a></li>

                <div className='list-none text-white smm:flex items-center justify-center gap-4 mt-5'>
                    <li className='text-center smm:text-lg smd:text-2xl'><a href="#hero">Home</a></li>
                    <li className='text-center smm:text-lg smd:text-2xl'><a href="#special">Our Specialist</a></li>
                    <li className='text-center smm:text-lg smd:text-2xl'><a href="#about">About Us</a></li>
                    <li className='text-center smm:text-lg smd:text-2xl'><a href="#gallery">Gallery</a></li>
                    <li className='text-center smm:text-lg smd:text-2xl'><a href="#contact">Contact</a></li>
                </div>
                {/* <div className='flex items-end justify-between gap-6 text-white font-bold mt-8 py-7 mr-4'>
                    <div>
                        @yusrateeq|allright reserved
                    </div>
                    
                    <div className='justify-end'>
                        <h5>Privacy Policy</h5>
                    </div>

                </div> */}
            </div>

        </div>
    )
}

export default Contact
