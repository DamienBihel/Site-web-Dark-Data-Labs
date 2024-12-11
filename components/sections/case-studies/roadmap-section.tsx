"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const phases = [
  {
    title: "Phase 1 - Q1 2025",
    items: [
      "Dashboard E-commerce interactif",
      "Documentation technique détaillée",
      "Cas d'usage documenté"
    ]
  },
  {
    title: "Phase 2 - Q2 2025",
    items: [
      "Production Monitor",
      "Simulation données temps réel",
      "Guide d'implémentation"
    ]
  },
  {
    title: "Phase 3 - Q2/Q3 2025",
    items: [
      "Music Analytics Platform",
      "Version bêta publique",
      "Programme early adopters"
    ]
  }
]

export function RoadmapSection() {
  return (
    <div className="mb-24">
      <h3 className="text-2xl font-bold mb-8">Roadmap des Démonstrations</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {phases.map((phase, index) => (
          <motion.div
            key={phase.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6">
              <h4 className="font-semibold mb-4">{phase.title}</h4>
              <ul className="space-y-2">
                {phase.items.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground">• {item}</li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}