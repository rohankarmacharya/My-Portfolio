"use client";

import React from 'react'
import { motion, useReducedMotion } from "motion/react"
import { fadeUp, drawPath, stagger, viewport } from './motionVariants'
import { architectureNodes, architectureEdges } from '@/app/data/portfolioData'

const POSITIONS = {
  client: { x: 60, y: 150 },
  gateway: { x: 220, y: 150 },
  auth: { x: 380, y: 150 },
  service: { x: 540, y: 150 },
  cache: { x: 680, y: 80 },
  db: { x: 680, y: 220 },
}

const ArchitectureMindset = () => {
  const reduce = useReducedMotion()

  return (
    <div className="w-full px-[6%] sm:px-[12%] py-24 scroll-mt-20 bg-bg-soft overflow-hidden">
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="text-center mb-2 text-sm tracking-[0.2em] uppercase text-accent font-mono">
        Architecture mindset
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="text-center text-4xl sm:text-5xl font-semibold tracking-tight">
        How a request actually travels
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="text-center max-w-xl mx-auto mt-5 mb-16 text-fg-muted">
        The same shape shows up across every system above — a gateway, an auth layer that
        actually enforces something, a service boundary, and a data layer that doesn&apos;t
        get hit more than it needs to.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger(0.15)}
        className="max-w-4xl mx-auto"
      >
        <svg viewBox="0 0 760 260" className="w-full h-auto overflow-visible">
          {architectureEdges.map(([from, to]) => {
            const a = POSITIONS[from]
            const b = POSITIONS[to]
            return (
              <motion.line
                key={`${from}-${to}`}
                x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                stroke="var(--color-border)"
                strokeWidth="2"
                variants={drawPath}
              />
            )
          })}

          {!reduce && architectureEdges.map(([from, to], i) => {
            const a = POSITIONS[from]
            const b = POSITIONS[to]
            return (
              <motion.circle
                key={`packet-${from}-${to}`}
                r="4"
                fill="var(--color-accent-2)"
                animate={{ cx: [a.x, b.x], cy: [a.y, b.y] }}
                transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.2, delay: i * 0.35, ease: 'easeInOut' }}
              />
            )
          })}

          {architectureNodes.map((node) => {
            const pos = POSITIONS[node.id]
            return (
              <motion.g key={node.id} variants={fadeUp}>
                <circle cx={pos.x} cy={pos.y} r="26" className="fill-surface" stroke="var(--color-accent)" strokeWidth="1.8" />
                <text x={pos.x} y={pos.y + 4} textAnchor="middle" fontSize="9" fontWeight="600" fill="var(--color-fg)" fontFamily="var(--font-mono)">
                  {node.label.split(' ')[0]}
                </text>
                <text x={pos.x} y={pos.y + 46} textAnchor="middle" fontSize="10" fill="var(--color-fg)" fontWeight="600">
                  {node.label}
                </text>
                <text x={pos.x} y={pos.y + 60} textAnchor="middle" fontSize="8" fill="var(--color-fg-muted)" fontFamily="var(--font-mono)">
                  {node.sub}
                </text>
              </motion.g>
            )
          })}
        </svg>
      </motion.div>
    </div>
  )
}

export default ArchitectureMindset
