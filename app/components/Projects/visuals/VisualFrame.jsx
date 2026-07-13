import React from 'react'

/**
 * Consistent glass frame every per-project generative visual renders inside,
 * so five very different SVGs still read as one system.
 */
const VisualFrame = ({ children, className = '' }) => (
  <div className={`relative aspect-[4/3] rounded-3xl glass-panel overflow-hidden ${className}`}>
    <div
      className="absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage:
          'linear-gradient(var(--color-fg) 1px, transparent 1px), linear-gradient(90deg, var(--color-fg) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }}
    />
    <div className="absolute -inset-8 bg-accent/10 blur-3xl rounded-full" />
    <svg viewBox="0 0 200 150" className="relative w-full h-full">
      {children}
    </svg>
  </div>
)

export default VisualFrame
