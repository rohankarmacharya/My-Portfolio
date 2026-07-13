import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import { fadeUp, scaleIn, stagger, viewport } from './motionVariants'
import { philosophyPrinciples } from '@/app/data/portfolioData'

const About = () => {
  return (
    <div id='about' className='w-full px-[6%] sm:px-[12%] py-24 scroll-mt-20'>
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className='text-center mb-2 text-sm tracking-[0.2em] uppercase text-accent font-mono'>
        About &amp; Philosophy
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className='text-center text-4xl sm:text-5xl font-semibold tracking-tight'>
        How I think about backends
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger(0.15)}
        className='flex w-full flex-col lg:flex-row items-center gap-16 lg:gap-20 mt-16 mb-20'>

        {/* Left Image */}
        <motion.div variants={scaleIn} className='relative shrink-0'>
          <div className="absolute -inset-3 rounded-[2rem] bg-accent/15 blur-2xl -z-10" />
          <div className='w-60 sm:w-72 rounded-3xl overflow-hidden glass-panel p-1.5'>
            <div className="rounded-[1.3rem] overflow-hidden">
              <Image src={assets.user_image} alt='Rohan Karmacharya' className='w-full' />
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div variants={stagger(0.12)} className='flex-1 flex flex-col gap-8'>
          <motion.p variants={fadeUp} className='max-w-2xl text-fg-muted text-lg leading-relaxed'>
            I&apos;m Rohan, a backend developer who builds scalable systems in Go, Node.js,
            and TypeScript — clean architecture, REST APIs, and the unglamorous plumbing
            (auth, permissions, background jobs) that makes a product trustworthy in
            production, not just in a demo. I&apos;m as interested in why a system is
            structured a certain way as I am in shipping the feature.
          </motion.p>

          <motion.p variants={fadeUp} className='max-w-xl text-2xl sm:text-[28px] font-medium leading-snug text-fg border-l-2 border-accent pl-5'>
            Every system I build should survive an audit, not just a demo.
          </motion.p>

          <motion.ul variants={stagger(0.08)} className='flex flex-col gap-3 max-w-xl'>
            {[
              'Based in Lalitpur, Nepal',
              'Backend-first, frontend-fluent',
              'Currently exploring Go & distributed systems',
            ].map((fact) => (
              <motion.li key={fact} variants={fadeUp} className='flex items-center gap-3 text-sm text-fg-muted'>
                <span className='w-1.5 h-1.5 rounded-full bg-accent-2 shrink-0' />
                {fact}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>

      {/* Philosophy cards */}
      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger(0.1)}
        className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
        {philosophyPrinciples.map(({ title, description }, index) => (
          <motion.li
            variants={fadeUp}
            whileHover={{ y: -4 }}
            key={index}
            className='group glass-panel rounded-2xl p-7 cursor-default hover:border-accent/50 transition-colors duration-300'
          >
            <span className="font-mono text-xs text-accent-2">{String(index).padStart(2, '0')}</span>
            <h3 className='mt-3 mb-2 font-semibold group-hover:text-accent transition-colors duration-300'>{title}</h3>
            <p className='text-fg-muted text-sm leading-relaxed'>{description}</p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

export default About
