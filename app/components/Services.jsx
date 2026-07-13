import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import { fadeUp, stagger, viewport } from './motionVariants'

const Services = () => {
  return (
    <div id="services" className='w-full px-[12%] py-24 scroll-mt-20 bg-bg-soft'>
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className='text-center mb-2 text-sm tracking-[0.2em] uppercase text-accent font-medium'>
        What I offer
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className='text-center text-4xl sm:text-5xl font-ovo'>
        My services
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="text-center max-w-2xl mx-auto mt-5 mb-16 text-fg-muted">
        I create visually polished web interfaces, optimize user experiences,
        and build custom backend APIs with Python to support data handling,
        authentication, and full-stack functionality.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger(0.12)}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="group border border-border bg-surface rounded-2xl px-7 py-9 hover:border-accent transition-colors duration-300"
          >
            <Image src={icon} alt="" className="w-11 h-11 rounded-xl" />
            <h3 className="text-lg my-4 font-semibold group-hover:text-accent transition-colors duration-300">{title}</h3>
            <p className="text-sm text-fg-muted leading-6">{description}</p>
            {link ? (
              <a href={link} className="inline-flex items-center gap-2 text-sm mt-5 text-accent font-medium">
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M4 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </a>
            ) : null}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Services
