"use client";

import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react"

/**
 * Wraps any element (button/anchor) with a subtle magnetic pull toward the
 * cursor on hover. Disabled entirely under prefers-reduced-motion, where it
 * renders as a plain element with no transform tricks.
 */
const MagneticButton = ({ as: Tag = 'button', className = '', children, strength = 0.35, ...props }) => {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 })

  const handleMouseMove = (e) => {
    if (reduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * strength)
    y.set((e.clientY - rect.top - rect.height / 2) * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const MotionTag = motion[Tag] ?? motion.button

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={reduceMotion ? undefined : { x: springX, y: springY }}
      whileTap={{ scale: 0.96 }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  )
}

export default MagneticButton
