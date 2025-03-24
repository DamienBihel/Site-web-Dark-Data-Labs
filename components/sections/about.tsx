"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Workflow, GraduationCap, Target, LineChart, History, ArrowRight, CheckCircle, Lightbulb, Code, Gauge } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const stats = [
  {
    icon: History,
    value: "+18",
    label: "ans d'expertise",
    description: "Alliant précision technique et innovation"
  },
  {
    icon: Target,
    value: "-40%",
    label: "de temps administratif",
    description: "Optimisez vos processus et gagnez en efficacité"
  },
  {
    icon: LineChart,
    value: "x3",
    label: "ROI",
    description: "Des solutions conçues pour maximiser vos résultats"
  }
]

// Expertise enrichie avec les éléments de features/about/expertise.tsx
const expertise = [
  {
    icon: Brain,
    title: "Analyse avancée",
    description: "Python, IA et scraping pour extraire la valeur de vos données",
    items: [
      "Data Analysis Professionnel",
      "Expert en Python",
      "Spécialiste du scraping et de l'analyse de données"
    ]
  },
  {
    icon: Workflow,
    title: "Optimisation des processus",
    description: "Workflows no-code pour plus d'efficacité",
    items: [
      "Création de workflows automatisés",
      "Intégration d'outils no-code",
      "Optimisation des processus métier"
    ]
  },
  {
    icon: GraduationCap,
    title: "Accompagnement stratégique",
    description: "Une vision data-driven alignée sur vos objectifs business",
    items: [
      "Formateur technique expérimenté",
      "Accompagnement personnalisé",
      "Vision stratégique data-driven"
    ]
  }
]

// Valeurs enrichies avec les éléments de features/about/values.tsx
const values = [
  {
    icon: Gauge,
    title: "Excellence Technique",
    description: "Des solutions fiables et une documentation claire",
    items: [
      "Rigueur méthodologique",
      "Solutions robustes et évolutives",
      "Documentation précise"
    ]
  },
  {
    icon: Lightbulb,
    title: "Innovation Pragmatique",
    description: "Adaptée à vos besoins réels, avec un focus sur le ROI",
    items: [
      "Solutions adaptées à vos besoins réels",
      "Approche progressive et mesurable",
      "Focus sur le ROI"
    ]
  },
  {
    icon: LineChart,
    title: "Transparence et Efficacité",
    description: "Une communication structurée et directe",
    items: [
      "Communication claire et directe",
      "Processus structuré",
      "Résultats mesurables"
    ]
  }
]

// Fonction About enrichie avec les éléments de features/about/
export function About() {
  return (
    <section className="relative py-24 bg-[#0A0A0A]">
      {/* Effets de fond */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00FF8520_1px,transparent_1px),linear-gradient(to_bottom,#00FF8520_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container px-4 mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#F2F2F2] via-[#00FF85] to-[#F2F2F2] font-['Montserrat'] uppercase tracking-[0.05em]">
            Libérez le plein potentiel de vos données
          </h2>
          <p className="text-xl text-[#F2F2F2]/80 max-w-3xl mx-auto font-['Roboto']">
            Nous aidons les PME ambitieuses à transformer leurs données en leviers de croissance grâce à l'IA, l'automatisation no-code et l'analyse avancée.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => (
              <Card key={index} className="p-8 bg-[#1F1F1F] border border-[#F2F2F2]/10 hover:border-[#00FF85]/50 transition-all duration-300 backdrop-blur-xl hover:shadow-[0_0_20px_rgba(0,255,133,0.2)]">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-lg bg-[#00FF85]/10 mb-6">
                    <stat.icon className="w-8 h-8 text-[#00FF85]" />
                  </div>
                  <h3 className="text-4xl font-extrabold mb-2 text-[#00FF85] font-['Montserrat']">
                    {stat.value}
                  </h3>
                  <p className="font-bold text-lg mb-3 text-[#F2F2F2] font-['Montserrat'] uppercase">{stat.label}</p>
                  <p className="text-[#F2F2F2]/80 font-['Roboto']">{stat.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 md:p-12 mb-20 bg-[#1F1F1F] border border-[#F2F2F2]/10 hover:border-[#00FF85]/50 transition-all duration-300 backdrop-blur-xl">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="w-48 h-48 md:w-56 md:h-56 relative rounded-xl overflow-hidden flex-shrink-0 mx-auto md:mx-0">
                <Image
                  src="/damien-profile.jpg"
                  alt="Damien - Expert en stratégie data et IA"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-extrabold mb-6 text-[#00FF85] font-['Montserrat'] uppercase tracking-wide">
                  Damien, votre expert en stratégie data et IA
                </h3>
                <p className="text-lg text-[#F2F2F2]/80 mb-8 font-['Roboto']">
                  Avec une expérience unique mêlant rigueur analytique et expertise en IA, je propose :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  {expertise.map((item, index) => (
                    <div key={index} className="flex flex-col">
                      <div className="p-3 rounded-lg bg-[#00FF85]/10 w-fit mb-4">
                        <item.icon className="w-6 h-6 text-[#00FF85]" />
                      </div>
                      <h4 className="font-bold mb-2 text-[#F2F2F2] font-['Montserrat'] uppercase">{item.title}</h4>
                      <p className="text-[#F2F2F2]/80 font-['Roboto'] mb-4">{item.description}</p>
                      {item.items && (
                        <ul className="space-y-2 text-[#F2F2F2]/70 font-['Roboto']">
                          {item.items.map((subItem, subIndex) => (
                            <li key={subIndex} className="flex items-start">
                              <span className="text-[#00FF85] mr-2">•</span>
                              <span>{subItem}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
                <blockquote className="border-l-4 border-[#00FF85] pl-6 italic text-lg text-[#F2F2F2]/80 font-['Roboto']">
                  "Les données sont une force, et notre mission est de les transformer en opportunités concrètes pour vous."
                </blockquote>
              </div>
            </div>
          </Card>

          <div className="mb-20">
            <h3 className="text-2xl font-extrabold mb-8 text-center text-[#00FF85] font-['Montserrat'] uppercase tracking-wide">
              Nos valeurs fondamentales
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-8 bg-[#1F1F1F] border border-[#F2F2F2]/10 hover:border-[#00FF85]/50 transition-all duration-300 backdrop-blur-xl hover:shadow-[0_0_20px_rgba(0,255,133,0.2)]">
                  <div className="flex flex-col h-full">
                    <div className="p-4 rounded-lg bg-[#00FF85]/10 w-fit mb-6">
                      <value.icon className="w-8 h-8 text-[#00FF85]" />
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-[#F2F2F2] font-['Montserrat'] uppercase">{value.title}</h4>
                    <p className="text-[#F2F2F2]/80 mb-4 font-['Roboto']">{value.description}</p>
                    
                    {value.items && (
                      <ul className="space-y-2 text-[#F2F2F2]/70 font-['Roboto'] mb-4">
                        {value.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className="text-[#00FF85] mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {index === 0 && (
                      <div className="mt-auto flex items-start">
                        <Lightbulb className="w-5 h-5 text-[#00FF85] mr-3 mt-1 flex-shrink-0" />
                        <p className="text-sm text-[#F2F2F2]/60 italic font-['Roboto']">
                          Exemple : Nos reportings sont clairs, détaillés et alignés sur vos priorités.
                        </p>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button className="bg-[#00FF85] text-[#0A0A0A] hover:scale-105 transition-transform duration-300 group text-lg px-8 py-6 font-['Montserrat'] uppercase tracking-wider">
                Démarrer votre projet
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
