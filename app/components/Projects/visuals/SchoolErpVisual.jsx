"use client";

import React from 'react'
import { motion, useReducedMotion } from "motion/react"

// Installment bars fill in on reveal, then a recurring scan sweeps across the
// ledger — an unmistakable, continuous "still checking installments" motion.
const SchoolErpVisual = () => {
  const reduce = useReducedMotion()
  const rows = [
    { y: 40, width: 0.9 },
    { y: 64, width: 0.65 },
    { y: 88, width: 0.4 },
    { y: 112, width: 0.2 },
  ]

  return (
    <>
      {rows.map((row, i) => (
        <g key={row.y}>
          <rect x="40" y={row.y} width="120" height="10" rx="5" fill="var(--color-fg)" opacity="0.08" />
          <motion.rect
            x="40"
            y={row.y}
            height="10"
            rx="5"
            fill={i === 0 ? 'var(--color-accent-2)' : 'var(--color-accent)'}
            initial={{ width: 0 }}
            whileInView={{ width: 120 * row.width }}
            viewport={{ once: true }}
            transition={{ duration: reduce ? 0.4 : 1.1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          />
        </g>
      ))}

      {!reduce && (
        <motion.rect
          y="26"
          width="3"
          height="98"
          rx="1.5"
          fill="var(--color-accent-2)"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: [40, 160], opacity: [0, 0.9, 0.9, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 0.8, delay: 1.3, ease: 'easeInOut' }}
        />
      )}
    </>
  )
}

export default SchoolErpVisual
