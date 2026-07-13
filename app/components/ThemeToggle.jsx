"use client";

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "motion/react"

const ThemeToggle = ({ className = '' }) => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggle = () => {
    const next = !isDark
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
    setIsDark(next)
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className={`relative flex items-center justify-center w-9 h-9 rounded-full border border-border text-fg hover:border-accent hover:text-accent transition-colors duration-300 ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.svg
            key="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4 fill-current"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <path d="M12 4V2m0 20v-2m8-8h2M2 12h2m13.66-6.66 1.41-1.41M4.93 19.07l1.41-1.41M19.07 19.07l-1.41-1.41M4.93 4.93 6.34 6.34M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          </motion.svg>
        ) : (
          <motion.svg
            key="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4 fill-current"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <path d="M20.354 15.354A9 9 0 0 1 8.646 3.646 9.003 9.003 0 1 0 20.354 15.354Z" />
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
  )
}

export default ThemeToggle
