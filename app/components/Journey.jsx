"use client";

import React from 'react'
import { motion } from "motion/react"
import { fadeUp, drawPath, stagger, viewport } from './motionVariants'
import { journey } from '@/app/data/portfolioData'

const Journey = () => {
  return (
    <div id="journey" className="w-full px-[6%] sm:px-[12%] py-24 scroll-mt-20 bg-bg-soft">
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="text-center mb-2 text-sm tracking-[0.2em] uppercase text-accent font-mono">
        Engineering journey
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="text-center text-4xl sm:text-5xl font-semibold tracking-tight mb-16">
        Where I&apos;m headed
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger(0.2)}
        className="max-w-2xl mx-auto relative pl-8"
      >
        <svg className="absolute left-0 top-2 bottom-2 w-8 overflow-visible" preserveAspectRatio="none">
          <motion.line
            x1="4" y1="0" x2="4" y2="100%"
            stroke="var(--color-accent)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            variants={drawPath}
          />
        </svg>

        <div className="flex flex-col gap-12">
          {journey.map((item) => (
            <motion.div key={item.title} variants={fadeUp} className="relative">
              <span className="absolute -left-8 top-1 w-3 h-3 rounded-full bg-accent ring-4 ring-bg-soft" />
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent-2">{item.stage}</span>
              <h3 className="mt-1.5 mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-fg-muted text-sm leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Journey
