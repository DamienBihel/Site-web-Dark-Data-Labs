"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { AlertTriangle, Brain, Database, Lock } from "lucide-react"

const challenges = [
  {
    icon: <Database className="h-6 w-6" />,
    title: "Données Non Structurées",
    description: "Transformez vos données brutes en informations exploitables."
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Complexité Analytique",
    description: "Simplifiez l'analyse avec nos solutions d'IA avancées."
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Sécurité des Données",
    description: "Protégez vos données sensibles avec nos protocoles sécurisés."
  },
  {
    icon: <AlertTriangle className="h-6 w-6" />,
    title: "Risques Cachés",
    description: "Identifiez et gérez les risques avant qu'ils n'impactent votre activité."
  }
]

export function Challenges() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Relevez vos Défis Data
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment nos solutions peuvent vous aider à surmonter les défis complexes de la gestion et de l'analyse des données.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <div className="space-y-4">
                  <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {challenge.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{challenge.title}</h3>
                  <p className="text-muted-foreground">{challenge.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
