"use client"

import { motion } from "framer-motion"
import { AlertCircle, Building, Clock, Target } from "lucide-react"
import { Container } from "../ui/container"
import { Badge } from "../ui/badge"
import { Alert, AlertTitle, AlertDescription } from "../ui/alert"

export function Risk() {
  const risks = [
    {
      id: 1,
      title: "Chiffre d'affaires en chute lente",
      description: "Chaque heure perdue sur des tâches manuelles = perte directe de revenus.",
      icon: Target,
    },
    {
      id: 2,
      title: "Vos concurrents avancent",
      description: "Pendant que vous gérez des fichiers... ils automatisent, captent vos prospects et prennent de l’avance.",
      icon: Building,
    },
    {
      id: 3,
      title: "Piégé dans l'opérationnel",
      description: "Sans changement, vous restez coincé dans l’exécution, pas dans la stratégie.",
      icon: Clock,
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
    <section className="py-20 relative isolate overflow-hidden bg-[var(--color-dark)]" id="risques">
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
                  Attention
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
                Ce que vous risquez vraiment
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
                  <Building className="h-8 w-8 relative" />
                </div>
              </div>
              <div>
                <AlertTitle className="text-xl font-semibold mb-2 text-[var(--color-light)]">PME du bâtiment</AlertTitle>
                <AlertDescription className="text-base text-[var(--color-light)]/85">
                « On croulait sous Excel pour suivre nos chantiers. En 1 semaine : un dashboard visuel + décisions 2x plus rapides»
                </AlertDescription>
              </div>
            </div>
          </Alert>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto relative z-10">
          {risks.map((risk, i) => {
            const Icon = risk.icon;
            return (
              <motion.div
                key={risk.id}
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
                            <Icon className="h-6 w-6" />
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-[var(--color-light)]">{risk.title}</h3>
                        <p className="text-base text-[var(--color-light)]/85">{risk.description}</p>
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
            <span className="text-[var(--color-neon)] font-semibold">Pendant que vous gérez vos fichiers… vos concurrents gèrent leur croissance.</span> Ne restez pas bloqué. Automatisez. Avancez.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
