"use client";

import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from "motion/react" 

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.p
          className="text-center mb-1 text-sm font-ovo text-purple-700 uppercase tracking-[0.18em]"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Get in touch
        </motion.p>
        <motion.h2
          className="text-center text-3xl md:text-4xl font-ovo mb-3"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Let&apos;s work together
        </motion.h2>
        <motion.p
          className="text-center max-w-2xl mx-auto mb-6 text-gray-600 text-sm md:text-base font-ovo"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Have a project, idea, or opportunity you&apos;d like to discuss? Fill out the form below and I&apos;ll get back to you as soon as possible.
        </motion.p>

        <motion.div
          className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-[0_14px_40px_rgba(15,23,42,0.08)] p-5 md:p-7"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700 font-ovo">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 font-ovo">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="subject" className="text-sm font-medium text-gray-700 font-ovo">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Let&apos;s build something great"
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700 font-ovo">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell me a bit about what you have in mind..."
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition resize-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              />
            </div>

            <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-1">
              <p className="text-xs text-gray-500 font-ovo">
                I typically respond within 24–48 hours.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-2.5 text-sm font-medium text-white shadow-[0_8px_24px_rgba(15,23,42,0.3)] transition hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-purple-500"
              >
                Send message <Image src={assets.right_arrow_white} alt="Right arrow" className="w-5"/>
              </button>
            </div>
          </form>
        </motion.div>

        <motion.div
          className="mt-20 flex flex-col items-center justify-center gap-2 text-sm text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <Image src={assets.logo} alt="Rohan logo" className="w-24" />
          <a
            href="https://mail.google.com/mail/?view=cm&to=rohankarmacharya.biz@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-ovo text-xs sm:text-sm text-gray-600 flex items-center gap-2"
          >
            <Image src={assets.mail_icon} alt="Mail" className="w-6" />
            <span className="transition-colors hover:text-purple-700 hover:underline underline-offset-4">
              rohankarmacharya.biz@gmail.com
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
