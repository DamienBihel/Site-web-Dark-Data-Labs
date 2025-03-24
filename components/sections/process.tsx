"use client"

import { motion } from "framer-motion"
import { Container } from "../ui/container"
import { Badge } from "../ui/badge"
import { Card } from "../ui/card"
import { Alert, AlertTitle, AlertDescription } from "../ui/alert"
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import { ChevronDown, ChevronRight, Terminal, Zap, Code, Database, Laptop, User } from "lucide-react"

export function Process() {
  const steps = [
    {
      id: 1,
      title: "Audit gratuit (30 min)",
      description: "On identifie les tâches à automatiser et vos vrais points de friction",
      details: "",
      icon: Terminal
    },
    {
      id: 2,
      title: "Solution sur-mesure",
      description: "Vous recevez un plan clair, adapté à vos besoins + un devis transparent",
      details: "",
      icon: Code
    },
    {
      id: 3,
      title: "Mise en place rapide",
      description: "On déploie sans bloquer votre activité. Intégration fluide à vos outils.",
      details:  "",
      icon: Zap
    },
    {
      id: 4,
      title: "Formation & suivi",
      description: "Vous êtes formé·e. On reste dispo pour vos questions et ajustements.",
      details: "",
      icon: Laptop
    }
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  }

  return (
    <section className="py-20 relative isolate overflow-hidden bg-[var(--color-dark)]" id="process">
      {/* Effets de fond */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-dark)] via-[var(--color-gray)] to-[var(--color-dark)]" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[var(--color-neon)]/10 via-transparent to-transparent blur-2xl" />
        </div>
      </div>

      {/* Grille animée */}
      <div className="absolute inset-0 overflow-hidden grid-pattern"></div>
      
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-12 relative z-10">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2">
              <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-neon)_0%,var(--color-gray)_50%,var(--color-neon)_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[var(--color-dark)] px-3 py-1 text-sm font-bold text-[var(--color-neon)] backdrop-blur-3xl font-['Montserrat'] uppercase tracking-wider">
                  Notre Processus
                </div>
              </span>
            </div>
          </motion.div>
          
          <motion.h2 
            className="relative z-10 text-4xl sm:text-5xl mb-8 font-['Montserrat']"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Effet de halo lumineux atténué */}
            <span className="absolute -inset-1 blur-lg opacity-15 bg-[var(--color-neon)] rounded-full"></span>
            
            {/* Texte principal avec effet néon */}
            <span className="neon-title relative block">
              Comment nous travaillons
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-[var(--color-light)]/80 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Une méthode simple en 4 étapes pour transformer votre activité avec l’IA
          </motion.p>
        </div>
        
        <motion.div 
          className="max-w-4xl mx-auto mb-12 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Alert className="relative overflow-hidden backdrop-blur-sm border border-[var(--color-neon)]/30 mb-8 group">
            <span className="absolute inset-0 bg-[var(--color-dark-overlay)] opacity-80"></span>
            <span className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></span>
            <div className="flex items-start relative z-10">
              <div className="mr-4 mt-1 text-[var(--color-neon)]">
                <div className="relative">
                  <span className="absolute -inset-1 rounded-full animate-pulse opacity-40 blur-sm bg-[var(--color-neon)]"></span>
                  <User className="h-8 w-8 relative" />
                </div>
              </div>
              <div>
                <AlertTitle className="text-lg font-semibold mb-2 text-[var(--color-light)]">Marie, consultante indépendante</AlertTitle>
                <AlertDescription className="text-[var(--color-light)]/80">
                  "En 2 semaines, on a automatisé ses relances. Résultat : 8h gagnées par semaine.maine sur ses tâches administratives."
                </AlertDescription>
              </div>
            </div>
          </Alert>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto relative z-10">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                custom={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + (i * 0.2) }}
              >
                <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,133,0.3)]">
                  {/* Bannière verte supérieure avec dégradé plus subtil */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[var(--color-neon)]/60 via-[var(--color-neon)] to-[var(--color-neon)]/60"></div>
                  
                  {/* Contenu */}
                  <div className="relative h-full bg-[var(--color-dark)] backdrop-blur-xl">
                    <div className="h-full p-6 rounded-lg bg-gradient-to-b from-[var(--color-dark-overlay)] to-[var(--color-dark)] backdrop-blur-sm border-[1px] border-[var(--color-neon)]/10 overflow-hidden">
                      <span className="absolute inset-0 bg-[url('/noise.png')] opacity-15"></span>
                      
                      {/* Zone verte plus ergonomique */}
                      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[var(--color-neon)]/15 to-transparent"></div>
                      
                      <div className="relative z-10">
                        <div className="relative mb-6">
                          <div className="w-12 h-12 rounded-full bg-[var(--color-dark)] border border-[var(--color-neon)]/40 flex items-center justify-center text-[var(--color-neon)] relative group-hover:scale-110 transition-transform duration-300 shadow-[0_0_10px_rgba(0,255,133,0.2)]">
                            <div className="absolute -top-2 -right-1 w-6 h-6 rounded-full bg-[var(--color-neon)] flex items-center justify-center text-[var(--color-dark)] text-xs font-bold shadow-[0_0_6px_rgba(0,255,133,0.3)]">
                              {step.id}
                            </div>
                            <Icon className="h-6 w-6" />
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-[var(--color-light)]">{step.title}</h3>
                        <p className="text-base text-[var(--color-light)]/85">{step.description}</p>
                        <div className="mt-4 pt-4 border-t border-[var(--color-neon)]/20 text-sm text-[var(--color-light)]/80">
                          {step.details}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          className="mt-16 max-w-3xl mx-auto text-center relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="relative overflow-hidden rounded-lg p-8 border border-[var(--color-neon)]/30 bg-[var(--color-dark-overlay)]/80 backdrop-blur-sm">
            <span className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></span>
            <div className="relative z-10">
              <p className="text-xl font-medium mb-4 text-[var(--color-light)]">
                Prêt à récupérer 8h par semaine ?
              </p>
              <p className="text-[var(--color-light)]/80 mb-6">
                  Passez à l’action avec un audit 100 % gratuit. En 30 minutes, on identifie ce que l’IA peut transformer chez vous.
              </p>
              <motion.a 
                href="#contact-form"
                className="relative overflow-hidden rounded-md p-[1px] group inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-neon)_0%,var(--color-gray)_50%,var(--color-neon)_100%)]" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-md bg-[var(--color-dark)] px-6 py-3 text-base font-medium text-[var(--color-neon)] backdrop-blur-3xl transition-colors group-hover:bg-[var(--color-neon)] group-hover:text-[var(--color-dark)]">
                  Réserver mon audit offert
                </span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
