"use client";

import React from 'react'
import { motion, useReducedMotion } from "motion/react"

// Himalayan skyline with a pinned destination and a travelling route below —
// tourism/discovery for Nepal, made literal instead of an abstract map.
const STOPS = [
  { x: 26, y: 120 },
  { x: 82, y: 120 },
  { x: 138, y: 120 },
  { x: 178, y: 120 },
]

const routePath = STOPS.map((s, i) => `${i === 0 ? 'M' : 'L'}${s.x} ${s.y}`).join(' ')

const DigitalYatraVisual = () => {
  const reduce = useReducedMotion()

  return (
    <>
      {/* Sun */}
      <circle cx="150" cy="34" r="12" fill="var(--color-accent-2)" opacity="0.18" />

      {/* Himalayan skyline */}
      <path d="M-5 100 L38 42 L72 100 Z" fill="var(--color-fg)" opacity="0.06" />
      <path d="M45 100 L95 30 L145 100 Z" fill="var(--color-fg)" opacity="0.09" />
      <path d="M100 100 L142 52 L185 100 Z" fill="none" stroke="var(--color-accent)" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M124 78 L142 52 L160 78 Z" fill="var(--color-bg)" opacity="0.9" />

      {/* Pinned destination */}
      <motion.circle
        cx="142" cy="52" r="10"
        fill="var(--color-accent-2)"
        opacity="0.25"
        initial={{ scale: 0.8 }}
        animate={reduce ? { scale: 1.1 } : { scale: [0.8, 1.4, 0.8] }}
        style={{ transformOrigin: '142px 52px' }}
        transition={{ duration: 2, repeat: reduce ? 0 : Infinity, ease: 'easeInOut' }}
      />
      <path
        d="M142 30 c8 0 13 6 13 13 c0 9 -13 22 -13 22 c0 0 -13 -13 -13 -22 c0 -7 5 -13 13 -13Z"
        fill="var(--color-bg)"
        stroke="var(--color-accent)"
        strokeWidth="1.6"
      />
      <circle cx="142" cy="43" r="4" fill="var(--color-accent)" />

      {/* Route below */}
      <path d={routePath} fill="none" stroke="var(--color-border)" strokeWidth="2" strokeDasharray="1 6" strokeLinecap="round" />
      {STOPS.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r={i === 0 ? 5 : 3.5} fill="var(--color-accent)" opacity={i === 0 ? 1 : 0.6} />
      ))}

      {!reduce && (
        <motion.g
          animate={{
            x: STOPS.map((s) => s.x - STOPS[0].x),
            y: STOPS.map((s) => s.y - STOPS[0].y),
          }}
          transition={{ duration: 4.5, repeat: Infinity, repeatDelay: 0.6, ease: 'easeInOut' }}
        >
          <path
            d={`M${STOPS[0].x} ${STOPS[0].y - 7} l5 7 l-5 7 l-2 -7 Z`}
            fill="var(--color-accent-2)"
          />
        </motion.g>
      )}
    </>
  )
}

export default DigitalYatraVisual
