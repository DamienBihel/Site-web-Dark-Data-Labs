"use client"

import { ContentLayout } from "@/components/content/content-layout"
import { ContentHeader } from "@/components/content/content-header"
import { NewsletterSection } from "@/components/content/newsletter-section"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Book, FileText, BarChart, ArrowRight } from "lucide-react"
import Link from "next/link"

const technicalGuides = [
  {
    title: "Checklist Audit Data",
    description: "Template d'audit, points de contrôle, métriques essentielles",
    icon: FileText,
    date: "Q2 2025"
  },
  {
    title: "Guide des KPIs par Secteur",
    description: "E-commerce, Manufacturing, Services B2B",
    icon: BarChart,
    date: "Q2 2025"
  },
  {
    title: "Manuel d'Automatisation",
    description: "Méthodologie step-by-step, outils recommandés, cas pratiques",
    icon: Book,
    date: "Q2 2025"
  }
]

export default function GuidesPage() {
  return (
    <ContentLayout>
      <ContentHeader
        title="Guides & Ressources"
        subtitle="Ressources pratiques pour votre transformation digitale"
        description="Des guides complets et pratiques pour vous accompagner dans votre transformation digitale."
      />

      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-24"
          >
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold mb-4">Data-Driven PME : Guide Complet</h2>
                <p className="text-xl text-primary-foreground/80 mb-6">
                  Guide gratuit de 45 pages sur la transformation digitale des PME
                </p>
                <div className="space-y-4 mb-8">
                  <p className="flex items-center gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Évaluation de votre maturité digitale</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Premiers pas dans l'analyse de données</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Automatisation : par où commencer</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Templates et checklist inclus</span>
                  </p>
                </div>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="#newsletter">
                    Pré-inscription au guide gratuit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-sm text-primary-foreground/60 mt-4">
                  Sortie prévue : Q1 2025
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-4">Guides Techniques à Venir</h2>
            <p className="text-lg text-muted-foreground mb-8">Q2 2025</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {technicalGuides.map((guide, index) => {
                const Icon = guide.icon
                return (
                  <motion.div
                    key={guide.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  >
                    <Card className="h-full p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-secondary/10">
                          <Icon className="h-5 w-5 text-secondary" />
                        </div>
                        <p className="text-sm text-muted-foreground">{guide.date}</p>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{guide.title}</h3>
                      <p className="text-muted-foreground">{guide.description}</p>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <div id="newsletter">
        <NewsletterSection />
      </div>
    </ContentLayout>
  )
}