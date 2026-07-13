"use client";

import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from "motion/react"

const ProjectModal = ({ project, onClose }) => {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!project) return
    const onKeydown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeydown)
    requestAnimationFrame(() => closeRef.current?.focus())
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeydown)
      document.body.style.overflow = prevOverflow
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-[8vh] bottom-[8vh] sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-[38rem] max-w-[92vw] z-[71] glass-panel rounded-3xl overflow-y-auto"
          >
            <div className="sticky top-0 z-10 flex justify-end p-4 bg-bg/70 backdrop-blur-sm">
              <button
                ref={closeRef}
                onClick={onClose}
                aria-label="Close case study"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors duration-300 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="m6.4 5-1.4 1.4 5.6 5.6-5.6 5.6L6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6L19 6.4 17.6 5 12 10.6 6.4 5Z" />
                </svg>
              </button>
            </div>

            <div className="px-7 sm:px-10 pb-10">
              <h2 id="project-modal-title" className="text-3xl font-semibold tracking-tight mb-4">
                {project?.name}
              </h2>
              <p className="text-fg-muted leading-relaxed mb-6">{project?.context}</p>

              <h3 className="text-xs font-mono uppercase tracking-[0.15em] text-fg-muted mb-3">Architecture highlights</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project?.highlights.map((h) => (
                  <span key={h} className="text-xs px-3 py-1.5 rounded-full bg-accent-soft text-accent">
                    {h}
                  </span>
                ))}
              </div>

              <h3 className="text-xs font-mono uppercase tracking-[0.15em] text-fg-muted mb-3">Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project?.stack.map((s) => (
                  <span key={s} className="text-xs font-mono px-3 py-1.5 rounded-full border border-border text-fg-muted">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
