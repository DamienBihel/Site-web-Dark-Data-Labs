"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { ExpertiseHeader } from "@/components/expertise/expertise-header"
import { TechStack } from "@/components/expertise/tech-stack"
import { Domains } from "@/components/expertise/domains"
import { Brain, LineChart, Rocket } from "lucide-react"

export default function DataAnalysisPage() {
  return (
    <main className="bg-[#0A0A0A]">
      <Navbar />
      <ExpertiseHeader
        title="Data Analysis"
        subtitle="Transformez vos données en décisions éclairées"
        description="L'analyse de données ne se limite pas aux chiffres : c'est l'art de transformer des informations brutes en insights stratégiques pour booster votre business."
      />
      
      <div className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-['Montserrat'] font-extrabold tracking-[0.05em] text-[#F2F2F2] sm:text-4xl uppercase mb-6">
              L'Intelligence des Données
            </h2>
            <p className="text-lg font-['Roboto'] text-[#F2F2F2]/70 leading-relaxed">
              Notre approche allie <span className="text-[#00FF85] font-semibold">expertise technique</span> et <span className="text-[#00FF85] font-semibold">compréhension business</span> pour convertir vos données en <span className="text-[#00FF85] font-semibold">avantages compétitifs concrets</span>.
            </p>
          </div>
        </div>
      </div>

      <TechStack
        title="Notre Stack Technique"
        stacks={[
          {
            category: "Data Processing",
            items: [
              "Python : Pandas, NumPy, Scikit-learn",
              "SQL : PostgreSQL, MySQL",
              "R : Analyses statistiques"
            ]
          },
          {
            category: "Visualisation",
            items: [
              "Power BI",
              "Tableau",
              "Plotly",
              "Dashboards personnalisés"
            ]
          },
          {
            category: "Infrastructure",
            items: [
              "Cloud : AWS, GCP",
              "Data Lakes",
              "Data Warehouses"
            ]
          }
        ]}
      />

      <Domains
        title="Domaines d'Application"
        description="Des solutions d'analyse adaptées à vos besoins spécifiques"
        domains={[
          {
            title: "Business Intelligence",
            description: "Insights stratégiques pour des décisions éclairées",
            icon: <Brain className="h-6 w-6" />
          },
          {
            title: "Optimisation Opérationnelle",
            description: "Réduction des coûts, amélioration des processus",
            icon: <Rocket className="h-6 w-6" />
          },
          {
            title: "Marketing Analytics",
            description: "Analyse de performances, segmentation et ciblage précis",
            icon: <LineChart className="h-6 w-6" />
          }
        ]}
      />
      <Footer />
    </main>
  )
}