export const EASE = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } },
}

export const blurIn = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 16 },
  show: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.8, ease: EASE } },
}

export const stagger = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
})

export const viewport = { once: true, amount: 0.3 }

// Word-by-word reveal — split text into <span> words and pass this as the
// container's `variants` with `stagger()` on the parent.
export const wordReveal = {
  hidden: { opacity: 0, y: "100%" },
  show: { opacity: 1, y: "0%", transition: { duration: 0.7, ease: EASE } },
}

// Used by the architecture node-graph to draw SVG paths on reveal.
export const drawPath = {
  hidden: { pathLength: 0, opacity: 0 },
  show: { pathLength: 1, opacity: 1, transition: { duration: 1.4, ease: EASE } },
}
