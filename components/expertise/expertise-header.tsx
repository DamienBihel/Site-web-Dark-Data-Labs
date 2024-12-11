"use client"

import { motion } from "framer-motion"

interface ExpertiseHeaderProps {
  title: string
  subtitle: string
  description: string
}

export function ExpertiseHeader({ title, subtitle, description }: ExpertiseHeaderProps) {
  return (
    <div className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/5" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container relative"
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-6">{subtitle}</p>
            <p className="text-lg text-primary-foreground/60">{description}</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}