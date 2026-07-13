"use client";

import { useSyncExternalStore } from 'react'

// Reads the `dark` class on <html>, kept in sync across every component that
// needs it (Navbar/Footer logo, ThemeToggle icon) via a single MutationObserver
// instead of each component polling document on its own mount.
function subscribe(callback) {
  const observer = new MutationObserver(callback)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  return () => observer.disconnect()
}

function getSnapshot() {
  return document.documentElement.classList.contains('dark')
}

// Matches THEME_INIT_SCRIPT's default in app/layout.js.
function getServerSnapshot() {
  return true
}

export default function useIsDarkMode() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
