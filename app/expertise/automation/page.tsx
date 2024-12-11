"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { ExpertiseHeader } from "@/components/expertise/expertise-header"
import { TechStack } from "@/components/expertise/tech-stack"
import { Domains } from "@/components/expertise/domains"
import { VisualSection } from "@/components/expertise/visual-section"

export default function AutomationPage() {
  return (
    <main>
      <Navbar />
      <ExpertiseHeader
        title="Automation"
        subtitle="Libérez votre potentiel avec l'automatisation intelligente"
        description="L'automatisation n'est pas une simple délégation de tâches aux machines - c'est une réinvention intelligente de vos processus pour plus d'efficacité."
      />
      <VisualSection
        imageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
        imageAlt="Automation Workflow"
        title="L'Efficacité Automatisée"
        description="Nos solutions d'automatisation transforment vos processus manuels en workflows intelligents, libérant votre équipe pour des tâches à plus forte valeur ajoutée."
        stats={[
          { value: "-40%", label: "Temps administratif" },
          { value: "99%", label: "Précision" },
          { value: "24/7", label: "Disponibilité" }
        ]}
      />
      <TechStack
        title="Notre Stack Technique"
        stacks={[
          {
            category: "Automatisation Code",
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
        domains={[
          {
            title: "Processus Administratifs",
            items: [
              "Génération de rapports",
              "Traitement de documents",
              "Gestion des emails",
              "Facturation automatique"
            ]
          },
          {
            title: "Opérations Business",
            items: [
              "Synchronisation des données",
              "Mise à jour inventaires",
              "Alertes intelligentes",
              "Workflow approval"
            ]
          },
          {
            title: "Marketing & Communication",
            items: [
              "Posts automatisés",
              "Nurturing email",
              "Lead scoring",
              "Follow-up client"
            ]
          }
        ]}
      />
      <Footer />
    </main>
  )
}