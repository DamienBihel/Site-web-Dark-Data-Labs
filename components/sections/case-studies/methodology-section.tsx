"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const steps = [
  {
    title: "Discovery & Design",
    items: [
      "Analyse des besoins",
      "Architecture solution",
      "Prototype conceptuel"
    ]
  },
  {
    title: "Build & Test",
    items: [
      "Développement itératif",
      "Tests utilisateurs",
      "Optimisation performance"
    ]
  },
  {
    title: "Deploy & Scale",
    items: [
      "Déploiement progressif",
      "Formation utilisateurs",
      "Support continu"
    ]
  }
]

export function MethodologySection() {
  return (
    <div className="mb-24">
      <h3 className="text-2xl font-bold mb-8">Méthodologie d'Implémentation</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6">
              <h4 className="font-semibold mb-4">{step.title}</h4>
              <ul className="space-y-2">
                {step.items.map((item, i) => (
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