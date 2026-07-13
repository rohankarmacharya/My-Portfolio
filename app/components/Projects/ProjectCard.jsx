import React from 'react'
import { motion } from "motion/react"
import { fadeUp, stagger, viewport } from '../motionVariants'
import VisualFrame from './visuals/VisualFrame'
import GrcVisual from './visuals/GrcVisual'
import SchoolErpVisual from './visuals/SchoolErpVisual'
import TiggVisual from './visuals/TiggVisual'
import RbCommerceVisual from './visuals/RbCommerceVisual'
import AatmaVedaVisual from './visuals/AatmaVedaVisual'

const VISUALS = {
  grc: GrcVisual,
  'school-erp': SchoolErpVisual,
  tigg: TiggVisual,
  rbcommerce: RbCommerceVisual,
  aatmaveda: AatmaVedaVisual,
}

const ProjectCard = ({ project, index, total, onOpen }) => {
  const Visual = VISUALS[project.visual]
  const reversed = index % 2 === 1

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={stagger(0.1)}
      className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16 py-14 border-b border-border last:border-b-0`}
    >
      <motion.div variants={fadeUp} className="w-full lg:w-2/5 shrink-0">
        {Visual && <VisualFrame><Visual /></VisualFrame>}
      </motion.div>

      <motion.div variants={fadeUp} className="w-full lg:w-3/5">
        <span className="font-mono text-xs text-fg-muted">{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
        <h3 className="mt-2 mb-3 text-2xl sm:text-3xl font-semibold tracking-tight">{project.name}</h3>
        <p className="text-fg-muted leading-relaxed mb-5 max-w-xl">{project.thesis}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.highlights.slice(0, 5).map((h) => (
            <span key={h} className="text-xs px-3 py-1.5 rounded-full border border-border text-fg-muted">
              {h}
            </span>
          ))}
        </div>

        <button
          onClick={() => onOpen(project)}
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all duration-300 cursor-pointer"
        >
          View case study
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
            <path d="M4 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  )
}

export default ProjectCard
