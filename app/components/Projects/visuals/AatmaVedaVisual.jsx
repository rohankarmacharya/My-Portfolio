"use client";

import React from 'react'
import { motion, useReducedMotion } from "motion/react"

// Stacked content documents converging into a single API boundary, abstracted.
const AatmaVedaVisual = () => {
  const reduce = useReducedMotion()
  const docs = [30, 55, 80]

  return (
    <>
      {docs.map((y, i) => (
        <motion.rect
          key={y}
          x="36"
          y={y}
          width="60"
          height="16"
          rx="4"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1.4"
          opacity="0.8"
          initial={{ x: 36 }}
          whileInView={reduce ? {} : { x: [36, 40, 36] }}
          viewport={{ once: true }}
          transition={{ duration: 3, repeat: reduce ? 0 : Infinity, delay: i * 0.3, ease: 'easeInOut' }}
        />
      ))}
      {docs.map((y) => (
        <line key={`l-${y}`} x1="96" y1={y + 8} x2="140" y2="63" stroke="var(--color-border)" strokeWidth="1.2" />
      ))}
      <circle cx="150" cy="63" r="12" fill="var(--color-bg)" stroke="var(--color-accent-2)" strokeWidth="1.8" />
      <text x="150" y="66" textAnchor="middle" fontSize="7" fill="var(--color-accent-2)" fontFamily="var(--font-mono)">API</text>
    </>
  )
}

export default AatmaVedaVisual
