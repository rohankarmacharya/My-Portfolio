import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-4'>

      {/* Profile Image */}
      <div>
        <Image src={assets.profile_img} alt="Profile" className='rounded-full w-32'/>
      </div>

      {/* Greeting */}
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>
        Hi! I'm Rohan Karmacharya! 
        <Image src={assets.hand_icon} alt="Hand Icon" className='w-6'/>
      </h3>

      {/* Subtitle */}
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
        a BSc.CSIT student
      </h1>

      {/* Short description */}
      <p className='max-w-2xl mx-auto font-ovo'>
        Student. Aspiring Full Stack Developer. Python coder. Future digital entrepreneur. 
        Coffee-fueled learner, code whisperer, and occasional spaghetti-code chef. 🍝
      </p>

      {/* Buttons */}
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>

        {/* Contact Button */}
        <a
          href="#contact"
          className='px-10 py-3 border-white rounded-full bg-black text-white flex items-center gap-2'
        >
          contact me
          <Image src={assets.right_arrow_white} alt="Arrow" className='w-4'/>
        </a>

        {/* Resume Download Button */}
        <a
          href="/CV.pdf"                  
          download="Rohan_Karmacharya_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gray-100 transition'
        >
          my resume
          <Image src={assets.download_icon} alt="Download Icon" className='w-4'/>
        </a>

      </div>
    </div>
  )
}

export default Header
