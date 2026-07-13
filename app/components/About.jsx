import { assets, infoList, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import { fadeUp, fadeIn, scaleIn, stagger, viewport } from './motionVariants'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-24 scroll-mt-20'>
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className='text-center mb-2 text-sm tracking-[0.2em] uppercase text-accent font-medium'>
        Introduction
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className='text-center text-4xl sm:text-5xl font-ovo'>
        About me
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger(0.15)}
        className='flex w-full flex-col lg:flex-row items-center gap-16 lg:gap-20 my-16'>

        {/* Left Image */}
        <motion.div variants={scaleIn} className='relative shrink-0'>
          <div className="absolute -inset-3 rounded-[2rem] bg-accent/10 -z-10" />
          <div className='w-60 sm:w-72 rounded-3xl overflow-hidden border border-border'>
            <Image src={assets.user_image} alt='Rohan Karmacharya' className='w-full' />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div variants={fadeUp} className='flex-1'>
          <p className='mb-10 max-w-2xl text-fg-muted text-lg leading-relaxed'>
            I&apos;m Rohan, a developer specializing in React, Next.js and Python.
            I build elegant, high-performance interfaces and enjoy transforming
            concepts into polished, interactive digital products and applications.
          </p>

          {/* INFO CARDS */}
          <motion.ul
            variants={stagger(0.1)}
            className='grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl'>
            {infoList.map(({ icon, title, description }, index) => (
              <motion.li
                variants={fadeUp}
                whileHover={{ y: -4 }}
                key={index}
                className='group border border-border rounded-2xl p-6 cursor-default hover:border-accent hover:bg-accent-soft transition-colors duration-300'
              >
                <Image src={icon} alt="" className='w-6 mb-4 dark:invert' />
                <h3 className='mb-2 font-semibold group-hover:text-accent transition-colors duration-300'>{title}</h3>
                <p className='text-fg-muted text-sm leading-relaxed'>{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4 variants={fadeUp} className='mt-10 mb-5 text-fg-muted font-ovo'>
            Tools I use
          </motion.h4>

          <motion.ul variants={stagger(0.08)} className='flex flex-wrap items-center gap-3 sm:gap-4'>
            {toolsData.map((tool, index) => (
              <motion.li
                variants={scaleIn}
                whileHover={{ y: -3, scale: 1.08 }}
                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-border rounded-xl cursor-default hover:border-accent hover:bg-accent-soft transition-colors duration-300'
                key={index}
              >
                <Image src={tool} alt='' className='w-5 sm:w-7' />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About
