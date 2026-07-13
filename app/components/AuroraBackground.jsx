"use client";

import React, { useEffect, useRef } from 'react'

/**
 * Shared ambient signature background — layered blurred aurora blobs.
 * Pure transform/opacity animation (no canvas/particles) so it stays cheap.
 * When `interactive`, a soft glow tracks the pointer via a CSS variable,
 * updated through rAF so it never fires on every raw mousemove event.
 */
const AuroraBackground = ({ interactive = false, className = '' }) => {
  const ref = useRef(null)
  const frame = useRef(null)

  useEffect(() => {
    if (!interactive) return
    const el = ref.current
    if (!el) return

    const handleMove = (e) => {
      if (frame.current) return
      frame.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        el.style.setProperty('--pointer-x', `${x}%`)
        el.style.setProperty('--pointer-y', `${y}%`)
        frame.current = null
      })
    }

    window.addEventListener('mousemove', handleMove)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      if (frame.current) cancelAnimationFrame(frame.current)
    }
  }, [interactive])

  return (
    <div ref={ref} className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <div className="absolute left-[10%] top-[-10%] w-[42rem] h-[42rem] rounded-full bg-accent/25 blur-[110px] animate-aurora-1" />
      <div className="absolute right-[5%] top-[15%] w-[34rem] h-[34rem] rounded-full bg-accent-2/20 blur-[100px] animate-aurora-2" />
      <div className="absolute left-[30%] bottom-[-15%] w-[36rem] h-[36rem] rounded-full bg-accent/15 blur-[120px] animate-aurora-3" />

      {interactive && (
        <div
          className="absolute inset-0 opacity-0 dark:opacity-60 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(600px circle at var(--pointer-x, 50%) var(--pointer-y, 50%), color-mix(in srgb, var(--color-accent) 12%, transparent), transparent 70%)',
          }}
        />
      )}

      <div className="noise-overlay" />
    </div>
  )
}

export default AuroraBackground
