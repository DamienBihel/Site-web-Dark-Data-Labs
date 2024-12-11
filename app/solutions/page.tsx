"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { Solutions } from "@/components/sections/solutions"
import { motion } from "framer-motion"

export default function SolutionsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <main className="min-h-screen">
        <Solutions />
      </main>
      <Footer />
    </motion.div>
  )
}