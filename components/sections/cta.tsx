"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock, CheckCircle2, Zap } from "lucide-react"
import { Container } from "../ui/container"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"

export function CTA() {
  return (
    <section className="py-24 relative isolate overflow-hidden bg-[var(--color-dark)]" id="contact">
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
        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
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
                  <Zap className="h-3 w-3 mr-1" /> Action
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
              Prêt à gagner du temps et des clients ?
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-[var(--color-light)]/80 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Réservez votre audit gratuit (30 min) – et découvrez ce que l&apos;IA peut automatiser pour vous.
          </motion.p>

          <motion.div 
            className="max-w-xl mx-auto relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_var(--color-neon-glow)]">
              {/* Bordure animée */}
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-neon)_0%,var(--color-gray)_50%,var(--color-neon)_100%)]" />
              
              {/* Contenu */}
              <div className="relative bg-[var(--color-dark)] p-[1px] backdrop-blur-xl">
                <Card className="bg-[var(--color-dark-overlay)]/80 backdrop-blur-sm border-t border-[var(--color-neon)]/10 overflow-hidden rounded-lg border-none text-[var(--color-light)]">
                  <span className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></span>
                  <div className="relative z-10">
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl text-[var(--color-neon)] font-['Montserrat']">Audit offert</CardTitle>
                      <CardDescription className="text-base text-[var(--color-light)]/70">
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <span className="absolute -inset-1 rounded-full animate-pulse opacity-30 blur-sm bg-[var(--color-neon)]"></span>
                          <CheckCircle2 className="h-5 w-5 text-[var(--color-neon)] relative" />
                        </div>
                        <span className="text-[var(--color-light)]">Analyse de vos process</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <span className="absolute -inset-1 rounded-full animate-pulse opacity-30 blur-sm bg-[var(--color-neon)]"></span>
                          <CheckCircle2 className="h-5 w-5 text-[var(--color-neon)] relative" />
                        </div>
                        <span className="text-[var(--color-light)]">Estimation du temps & budget économisés</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <span className="absolute -inset-1 rounded-full animate-pulse opacity-30 blur-sm bg-[var(--color-neon)]"></span>
                          <CheckCircle2 className="h-5 w-5 text-[var(--color-neon)] relative" />
                        </div>
                        <span className="text-[var(--color-light)]">Plan d&apos;action immédiat</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        size="lg" 
                        className="w-full relative overflow-hidden rounded-md p-[1px] group inline-block bg-transparent border-0 hover:bg-transparent"
                        asChild
                      >
                        <a href="#contact-form">
                          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-neon)_0%,var(--color-gray)_50%,var(--color-neon)_100%)]" />
                          <span className="inline-flex h-full w-full items-center justify-center gap-2 rounded-md bg-[var(--color-dark)] px-4 py-2 text-[var(--color-neon)] backdrop-blur-3xl transition-colors group-hover:bg-[var(--color-neon)]/10">
                            <Calendar className="h-5 w-5" /> Réserver mon audit gratuit <ArrowRight className="h-4 w-4" />
                          </span>
                        </a>
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              </div>
            </div>
          </motion.div>

          <motion.p 
            className="mt-8 text-sm text-[var(--color-light)]/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Sans engagement. Vous repartez avec un plan clair.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  )
}
