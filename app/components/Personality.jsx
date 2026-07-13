"use client";

import React from 'react'
import { motion, useReducedMotion } from "motion/react"
import { fadeUp, stagger, viewport } from './motionVariants'
import { personalityItems } from '@/app/data/portfolioData'

const Waveform = () => {
  const reduce = useReducedMotion()
  const bars = [10, 22, 16, 28, 12, 20, 8]
  return (
    <div className="flex items-end gap-1.5 h-14">
      {bars.map((h, i) => (
        <motion.span
          key={i}
          className="w-2 rounded-full bg-accent"
          initial={{ height: h }}
          animate={reduce ? { height: h } : { height: [h, h + 16, h] }}
          transition={{ duration: 1.4, repeat: Infinity, repeatType: 'mirror', delay: i * 0.12, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

const Aperture = () => {
  const reduce = useReducedMotion()
  return (
    <motion.svg
      viewBox="0 0 56 56"
      className="w-14 h-14"
      animate={reduce ? {} : { rotate: 360 }}
      transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
    >
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <rect
          key={angle}
          x="26" y="4" width="4" height="20" rx="2"
          fill="var(--color-accent-2)"
          opacity="0.85"
          transform={`rotate(${angle} 28 28)`}
        />
      ))}
      <circle cx="28" cy="28" r="8" fill="var(--color-bg)" stroke="var(--color-accent-2)" strokeWidth="1.5" />
    </motion.svg>
  )
}

const ScentWisp = () => {
  const reduce = useReducedMotion()
  return (
    <div className="relative w-14 h-14 flex items-end justify-center">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="absolute bottom-2 w-1.5 h-1.5 rounded-full bg-accent"
          style={{ left: `${20 + i * 14}%` }}
          initial={{ opacity: 0, y: 0 }}
          animate={reduce ? { opacity: 0.6 } : { opacity: [0, 0.7, 0], y: -34 }}
          transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.7, ease: 'easeOut' }}
        />
      ))}
      <div className="w-6 h-9 rounded-b-lg rounded-t-sm border-2 border-accent" />
    </div>
  )
}

const MOTIFS = { music: Waveform, cinematography: Aperture, fragrance: ScentWisp }

const Personality = () => {
  return (
    <div className="w-full px-[6%] sm:px-[12%] py-20 scroll-mt-20">
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="text-center mb-10 text-sm tracking-[0.2em] uppercase text-fg-muted font-mono">
        Off the clock
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger(0.12)}
        className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto"
      >
        {personalityItems.map((item) => {
          const Motif = MOTIFS[item.key]
          return (
            <motion.div
              key={item.key}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="glass-panel rounded-2xl p-6 flex flex-col items-center text-center gap-4"
            >
              <Motif />
              <div>
                <h3 className="text-sm font-semibold mb-1">{item.label}</h3>
                <p className="text-xs text-fg-muted leading-relaxed">{item.caption}</p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default Personality
