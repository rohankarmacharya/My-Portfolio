import React from 'react'
import { motion } from "motion/react"
import { fadeUp, stagger, viewport } from './motionVariants'
import { personalProjects } from '@/app/data/portfolioData'
import VisualFrame from './Projects/visuals/VisualFrame'
import BodhyaVisual from './PersonalWork/visuals/BodhyaVisual'
import SujhavMitraVisual from './PersonalWork/visuals/SujhavMitraVisual'
import BarcodeVisual from './PersonalWork/visuals/BarcodeVisual'
import DigitalYatraVisual from './PersonalWork/visuals/DigitalYatraVisual'

const VISUALS = {
  bodhya: BodhyaVisual,
  sujhavmitra: SujhavMitraVisual,
  barcode: BarcodeVisual,
  yatra: DigitalYatraVisual,
}

const EarlierWork = () => {
  return (
    <div id="personal" className="w-full px-[6%] sm:px-[12%] py-20 scroll-mt-20">
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="text-center mb-2 text-sm tracking-[0.2em] uppercase text-fg-muted font-mono">
        Independent work
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="text-center text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
        Personal projects
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="text-center max-w-xl mx-auto mb-12 text-sm text-fg-muted">
        Unlike the case studies above, these were built on my own time and are
        public — the links go straight to the repos.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger(0.1)}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
      >
        {personalProjects.map((project) => {
          const Visual = VISUALS[project.visual]
          return (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              whileHover={{ y: -4 }}
              key={project.slug}
              className="group glass-panel rounded-2xl p-5 flex flex-col gap-4 hover:border-accent/50 transition-colors duration-300"
            >
              {Visual && <VisualFrame aspect="aspect-[16/9]"><Visual /></VisualFrame>}

              <div>
                <div className="flex items-center justify-between gap-3 mb-1.5">
                  <h3 className="font-semibold group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-fg-muted shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
                <p className="text-sm text-fg-muted leading-relaxed mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span key={s} className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-border text-fg-muted">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          )
        })}
      </motion.div>
    </div>
  )
}

export default EarlierWork
