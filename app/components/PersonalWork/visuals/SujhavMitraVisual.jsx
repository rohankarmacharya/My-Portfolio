"use client";

import React from 'react'
import { motion, useReducedMotion } from "motion/react"

// Rated history -> matching engine -> ranked, scored recommendations — a
// literal, continuously-alive recommendation-system pipeline.
const HISTORY = [
  { y: 32 },
  { y: 60 },
  { y: 88 },
]

const RESULTS = [
  { y: 30, score: 0.92, label: 'Movie' },
  { y: 64, score: 0.78, label: 'Book' },
  { y: 98, score: 0.61, label: 'Book' },
]

const SujhavMitraVisual = () => {
  const reduce = useReducedMotion()

  return (
    <>
      {/* Rated history (input) */}
      {HISTORY.map((h, i) => (
        <g key={h.y}>
          <rect x="14" y={h.y - 8} width="16" height="16" rx="3" fill="none" stroke="var(--color-fg-muted)" strokeWidth="1.3" opacity="0.6" />
          {[0, 1, 2].map((dot) => (
            <circle
              key={dot}
              cx={18.5 + dot * 4.5}
              cy={h.y}
              r="1.4"
              fill="var(--color-fg-muted)"
              opacity={dot <= i ? 0.85 : 0.25}
            />
          ))}
          <line x1="30" y1={h.y} x2="76" y2="60" stroke="var(--color-border)" strokeWidth="1.3" opacity="0.35" />
          {!reduce && (
            <motion.circle
              r="2.2"
              fill="var(--color-accent)"
              animate={{ cx: [30, 76], cy: [h.y, 60] }}
              transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 0.9, delay: i * 0.5, ease: 'easeIn' }}
            />
          )}
        </g>
      ))}

      {/* Matching engine */}
      <motion.path
        d="M74 40 L104 52 L104 68 L74 80 Z"
        fill="var(--color-accent-soft)"
        stroke="var(--color-accent)"
        strokeWidth="1.6"
        strokeLinejoin="round"
        animate={reduce ? {} : { scale: [1, 1.05, 1] }}
        style={{ transformOrigin: '89px 60px' }}
        transition={{ duration: 1.8, repeat: reduce ? 0 : Infinity, ease: 'easeInOut' }}
      />
      <motion.text
        x="89" y="63" textAnchor="middle" fontSize="7" fontWeight="600" fill="var(--color-accent)" fontFamily="var(--font-mono)"
        animate={reduce ? {} : { opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.8, repeat: reduce ? 0 : Infinity, ease: 'easeInOut' }}
      >
        match
      </motion.text>

      {/* Ranked, scored output */}
      {RESULTS.map((r, i) => (
        <g key={r.y}>
          <line x1="104" y1="60" x2="122" y2={r.y} stroke="var(--color-border)" strokeWidth="1.3" opacity="0.35" />
          {!reduce && (
            <motion.circle
              r="2.2"
              fill="var(--color-accent-2)"
              animate={{ cx: [104, 122], cy: [60, r.y] }}
              transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.1, delay: 0.7 + i * 0.4, ease: 'easeOut' }}
            />
          )}
          <text x="124" y={r.y - 5} fontSize="6.5" fill="var(--color-fg-muted)" fontFamily="var(--font-mono)">
            {r.label}
          </text>
          <rect x="124" y={r.y} width="52" height="7" rx="3.5" fill="var(--color-fg)" opacity="0.08" />
          <motion.rect
            x="124"
            y={r.y}
            height="7"
            rx="3.5"
            fill={i === 0 ? 'var(--color-accent-2)' : 'var(--color-accent)'}
            initial={{ width: 0 }}
            animate={{ width: reduce ? 52 * r.score : [52 * r.score * 0.85, 52 * r.score, 52 * r.score * 0.85] }}
            transition={reduce
              ? { duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }
              : { duration: 2.4, repeat: Infinity, delay: 0.6 + i * 0.3, ease: 'easeInOut' }}
          />
          <text x="178" y={r.y + 6} fontSize="6.5" fill="var(--color-fg-muted)" fontFamily="var(--font-mono)">
            {Math.round(r.score * 100)}%
          </text>
        </g>
      ))}
    </>
  )
}

export default SujhavMitraVisual
