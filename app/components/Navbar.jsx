"use client";

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { assets } from '@/assets/assets'
import { motion, AnimatePresence } from "motion/react"
import ThemeToggle from './ThemeToggle'
import CommandPalette from './CommandPalette'
import MagneticButton from './MagneticButton'
import useIsDarkMode from './useIsDarkMode'

const NAV_LINKS = [
  { id: 'top', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'work', label: 'Work' },
  { id: 'journey', label: 'Journey' },
  { id: 'personal', label: 'Personal' },
  { id: 'contact', label: 'Contact' },
]

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('top')
  const isDark = useIsDarkMode()

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  useEffect(() => {
    const sections = NAV_LINKS.map(({ id }) => document.getElementById(id)).filter(Boolean)
    // A section's own intersection-crossing events go quiet while the user
    // sits inside it (especially a short one), which starves an
    // IntersectionObserver-entries approach into showing a stale neighbor.
    // Recomputing "current section" directly from geometry on every scroll
    // tick is robust regardless of how tall any given section is.
    const REFERENCE_LINE = 160

    const handleScroll = () => {
      setIsScroll(window.scrollY > 50)

      let current = sections[0]?.id
      for (const section of sections) {
        if (section.getBoundingClientRect().top - REFERENCE_LINE <= 0) {
          current = section.id
        }
      }
      if (current) setActive(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`w-full fixed top-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center z-50 transition-all duration-300
        ${isScroll ? "glass-panel border-b shadow-sm" : "bg-transparent"}`}
      >
        {/* Logo */}
        <div className='flex items-center'>
          <button onClick={() => scrollToSection('top')} className="cursor-pointer">
            <Image src={isDark ? assets.logo_dark : assets.logo} alt="Rohan Karmacharya" className="w-24 sm:w-28" priority />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className='flex-1 flex justify-center'>
          <ul className='hidden md:flex items-center gap-1 rounded-full px-3 py-1.5 border border-border bg-surface/60 backdrop-blur-sm'>
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id} className="relative">
                <button
                  onClick={() => scrollToSection(id)}
                  className={`relative z-10 px-4 py-2 text-sm rounded-full transition-colors duration-300 cursor-pointer ${
                    active === id ? 'text-accent-fg' : 'text-fg-muted hover:text-fg'
                  }`}
                >
                  {label}
                </button>
                {active === id && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right side */}
        <div className='flex items-center gap-3'>
          <CommandPalette />
          <ThemeToggle />

          <MagneticButton
            onClick={() => scrollToSection('contact')}
            className='hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-full bg-fg text-bg text-sm font-medium hover:bg-accent hover:text-accent-fg transition-colors duration-300 cursor-pointer'
          >
            Let&apos;s talk
          </MagneticButton>

          {/* Mobile menu button */}
          <button
            className='flex md:hidden items-center justify-center w-9 h-9 rounded-full border border-border text-fg'
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.ul
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 32 }}
              className='flex md:hidden flex-col gap-2 py-20 px-8 fixed right-0 top-0 bottom-0 w-72 z-50 h-screen bg-surface border-l border-border'
            >
              <button
                className='absolute right-6 top-6 w-8 h-8 flex items-center justify-center rounded-full border border-border text-fg'
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="m6.4 5-1.4 1.4 5.6 5.6-5.6 5.6L6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6L19 6.4 17.6 5 12 10.6 6.4 5Z" />
                </svg>
              </button>
              {NAV_LINKS.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={`font-mono text-lg w-full text-left py-2 transition-colors ${active === id ? 'text-accent' : 'text-fg-muted hover:text-fg'}`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
