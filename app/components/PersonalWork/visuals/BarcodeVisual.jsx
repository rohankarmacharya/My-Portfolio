"use client";

import React from 'react'
import { motion, useReducedMotion } from "motion/react"

// A barcode pattern with a scanning laser sweep and a decode confirmation —
// literal, since the whole point of this project is reading codes.
const BAR_WIDTHS = [3, 1, 2, 1, 4, 2, 1, 3, 2, 1, 1, 4, 2, 3, 1, 2]

const BARS = BAR_WIDTHS.reduce((acc, w) => {
  const prevEnd = acc.length ? acc[acc.length - 1].x + acc[acc.length - 1].w * 2 + 3 : 40
  acc.push({ x: prevEnd, w })
  return acc
}, [])

const BarcodeVisual = () => {
  const reduce = useReducedMotion()

  return (
    <>
      {BARS.map((bar, i) => (
        <rect key={i} x={bar.x} y="44" width={bar.w * 2} height="62" fill="var(--color-fg)" opacity="0.55" />
      ))}

      {!reduce && (
        <motion.rect
          y="40"
          width="4"
          height="70"
          rx="2"
          fill="var(--color-accent-2)"
          initial={{ x: 36, opacity: 0 }}
          animate={{ x: [36, 164], opacity: [0, 0.9, 0.9, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 0.9, ease: 'easeInOut' }}
        />
      )}

      <motion.g
        initial={{ opacity: 0, scale: 0.7 }}
        animate={reduce ? { opacity: 1, scale: 1 } : { opacity: [0, 0, 1, 1, 0], scale: [0.7, 0.7, 1, 1, 0.7] }}
        transition={{ duration: 3.1, repeat: reduce ? 0 : Infinity, times: [0, 0.68, 0.78, 0.92, 1], ease: 'easeOut' }}
      >
        <circle cx="100" cy="120" r="12" fill="var(--color-accent)" />
        <path d="M94 120 l4 4 8-8" stroke="var(--color-bg)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </motion.g>
    </>
  )
}

export default BarcodeVisual
