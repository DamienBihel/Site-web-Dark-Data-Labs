"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <div className="relative min-h-screen isolate overflow-hidden bg-[var(--color-dark)] grain-texture">
      {/* Effets de fond */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-dark)] via-[var(--color-gray)] to-[var(--color-dark)]" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[var(--color-neon)]/20 via-transparent to-transparent blur-2xl" />
        </div>
      </div>

      {/* Grille animée */}
      <div className="absolute inset-0 overflow-hidden grid-pattern"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge animé */}
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
                  IA & Automatisation
                </div>
              </span>
            </div>
          </motion.div>

          {/* Titre principal avec effet néon vert */}
          <motion.h1 
            className="relative z-10 text-4xl sm:text-6xl mb-8 font-['Montserrat']"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Effet de halo lumineux atténué */}
            <span className="absolute -inset-1 blur-lg opacity-15 bg-[var(--color-neon)] rounded-full"></span>
            
            {/* Texte principal avec effet néon */}
            <span className="neon-title relative block">
              Libérez votre temps, boostez votre business avec l’IA
            </span>
          </motion.h1>
          
          {/* Sous-titre */}
          <motion.p 
            className="text-xl text-[var(--color-light)] mb-8 font-['Roboto'] leading-relaxed italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Automatisations concrètes. IA compréhensible. Résultats visibles.
          </motion.p>

          {/* Promesse forte */}
          <motion.p 
            className="text-lg text-[var(--color-light)]/90 mb-12 font-['Roboto'] leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <strong className="text-[var(--color-neon)]">Passez de la charge mentale aux actions stratégiques : </strong> Automatisez vos tâches répétitives, Optimisez la gestion client,Comprenez et utilisez l’IA simplement
          </motion.p>

          {/* CTA */}
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link 
              href="#contact-form"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-[var(--color-dark)] bg-[var(--color-neon)] rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_var(--color-neon-glow)] focus:outline-none focus:ring-2 focus:ring-[var(--color-neon)] focus:ring-offset-2 focus:ring-offset-[var(--color-dark)] font-['Montserrat'] uppercase tracking-wider"
            >
              <span className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></span>
              <span className="relative inline-flex items-center">
                Réserver un audit gratuit
              </span>
            </Link>
            <Link 
              href="#offers"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-[var(--color-light)] bg-transparent border border-[var(--color-neon)]/50 rounded-lg overflow-hidden transition-all duration-300 hover:border-[var(--color-neon)] hover:shadow-[0_0_20px_var(--color-neon-glow)] focus:outline-none focus:ring-2 focus:ring-[var(--color-neon)] focus:ring-offset-2 focus:ring-offset-[var(--color-dark)] font-['Montserrat'] uppercase tracking-wider"
            >
              <span className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></span>
              <span className="relative inline-flex items-center">
                Découvrir nos offres
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}