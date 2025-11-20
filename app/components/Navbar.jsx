import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { assets } from '@/assets/assets'

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef()

  // Open/Close mobile menu
  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    closeMenu() // close mobile menu if open
  }

  // Scroll detection for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScroll(true)
      else setIsScroll(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Background Image */}
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] '>
        <Image src={assets.header_bg_color} alt="" className='w-full'/>
      </div>

      {/* Navbar */}
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center z-50 transition-all duration-300
        ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}
      >
        {/* Logo */}
        <div className='flex items-center'>
          <button onClick={() => scrollToSection('top')}>
            <Image src={assets.logo} alt="Logo" className="w-28 cursor-pointer"/>
          </button>
        </div>

        {/* Desktop Menu (centered, slightly nudged right) */}
        <div className='flex-1 flex justify-center'>
          <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ml-17
            ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}`
          }>
            <li><button className='font-ovo' onClick={() => scrollToSection('top')}>Home</button></li>
            <li><button className='font-ovo' onClick={() => scrollToSection('about')}>About me</button></li>
            <li><button className='font-ovo' onClick={() => scrollToSection('services')}>Services</button></li>
            <li><button className='font-ovo' onClick={() => scrollToSection('work')}>My Work</button></li>
            <li><button className='font-ovo' onClick={() => scrollToSection('contact')}>Contact me</button></li>
          </ul>
        </div>

        {/* Right buttons */}
        <div className='flex items-center gap-4'>
          <button>
            <Image src={assets.moon_icon} alt="Dark Mode" className='w-6'/>
          </button>
        </div>

        <div>
          <button
            onClick={() => scrollToSection('contact')}
            className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo'
          >
            Contact <Image src={assets.arrow_icon} alt="Arrow" className='w-3'/>
          </button>

          {/* Mobile menu button */}
          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} alt="Menu" className='w-6'/>
          </button>
        </div>

        {/* Mobile Menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={assets.close_black} alt='Close' className='w-5 cursor-pointer'/>
          </div>
          <li><button className='font-ovo' onClick={() => scrollToSection('about')}>About me</button></li>
          <li><button className='font-ovo' onClick={() => scrollToSection('services')}>Services</button></li>
          <li><button className='font-ovo' onClick={() => scrollToSection('work')}>My Work</button></li>
          <li><button className='font-ovo' onClick={() => scrollToSection('top')}>Home</button></li>
          <li><button className='font-ovo' onClick={() => scrollToSection('contact')}>Contact me</button></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
