import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"
import { fadeUp, stagger, EASE } from './motionVariants'

const Header = () => {
  return (
    <div id="top" className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* Ambient glow background — accent-tinted, theme aware */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] -translate-x-1/2 w-[38rem] h-[38rem] rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute right-[10%] top-[20%] w-72 h-72 rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger(0.15, 0.1)}
        className="w-11/12 max-w-3xl text-center mx-auto flex flex-col items-center gap-5"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, rotate: -8 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, type: "spring", stiffness: 90, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-accent/30 blur-2xl scale-110" />
          <Image src={assets.profile_img} alt="Rohan Karmacharya" className="relative rounded-full w-32 sm:w-36 ring-4 ring-surface" priority />
        </motion.div>

        {/* Greeting */}
        <motion.h3 variants={fadeUp} className='flex items-end gap-2 text-xl md:text-2xl font-ovo text-fg-muted'>
          Hi! I&apos;m Rohan Karmacharya
          <motion.span
            animate={{ rotate: [0, 15, -10, 15, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 2.5, ease: EASE }}
            className="inline-block origin-[70%_70%]"
          >
            <Image src={assets.hand_icon} alt="" className='w-6' />
          </motion.span>
        </motion.h3>

        {/* Headline */}
        <motion.h1 variants={fadeUp} className='text-4xl sm:text-6xl lg:text-[64px] font-ovo leading-tight'>
          a BSc.CSIT student
        </motion.h1>

        {/* Short description */}
        <motion.p variants={fadeUp} className='max-w-xl mx-auto text-fg-muted'>
          Student. Aspiring full-stack developer. Python coder. Future digital entrepreneur.
          Coffee-fueled learner, code whisperer, and occasional spaghetti-code chef. 🍝
        </motion.p>

        {/* Buttons */}
        <motion.div variants={fadeUp} className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className='px-9 py-3 rounded-full bg-fg text-bg flex items-center gap-2 font-medium shadow-lg shadow-fg/10 hover:bg-accent hover:text-accent-fg transition-colors duration-300'
          >
            Contact me
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M4 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </motion.a>

          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="/CV.pdf"
            download="Rohan_Karmacharya_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className='px-9 py-3 rounded-full border border-border flex items-center gap-2 font-medium hover:border-accent hover:text-accent transition-colors duration-300'
          >
            My resume
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M12 3v11m0 0 4-4m-4 4-4-4M5 19h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-fg-muted"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: EASE }}
          className="w-5 h-8 rounded-full border border-border flex justify-center pt-1.5"
        >
          <span className="w-1 h-1.5 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Header
