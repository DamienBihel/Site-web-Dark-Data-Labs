"use client"

import { motion } from "framer-motion"

interface LegalHeaderProps {
  title: string
  lastUpdated: string
}

export function LegalHeader({ title, lastUpdated }: LegalHeaderProps) {
  return (
    <div className="bg-muted py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-muted-foreground">
            Dernière mise à jour : {lastUpdated}
          </p>
        </motion.div>
      </div>
    </div>
  )
}