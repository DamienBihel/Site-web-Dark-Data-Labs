"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { ExpertiseHeader } from "@/components/expertise/expertise-header"
import { TechStack } from "@/components/expertise/tech-stack"
import { Domains } from "@/components/expertise/domains"
import { Workflow, Settings2, Megaphone } from "lucide-react"

export default function AutomationPage() {
  return (
    <main className="bg-[#0A0A0A]">
      <Navbar />
      <ExpertiseHeader
        title="Automation"
        subtitle="Libérez votre potentiel avec l'automatisation intelligente"
        description="L'automatisation ne se limite pas à déléguer des tâches aux machines : c'est une réinvention stratégique de vos processus pour gagner en efficacité et en performance."
      />
      
      <div className="relative py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#1F1F1F]/50" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-40 mix-blend-overlay" />
          <div className="absolute inset-0">
            <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00FF85]/10 via-transparent to-transparent blur-2xl" />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-['Montserrat'] font-extrabold tracking-[0.05em] text-[#F2F2F2] sm:text-4xl uppercase mb-6">
              L'Efficacité Automatisée
            </h2>
            <p className="text-lg font-['Roboto'] text-[#F2F2F2]/70 leading-relaxed">
              Nous transformons vos processus manuels en <span className="text-[#00FF85] font-semibold">workflows intelligents</span>, libérant votre équipe pour se concentrer sur des tâches à <span className="text-[#00FF85] font-semibold">forte valeur ajoutée</span>.
            </p>
          </div>
        </div>
      </div>

      <TechStack
        title="Notre Stack Technique"
        stacks={[
          {
            category: "Automatisation avec Code",
            items: [
              "Python",
              "JavaScript",
              "APIs REST"
            ]
          },
          {
            category: "No-Code/Low-Code",
            items: [
              "Zapier",
              "Make (Integromat)",
              "Power Automate",
              "Airtable"
            ]
          },
          {
            category: "Intégrations",
            items: [
              "CRM",
              "ERP",
              "Outils métier",
              "Solutions cloud"
            ]
          }
        ]}
      />

      <Domains
        title="Domaines d'Application"
        description="Des solutions d'automatisation adaptées à vos besoins spécifiques"
        domains={[
          {
            title: "Processus Administratifs",
            description: "Simplification et automatisation des tâches répétitives",
            icon: <Workflow className="h-6 w-6" />
          },
          {
            title: "Opérations Business",
            description: "Fluidification des workflows pour une productivité accrue",
            icon: <Settings2 className="h-6 w-6" />
          },
          {
            title: "Marketing & Communication",
            description: "Automatisation des campagnes et du reporting",
            icon: <Megaphone className="h-6 w-6" />
          }
        ]}
      />
      <Footer />
    </main>
  )
}