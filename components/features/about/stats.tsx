"use client"

import { motion } from "framer-motion"

const stats = [
  { 
    value: "-40%", 
    label: "de temps administratif en moyenne",
    description: "Gain potentiel pour votre entreprise"
  },
  { 
    value: "x3", 
    label: "retour sur investissement",
    description: "ROI projeté sur 6 mois"
  },
  { 
    value: "18+", 
    label: "années d'expertise technique",
    description: "En métrologie et analyse de données"
  }
]

export function Stats() {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
      data-testid="stats-section"
    >
      <div className="grid sm:grid-cols-3 gap-8 mb-16">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center p-6 bg-background rounded-lg border"
          >
            <div className="text-4xl font-bold text-secondary mb-2">{stat.value}</div>
            <p className="font-medium mb-2">{stat.label}</p>
            <p className="text-sm text-muted-foreground">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}