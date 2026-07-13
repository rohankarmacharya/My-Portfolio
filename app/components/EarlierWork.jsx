import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"
import { fadeUp, stagger, viewport } from './motionVariants'
import { earlierWork } from '@/app/data/portfolioData'

const EarlierWork = () => {
  return (
    <div className="w-full px-[6%] sm:px-[12%] py-20 scroll-mt-20">
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="text-center mb-2 text-sm tracking-[0.2em] uppercase text-fg-muted font-mono">
        Archive
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="text-center text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
        Earlier work
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="text-center max-w-xl mx-auto mb-12 text-sm text-fg-muted">
        Frontend-leaning class projects from earlier on — kept here for the record.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger(0.1)}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
      >
        {earlierWork.map((project, index) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            whileHover={{ y: -4 }}
            key={index}
            className="group aspect-square bg-no-repeat bg-cover bg-center rounded-xl relative overflow-hidden border border-border opacity-80 hover:opacity-100 transition-opacity duration-300"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
            <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2">
              <div className="min-w-0">
                <h3 className="text-xs font-semibold text-white truncate">{project.title}</h3>
                <p className="text-[10px] text-white/70 truncate">{project.description}</p>
              </div>
              <div className="shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center">
                <Image src={assets.send_icon} alt="" className="w-3" />
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  )
}

export default EarlierWork
