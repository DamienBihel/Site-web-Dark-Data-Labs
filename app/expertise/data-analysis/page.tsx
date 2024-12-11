"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { ExpertiseHeader } from "@/components/expertise/expertise-header"
import { TechStack } from "@/components/expertise/tech-stack"
import { Domains } from "@/components/expertise/domains"
import { VisualSection } from "@/components/expertise/visual-section"

export default function DataAnalysisPage() {
  return (
    <main>
      <Navbar />
      <ExpertiseHeader
        title="Data Analysis"
        subtitle="Transformez vos données en décisions éclairées"
        description="L'analyse de données n'est pas qu'une question de chiffres - c'est l'art de transformer des informations brutes en insights actionnables pour votre business."
      />
      <VisualSection
        imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
        imageAlt="Data Analysis Dashboard"
        title="L'Intelligence des Données"
        description="Notre approche combine expertise technique et compréhension business pour transformer vos données en avantages compétitifs concrets."
        stats={[
          { value: "85%", label: "Précision prédictive" },
          { value: "60%", label: "Gain de temps" },
          { value: "3x", label: "ROI moyen" }
        ]}
      />
      <TechStack
        title="Notre Stack Technique"
        stacks={[
          {
            category: "Data Processing",
            items: [
              "Python (Pandas, NumPy, Scikit-learn)",
              "SQL (PostgreSQL, MySQL)",
              "R (analyses statistiques)"
            ]
          },
          {
            category: "Visualisation",
            items: [
              "Power BI",
              "Tableau",
              "Plotly",
              "Custom dashboards"
            ]
          },
          {
            category: "Infrastructure",
            items: [
              "Cloud (AWS, GCP)",
              "Data Lakes",
              "Data Warehouses"
            ]
          }
        ]}
      />
      <Domains
        title="Domaines d'Application"
        domains={[
          {
            title: "Business Intelligence",
            items: [
              "Analyses des ventes",
              "Prévisions financières",
              "Segmentation client",
              "Analyse de performance"
            ]
          },
          {
            title: "Optimisation Opérationnelle",
            items: [
              "Efficacité des processus",
              "Gestion des stocks",
              "Maintenance prédictive",
              "Contrôle qualité"
            ]
          },
          {
            title: "Marketing Analytics",
            items: [
              "ROI des campagnes",
              "Parcours client",
              "Analyse comportementale",
              "Attribution marketing"
            ]
          }
        ]}
      />
      <Footer />
    </main>
  )
}