"use client"

import { motion } from "framer-motion"

interface LegalHeaderProps {
  title: string
  lastUpdated: string
}

export function LegalHeader({ title, lastUpdated }: LegalHeaderProps) {
  return (
    <div className="bg-[#1F1F1F] relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-40 mix-blend-overlay"></div>
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-montserrat font-extrabold uppercase tracking-wider mb-4 text-[#00FF85] drop-shadow-[0_0_10px_rgba(0,255,133,0.3)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          <motion.p 
            className="text-[#F2F2F2] font-roboto text-lg opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Dernière mise à jour : {lastUpdated}
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}