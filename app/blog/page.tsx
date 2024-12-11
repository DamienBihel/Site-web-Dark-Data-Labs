"use client"

import { ContentLayout } from "@/components/content/content-layout"
import { ContentHeader } from "@/components/content/content-header"
import { NewsletterSection } from "@/components/content/newsletter-section"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Calendar, BookOpen, LineChart } from "lucide-react"

const technicalArticles = [
  {
    title: "Les fondamentaux de l'automatisation pour PME",
    description: "Concepts clés, outils essentiels et premiers pas",
    date: "Janvier 2025",
    icon: LineChart,
    tags: ["Automatisation", "PME", "Guide"]
  },
  {
    title: "Guide du Dashboard Parfait",
    description: "Principes de design, KPIs essentiels, best practices",
    date: "Février 2025",
    icon: BookOpen,
    tags: ["Dashboard", "Design", "KPIs"]
  },
  {
    title: "Python pour l'Analyse de Données : Par Où Commencer",
    description: "Setup basique, librairies essentielles, premiers scripts",
    date: "Mars 2025",
    icon: Calendar,
    tags: ["Python", "Data Analysis", "Tutorial"]
  }
]

const businessArticles = [
  {
    title: "ROI de la Data : Guide Pratique",
    description: "Calcul du retour sur investissement, métriques clés, cas concrets",
    date: "Mars 2025",
    icon: LineChart,
    tags: ["ROI", "Business", "Metrics"]
  },
  {
    title: "Automatiser Sans Casser Son Business",
    description: "Approche progressive, gestion du changement, pièges à éviter",
    date: "Avril 2025",
    icon: BookOpen,
    tags: ["Automatisation", "Change Management", "Guide"]
  }
]

export default function BlogPage() {
  return (
    <ContentLayout>
      <ContentHeader
        title="Blog - Data Insights"
        subtitle="Explorez nos articles techniques et insights business"
        description="Découvrez nos prochains articles sur l'analyse de données, l'automatisation et la transformation digitale."
      />

      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Articles Techniques Prévus</h2>
            <p className="text-lg text-muted-foreground mb-8">Q1 2025</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {technicalArticles.map((article, index) => {
                const Icon = article.icon
                return (
                  <motion.div
                    key={article.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  >
                    <Card className="h-full p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-secondary/10">
                          <Icon className="h-5 w-5 text-secondary" />
                        </div>
                        <p className="text-sm text-muted-foreground">{article.date}</p>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                      <p className="text-muted-foreground mb-4">{article.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-4">Business Insights Prévus</h2>
            <p className="text-lg text-muted-foreground mb-8">Q1-Q2 2025</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {businessArticles.map((article, index) => {
                const Icon = article.icon
                return (
                  <motion.div
                    key={article.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  >
                    <Card className="h-full p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-secondary/10">
                          <Icon className="h-5 w-5 text-secondary" />
                        </div>
                        <p className="text-sm text-muted-foreground">{article.date}</p>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                      <p className="text-muted-foreground mb-4">{article.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <NewsletterSection />
    </ContentLayout>
  )
}