"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import useIsDarkMode from './useIsDarkMode';

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/rohankarmacharya',
    hoverClass: 'hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black',
    path: 'M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.18 9.18 0 0 1 12 6.07c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.95-2.33 4.82-4.56 5.07.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.84 0 .27.18.59.69.48A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rohan-karmacharya-1290a2385/',
    hoverClass: 'hover:bg-[#0A66C2] hover:text-white',
    path: 'M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1.02 4.6 1.02 3.5C1.02 2.4 1.9 1.5 3 1.5s1.98.9 1.98 2Zm.02 3.75H1V22h4V7.25Zm5.5 0H6.5V22h4v-7.9c0-2.1 1.1-3.3 2.9-3.3 1.4 0 2.1.8 2.1 3.1V22h4v-8.9c0-3.9-2.1-5.8-5-5.8-2.3 0-3.4 1.3-4 2.2h-.1V7.25Z',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/rohankarmacharya9/',
    hoverClass: 'hover:bg-gradient-to-tr hover:from-pink-500 hover:via-red-500 hover:to-yellow-400 hover:text-white',
    path: 'M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3Zm10 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/rohan.karmacharya.71',
    hoverClass: 'hover:bg-[#1877F2] hover:text-white',
    path: 'M13 3h3a1 1 0 0 1 1 1v3h-3a2 2 0 0 0-2 2v3h4v4h-4v5h-4v-5H6v-4h3v-3a5 5 0 0 1 5-5Z',
  },
  {
    label: 'Twitter',
    href: 'https://x.com/karma_rohan9',
    hoverClass: 'hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
];

const NAV = [
  { id: 'top', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'work', label: 'Work' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

const Footer = () => {
  const isDark = useIsDarkMode()

  useEffect(() => {
    // Hey, fellow curious dev — thanks for opening devtools.
    console.log(
      '%cLooking for the architecture, not just the paint job? Good instinct.',
      'color:#8b7bff;font-family:monospace;font-size:12px;'
    )
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full px-[6%] sm:px-[12%] pt-12 pb-8 border-t border-border bg-bg-soft">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <Image src={isDark ? assets.logo_dark : assets.logo} alt="Rohan Karmacharya" className="w-24" />
            <p className="text-xs text-fg-muted font-mono">Backend Developer · Go · Node.js · TypeScript</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-fg-muted">
            {NAV.map(({ id, label }) => (
              <button key={id} onClick={() => scrollToSection(id)} className="hover:text-accent transition-colors duration-300 cursor-pointer">
                {label}
              </button>
            ))}
          </nav>
        </div>

        <div className="h-px bg-border" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs text-fg-muted">
          <div className="flex items-center gap-3">
            <span className="uppercase tracking-[0.18em] text-[10px] font-mono">Connect</span>
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ label, href, hoverClass, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 rounded-full border border-border flex items-center justify-center transition-colors duration-300 ${hoverClass}`}
                  aria-label={label}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:items-end gap-1 font-mono">
            <p>© {new Date().getFullYear()} Rohan Karmacharya. All rights reserved.</p>
            <p>Designed &amp; built with Next.js, Tailwind, and Framer Motion.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
