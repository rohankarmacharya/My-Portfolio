"use client";

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from "motion/react"
import { commandActions } from '@/app/data/portfolioData'

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const toggleTheme = () => {
  const next = !document.documentElement.classList.contains('dark')
  document.documentElement.classList.toggle('dark', next)
  localStorage.setItem('theme', next ? 'dark' : 'light')
}

const downloadResume = () => {
  const a = document.createElement('a')
  a.href = '/CV.pdf'
  a.download = 'Rohan_Karmacharya_Resume.pdf'
  a.target = '_blank'
  a.rel = 'noopener noreferrer'
  a.click()
}

// Mounted only while the palette is open, so query/activeIndex always start
// fresh on each open — no reset-on-prop-change effect needed.
const PaletteDialog = ({ onClose }) => {
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const [copyState, setCopyState] = useState('idle')
  const inputRef = useRef(null)

  const copyEmail = () => {
    navigator.clipboard?.writeText('rohankarmacharya.biz@gmail.com').then(() => {
      setCopyState('copied')
      setTimeout(() => setCopyState('idle'), 1500)
    })
  }

  const actions = useMemo(
    () => commandActions({ toggleTheme, copyEmail, downloadResume }),
    []
  )

  const filtered = useMemo(() => {
    if (!query.trim()) return actions
    const q = query.toLowerCase()
    return actions.filter((a) => a.label.toLowerCase().includes(q))
  }, [actions, query])

  const runAction = (action) => {
    if (!action) return
    if (action.section) scrollToSection(action.section)
    else if (action.href) window.open(action.href, '_blank', 'noopener,noreferrer')
    else if (action.action) action.action()
    if (action.id !== 'email') onClose()
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleQueryChange = (e) => {
    setQuery(e.target.value)
    setActiveIndex(0)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      runAction(filtered[activeIndex])
    }
  }

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[70]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        initial={{ opacity: 0, y: -16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -16, scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className="fixed top-[16vh] left-1/2 -translate-x-1/2 w-[90vw] max-w-lg z-[71] glass-panel rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current text-fg-muted shrink-0">
            <path d="M11 4a7 7 0 1 0 4.9 12.02l4.54 4.54 1.41-1.41-4.54-4.54A7 7 0 0 0 11 4Zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={handleQueryChange}
            onKeyDown={handleKeyDown}
            placeholder="Jump to a section, or run a command..."
            className="flex-1 bg-transparent outline-none text-sm placeholder:text-fg-muted"
          />
          <kbd className="text-[10px] font-mono text-fg-muted border border-border rounded px-1.5 py-0.5">esc</kbd>
        </div>

        <ul className="max-h-72 overflow-y-auto py-2">
          {filtered.length === 0 && (
            <li className="px-4 py-6 text-sm text-fg-muted text-center">No matching commands.</li>
          )}
          {filtered.map((action, index) => (
            <li key={action.id}>
              <button
                onClick={() => runAction(action)}
                onMouseEnter={() => setActiveIndex(index)}
                className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 text-sm text-left transition-colors duration-150 cursor-pointer ${
                  index === activeIndex ? 'bg-accent-soft text-accent' : 'text-fg'
                }`}
              >
                <span>{action.label}</span>
                {action.id === 'email' && copyState === 'copied' && (
                  <span className="text-xs font-mono text-accent-2">copied</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  )
}

const CommandPalette = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKeydown = (e) => {
      const isMeta = e.metaKey || e.ctrlKey
      if (isMeta && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeydown)
    return () => window.removeEventListener('keydown', onKeydown)
  }, [])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open command palette"
        className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full border border-border text-fg-muted text-xs font-mono hover:border-accent hover:text-accent transition-colors duration-300 cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
          <path d="M11 4a7 7 0 1 0 4.9 12.02l4.54 4.54 1.41-1.41-4.54-4.54A7 7 0 0 0 11 4Zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" />
        </svg>
        <span>&#8984;K</span>
      </button>

      <AnimatePresence>
        {open && <PaletteDialog onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  )
}

export default CommandPalette
