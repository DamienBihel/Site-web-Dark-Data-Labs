"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Shield, Lightbulb, Target } from "lucide-react"

const sections = [
  {
    title: "Garantie Satisfaction",
    icon: Shield,
    items: [
      "Phase de test gratuite sur un processus",
      "Accompagnement personnalisé",
      "Résultats mesurables garantis"
    ],
    color: "text-accent"
  },
  {
    title: "Notre Expertise",
    icon: Lightbulb,
    items: [
      "Certifié Data Analyst",
      "Expert Python & Automatisation",
      "Spécialiste Business Intelligence"
    ],
    color: "text-secondary"
  },
  {
    title: "Méthodologie",
    icon: Target,
    items: [
      "1. Audit approfondi",
      "2. Prototype et validation",
      "3. Déploiement progressif",
      "4. Mesure des résultats",
      "5. Optimisation continue"
    ],
    color: "text-primary"
  }
]

export function GuaranteeSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-24"
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4">Notre Engagement</h2>
        <p className="text-lg text-muted-foreground">
          Une approche éprouvée et des résultats garantis pour votre transformation digitale.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {sections.map((section, index) => {
          const Icon = section.icon
          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg bg-muted ${section.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (i * 0.1) }}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className={`text-xl font-bold ${section.color}`}>•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}