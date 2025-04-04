"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

interface LegalLayoutProps {
  children: ReactNode
}

export function LegalLayout({ children }: LegalLayoutProps) {
  return (
    <div>
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  )
}