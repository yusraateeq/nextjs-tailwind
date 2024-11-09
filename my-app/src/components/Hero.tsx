// import React from 'react'

// const Hero = () => {
//     return (
//         <div id='hero'>
//             <div className='w-full h-screen '>
//                 <img className=' left-0 w-full h-screen object-cover relative' src="https://th.bing.com/th/id/R.7f5990fd65e82e94a300a0f76ee1cafd?rik=tgw98kM%2bUebnBw&pid=ImgRaw&r=0" alt="" />
//                 <div className='bg-black/50 absolute top-14 left-0 w-full h-screen' />
//                 <div className='absolute top-0  h-full flex flex-col justify-center text-white ml-20 w-[55%]'>
//                     <p className='text-xl font-medium'>Welcome to Adventure Travel</p>
//                     <h1 className='text-7xl mt-4 font-bold'>The World is witing</h1>
//                     <p className='text-xl mt-4 font-medium'>Welcome to Adventure Travel, your gateway to unforgettable journeys and thrilling experiences. Whether you're dreaming of mountain treks, scenic tours, or discovering hidden gems, we’re here to make your travel adventure extraordinary. Let us take you beyond the ordinary and into the heart of exploration!</p>
//                     <button className='text-center text-white border-2 rounded-full w-36 h-12 mt-4 font-bold'>Reserve Now</button>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default Hero




import React from 'react'
import './Hero.css'


const Hero = () => {
  return (
    <div className='hero w-full text-white flex items-center justify-start sm:pl-20 smd:pl-4 smd:pr-4' id='hero'>
      <div className="hero-text max-w-screen-md">
        <p className='md:text-xl smd:text-sm font-medium'>Welcome to Adventure Travel</p>
        <h1 className='md:text-7xl sm:text-5xl mt-4 font-bold smd:text-3xl '>The World is witing</h1>
                <p className='md:text-xl mt-4 font-medium'>Welcome to Adventure Travel, your gateway to unforgettable journeys and thrilling experiences. Whether you're dreaming of mountain treks, scenic tours, or discovering hidden gems, we’re here to make your travel adventure extraordinary. Let us take you beyond the ordinary and into the heart of exploration!</p>
        <button className='button bg-white text-orange-900 font-bold sm:py-3 sm:pl-8 sm:pr-8 smd:py-1 pl-4 pr-4 rounded-full cursor-pointer border-none outline-none'>Explore more</button>
      </div>
    </div>
  )
}

export default Hero




