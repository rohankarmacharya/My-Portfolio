import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const scrollToSection = (id) => {
    if (typeof document === 'undefined') return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full px-[12%] pt-8 pb-6 border-t border-gray-200 bg-white/80 backdrop-blur-md mt-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Top row: name + nav */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="leading-snug">
            <p className="font-ovo text-lg text-gray-900">Rohan Karmacharya</p>
            <p className="text-xs text-gray-500">BSc.CSIT student · Aspiring Developer</p>
          </div>

          <nav className="flex flex-wrap gap-4 text-xs sm:text-sm text-gray-600">
            <button onClick={() => scrollToSection('top')} className="cursor-pointer hover:-translate-y-2 hover:scale-[1.03] hover:bg-[#6b2782]/10 hover:border-[#6b2782] hover:shadow-[0px_0px_20px_rgba(107,39,130,0.3)] transition-all duration-300 ease-out">Home</button>
            <button onClick={() => scrollToSection('about')} className="cursor-pointer hover:-translate-y-2 hover:scale-[1.03] hover:bg-[#6b2782]/10 hover:border-[#6b2782] hover:shadow-[0px_0px_20px_rgba(107,39,130,0.3)] transition-all duration-300 ease-out">About</button>
            <button onClick={() => scrollToSection('services')} className="cursor-pointer hover:-translate-y-2 hover:scale-[1.03] hover:bg-[#6b2782]/10 hover:border-[#6b2782] hover:shadow-[0px_0px_20px_rgba(107,39,130,0.3)] transition-all duration-300 ease-out">Services</button>
            <button onClick={() => scrollToSection('work')} className="cursor-pointer hover:-translate-y-2 hover:scale-[1.03] hover:bg-[#6b2782]/10 hover:border-[#6b2782] hover:shadow-[0px_0px_20px_rgba(107,39,130,0.3)] transition-all duration-300 ease-out">Work</button>
            <button onClick={() => scrollToSection('contact')} className="cursor-pointer hover:-translate-y-2 hover:scale-[1.03] hover:bg-[#6b2782]/10 hover:border-[#6b2782] hover:shadow-[0px_0px_20px_rgba(107,39,130,0.3)] transition-all duration-300 ease-out">Contact</button>
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200" />

        {/* Bottom row: social links + copyright */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] sm:text-xs text-gray-500">
          <div className="flex items-center gap-3 text-gray-700">
            <span className="uppercase tracking-[0.18em] text-[10px] text-gray-500">Connect</span>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/rohankarmacharya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-[11px] hover:bg-black hover:text-white transition"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current"
                >
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.18 9.18 0 0 1 12 6.07c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.95-2.33 4.82-4.56 5.07.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.84 0 .27.18.59.69.48A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/rohan-karmacharya-1290a2385/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-[11px] hover:bg-[#0A66C2] hover:text-white transition"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current"
                >
                  <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1.02 4.6 1.02 3.5C1.02 2.4 1.9 1.5 3 1.5s1.98.9 1.98 2Zm.02 3.75H1V22h4V7.25Zm5.5 0H6.5V22h4v-7.9c0-2.1 1.1-3.3 2.9-3.3 1.4 0 2.1.8 2.1 3.1V22h4v-8.9c0-3.9-2.1-5.8-5-5.8-2.3 0-3.4 1.3-4 2.2h-.1V7.25Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/rohankarmacharya9/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-[11px] hover:bg-gradient-to-tr hover:from-pink-500 hover:via-red-500 hover:to-yellow-400 hover:text-white transition"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current"
                >
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3Zm10 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/rohan.karmacharya.71"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-[11px] hover:bg-[#1877F2] hover:text-white transition"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current"
                >
                  <path d="M13 3h3a1 1 0 0 1 1 1v3h-3a2 2 0 0 0-2 2v3h4v4h-4v5h-4v-5H6v-4h3v-3a5 5 0 0 1 5-5Z" />
                </svg>
              </a>
              <a
  href="https://x.com/karma_rohan9" 
  target="_blank"
  rel="noopener noreferrer"
  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-[11px] hover:bg-black hover:text-white transition"
  aria-label="Twitter"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-4 h-4 fill-current"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
</a>
            </div>
          </div>

          <div className="flex flex-col sm:items-end gap-1 text-[11px] sm:text-xs text-gray-500">
            <p>© {new Date().getFullYear()} Rohan Karmacharya. All rights reserved.</p>
            <p>Designed &amp; built with React and Next.js.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
