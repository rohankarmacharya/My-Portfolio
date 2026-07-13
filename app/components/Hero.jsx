"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import { fadeUp, stagger, blurIn, EASE } from './motionVariants'
import AuroraBackground from './AuroraBackground'
import MagneticButton from './MagneticButton'
import { heroLines, heroFloatingTags } from '@/app/data/portfolioData'

const FLOAT_POSITIONS = [
  { top: '14%', left: '6%', delay: 0 },
  { top: '24%', right: '9%', delay: 0.6 },
  { top: '66%', left: '5%', delay: 1.1 },
  { top: '76%', right: '7%', delay: 0.3 },
  { top: '44%', left: '3%', delay: 1.6 },
  { top: '8%', right: '24%', delay: 0.9 },
  { top: '52%', right: '3%', delay: 1.3 },
  { top: '88%', left: '20%', delay: 0.45 },
]

const Hero = () => {
  const reduceMotion = useReducedMotion()
  const [lineIndex, setLineIndex] = useState(0)

  useEffect(() => {
    if (reduceMotion) return
    const id = setInterval(() => {
      setLineIndex((i) => (i + 1) % heroLines.length)
    }, 2800)
    return () => clearInterval(id)
  }, [reduceMotion])

  return (
    <div id="top" className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <AuroraBackground interactive />

      {/* Floating tech badges — decorative, hidden from screen readers */}
      <div className="hidden md:block absolute inset-0 -z-10" aria-hidden="true">
        {heroFloatingTags.map((tag, i) => {
          const pos = FLOAT_POSITIONS[i % FLOAT_POSITIONS.length]
          return (
            <motion.span
              key={tag}
              className="absolute font-mono text-xs px-3 py-1.5 rounded-full border border-border text-fg-muted/70 glass-panel"
              style={pos}
              initial={{ opacity: 0 }}
              animate={reduceMotion ? { opacity: 0.7 } : {
                opacity: 0.7,
                y: [0, -14, 0],
              }}
              transition={reduceMotion ? { duration: 0.6 } : {
                opacity: { duration: 0.8, delay: 0.6 + pos.delay },
                y: { duration: 6 + i, repeat: Infinity, ease: 'easeInOut', delay: pos.delay },
              }}
            >
              {tag}
            </motion.span>
          )
        })}
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
          <div className="relative rounded-full p-1 glass-panel">
            <Image src={assets.profile_img} alt="Rohan Karmacharya" className="rounded-full w-28 sm:w-32" priority />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p variants={fadeUp} className='text-sm tracking-[0.25em] uppercase text-accent font-mono'>
          Hi, I&apos;m Rohan Karmacharya
        </motion.p>

        {/* Headline */}
        <motion.h1 variants={fadeUp} className='text-5xl sm:text-7xl lg:text-[84px] font-semibold leading-[1.05] tracking-tight'>
          Backend
          <br />
          <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
            Developer
          </span>
        </motion.h1>

        {/* Rotating descriptor */}
        <motion.div variants={fadeUp} className="h-8 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={lineIndex}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, filter: 'blur(8px)', y: -8, transition: { duration: 0.4, ease: EASE } }}
              variants={blurIn}
              className="max-w-xl mx-auto text-fg-muted font-mono text-sm sm:text-base"
            >
              {heroLines[lineIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Buttons */}
        <motion.div variants={fadeUp} className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
          <MagneticButton
            as="a"
            href="#work"
            className='px-9 py-3 rounded-full bg-fg text-bg flex items-center gap-2 font-medium shadow-lg shadow-fg/10 hover:bg-accent hover:text-accent-fg transition-colors duration-300'
          >
            View my work
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M4 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </MagneticButton>

          <MagneticButton
            as="a"
            href="/CV.pdf"
            download="Rohan_Karmacharya_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className='px-9 py-3 rounded-full border border-border flex items-center gap-2 font-medium hover:border-accent hover:text-accent transition-colors duration-300'
          >
            My résumé
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M12 3v11m0 0 4-4m-4 4-4-4M5 19h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-fg-muted"
      >
        <span className="text-xs tracking-[0.2em] uppercase font-mono">Scroll</span>
        <motion.div
          animate={reduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: EASE }}
          className="w-5 h-8 rounded-full border border-border flex justify-center pt-1.5"
        >
          <span className="w-1 h-1.5 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero
