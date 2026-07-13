import React from 'react'
import Image from 'next/image'
import { assets, workData } from '@/assets/assets'
import { motion } from "motion/react"
import { fadeUp, stagger, viewport } from './motionVariants'

const Work = () => {
  return (
    <div id="work" className='w-full px-[12%] py-24 scroll-mt-20'>
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className='text-center mb-2 text-sm tracking-[0.2em] uppercase text-accent font-medium'>
        My portfolio
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className='text-center text-4xl sm:text-5xl font-ovo'>
        My latest projects
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className='text-center max-w-2xl mx-auto mt-5 mb-16 text-fg-muted'>
        Welcome to my portfolio. Here you&apos;ll find the projects I&apos;ve worked on and the services I offer in frontend and backend development.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger(0.12)}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {workData.map((project, index) => (
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            key={index}
            className='group aspect-square bg-no-repeat bg-cover bg-center rounded-2xl relative cursor-pointer overflow-hidden border border-border'
            style={{ backgroundImage: `url(${project.bgImage})` }}
            onClick={() => {
              if (project.link) window.open(project.link, '_blank', 'noopener,noreferrer')
            }}
          >
            <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500' />

            <div className='absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500'>
              <div className="min-w-0">
                <h3 className='font-semibold text-white truncate'>{project.title}</h3>
                <p className='text-sm text-white/70 truncate'>{project.description}</p>
              </div>
              <div className='shrink-0 w-9 h-9 rounded-full bg-white flex items-center justify-center group-hover:bg-accent transition-colors duration-300'>
                <Image src={assets.send_icon} alt='' className='w-4' />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Work
