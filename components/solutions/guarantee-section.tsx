"use client"

import { Card } from "@/components/ui/card"
import { Shield, Clock, Award } from "lucide-react"
import { motion } from "framer-motion"

const guarantees = [
  {
    icon: Shield,
    title: "Méthodologie éprouvée",
    description: "Une approche structurée et testée pour garantir des résultats"
  },
  {
    icon: Award,
    title: "Expertise certifiée",
    description: "Une équipe technique certifiée et expérimentée"
  },
  {
    icon: Clock,
    title: "Support réactif",
    description: "Une réponse garantie sous 24h pour toute question"
  }
]

export function GuaranteeSection() {
  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-16"
        >
          Nos Garanties
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon
            return (
              <motion.div
                key={guarantee.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="relative h-full p-8 overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-secondary/10 rounded-full" />
                  <div className="relative">
                    <div className="inline-flex p-3 rounded-lg bg-secondary/10 mb-6">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{guarantee.title}</h3>
                    <p className="text-muted-foreground">{guarantee.description}</p>
                  </div>
                </Card>
              </motion.div>
            )}
          )}
        </div>
      </div>
    </section>
  )
}