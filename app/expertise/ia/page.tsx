"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { ExpertiseHeader } from "@/components/expertise/expertise-header"
import { TechStack } from "@/components/expertise/tech-stack"
import { Domains } from "@/components/expertise/domains"
import { Brain, Sparkles, MessageSquare } from "lucide-react"

export default function IAPage() {
  return (
    <main className="bg-[#0A0A0A]">
      <Navbar />
      <ExpertiseHeader
        title="Intelligence Artificielle"
        subtitle="Donnez de l'intelligence à vos systèmes"
        description="L'IA n'est plus une technologie du futur : c'est un outil stratégique qui redéfinit dès aujourd'hui la manière dont les entreprises innovent, optimisent leurs processus et créent de la valeur."
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
              L'Innovation par l'IA
            </h2>
            <p className="text-lg font-['Roboto'] text-[#F2F2F2]/70 leading-relaxed">
              Nous concevons des <span className="text-[#00FF85] font-semibold">solutions d'IA sur mesure</span> adaptées à vos besoins spécifiques. Transformez vos données en <span className="text-[#00FF85] font-semibold">insights actionnables</span> et automatisons vos processus avec intelligence et efficacité.
            </p>
          </div>
        </div>
      </div>

      <TechStack
        title="Notre Stack Technique"
        stacks={[
          {
            category: "Frameworks IA",
            items: [
              "TensorFlow",
              "PyTorch",
              "Scikit-learn",
              "Hugging Face"
            ]
          },
          {
            category: "Technologies NLP",
            items: [
              "GPT & LLMs",
              "BERT",
              "Transformers",
              "Spacy"
            ]
          },
          {
            category: "Infrastructure",
            items: [
              "GPU Cloud",
              "MLOps",
              "Bases de données vectorielles",
              "Model Serving"
            ]
          }
        ]}
      />

      <Domains
        title="Domaines d'Application"
        description="Des solutions d'IA innovantes pour transformer votre business"
        domains={[
          {
            title: "Machine Learning",
            description: "Modèles prédictifs et classification intelligente de données",
            icon: <Brain className="h-6 w-6" />,
            items: [
              "Modèles prédictifs",
              "Classification intelligente de données"
            ]
          },
          {
            title: "Computer Vision",
            description: "Analyse d'images et reconnaissance de patterns visuels",
            icon: <Sparkles className="h-6 w-6" />,
            items: [
              "Analyse d'images",
              "Reconnaissance de patterns visuels"
            ]
          },
          {
            title: "NLP & Chatbots",
            description: "Traitement du langage naturel et assistants conversationnels",
            icon: <MessageSquare className="h-6 w-6" />,
            items: [
              "Traitement du langage naturel",
              "Assistants conversationnels intelligents"
            ]
          }
        ]}
      />
      <Footer />
    </main>
  )
}
