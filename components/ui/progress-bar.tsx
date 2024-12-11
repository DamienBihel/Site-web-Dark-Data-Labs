"use client"

import * as React from "react"
import { motion, useScroll, useSpring } from "framer-motion"

export function ProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-secondary origin-[0%] z-50"
      style={{ scaleX }}
    />
  )
}