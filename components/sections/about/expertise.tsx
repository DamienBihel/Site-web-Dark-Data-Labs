"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { LineChart, Code, Target } from "lucide-react"

const expertiseAreas = [
  {
    title: "Data & Analytics",
    icon: LineChart,
    items: [
      "Data Analysis Professionnel",
      "Expert en Python",
      "Spécialiste du scraping et de l'analyse de données"
    ]
  },
  {
    title: "Automation & Process",
    icon: Code,
    items: [
      "Création de workflows automatisés",
      "Intégration d'outils no-code",
      "Optimisation des processus métier"
    ]
  },
  {
    title: "Stratégie & Formation",
    icon: Target,
    items: [
      "Formateur technique expérimenté",
      "Accompagnement personnalisé",
      "Vision stratégique data-driven"
    ]
  }
]

export function Expertise() {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold">Triple Expertise</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {expertiseAreas.map((area, index) => {
          const Icon = area.icon
          return (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-muted text-secondary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold">{area.title}</h4>
                </div>
                <ul className="space-y-2">
                  {area.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      • {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}