import { motion } from "framer-motion"
import { BaseComponentProps } from "@/components/component.config"
import { cn } from "@/lib/utils"
import { CaseStudyCard } from "./CaseStudyCard"
import { Button } from "@/components/shared/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface CaseStudiesSectionProps extends BaseComponentProps {
  featured?: boolean
}

const animations = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }
}

const caseStudies = [
  {
    title: "Optimisation de la Supply Chain",
    client: "LogiTech Solutions",
    description: "Mise en place d'une solution d'analyse prédictive pour optimiser la gestion des stocks et la logistique.",
    image: "/case-studies/logitech.jpg",
    results: [
      "Réduction de 30% des coûts de stockage",
      "Amélioration de 25% des délais de livraison",
      "Prévisions précises à 95%"
    ],
    technologies: ["Python", "TensorFlow", "Power BI"],
    industry: "Logistique",
    href: "/case-studies/logitech-solutions"
  },
  {
    title: "IA pour Service Client",
    client: "TechCare",
    description: "Développement d'un système de chatbot intelligent pour l'assistance client 24/7.",
    image: "/case-studies/techcare.jpg",
    results: [
      "Satisfaction client améliorée de 40%",
      "Réduction de 60% du temps de réponse",
      "Automatisation de 75% des requêtes"
    ],
    technologies: ["NLP", "Machine Learning", "Node.js"],
    industry: "Tech",
    href: "/case-studies/techcare"
  },
  {
    title: "Analyse de Données Financières",
    client: "FinancePlus",
    description: "Implémentation d'une solution Big Data pour l'analyse en temps réel des transactions.",
    image: "/case-studies/financeplus.jpg",
    results: [
      "Détection de fraude améliorée de 85%",
      "Analyse en temps réel de millions de transactions",
      "ROI de 300% en 6 mois"
    ],
    technologies: ["Spark", "Kafka", "Elasticsearch"],
    industry: "Finance",
    href: "/case-studies/financeplus"
  }
]

export function CaseStudiesSection({ featured = false, className, ...props }: CaseStudiesSectionProps) {
  const displayedCaseStudies = featured ? caseStudies.slice(0, 3) : caseStudies

  return (
    <section className={cn("py-16 md:py-24 bg-background", className)} {...props}>
      <div className="container">
        <motion.div
          variants={animations.container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <motion.h2 
              variants={animations.item}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
              Nos Réalisations
            </motion.h2>
            <motion.p 
              variants={animations.item}
              className="text-xl text-muted-foreground"
            >
              Découvrez comment nous avons aidé nos clients à transformer leurs données en succès.
            </motion.p>
          </div>

          <motion.div 
            variants={animations.item}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {displayedCaseStudies.map((study) => (
              <CaseStudyCard
                key={study.title}
                caseStudy={study}
                className="h-full"
              />
            ))}
          </motion.div>

          {featured && (
            <motion.div 
              variants={animations.item}
              className="text-center"
            >
              <Link href="/case-studies">
                <Button variant="secondary" size="lg" className="gap-2">
                  Voir tous nos cas d'études
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
