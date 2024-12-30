import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Database, Brain, BarChart3, Lock, Network, Cloud } from "lucide-react"
import { cn } from "@/lib/utils"
import { SolutionCard } from "./SolutionCard"

interface SolutionsSectionProps {
  className?: string
}

const animations = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }
}

const solutions = [
  {
    title: "Analyse de Données",
    description: "Transformez vos données brutes en insights stratégiques grâce à nos outils d'analyse avancés.",
    icon: <BarChart3 className="w-10 h-10 text-primary" />,
    features: [
      "Tableaux de bord personnalisés",
      "Analyses prédictives",
      "Visualisation de données",
      "Rapports automatisés"
    ],
    href: "/solutions/data-analysis"
  },
  {
    title: "Intelligence Artificielle",
    description: "Intégrez l'IA dans votre entreprise pour automatiser et optimiser vos processus.",
    icon: <Brain className="w-10 h-10 text-primary" />,
    features: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision"
    ],
    href: "/solutions/ai"
  },
  {
    title: "Big Data",
    description: "Gérez et analysez efficacement vos données massives avec nos solutions scalables.",
    icon: <Database className="w-10 h-10 text-primary" />,
    features: [
      "Stockage distribué",
      "Traitement en temps réel",
      "ETL automatisé",
      "Data Lakes"
    ],
    href: "/solutions/big-data"
  },
  {
    title: "Sécurité des Données",
    description: "Protégez vos données sensibles avec nos solutions de sécurité avancées.",
    icon: <Lock className="w-10 h-10 text-primary" />,
    features: [
      "Chiffrement de bout en bout",
      "Contrôle d'accès",
      "Audit de sécurité",
      "Conformité RGPD"
    ],
    href: "/solutions/security"
  },
  {
    title: "Edge Computing",
    description: "Optimisez vos traitements de données au plus près de la source.",
    icon: <Network className="w-10 h-10 text-primary" />,
    features: [
      "Traitement en périphérie",
      "Latence minimale",
      "Économie de bande passante",
      "IoT intégré"
    ],
    href: "/solutions/edge-computing"
  },
  {
    title: "Cloud Solutions",
    description: "Déployez vos applications dans le cloud en toute simplicité.",
    icon: <Cloud className="w-10 h-10 text-primary" />,
    features: [
      "Infrastructure as Code",
      "Scalabilité automatique",
      "Haute disponibilité",
      "Monitoring avancé"
    ],
    href: "/solutions/cloud"
  }
]

export function SolutionsSection({ className, ...props }: SolutionsSectionProps) {
  return (
    <div className={cn("relative", className)} {...props}>
      <motion.div
        variants={animations.container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.title}
            variants={animations.item}
            className="group"
            style={{
              perspective: "1000px",
            }}
          >
            <SolutionCard solution={solution} />
          </motion.div>
        ))}
      </motion.div>

      {/* Call to action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-16 text-center"
      >
        <Button
          asChild
          size="lg"
          className="group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
        >
          <Link href="/contact" className="flex items-center">
            Démarrer un projet
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}
