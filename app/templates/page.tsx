"use client"

import { ContentLayout } from "@/components/content/content-layout"
import { ContentHeader } from "@/components/content/content-header"
import { NewsletterSection } from "@/components/content/newsletter-section"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { BarChart, FileSpreadsheet, Code, ArrowRight } from "lucide-react"
import Link from "next/link"

const basicTemplates = [
  {
    title: "Dashboard Starter Pack",
    description: "Template Google Data Studio, KPIs essentiels préconfigurés, guide d'utilisation",
    icon: BarChart,
    date: "Janvier 2025"
  },
  {
    title: "Audit Checklist Excel",
    description: "Modèle d'audit data, scoring automatique, recommandations intégrées",
    icon: FileSpreadsheet,
    date: "Février 2025"
  },
  {
    title: "Automation Planning Template",
    description: "Feuille de route automation, priorisation matrix, ROI calculator",
    icon: Code,
    date: "Mars 2025"
  }
]

const advancedTemplates = [
  {
    title: "Python Scripts Package",
    description: "Scripts d'analyse basiques, automatisation reporting, documentation complète",
    icon: Code,
    date: "Avril 2025"
  },
  {
    title: "Power BI Template Suite",
    description: "Dashboards par secteur, connexions préconfigurées, guides d'adaptation",
    icon: BarChart,
    date: "Mai 2025"
  }
]

export default function TemplatesPage() {
  return (
    <ContentLayout>
      <ContentHeader
        title="Templates & Outils"
        subtitle="Resources prêtes à l'emploi pour votre transformation digitale"
        description="Des templates professionnels et des outils optimisés pour accélérer votre transformation digitale."
      />

      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Templates Basiques</h2>
            <p className="text-lg text-muted-foreground mb-8">Phase 1 - Q1 2025</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {basicTemplates.map((template, index) => {
                const Icon = template.icon
                return (
                  <motion.div
                    key={template.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  >
                    <Card className="h-full p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-secondary/10">
                          <Icon className="h-5 w-5 text-secondary" />
                        </div>
                        <p className="text-sm text-muted-foreground">{template.date}</p>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{template.title}</h3>
                      <p className="text-muted-foreground">{template.description}</p>
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
            className="mb-24"
          >
            <h2 className="text-3xl font-bold mb-4">Templates Avancés</h2>
            <p className="text-lg text-muted-foreground mb-8">Phase 2 - Q2 2025</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {advancedTemplates.map((template, index) => {
                const Icon = template.icon
                return (
                  <motion.div
                    key={template.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  >
                    <Card className="h-full p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-secondary/10">
                          <Icon className="h-5 w-5 text-secondary" />
                        </div>
                        <p className="text-sm text-muted-foreground">{template.date}</p>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{template.title}</h3>
                      <p className="text-muted-foreground">{template.description}</p>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="p-8 bg-muted">
              <h2 className="text-2xl font-bold mb-6">Programme Early Access</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Bénéfices</h3>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li className="flex items-center gap-2">
                      <span className="text-secondary">✓</span>
                      <span>Accès anticipé aux templates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-secondary">✓</span>
                      <span>Support personnalisé</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-secondary">✓</span>
                      <span>Tarifs préférentiels</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-secondary">✓</span>
                      <span>Input sur les futures releases</span>
                    </li>
                  </ul>
                  <Button size="lg" asChild>
                    <Link href="#newsletter">
                      Rejoindre le programme
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Accès Prioritaire</h4>
                    <p className="text-sm text-muted-foreground">
                      Soyez les premiers à tester et utiliser nos nouveaux templates
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Support Dédié</h4>
                    <p className="text-sm text-muted-foreground">
                      Assistance personnalisée pour l'implémentation
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Influence</h4>
                    <p className="text-sm text-muted-foreground">
                      Participez à l'évolution de nos solutions
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <div id="newsletter">
        <NewsletterSection />
      </div>
    </ContentLayout>
  )
}