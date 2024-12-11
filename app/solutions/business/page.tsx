"use client"

import { SolutionLayout } from "@/components/solutions/solution-layout"
import { SolutionHeader } from "@/components/solutions/solution-header"
import { FeaturesSection } from "@/components/solutions/features-section"
import { GuaranteeSection } from "@/components/solutions/guarantee-section"
import { FAQSection } from "@/components/solutions/faq-section"
import { TimelineSection } from "@/components/solutions/timeline-section"
import { Navbar } from "@/components/layout/navbar"
import { Lightbulb, Code, Rocket, BarChart } from "lucide-react"

const features = [
  {
    title: "Analyse Approfondie",
    items: [
      "Audit complet des processus",
      "Cartographie des flux de données",
      "Analyse des opportunités d'automatisation",
      "Plan de transformation détaillé"
    ]
  },
  {
    title: "Implémentation Premium",
    items: [
      "Suite complète de dashboards",
      "5 automatisations personnalisées",
      "Intégration avancée des données",
      "Système d'alertes intelligent"
    ]
  },
  {
    title: "Formation & Support Étendu",
    items: [
      "8h de formation équipe",
      "Support premium 3 mois",
      "Documentation technique complète",
      "Sessions mensuelles d'optimisation"
    ]
  }
]

const faqs = [
  {
    question: "Comment gérez-vous l'intégration avec nos systèmes existants ?",
    answer: "Nous réalisons un audit complet de votre écosystème technique et créons des connecteurs personnalisés. Notre solution s'adapte à vos outils, pas l'inverse."
  },
  {
    question: "Quelle est la différence principale avec le Pack Starter ?",
    answer: "Le Pack Business offre plus d'automatisations (5 vs 2), des analyses prédictives, et un support plus long (3 mois vs 1 mois). Il est conçu pour des besoins plus complexes."
  },
  {
    question: "Comment formez-vous notre équipe ?",
    answer: "La formation de 8h est répartie en modules adaptés aux différents profils (utilisateurs, administrateurs). Nous incluons aussi des sessions de questions/réponses."
  },
  {
    question: "Comment garantissez-vous la sécurité des données ?",
    answer: "Nous utilisons des protocoles de sécurité enterprise-grade et respectons le RGPD. Toutes les données restent sur vos serveurs."
  }
]

const timeline = [
  {
    icon: Lightbulb,
    title: "Analyse et conception",
    duration: "Semaines 1-2",
    description: "Audit approfondi et conception de la solution"
  },
  {
    icon: Code,
    title: "Développement",
    duration: "Semaines 3-4",
    description: "Implémentation des solutions personnalisées"
  },
  {
    icon: BarChart,
    title: "Tests et optimisation",
    duration: "Semaine 5",
    description: "Phase de tests et ajustements"
  },
  {
    icon: Rocket,
    title: "Déploiement",
    duration: "Semaine 6",
    description: "Formation et mise en production"
  }
]

export default function BusinessPage() {
  return (
    <SolutionLayout>
      <Navbar />
      <SolutionHeader
        title="Pack Business"
        subtitle="Optimisez vos performances avec la data"
        description="Solution complète pour les entreprises prêtes à transformer leurs données en avantage compétitif."
        price="4 500"
        ctaText="Réserver une consultation"
        highlights={[
          "ROI projeté : 5x en 6 mois",
          "Support premium 3 mois",
          "Formation équipe complète",
          "Garantie satisfaction 30 jours"
        ]}
      />
      <TimelineSection items={timeline} />
      <FeaturesSection features={features} />
      <GuaranteeSection />
      <FAQSection faqs={faqs} />
    </SolutionLayout>
  )
}