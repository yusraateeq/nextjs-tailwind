"use client";
import React, { useEffect, useState } from 'react';
import menu_icon from '../assets/menu.png';
import Image from 'next/image';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenu(prev => !prev);

  return (
    <nav className={`w-full fixed top-0 left-0 z-10 ${sticky ? 'bg-orange-900' : 'bg-transparent'} transition-colors`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-8">
        <a href="#hero" className="text-white text-2xl font-bold">Go Adventure</a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white">
          <li><a href="#hero" className="hover:text-gray-300">Home</a></li>
          <li><a href="#services" className="hover:text-gray-300">Our Specialist</a></li>
          <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
          <li><a href="#gallery" className="hover:text-gray-300">Gallery</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <Image
            src={menu_icon}
            alt="Menu icon"
            width={30}
            height={30}
            className="cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-orange-900 text-white w-full px-6 py-4 space-y-4">
          <a href="#hero" onClick={toggleMenu} className="block">Home</a>
          <a href="#services" onClick={toggleMenu} className="block">Our Specialist</a>
          <a href="#about" onClick={toggleMenu} className="block">About Us</a>
          <a href="#gallery" onClick={toggleMenu} className="block">Gallery</a>
          <a href="#contact" onClick={toggleMenu} className="block">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
