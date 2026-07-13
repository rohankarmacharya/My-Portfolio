"use client";

import React from 'react'
import { motion, useReducedMotion } from "motion/react"

// Catalog -> cart -> order flow — commerce request path, abstracted.
const STOPS = [
  { x: 40, y: 75, label: 'Catalog' },
  { x: 100, y: 75, label: 'Cart' },
  { x: 160, y: 75, label: 'Order' },
]

const RbCommerceVisual = () => {
  const reduce = useReducedMotion()

  return (
    <>
      <line x1={STOPS[0].x} y1={STOPS[0].y} x2={STOPS[2].x} y2={STOPS[2].y} stroke="var(--color-border)" strokeWidth="1.5" />
      {[0, 1].map((i) => (
        !reduce && (
          <motion.circle
            key={i}
            r="3.5"
            fill="var(--color-accent)"
            animate={{ cx: [STOPS[0].x, STOPS[2].x], cy: STOPS[0].y }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: i * 1.1 }}
          />
        )
      ))}
      {STOPS.map((s, i) => (
        <g key={s.label}>
          <rect x={s.x - 14} y={s.y - 14} width="28" height="28" rx="8" fill="var(--color-bg)" stroke={i === 2 ? 'var(--color-accent-2)' : 'var(--color-accent)'} strokeWidth="1.6" />
          <text x={s.x} y={s.y + 30} textAnchor="middle" fontSize="8" fill="var(--color-fg-muted)" fontFamily="var(--font-mono)">
            {s.label}
          </text>
        </g>
      ))}
    </>
  )
}

export default RbCommerceVisual
