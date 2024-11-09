// import React from 'react'
// import logo from '../assets/logo.png'
// const Navbar = () => {
//   return (
//       <nav className='flex items-center justify-between w-full py-2 pl-5 pr-10  list-none h-14 bg-gradient-to-r from-orange-950 to-orange-800 '>
//         {/* <img src={logo} alt="" className='w-16'/> */}
//         <li className='text-3xl font-bold text-white'><a href="#hero">Go Adventure</a></li>
//         <ul className='flex items-center justify-between gap-8 font-medium text-white'>
//             <li><a href="#hero">Home</a></li>
//             <li><a href="#special">Our Specialist</a></li>
//             <li><a href="#about">About Us</a></li>
//             <li><a href="#gallery">Gallery</a></li>
//             <li><a href="#contact">Contact</a></li>
//         </ul>
//       </nav>
//   )
// }

// export default Navbar





"use client"
import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../assets/menu.png'
import Image from 'next/image'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, [])

  const [mobileMenu, setMobileMenu] = useState(false);
  const toogleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={` ${sticky ? 'menu' : ''}`}>
      {/* <Image  src={logo} alt="" className='logo'/> */}
      <div className='w-full text-white py-1 pr-0 pl-0 fixed top-0 left-0 flex justify-between items-center z-10 bg-orange-900'>
        <li className='logo list-none ml-4 text-3xl font-bold'><a href="#hero">Go Adventure</a></li>
        <ul className={mobileMenu ? '' : 'hide-on-mobile'}>
          <li className='inline-block my-3 ml-5 mr-5 list-none'><a href="#hero">Home</a></li>
          <li className='inline-block my-3 ml-5 mr-5 list-none'><a href="#services">Our Specialist</a></li>
          <li className='inline-block my-3 ml-5 mr-5 list-none'><a href="#about">About Us</a></li>
          <li className='inline-block my-3 ml-5 mr-5 list-none'><a href="#gallery">Gallery</a></li>
          <li className='inline-block my-3 ml-5 mr-5 list-none'><a href="#contact">Contact</a></li>
        </ul>
        <Image src={menu_icon} alt="" className='menu-icon' onClick={toogleMenu} />
      </div>
    </nav>
  )
}

export default Navbar
