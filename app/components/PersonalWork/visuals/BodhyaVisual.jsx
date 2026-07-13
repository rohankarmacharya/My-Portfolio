"use client";

import React from 'react'
import { motion, useReducedMotion } from "motion/react"

// A hanger over a browsed product rail with a cart pulse — an apparel
// e-commerce storefront, abstracted.
const PRODUCTS = [
  { x: 34 },
  { x: 84 },
  { x: 134 },
]

const BodhyaVisual = () => {
  const reduce = useReducedMotion()

  return (
    <>
      {/* Hanger */}
      <circle cx="100" cy="16" r="4.5" fill="none" stroke="var(--color-accent)" strokeWidth="1.6" />
      <path d="M100 20 L100 26 L66 44 L134 44 Z" fill="none" stroke="var(--color-accent)" strokeWidth="1.6" strokeLinejoin="round" />

      {/* Product rail */}
      {PRODUCTS.map((p, i) => (
        <g key={p.x}>
          <motion.rect
            x={p.x}
            y="58"
            width="32"
            height="40"
            rx="6"
            fill="none"
            stroke="var(--color-fg)"
            strokeWidth="1.4"
            initial={{ opacity: 0.25 }}
            animate={reduce ? { opacity: i === 0 ? 0.9 : 0.25 } : { opacity: [0.25, 0.25, 0.9, 0.25, 0.25] }}
            transition={{ duration: 3.6, repeat: reduce ? 0 : Infinity, delay: i * 1.2, ease: 'easeInOut' }}
          />
          <line x1={p.x + 8} y1="72" x2={p.x + 24} y2="72" stroke="var(--color-fg)" strokeWidth="1.2" opacity="0.35" />
          <line x1={p.x + 8} y1="80" x2={p.x + 20} y2="80" stroke="var(--color-fg)" strokeWidth="1.2" opacity="0.35" />
          <circle cx={p.x + 10} cy="90" r="3" fill="var(--color-accent-2)" opacity="0.6" />
        </g>
      ))}

      {/* Cart */}
      <path
        d="M150 112 h6 l4 20 h20 l5 -14 h-27"
        fill="none"
        stroke="var(--color-accent-2)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="163" cy="138" r="2.6" fill="var(--color-accent-2)" />
      <circle cx="177" cy="138" r="2.6" fill="var(--color-accent-2)" />

      {!reduce && (
        <motion.g
          initial={{ opacity: 0, y: 0, scale: 0.8 }}
          animate={{ opacity: [0, 1, 1, 0], y: [0, -6, -6, -10], scale: [0.8, 1, 1, 0.8] }}
          transition={{ duration: 3.6, repeat: Infinity, delay: 1.4, times: [0, 0.2, 0.7, 1], ease: 'easeOut' }}
        >
          <circle cx="182" cy="108" r="8" fill="var(--color-accent)" />
          <text x="182" y="111" textAnchor="middle" fontSize="8" fontWeight="700" fill="var(--color-accent-fg)">+1</text>
        </motion.g>
      )}
    </>
  )
}

export default BodhyaVisual
