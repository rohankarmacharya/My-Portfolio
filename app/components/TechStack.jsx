"use client";

import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from "motion/react"
import { fadeUp, scaleIn, stagger, viewport } from './motionVariants'
import { techStack, stats } from '@/app/data/portfolioData'

const AnimatedCounter = ({ value, suffix = '' }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView || reduceMotion) return
    const duration = 1200
    const start = performance.now()
    let raf
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, reduceMotion])

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {reduceMotion ? value : display}{suffix}
    </span>
  )
}

const Chip = ({ name, icon: Icon }) => (
  <motion.div
    variants={scaleIn}
    whileHover={{ y: -4, scale: 1.04 }}
    className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass-panel hover:border-accent/50 transition-colors duration-300 cursor-default"
  >
    {Icon ? (
      <Icon className="w-4 h-4 text-fg-muted group-hover:text-accent transition-colors duration-300 shrink-0" />
    ) : (
      <span className="w-4 h-4 rounded-sm bg-accent/15 text-accent text-[9px] font-mono font-bold flex items-center justify-center shrink-0">
        {name.slice(0, 1)}
      </span>
    )}
    <span className="text-sm font-medium">{name}</span>
  </motion.div>
)

const TechStack = () => {
  return (
    <div id="stack" className="w-full px-[6%] sm:px-[12%] py-24 scroll-mt-20 bg-bg-soft">
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="text-center mb-2 text-sm tracking-[0.2em] uppercase text-accent font-mono">
        The toolbox
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="text-center text-4xl sm:text-5xl font-semibold tracking-tight">
        Tech stack
      </motion.h2>

      {/* Stats strip */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger(0.1)}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mt-14 mb-20"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={fadeUp} className="glass-panel rounded-2xl p-6 text-center">
            <div className="text-3xl sm:text-4xl font-semibold text-accent">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-xs text-fg-muted leading-snug">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Category groups */}
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {techStack.map((group) => (
          <motion.div
            key={group.category}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={stagger(0.06)}
          >
            <motion.h3 variants={fadeUp} className="mb-4 text-sm font-mono uppercase tracking-[0.15em] text-fg-muted">
              {group.category}
            </motion.h3>
            <motion.div variants={stagger(0.05)} className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <Chip key={item.name} {...item} />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default TechStack
