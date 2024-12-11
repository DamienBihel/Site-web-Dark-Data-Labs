"use client"

import { SolutionLayout } from "@/components/solutions/solution-layout"
import { SolutionHeader } from "@/components/solutions/solution-header"
import { FeaturesSection } from "@/components/solutions/features-section"
import { GuaranteeSection } from "@/components/solutions/guarantee-section"
import { FAQSection } from "@/components/solutions/faq-section"
import { TimelineSection } from "@/components/solutions/timeline-section"
import { Navbar } from "@/components/layout/navbar"
import { Lightbulb, Code, Rocket } from "lucide-react"

const features = [
  {
    title: "Audit & Stratégie",
    items: [
      "Audit complet de vos données actuelles",
      "Identification des quick wins",
      "Plan d'action personnalisé",
      "Définition des KPIs prioritaires"
    ]
  },
  {
    title: "Implémentation",
    items: [
      "Configuration d'un dashboard personnalisé",
      "Mise en place de 2 automatisations clés",
      "Intégration avec vos outils existants",
      "Documentation détaillée"
    ]
  },
  {
    title: "Formation & Support",
    items: [
      "4h de formation personnalisée",
      "Support technique pendant 1 mois",
      "Guide utilisateur complet",
      "Vidéos tutorielles"
    ]
  }
]

const faqs = [
  {
    question: "Combien de temps faut-il pour voir les premiers résultats ?",
    answer: "Les premiers résultats sont visibles dès les 2 premières semaines avec la mise en place du dashboard initial et des premières automatisations. Le ROI complet se concrétise généralement en 2-3 mois."
  },
  {
    question: "Je n'ai pas d'équipe technique, est-ce un problème ?",
    answer: "Non, le Pack Starter est spécialement conçu pour les entreprises sans expertise technique interne. Notre formation de 4h vous rendra autonome sur les outils mis en place."
  },
  {
    question: "Mes données sont-elles suffisamment 'propres' ?",
    answer: "Nous commençons par un audit qui inclut le nettoyage et la structuration de vos données. Peu importe leur état actuel, nous les rendrons exploitables."
  },
  {
    question: "Que se passe-t-il après le mois de support inclus ?",
    answer: "Vous pouvez soit continuer en autonomie avec la documentation fournie, soit opter pour une extension du support (tarifs sur demande)."
  }
]

const timeline = [
  {
    icon: Lightbulb,
    title: "Audit et stratégie",
    duration: "Semaine 1",
    description: "Analyse de vos besoins et définition du plan d'action"
  },
  {
    icon: Code,
    title: "Implémentation",
    duration: "Semaine 2",
    description: "Mise en place des solutions et intégrations"
  },
  {
    icon: Rocket,
    title: "Formation et lancement",
    duration: "Semaine 3",
    description: "Formation de votre équipe et mise en production"
  }
]

export default function StarterPage() {
  return (
    <SolutionLayout>
      <Navbar />
      <SolutionHeader
        title="Pack Starter"
        subtitle="Démarrez votre transformation digitale"
        description="Idéal pour les TPE et PME qui souhaitent débuter leur transformation digitale avec une solution concrète et rapide à mettre en place."
        price="1 800"
        ctaText="Réserver un appel découverte"
        highlights={[
          "ROI projeté : 3x en 3 mois",
          "Support dédié pendant 1 mois",
          "Formation personnalisée incluse",
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