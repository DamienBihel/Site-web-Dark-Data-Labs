"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Gauge, Lightbulb, LineChart } from "lucide-react"

const values = [
  {
    title: "Excellence Technique",
    icon: Gauge,
    items: [
      "Rigueur méthodologique",
      "Solutions robustes et évolutives",
      "Documentation précise"
    ]
  },
  {
    title: "Innovation Pragmatique",
    icon: Lightbulb,
    items: [
      "Solutions adaptées à vos besoins réels",
      "Approche progressive et mesurable",
      "Focus sur le ROI"
    ]
  },
  {
    title: "Transparence & Efficacité",
    icon: LineChart,
    items: [
      "Communication claire et directe",
      "Processus structuré",
      "Résultats mesurables"
    ]
  }
]

export function Values() {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold">Valeurs Fondamentales</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {values.map((value, index) => {
          const Icon = value.icon
          return (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-muted text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold">{value.title}</h4>
                </div>
                <ul className="space-y-2">
                  {value.items.map((item, i) => (
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