import { assets, infoList, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-ovo'>
        Introduction
      </h4>

      <h2 className='text-center text-5xl font-ovo'>
        About me
      </h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        
        {/* Left Image */}
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
        </div>

        {/* Right Content */}
        <div className='flex-1'>
          <p className='mb-10 max-w-2xl font-ovo'>
            I’m Rohan, a developer specializing in React, Next.js and Python. 
            I build elegant, high-performance interfaces and enjoy transforming 
            concepts into polished, interactive digital products and applications.
          </p>

          {/* INFO CARDS */}
          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              
              <li
                key={index}
                className='
                  border border-gray-400/40 
                  rounded-xl p-6 cursor-pointer
                  
                  /* Hover Effects */
                  hover:-translate-y-2 
                  hover:scale-[1.03]
                  hover:bg-[#6b2782]/10
                  hover:border-[#6b2782]
                  hover:shadow-[0px_0px_20px_rgba(107,39,130,0.3)]
                  
                  transition-all duration-300 ease-out
                '
              >
                <Image src={icon} alt={title} className='w-7 mt-3' />
                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                <p className='text-gray-600 text-sm'>{description}</p>
              </li>

            ))}
          </ul>
          <h4 className='my-6 text-gray-700 font-ovo'>Tools I use</h4>
          <ul className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index)=>(
                <li className='flex items-center justify-center
                w-12 sm:w-14 aspect-square border border-gray-400
                rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:bg-[#6b2782]/10'
                key={index}>
                    <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
