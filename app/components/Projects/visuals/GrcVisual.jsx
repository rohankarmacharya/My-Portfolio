"use client";

import React from 'react'
import { motion, useReducedMotion } from "motion/react"

// Shield with a recurring verification sweep and an orbiting ring of audit-log
// ticks — governance/compliance/RBAC, abstracted, unmistakably in motion.
const GrcVisual = () => {
  const reduce = useReducedMotion()
  const ticks = [0, 90, 180, 270]

  return (
    <>
      <path
        d="M100 28 L140 44 V78 C140 104 122 122 100 130 C78 122 60 104 60 78 V44 Z"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="1.6"
        opacity="0.8"
      />
      <motion.path
        d="M84 78 L96 90 L118 62"
        fill="none"
        stroke="var(--color-accent-2)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={reduce ? { pathLength: 1, opacity: 1 } : { pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
        transition={reduce ? { duration: 0.6 } : { duration: 3.2, repeat: Infinity, repeatDelay: 0.6, times: [0, 0.35, 0.85, 1], ease: 'easeInOut' }}
      />

      <motion.g
        style={{ transformOrigin: '100px 78px' }}
        animate={reduce ? {} : { rotate: 360 }}
        transition={{ duration: 14, repeat: reduce ? 0 : Infinity, ease: 'linear' }}
      >
        {ticks.map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          const cx = 100 + Math.cos(rad) * 58
          const cy = 78 + Math.sin(rad) * 58
          return (
            <motion.circle
              key={angle}
              cx={cx}
              cy={cy}
              r="4"
              fill="var(--color-accent)"
              initial={{ opacity: 0.3 }}
              animate={reduce ? { opacity: 0.7 } : { opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2.4, repeat: reduce ? 0 : Infinity, delay: i * 0.4, ease: 'easeInOut' }}
            />
          )
        })}
      </motion.g>
    </>
  )
}

export default GrcVisual
