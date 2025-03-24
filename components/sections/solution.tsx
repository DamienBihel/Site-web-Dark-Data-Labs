"use client"

import { motion } from "framer-motion"
import { CheckCircle, Lightbulb, User2, MessageCircle, Sparkles, Clock, Database, LineChart, Brain, Target, Headphones, ArrowRight } from "lucide-react"
import { Container } from "../ui/container"
import { Badge } from "../ui/badge"
import { Alert, AlertTitle, AlertDescription } from "../ui/alert"
import { Card } from "../ui/card"
import { Button } from "../ui/button"
import Link from "next/link"

export function Solution() {
  // Statistiques de résultats mesurables (de difference.tsx)
  const stats = [
    {
      icon: Clock,
      title: "",
      stat: "+12h/semaine récupérées",
      description: "Fini les tâches chronophages → place à ce qui compte vraiment",
    },
    {
      icon: Database,
      title: "",
      stat: "80 % de potentiel débloqué",
      description: "Exploitez vos données. Prenez l’avantage",
    },
    {
      icon: LineChart,
      title: "",
      stat: "Visibilité totale sur vos résultats",
      description: "Des dashboards clairs. Des KPIs qui parlent",
    },
    {
      icon: Brain,
      title: "",
      stat: "Des décisions qui s’appuient sur du concret",
      description: "Fini l’intuition floue. Décidez avec des données fiables",
    },
  ]
  
  // Avantages de la solution
  const benefits = [
    {
      id: 1,
      title: "Gagnez du temps (vraiment)",
      description: "Automatisez relances, facturation, tri de leads → vous récupérez des heures chaque semaine.",
    },
    {
      id: 2,
      title: "Gardez le lien avec vos clients",
      description: "Des outils simples pour gérer prospects & clients avec plus de clarté et moins d’effort.",
    },
    {
      id: 3,
      title: "Comprenez (enfin) l’IA",
      description: "Pas de jargon. Pas de techno floue. Juste des solutions que vous comprenez et pilotez à votre rythme.",
    },
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15 * i,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section className="py-20 relative isolate overflow-hidden bg-[var(--color-dark)]" id="solution">
      {/* Effets de fond */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)] via-[var(--color-gray)] to-[var(--color-dark)]" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--color-neon)]/10 via-transparent to-transparent blur-2xl" />
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
                  <Lightbulb className="h-3 w-3 mr-1" /> La Solution Dark Data Labs
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
                La solution : des systèmes IA sur-mesure
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
                  <MessageCircle className="h-8 w-8 relative" />
                </div>
              </div>
              <div>
                <AlertTitle className="text-lg font-semibold mb-2 text-[var(--color-light)]">Imaginez</AlertTitle>
                <AlertDescription className="text-[var(--color-light)]/80">
                  Relances automatisées. CRM qui trie les leads. Assistant IA qui répond pendant que vous dormez.
                </AlertDescription>
              </div>
            </div>
          </Alert>

          <Alert className="relative overflow-hidden backdrop-blur-sm border border-[var(--color-neon)]/30 mb-8 group">
            <span className="absolute inset-0 bg-[var(--color-dark-overlay)] opacity-80"></span>
            <span className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></span>
            <div className="flex items-start relative z-10">
              <div className="mr-4 mt-1 text-[var(--color-neon)]">
                <div className="relative">
                  <span className="absolute -inset-1 rounded-full animate-pulse opacity-40 blur-sm bg-[var(--color-neon)]"></span>
                  <User2 className="h-8 w-8 relative" />
                </div>
              </div>
              <div>
                <AlertTitle className="text-xl font-semibold mb-2 text-[var(--color-light)]">Émilie, freelance en marketing</AlertTitle>
                <AlertDescription className="text-base text-[var(--color-light)]/85">
                  « J’ai ajouté un agent IA sur mon site. Résultat : plus de leads qualifiés, 2x plus de réponses clients. »
                </AlertDescription>
              </div>
            </div>
          </Alert>
        </motion.div>

        <div className="mt-12 max-w-3xl mx-auto relative z-10">
          <motion.p 
            className="text-xl mb-8 text-center text-[var(--color-light)]/90 font-['Roboto'] italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Ce qu’on met en place pour vous :
          </motion.p>
          
          <div className="space-y-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + (i * 0.2) }}
                className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,133,0.3)]"
              >
                {/* Bannière verte supérieure avec dégradé plus subtil */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[var(--color-neon)]/60 via-[var(--color-neon)] to-[var(--color-neon)]/60"></div>
                
                {/* Contenu */}
                <div className="relative h-full bg-[var(--color-dark)] backdrop-blur-xl">
                  <div className="h-full p-6 rounded-lg bg-gradient-to-b from-[var(--color-dark-overlay)] to-[var(--color-dark)] backdrop-blur-sm border-[1px] border-[var(--color-neon)]/10 overflow-hidden flex items-start gap-4">
                    <span className="absolute inset-0 bg-[url('/noise.png')] opacity-15"></span>
                    
                    {/* Zone verte plus ergonomique */}
                    <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[var(--color-neon)]/15 to-transparent"></div>
                    
                    <div className="relative z-10">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-[var(--color-dark)] border border-[var(--color-neon)]/40 flex items-center justify-center text-[var(--color-neon)] relative group-hover:scale-110 transition-transform duration-300 flex-shrink-0 mt-1 shadow-[0_0_10px_rgba(0,255,133,0.2)]">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="text-xl font-semibold mb-2 text-[var(--color-light)]">{benefit.title}</h3>
                      <p className="text-base text-[var(--color-light)]/85">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="relative inline-flex overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-neon)_0%,var(--color-gray)_50%,var(--color-neon)_100%)]" />
              <div className="inline-flex h-full w-full items-center justify-center rounded-full bg-[var(--color-dark)] p-3 backdrop-blur-3xl">
                <div className="relative">
                  <span className="absolute -inset-2 rounded-full animate-pulse opacity-30 blur-sm bg-[var(--color-neon)]"></span>
                  <Sparkles className="h-8 w-8 text-[var(--color-neon)] relative" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Section des statistiques (intégrée depuis difference.tsx) */}
      <div className="py-24 bg-[#0A0A0A] mt-20 relative">
        {/* Effets de fond */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00FF8520_1px,transparent_1px),linear-gradient(to_bottom,#00FF8520_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#F2F2F2] via-[#00FF85] to-[#F2F2F2] font-['Montserrat'] uppercase tracking-[0.05em]">
              Transformez vos données en levier de croissance
            </h2>
            <p className="text-xl text-[#F2F2F2]/80 max-w-3xl mx-auto leading-relaxed font-['Roboto']">
            Des solutions IA + automatisation + analyse. Conçues pour <strong className="text-[#F2F2F2]">agir, </strong> pas juste observer.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-[#1F1F1F] backdrop-blur-xl border border-[#F2F2F2]/10 hover:border-[#00FF85]/50 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(0,255,133,0.2)]">
                  <div className="flex flex-col items-center text-center h-full justify-between">
                    <div className="p-4 rounded-lg bg-[#00FF85]/10 mb-6 group-hover:scale-110 transform transition-transform duration-300">
                      <item.icon className="w-8 h-8 text-[#00FF85]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#F2F2F2] font-['Montserrat'] uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00FF85] to-[#F2F2F2] font-['Montserrat']">
                      {item.stat}
                    </p>
                    <p className="text-[#F2F2F2]/80 text-base leading-relaxed font-['Roboto']">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Section d'engagement (intégrée depuis engagement.tsx) */}
      <div className="py-24 bg-[#0A0A0A] mt-20 relative">
        {/* Effets de fond */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00FF8520_1px,transparent_1px),linear-gradient(to_bottom,#00FF8520_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#F2F2F2] via-[#00FF85] to-[#F2F2F2] font-['Montserrat'] uppercase tracking-[0.05em]">
                On s’engage pour vos résultats, pas juste pour livrer une solution
            </h2>
            <p className="text-xl text-[#F2F2F2]/80 max-w-3xl mx-auto leading-relaxed font-['Roboto']">
              Nous ne nous contentons pas de livrer des solutions techniques. Nous nous engageons à vous accompagner vers des résultats concrets et mesurables.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-[#00FF85] font-['Montserrat'] uppercase tracking-wide">
                Résultats mesurables
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-[#00FF85]/10 mr-4 flex-shrink-0">
                    <Target className="w-6 h-6 text-[#00FF85]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-[#F2F2F2] font-['Montserrat'] uppercase">Objectifs Clairs</h4>
                    <p className="text-[#F2F2F2]/80 font-['Roboto']">KPIs définis avec vous, alignés sur vos priorités.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-[#00FF85]/10 mr-4 flex-shrink-0">
                    <LineChart className="w-6 h-6 text-[#00FF85]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-[#F2F2F2] font-['Montserrat'] uppercase">Impact réel</h4>
                    <p className="text-[#F2F2F2]/80 font-['Roboto']">Analyses et automatisations taillées pour vos besoins.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-[#00FF85] font-['Montserrat'] uppercase tracking-wide">
                Accompagnement personnalisé
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-[#00FF85]/10 mr-4 flex-shrink-0">
                    <Headphones className="w-6 h-6 text-[#00FF85]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-[#F2F2F2] font-['Montserrat'] uppercase">Suivi sur-mesure</h4>
                    <p className="text-[#F2F2F2]/80 font-['Roboto']">Support dédié, formations adaptées, suivi continu.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-[#00FF85]/10 mr-4 flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-[#00FF85]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-[#F2F2F2] font-['Montserrat'] uppercase">Toujours à jour</h4>
                    <p className="text-[#F2F2F2]/80 font-['Roboto']">On intègre le meilleur de l’IA, du no-code et de la data.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Link href="#contact-form">
              <Button className="bg-[#00FF85] text-[#0A0A0A] hover:scale-105 transition-transform duration-300 group text-lg px-8 py-6 font-['Montserrat'] uppercase tracking-wider">
                Discutons de votre projet →
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
