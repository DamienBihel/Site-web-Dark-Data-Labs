"use client"

import { motion } from "framer-motion"
import { SolutionCard } from "./solution-card"
import { GuaranteeSection } from "./guarantee-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const solutions = [
  {
    name: "Starter",
    price: "1 800",
    description: "Idéal pour débuter votre transformation digitale",
    features: [
      "Audit data complet de votre entreprise",
      "Dashboard personnalisé selon vos KPIs",
      "Formation initiale (4h)",
      "Support technique 1 mois"
    ],
    demoProject: {
      title: "E-commerce local",
      points: [
        "Dashboard de suivi des ventes",
        "Automatisation des rapports hebdomadaires",
        "Gain de temps estimé : 8h/semaine"
      ],
      roi: "3x en 3 mois"
    },
    targetAudience: [
      "TPE en début de digitalisation",
      "E-commerce émergents",
      "Artisans et commerces locaux"
    ],
    href: "/solutions/starter"
  },
  {
    name: "Business",
    price: "4 500",
    description: "Pour optimiser vos performances",
    features: [
      "Analyse approfondie des processus",
      "Automatisation des tâches clés",
      "Tableaux de bord avancés",
      "Formation équipe (8h)",
      "Support premium 3 mois"
    ],
    demoProject: {
      title: "PME Industrielle",
      points: [
        "Centralisation des données de production",
        "Automatisation du reporting client",
        "Optimisation des processus : -40% de temps"
      ],
      roi: "5x en 6 mois"
    },
    targetAudience: [
      "PME en croissance",
      "Entreprises industrielles",
      "Services B2B"
    ],
    href: "/solutions/business"
  },
  {
    name: "Premium",
    price: "8 000",
    description: "Pour une transformation complète",
    features: [
      "Transformation digitale intégrale",
      "Automatisation complète",
      "Analytics prédictif",
      "Formation sur mesure",
      "Support illimité 6 mois"
    ],
    demoProject: {
      title: "Groupe Multi-sites",
      points: [
        "Centralisation data multi-sources",
        "Prédictions ventes et stocks",
        "Automatisation complète du reporting"
      ],
      roi: "8x en 12 mois"
    },
    targetAudience: [
      "ETI en transformation",
      "Groupes multi-sites",
      "Entreprises data-driven"
    ],
    href: "/solutions/premium"
  }
]

export function Solutions() {
  return (
    <section className="py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Transformez vos données en leviers de croissance</h2>
          <p className="text-lg text-muted-foreground">
            Chaque solution est construite sur une méthodologie éprouvée, combinant expertise technique et compréhension business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.name} {...solution} index={index} />
          ))}
        </div>

        <GuaranteeSection />

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              Contactez-nous
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}