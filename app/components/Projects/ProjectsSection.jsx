"use client";

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { motion } from "motion/react"
import { fadeUp, viewport } from '../motionVariants'
import { projects } from '@/app/data/portfolioData'
import ProjectCard from './ProjectCard'

const ProjectModal = dynamic(() => import('./ProjectModal'), { ssr: false })

const ProjectsSection = () => {
  const [selected, setSelected] = useState(null)

  return (
    <div id="work" className="w-full px-[6%] sm:px-[12%] py-24 scroll-mt-20">
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="text-center mb-2 text-sm tracking-[0.2em] uppercase text-accent font-mono">
        Featured work
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="text-center text-4xl sm:text-5xl font-semibold tracking-tight">
        Systems I&apos;ve built
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="text-center max-w-2xl mx-auto mt-5 mb-6 text-fg-muted">
        Five backend systems, from compliance platforms to accounting integrations —
        presented as case studies since this is proprietary/client work.
      </motion.p>

      <div className="max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
            total={projects.length}
            onOpen={setSelected}
          />
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  )
}

export default ProjectsSection
