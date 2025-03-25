"use client"

import { motion } from "framer-motion"
import { SolutionCard } from "@/components/features/solutions/solution-card"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const solutions = [
  {
    name: "Analyse de Données",
    price: "999",
    description: "Transformez vos données brutes en insights stratégiques grâce à nos outils d'analyse avancés.",
    features: [
      "Tableaux de bord personnalisés",
      "Analyses prédictives",
      "Visualisations interactives"
    ],
    demoProject: {
      title: "Optimisation des ventes",
      points: [
        "Augmentation de 25% des ventes",
        "Réduction de 15% des coûts opérationnels",
        "Prévision des ventes avec 95% de précision"
      ],
      roi: "150%"
    },
    targetAudience: [
      "Entreprises de vente au détail",
      "Sociétés de services",
      "Organisations avec des données complexes"
    ],
    href: "/solutions/data-analysis"
  },
  {
    name: "Cloud Solutions",
    price: "1499",
    description: "Déployez vos applications dans le cloud en toute simplicité avec nos solutions scalables.",
    features: [
      "Infrastructure cloud sécurisée",
      "Mise à l'échelle automatique",
      "Backup et récupération"
    ],
    demoProject: {
      title: "Migration vers le cloud",
      points: [
        "Réduction de 40% des coûts d'infrastructure",
        "Amélioration de 99.9% du temps de disponibilité",
        "Simplification de la maintenance"
      ],
      roi: "200%"
    },
    targetAudience: [
      "Startups en croissance",
      "Entreprises cherchant à moderniser leur infrastructure",
      "Organisations avec des besoins de scalabilité"
    ],
    href: "/solutions/cloud"
  },
  {
    name: "Intelligence Artificielle",
    price: "1999",
    description: "Leverez la puissance de l'IA pour automatiser vos processus et prendre de meilleures décisions.",
    features: [
      "Modèles d'IA personnalisés",
      "Automatisation des tâches",
      "Analyse prédictive avancée"
    ],
    demoProject: {
      title: "Automatisation des processus",
      points: [
        "Réduction de 60% du temps de traitement",
        "Élimination de 80% des erreurs manuelles",
        "Optimisation des ressources"
      ],
      roi: "250%"
    },
    targetAudience: [
      "Entreprises cherchant à automatiser",
      "Organisations avec des processus complexes",
      "Sociétés innovantes"
    ],
    href: "/solutions/ai"
  }
]

interface SolutionsSectionProps {
  className?: string
}

export function SolutionsSection({ className }: SolutionsSectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)} aria-label="Nos solutions">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" id="solutions-title">
            Nos Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" aria-labelledby="solutions-title">
            Découvrez nos solutions innovantes pour transformer votre entreprise et accélérer votre croissance.
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" 
          role="list"
          aria-label="Liste des solutions"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.name}
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              role="listitem"
            >
              <SolutionCard {...solution} index={index} />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/solutions"
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary flex items-center"
            role="link"
            aria-label="Voir toutes nos solutions"
            tabIndex={0}
          >
            Voir toutes nos solutions
            <svg
              className="lucide lucide-arrow-right ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
} 