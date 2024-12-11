"use client"

import { SolutionLayout } from "@/components/solutions/solution-layout"
import { SolutionHeader } from "@/components/solutions/solution-header"
import { FeaturesSection } from "@/components/solutions/features-section"
import { GuaranteeSection } from "@/components/solutions/guarantee-section"
import { FAQSection } from "@/components/solutions/faq-section"
import { TimelineSection } from "@/components/solutions/timeline-section"
import { Navbar } from "@/components/layout/navbar"
import { Lightbulb, Code, Rocket, BarChart, Users } from "lucide-react"

const features = [
  {
    title: "Stratégie & Architecture",
    items: [
      "Audit stratégique complet",
      "Architecture data personnalisée",
      "Roadmap transformation",
      "Plan ROI détaillé"
    ]
  },
  {
    title: "Implémentation Enterprise",
    items: [
      "Suite BI complète",
      "Automatisation complète des processus",
      "Intégration tous systèmes",
      "Analytics prédictif"
    ]
  },
  {
    title: "Support & Evolution",
    items: [
      "Formation complète des équipes",
      "Support illimité 6 mois",
      "Accompagnement stratégique",
      "Optimisation continue"
    ]
  }
]

const faqs = [
  {
    question: "Comment gérez-vous le déploiement multi-sites ?",
    answer: "Nous utilisons une approche progressive : déploiement pilote sur un site, validation, puis déploiement en cascade avec adaptation locale si nécessaire."
  },
  {
    question: "Quel niveau d'implication est requis de notre côté ?",
    answer: "Nous demandons un référent projet et l'accès aux décideurs clés. Notre méthodologie minimise l'impact sur vos opérations quotidiennes."
  },
  {
    question: "Que comprend exactement le support illimité ?",
    answer: "Pendant 6 mois, vous bénéficiez de : support technique 24/7, consultations stratégiques mensuelles, formations complémentaires à la demande, et optimisations continues."
  },
  {
    question: "Comment assurez-vous la transition après les 6 mois ?",
    answer: "Nous préparons la transition dès le début avec une formation complète des équipes, une documentation exhaustive, un transfert de compétences et des options de support prolongé."
  }
]

const timeline = [
  {
    icon: Lightbulb,
    title: "Stratégie et conception",
    duration: "Mois 1",
    description: "Audit stratégique et architecture de la solution"
  },
  {
    icon: Code,
    title: "Développement core",
    duration: "Mois 2",
    description: "Implémentation des solutions enterprise"
  },
  {
    icon: BarChart,
    title: "Intégration",
    duration: "Mois 2",
    description: "Connexion avec tous les systèmes"
  },
  {
    icon: Users,
    title: "Formation",
    duration: "Mois 3",
    description: "Formation approfondie des équipes"
  },
  {
    icon: Rocket,
    title: "Déploiement",
    duration: "Mois 3",
    description: "Mise en production et optimisation"
  }
]

export default function PremiumPage() {
  return (
    <SolutionLayout>
      <Navbar />
      <SolutionHeader
        title="Pack Premium"
        subtitle="Transformation digitale complète"
        description="Solution enterprise-grade pour une transformation digitale complète et sur mesure."
        price="8 000"
        ctaText="Réserver un entretien"
        highlights={[
          "ROI projeté : 8x en 12 mois",
          "Support illimité 6 mois",
          "Formation complète équipes",
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