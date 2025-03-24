"use client"

import { motion } from "framer-motion"
import { Award, TrendingUp, Clock, Brain, Laptop, GraduationCap, Building, Users, CheckCircle, ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

export function Testimonials() {
  // Domaines d'expertise
  const expertise = [
    {
      id: 1,
      title: "IA appliquée",
      description: "Agents, assistants intelligents",
      icon: Brain,
    },
    {
      id: 2,
      title: "Automatisation",
      description: "Relances, CRM, tâches répétitives",
      icon: Clock,
    },
    {
      id: 3,
      title: "Data Viz",
      description: "Tableaux de bord clairs & utiles",
      icon: TrendingUp,
    },
    {
      id: 4,
      title: "Éthique & pédagogie",
      description: "Vulgarisation, transparence",
      icon: Laptop,
    }
  ]

  // Parcours professionnel
  const parcours = [
    {
      id: 1,
      periode: "2018 - Aujourd'hui",
      poste: "Consultant en automatisation & IA",
      description: "Accompagnement des PME et indépendants dans leur transformation numérique",
      icon: Award,
    },
    {
      id: 2,
      periode: "2012 - 2018",
      poste: "Ingénieur data senior",
      description: "Conception de systèmes d'analyse de données pour l'industrie",
      icon: TrendingUp,
    },
    {
      id: 3,
      periode: "2007 - 2012",
      poste: "Développeur d'automatismes",
      description: "Création de solutions d'automatisation pour les processus métier",
      icon: Clock,
    },
  ]

  // Collaborations professionnelles
  const collaborations = [
    {
      id: 1,
      name: "Sauermann",
      type: "Entreprise",
      logo: "/logos/sauermann.png",
      color: "border-blue-500/30 bg-blue-500/5",
    },
    {
      id: 2,
      name: "Dekra",
      type: "Formation & Entreprise",
      logo: "/logos/dekra.png",
      color: "border-emerald-500/30 bg-emerald-500/5",
    },
    {
      id: 3,
      name: "Cofrac",
      type: "Organisme",
      logo: "/logos/cofrac.png",
      color: "border-violet-500/30 bg-violet-500/5",
    },
    {
      id: 4,
      name: "ISSAT",
      type: "Formation",
      logo: "/logos/issat.png",
      color: "border-amber-500/30 bg-amber-500/5",
    },
  ]

  // Mes valeurs personnelles
  const mesValeurs = [
    {
      id: 1,
      title: "Éthique",
      description: "Je m'engage à développer des solutions d'IA responsables et transparentes",
      icon: CheckCircle,
    },
    {
      id: 2,
      title: "Pragmatisme",
      description: "Je privilégie les solutions concrètes qui apportent des résultats mesurables",
      icon: TrendingUp,
    },
    {
      id: 3,
      title: "Pédagogie",
      description: "Je vous accompagne pour comprendre et maîtriser les outils mis en place",
      icon: Users,
    },
    {
      id: 4,
      title: "Innovation",
      description: "Je reste à la pointe des technologies pour vous offrir le meilleur",
      icon: Laptop,
    },
  ]

  // Formation et parcours académique
  const diplomes = [
    {
      id: 1,
      title: "Université de Limoges",
      description: "Licence en réseau et télécom (Signal, acquisition de data)",
      icon: GraduationCap,
    },
    {
      id: 2,
      title: "ENSAE Paris",
      description: "Licence en data analyse",
      icon: GraduationCap,
    },
    {
      id: 3,
      title: "Collaborations académiques",
      description: "Plusieurs laboratoires et écoles d'ingénieurs",
      icon: Building,
    }
  ]
  
  // Valeurs personnelles
  const valeurs = [
    {
      id: 1,
      title: "Éthique",
      description: "Je m'engage à développer des solutions d'IA responsables et transparentes",
      icon: CheckCircle,
    },
    {
      id: 2,
      title: "Pragmatisme",
      description: "Je privilégie les solutions concrètes qui apportent des résultats mesurables",
      icon: TrendingUp,
    },
    {
      id: 3,
      title: "Pédagogie",
      description: "Je vous accompagne pour comprendre et maîtriser les outils mis en place",
      icon: Users,
    },
    {
      id: 4,
      title: "Innovation",
      description: "Je reste à la pointe des technologies pour vous offrir le meilleur",
      icon: Laptop,
    },
  ]

  return (
    <section className="py-20 relative isolate overflow-hidden bg-[var(--color-dark)]" id="testimonials">
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
                  À propos
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
              QUI SUIS-JE ?
            </span>
          </motion.h2>
          
    
        </div>
        
        <motion.div 
          className="max-w-4xl mx-auto mb-12 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl border border-[var(--color-neon)]/20 bg-[var(--color-dark-overlay)]/50 backdrop-blur-sm">
                <span className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></span>
                <div className="relative p-6 z-10">
                  <img 
                    src="/damien-profile.png" 
                    alt="Damien Bihel" 
                    className="w-full h-auto rounded-lg border-2 border-[var(--color-neon)]/30 shadow-[0_0_15px_rgba(0,255,133,0.2)]" 
                  />
                </div>
              </div>
            </div>
            
            <div>
              <Alert className="relative overflow-hidden backdrop-blur-sm border border-[var(--color-neon)]/30 mb-4 group h-full">
                <span className="absolute inset-0 bg-[var(--color-dark-overlay)] opacity-80"></span>
                <span className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></span>
                <div className="relative z-10 h-full flex flex-col justify-center">
                  <AlertTitle className="text-xl font-semibold mb-4 text-[var(--color-light)]">Damien Bihel – 18 ans d’automatisation, 2 ans d’IA concrète.</AlertTitle>
                  <AlertDescription className="text-[var(--color-light)]/85 text-base">
                    <p className="mb-3">Expert en automatisation et IA </p> 
                    <p>J’aide les PME et indépendants à récupérer du temps et piloter avec leurs données</p>
                    <p>Ma mission :  simplifier l’IA pour la rendre actionnable, pas abstraite</p>
                  </AlertDescription>
                </div>
              </Alert>
            </div>
          </div>
        </motion.div>
        
        <div className="relative z-10 mb-16">

          

        </div>
        
        <div className="mt-20 relative z-10">
          <motion.h3 
            className="relative z-10 text-2xl font-semibold mb-8 text-center font-['Montserrat']"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="neon-title-sm relative">Domaines d'expertise</span>
          </motion.h3>
          
          <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
            {expertise.map((item, index) => {
              const ItemIcon = item.icon;
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.2) }}
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
                              <ItemIcon className="h-6 w-6" />
                            </div>
                          </div>
                          <h4 className="text-xl font-medium text-[var(--color-light)] mb-2">{item.title}</h4>
                          <p className="text-base text-[var(--color-light)]/85">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          

          
          <motion.h3 
            className="relative z-10 text-2xl font-semibold my-12 text-center font-['Montserrat']"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span className="neon-title-sm relative">Collaborations professionnelles</span>
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {collaborations.map((collab, index: number) => (
              <motion.div
                key={collab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className="flex flex-col items-center"
              >
                <div className={`group relative overflow-hidden rounded-lg p-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,133,0.3)] border ${collab.color} backdrop-blur-sm`}>
                  <span className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></span>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="h-24 flex items-center justify-center mb-3">
                      <img 
                        src={collab.logo} 
                        alt={`Logo ${collab.name}`} 
                        className="max-h-20 max-w-full object-contain" 
                      />
                    </div>
                    <h4 className="text-lg font-medium text-[var(--color-light)] text-center">{collab.name}</h4>
                    <p className="text-sm text-[var(--color-light)]/70 text-center mt-1">{collab.type}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center text-lg text-[var(--color-light)]/85 mt-4 mb-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              ... et plusieurs écoles, labs et PME
            </motion.p>
          </div>
          
          <motion.h3 
            className="relative z-10 text-2xl font-semibold mb-8 mt-12 text-center font-['Montserrat']"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <span className="neon-title-sm relative">Formation et parcours académique</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {diplomes.map((diplome, index) => {
              const DiplomeIcon = diplome.icon;
              
              return (
                <motion.div
                  key={diplome.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.2) }}
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
                              <DiplomeIcon className="h-6 w-6" />
                            </div>
                          </div>
                          <h4 className="text-xl font-medium text-[var(--color-light)] mb-2">{diplome.title}</h4>
                          <p className="text-base text-[var(--color-light)]/85">{diplome.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <motion.a 
              href="#contact-form"
              className="relative overflow-hidden rounded-md p-[1px] group inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-neon)_0%,var(--color-gray)_50%,var(--color-neon)_100%)]" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-md bg-[var(--color-dark)] px-6 py-3 text-base font-medium text-[var(--color-neon)] backdrop-blur-3xl transition-colors group-hover:bg-[var(--color-neon)] group-hover:text-[var(--color-dark)]">
                Me contacter <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </motion.a>
          </div>
        </div>
      </Container>
    </section>
  )
}
