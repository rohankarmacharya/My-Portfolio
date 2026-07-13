"use client";

import React from 'react'
import { motion, useReducedMotion } from "motion/react"

// Three accounting primitives (Contacts / Journals / Accounts) in sync — a
// travelling pulse along the triangle stands in for the SDK keeping them consistent.
const NODES = [
  { id: 'contacts', x: 60, y: 108, label: 'Contacts' },
  { id: 'journals', x: 100, y: 42, label: 'Journals' },
  { id: 'accounts', x: 140, y: 108, label: 'Accounts' },
]

const TiggVisual = () => {
  const reduce = useReducedMotion()

  return (
    <>
      <polygon
        points={NODES.map((n) => `${n.x},${n.y}`).join(' ')}
        fill="none"
        stroke="var(--color-border)"
        strokeWidth="1.5"
      />
      {!reduce && (
        <motion.circle
          r="4"
          fill="var(--color-accent-2)"
          animate={{
            cx: [NODES[0].x, NODES[1].x, NODES[2].x, NODES[0].x],
            cy: [NODES[0].y, NODES[1].y, NODES[2].y, NODES[0].y],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
      )}
      {NODES.map((n) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r="7" fill="var(--color-bg)" stroke="var(--color-accent)" strokeWidth="1.6" />
          <text x={n.x} y={n.y + 20} textAnchor="middle" fontSize="8" fill="var(--color-fg-muted)" fontFamily="var(--font-mono)">
            {n.label}
          </text>
        </g>
      ))}
    </>
  )
}

export default TiggVisual
