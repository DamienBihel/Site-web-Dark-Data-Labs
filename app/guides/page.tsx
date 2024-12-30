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
    <main className="bg-[#0A0A0A]">
      <ContentLayout>
        <ContentHeader
          title="Guides & Ressources"
          subtitle="Ressources pratiques pour votre transformation digitale"
          description="Des guides complets et pratiques pour vous accompagner dans votre transformation digitale."
        />

        <section className="relative py-24">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[#1F1F1F]/50" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-40 mix-blend-overlay" />
            <div className="absolute inset-0">
              <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00FF85]/10 via-transparent to-transparent blur-2xl" />
            </div>
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-24"
            >
              <Card className="p-8 md:p-12 bg-[#1F1F1F] border-[#00FF85]/20 hover:border-[#00FF85]/40 transition-colors duration-300">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-['Montserrat'] font-extrabold tracking-[0.05em] text-[#F2F2F2] mb-4">
                    Data-Driven PME : Guide Complet
                  </h2>
                  <p className="text-xl text-[#F2F2F2]/80 font-['Roboto'] mb-6">
                    Guide gratuit de 45 pages sur la transformation digitale des PME
                  </p>
                  <div className="space-y-4 mb-8 text-[#F2F2F2]/70 font-['Roboto']">
                    <p className="flex items-center gap-2">
                      <span className="text-[#00FF85]">✓</span>
                      <span>Évaluation de votre maturité digitale</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#00FF85]">✓</span>
                      <span>Premiers pas dans l'analyse de données</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#00FF85]">✓</span>
                      <span>Automatisation : par où commencer</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#00FF85]">✓</span>
                      <span>Templates et checklist inclus</span>
                    </p>
                  </div>
                  <Button 
                    className="bg-[#00FF85] text-[#0A0A0A] hover:bg-[#00FF85]/90 transition-colors duration-300"
                    size="lg"
                  >
                    <Link href="#newsletter" className="flex items-center">
                      Pré-inscription au guide gratuit
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <p className="text-sm text-[#F2F2F2]/60 mt-4 font-['Roboto']">
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
              <h2 className="text-3xl font-['Montserrat'] font-extrabold tracking-[0.05em] text-[#F2F2F2] mb-4">
                Guides Techniques à Venir
              </h2>
              <p className="text-lg text-[#F2F2F2]/70 font-['Roboto'] mb-8">Q2 2025</p>
              
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
                      <Card className="h-full p-6 bg-[#1F1F1F] border-[#00FF85]/20 hover:border-[#00FF85]/40 hover:shadow-[0_0_20px_rgba(0,255,133,0.2)] transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-lg bg-[#00FF85]/10">
                            <Icon className="h-5 w-5 text-[#00FF85]" />
                          </div>
                          <p className="text-sm text-[#F2F2F2]/60 font-['Roboto']">{guide.date}</p>
                        </div>
                        <h3 className="text-xl font-['Montserrat'] font-bold tracking-[0.05em] text-[#F2F2F2] mb-3">
                          {guide.title}
                        </h3>
                        <p className="text-[#F2F2F2]/70 font-['Roboto']">{guide.description}</p>
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
    </main>
  )
}