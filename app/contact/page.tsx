"use client"

import { Contact } from "@/components/sections/contact"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <main className="min-h-screen">
        <Contact />
      </main>
      <Footer />
    </motion.div>
  )
}