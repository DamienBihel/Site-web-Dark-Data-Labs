"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "./project-card"
import { RoadmapSection } from "./roadmap-section"
import { TechStack } from "./tech-stack"
import { MethodologySection } from "./methodology-section"
import { EarlyAccessForm } from "./early-access-form"

const projects = [
  {
    title: "E-commerce Intelligence Suite",
    category: "Solution type pour commerce en ligne",
    problems: [
      "Temps excessif passé sur le reporting",
      "Manque de visibilité sur les stocks",
      "Difficultés à prévoir les tendances"
    ],
    solutions: [
      "Dashboard temps réel des ventes",
      "Automatisation des alertes stocks",
      "Prédictions des tendances"
    ],
    benefits: [
      "-80% du temps de reporting",
      "Anticipation des ruptures de stock",
      "Optimisation des réapprovisionnements"
    ],
    status: "Démonstration en développement"
  },
  {
    title: "Production Intelligence Hub",
    category: "Solution type pour industrie",
    problems: [
      "Données de production dispersées",
      "Retard dans la détection des anomalies",
      "Maintenance réactive coûteuse"
    ],
    solutions: [
      "Centralisation des données machines",
      "Système d'alertes intelligent",
      "Maintenance prédictive"
    ],
    benefits: [
      "Visibilité temps réel",
      "Réduction des arrêts machines",
      "Optimisation des interventions"
    ],
    status: "Prototype en cours"
  },
  {
    title: "Music Analytics Platform",
    category: "Projet signature en développement",
    problems: [
      "Analyse complexe des performances",
      "Données dispersées",
      "Manque de visibilité"
    ],
    solutions: [
      "Analyse des performances streaming",
      "Tableau de bord artiste",
      "Recommandations data-driven"
    ],
    benefits: [
      "Vision unifiée des performances",
      "Insights actionnables",
      "Optimisation de la stratégie"
    ],
    status: "Lancement prévu : Q1 2025"
  }
]

export function CaseStudies() {
  return (
    <section className="py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold mb-4">Solutions Data & Automation</h2>
          <p className="text-lg text-muted-foreground">
            Découvrez comment nos solutions peuvent transformer votre entreprise à travers ces cas d'usage types. 
            Chaque exemple illustre notre approche technique et le potentiel de transformation pour votre business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>

        <RoadmapSection />
        <TechStack />
        <MethodologySection />
        <EarlyAccessForm />
      </motion.div>
    </section>
  )
}