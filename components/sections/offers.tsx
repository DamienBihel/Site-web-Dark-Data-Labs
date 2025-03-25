"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight, Zap, Package, Award, BookOpen } from "lucide-react"
import { Container } from "../ui/container"
import { Badge } from "../ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertTitle, AlertDescription } from "../ui/alert"
import Link from "next/link"

export function Offers() {
  const offers = [
    {
      id: 1,
      title: "Audit Gratuit",
      description: "Comprenez ce que l'IA peut faire pour vous.",
      price: "Gratuit",
      features: [
        "Analyse de vos process",
        "Opportunités d'automatisation",
        "Recos concrètes + 30 min de consult",
      ],
      cta: "0€ – Réservez maintenant",
      popular: false,
      icon: BookOpen,
    },
    {
      id: 2,
      title: "Système sur-mesure",
      description: "Automatisez un process clé, sans complexité.",
      price: "À partir de 1 500€",
      features: [
        "Analyse + développement personnalisé",
        "Intégration à vos outils",
        "Support 3 mois inclus",
      ],
      cta: "Demander un devis",
      popular: true,
      icon: Package,
    },
    {
      id: 3,
      title: "Formation IA Pratique",
      description: "Maîtrisez l'IA pour vos tâches quotidiennes.",
      price: "À partir de 500€",
      features: [
        "Formation ciblée (14 h)",
        "Templates + support post-formation",
        "Certificat inclus",
      ],
      cta: "Réserver une session",
      popular: false,
      icon: Award,
    },
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
    <section className="py-20 relative isolate overflow-hidden bg-[var(--color-dark)]" id="offers">
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
                  <Zap className="h-3 w-3 mr-1" /> Nos Offres
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
              Solutions claires, résultats concrets
            </span>
          </motion.h2>
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
                  <Package className="h-8 w-8 relative" />
                </div>
              </div>
              <div>
                <AlertTitle className="text-lg font-semibold mb-2 text-[var(--color-light)]">Choisissez votre solution</AlertTitle>
                <AlertDescription className="text-[var(--color-light)]/80">
                  Des offres simples. Des résultats mesurables. On s'occupe de tout, de A à Z.
                </AlertDescription>
              </div>
            </div>
          </Alert>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto relative z-10">
          {offers.map((offer, i) => {
            const Icon = offer.icon;
            return (
              <motion.div
                key={offer.id}
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
                        {offer.popular && (
                          <div className="py-1 px-3 bg-[var(--color-neon)] text-[var(--color-dark)] text-sm font-bold rounded-full inline-block absolute -top-3 right-4 shadow-[0_0_10px_rgba(0,255,133,0.3)]">
                            Populaire
                          </div>
                        )}
                        <div className="relative mb-6">
                          <div className="w-12 h-12 rounded-full bg-[var(--color-dark)] border border-[var(--color-neon)]/40 flex items-center justify-center text-[var(--color-neon)] relative group-hover:scale-110 transition-transform duration-300 shadow-[0_0_10px_rgba(0,255,133,0.2)]">
                            <Icon className="h-6 w-6" />
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-[var(--color-light)]">{offer.title}</h3>
                        <p className="text-base text-[var(--color-light)]/85 mb-4">{offer.description}</p>
                        
                        <div className="text-xl font-bold mb-4 text-[var(--color-neon)]">{offer.price}</div>
                        
                        <ul className="space-y-2 mb-6">
                          {offer.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-[var(--color-neon)] mt-0.5 flex-shrink-0" />
                              <span className="text-[var(--color-light)]/70">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <Link href="#contact-form">
                          <Button 
                            className="w-full gap-2 hover:scale-105 transition-transform bg-[var(--color-dark)] border border-[var(--color-neon)] text-[var(--color-neon)] hover:bg-[var(--color-neon)]/10" 
                          >
                            {offer.cta} <ArrowRight className="h-4 w-4 animate-pulse-slow" />
                          </Button>
                        </Link>
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
          <p className="text-xl text-[var(--color-light)]/80 leading-relaxed font-['Roboto'] italic">
            Besoin de plus ? <span className="text-[var(--color-neon)] font-semibold">On crée aussi du 100 % sur-mesure.</span>
          </p>
          
          <Link href="#contact-form" className="inline-block mt-8">
            <div className="relative inline-flex overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-neon)_0%,var(--color-gray)_50%,var(--color-neon)_100%)]" />
              <Button className="relative rounded-full bg-[var(--color-dark)] px-6 py-2 text-[var(--color-neon)] hover:bg-[var(--color-dark-overlay)]">
              Discutons de vos besoins → <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
