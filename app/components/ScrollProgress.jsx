"use client";

import React from 'react'
import { motion, useScroll, useSpring } from "motion/react"

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 32, mass: 0.2 })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-accent to-accent-2 z-[60]"
      aria-hidden="true"
    />
  )
}

export default ScrollProgress
