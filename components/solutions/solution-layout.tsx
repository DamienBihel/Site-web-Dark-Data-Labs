"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { Footer } from "@/components/sections/footer"

interface SolutionLayoutProps {
  children: ReactNode
}

export function SolutionLayout({ children }: SolutionLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
      <Footer />
    </motion.div>
  )
}