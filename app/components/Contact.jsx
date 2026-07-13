"use client";

import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from "motion/react"
import { fadeUp, viewport } from './motionVariants'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="w-full px-[12%] py-24 scroll-mt-20">
      <motion.div
        className="max-w-3xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <motion.p variants={fadeUp} className="text-center mb-2 text-sm tracking-[0.2em] uppercase text-accent font-medium">
          Get in touch
        </motion.p>
        <motion.h2 variants={fadeUp} className="text-center text-4xl sm:text-5xl font-ovo mb-4">
          Let&apos;s work together
        </motion.h2>
        <motion.p variants={fadeUp} className="text-center max-w-xl mx-auto mb-12 text-fg-muted">
          Have a project, idea, or opportunity you&apos;d like to discuss? Fill out the form below and I&apos;ll get back to you as soon as possible.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="bg-surface border border-border rounded-2xl shadow-xl shadow-fg/5 p-6 md:p-9"
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-fg-muted">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-fg-muted">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="subject" className="text-sm font-medium text-fg-muted">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Let's build something great"
                className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="message" className="text-sm font-medium text-fg-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell me a bit about what you have in mind..."
                className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm outline-none transition resize-none focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </div>

            <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-1">
              <p className="text-xs text-fg-muted">
                I typically respond within 24–48 hours.
              </p>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-fg px-7 py-3 text-sm font-medium text-bg hover:bg-accent hover:text-accent-fg transition-colors duration-300"
              >
                Send message
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M4 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </motion.button>
            </div>
          </form>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-16 flex flex-col items-center justify-center gap-3 text-sm">
          <a
            href="https://mail.google.com/mail/?view=cm&to=rohankarmacharya.biz@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-ovo text-fg-muted flex items-center gap-2 hover:text-accent transition-colors duration-300"
          >
            <Image src={assets.mail_icon} alt="" className="w-5 dark:invert" />
            rohankarmacharya.biz@gmail.com
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
