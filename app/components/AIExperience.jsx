"use client";

import React from 'react'
import { motion, useReducedMotion } from "motion/react"
import { SiGooglegemini, SiLangchain } from 'react-icons/si'
import { fadeUp, stagger, scaleIn, viewport } from './motionVariants'
import { aiExperience } from '@/app/data/portfolioData'

const ICONS = { 'Gemini API': SiGooglegemini, LangChain: SiLangchain }

const PromptFlow = () => {
  const reduce = useReducedMotion()
  const bubbles = [
    { text: 'Raw compliance requirement', align: 'left' },
    { text: 'Gemini + LangChain', align: 'right', accent: true },
    { text: 'Structured guideline', align: 'left' },
  ]

  return (
    <div className="glass-panel rounded-3xl p-6 flex flex-col gap-3">
      {bubbles.map((b, i) => (
        <motion.div
          key={b.text}
          initial={{ opacity: 0, x: b.align === 'left' ? -16 : 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, delay: reduce ? 0 : i * 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm font-mono ${
            b.align === 'right' ? 'self-end' : 'self-start'
          } ${b.accent ? 'bg-accent text-accent-fg' : 'bg-bg-soft text-fg-muted border border-border'}`}
        >
          {b.text}
        </motion.div>
      ))}
    </div>
  )
}

const AIExperience = () => {
  return (
    <div className="w-full px-[6%] sm:px-[12%] py-24 scroll-mt-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger(0.12)}
        >
          <motion.p variants={fadeUp} className="mb-2 text-sm tracking-[0.2em] uppercase text-accent font-mono">
            AI &amp; LLM experience
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-semibold tracking-tight mb-5">
            Backends that reason, not just respond
          </motion.h2>
          <motion.p variants={fadeUp} className="text-fg-muted leading-relaxed mb-8">
            {aiExperience.intro}
          </motion.p>

          <motion.ul variants={stagger(0.08)} className="flex flex-col gap-3">
            {aiExperience.points.map((point) => {
              const Icon = ICONS[point.label]
              return (
                <motion.li key={point.label} variants={scaleIn} className="flex items-center gap-3 glass-panel rounded-xl px-4 py-3">
                  {Icon && <Icon className="w-4 h-4 text-accent shrink-0" />}
                  <span className="text-sm">
                    <span className="font-medium">{point.label}</span>
                    <span className="text-fg-muted"> — {point.description}</span>
                  </span>
                </motion.li>
              )
            })}
          </motion.ul>
        </motion.div>

        <PromptFlow />
      </div>
    </div>
  )
}

export default AIExperience
