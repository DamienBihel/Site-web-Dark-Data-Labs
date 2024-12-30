"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight, Store, Factory, FileSpreadsheet, Code, Lightbulb } from "lucide-react"
import Link from "next/link"

const prototypes = [
  {
    icon: Store,
    title: "E-commerce Intelligence Suite",
    description: "Anticipez l'avenir de votre gestion et de vos ventes en ligne grâce à nos outils en développement.",
    problems: [
      "Temps perdu sur le reporting",
      "Manque de visibilité sur les stocks",
      "Difficulté à prévoir les tendances"
    ],
    solutions: [
      "Dashboard en temps réel des ventes",
      "Automatisation des alertes de stocks",
      "Prédiction des tendances grâce à l'IA"
    ],
    impact: [
      "Réduction de 80% du temps passé sur le reporting",
      "Anticipation des ruptures de stock",
      "Optimisation des réapprovisionnements"
    ],
    status: "Ce prototype est en cours de développement. Bientôt disponible pour tests et retours d'expérience.",
    href: "/solutions/ecommerce"
  },
  {
    icon: Factory,
    title: "Production Intelligence Hub",
    description: "Centralisez et optimisez vos opérations industrielles avec des solutions technologiques avancées.",
    problems: [
      "Données de production dispersées",
      "Retards dans la détection des anomalies",
      "Maintenance réactive coûteuse"
    ],
    solutions: [
      "Centralisation des données machines",
      "Système d'alertes intelligent",
      "Maintenance prédictive avec l'IA"
    ],
    impact: [
      "Visibilité en temps réel sur les opérations",
      "Réduction des arrêts machines",
      "Optimisation des interventions de maintenance"
    ],
    status: "Actuellement en phase de prototype. Une version test sera bientôt disponible.",
    href: "/solutions/production"
  },
  {
    icon: FileSpreadsheet,
    title: "Automatisation de reporting financier",
    description: "Simplifiez vos processus financiers avec des solutions automatisées en cours de développement.",
    problems: [
      "Consolidation manuelle des données comptables",
      "Risques d'erreurs dans les rapports",
      "Retards dans la communication des résultats financiers"
    ],
    solutions: [
      "Extraction automatique des données comptables via scripts Python ou connecteurs API",
      "Génération automatisée de rapports (PDF, Excel)",
      "Envoi des rapports orchestré via Apache Airflow ou Prefect"
    ],
    impact: [
      "Gain de temps significatif pour les équipes",
      "Fiabilité renforcée des rapports financiers",
      "Communication rapide et efficace des résultats"
    ],
    status: "En phase de développement, avec une version bêta prévue prochainement.",
    href: "/solutions/analytics"
  }
]

const roadmap = [
  {
    phase: "Phase 1 – Q1 2025",
    items: ["Dashboards interactifs pour le suivi e-commerce"]
  },
  {
    phase: "Phase 2 – Q2 2025",
    items: ["Monitor de production avec simulation en temps réel"]
  },
  {
    phase: "Phase 3 – Q2/Q3 2025",
    items: ["Automatisation du reporting financier, lancement de la bêta publique"]
  }
]

const expertise = {
  title: "Notre Stack Technique",
  description: "Nous utilisons des technologies modernes et éprouvées pour construire des solutions robustes et évolutives. Notre stack technique comprend :",
  items: [
    "Data Pipeline : Python (Pandas, NumPy), SQL, APIs REST",
    "Visualisation : Power BI, Tableau, Dashboards sur mesure",
    "Automatisation : Scripts Python, Power Automate, Zapier/Make"
  ]
}

export function CaseStudies() {
  return (
    <section className="relative py-24 bg-[#0A0A0A]">
      {/* Effets de fond */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00FF8520_1px,transparent_1px),linear-gradient(to_bottom,#00FF8520_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container px-4 mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#F2F2F2] via-[#00FF85] to-[#F2F2F2] font-['Montserrat'] uppercase tracking-[0.05em]">
            Nos projets démontrent notre expertise et notre vision
          </h2>
          <p className="text-xl text-[#F2F2F2]/80 max-w-3xl mx-auto leading-relaxed font-['Roboto']">
            <strong className="text-[#F2F2F2]">Découvrez comment nos prototypes illustrent des solutions innovantes pour répondre aux défis métiers.</strong>
            <br />Ces projets sont en cours de développement et montrent notre capacité à transformer les données en leviers de performance concrets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {prototypes.map((prototype, index) => (
            <Card key={index} className="p-8 bg-[#1F1F1F] border border-[#F2F2F2]/10 hover:border-[#00FF85]/50 transition-all duration-300 backdrop-blur-xl hover:shadow-[0_0_20px_rgba(0,255,133,0.2)]">
              <div className="flex flex-col h-full space-y-8">
                <div>
                  <div className="inline-flex p-4 rounded-lg bg-[#00FF85]/10 mb-4">
                    <prototype.icon className="w-8 h-8 text-[#00FF85]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#F2F2F2] font-['Montserrat'] uppercase tracking-wide min-h-[64px]">
                    {prototype.title}
                  </h3>
                  <p className="text-[#F2F2F2]/80 font-['Roboto'] min-h-[72px]">{prototype.description}</p>
                </div>

                <div>
                  <h4 className="font-bold mb-4 text-lg text-[#00FF85] font-['Montserrat'] uppercase">Problématiques ciblées</h4>
                  <ul className="space-y-3 min-h-[120px]">
                    {prototype.problems.map((problem, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-[#00FF85] mr-3 mt-1 flex-shrink-0" />
                        <span className="text-[#F2F2F2]/80 font-['Roboto']">{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-4 text-lg text-[#00FF85] font-['Montserrat'] uppercase">Solutions envisagées</h4>
                  <ul className="space-y-3 min-h-[120px]">
                    {prototype.solutions.map((solution, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-[#00FF85] mr-3 mt-1 flex-shrink-0" />
                        <span className="text-[#F2F2F2]/80 font-['Roboto']">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-4 text-lg text-[#00FF85] font-['Montserrat'] uppercase">Impact attendu</h4>
                  <ul className="space-y-3 min-h-[120px]">
                    {prototype.impact.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-[#00FF85] mr-3 mt-1 flex-shrink-0" />
                        <span className="text-[#F2F2F2]/80 font-['Roboto']">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4">
                  <div className="flex items-start mb-4 min-h-[48px]">
                    <Lightbulb className="w-5 h-5 text-[#00FF85] mr-3 mt-1 flex-shrink-0" />
                    <p className="text-sm text-[#F2F2F2]/60 italic font-['Roboto']">{prototype.status}</p>
                  </div>
                  <Link href={prototype.href} className="block">
                    <Button className="w-full bg-[#00FF85] text-[#0A0A0A] hover:scale-105 transition-transform duration-300 font-['Montserrat'] uppercase tracking-wider group text-base h-[48px]">
                      Découvrir le prototype
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-[#1F1F1F] border border-[#F2F2F2]/10 hover:border-[#00FF85]/50 transition-all duration-300 backdrop-blur-xl h-full">
              <h3 className="text-2xl font-bold mb-4 text-[#00FF85] font-['Montserrat'] uppercase tracking-wide">
                Roadmap des Démonstrations
              </h3>
              <p className="text-lg text-[#F2F2F2]/80 mb-8 font-['Roboto']">
                Notre vision se concrétise à travers un plan de développement structuré. Voici les principales étapes de notre roadmap pour les prochains mois :
              </p>
              <div className="space-y-6">
                {roadmap.map((phase, index) => (
                  <div key={index} className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-[#00FF85] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg text-[#F2F2F2] mb-2 font-['Montserrat']">{phase.phase}</h4>
                      <ul className="space-y-2">
                        {phase.items.map((item, i) => (
                          <li key={i} className="text-[#F2F2F2]/80 font-['Roboto']">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-[#1F1F1F] border border-[#F2F2F2]/10 hover:border-[#00FF85]/50 transition-all duration-300 backdrop-blur-xl h-full">
              <h3 className="text-2xl font-bold mb-4 text-[#00FF85] font-['Montserrat'] uppercase tracking-wide">
                {expertise.title}
              </h3>
              <p className="text-lg text-[#F2F2F2]/80 mb-8 font-['Roboto']">
                {expertise.description}
              </p>
              <ul className="space-y-4">
                {expertise.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Code className="w-5 h-5 text-[#00FF85] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-[#F2F2F2]/80 font-['Roboto']">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
