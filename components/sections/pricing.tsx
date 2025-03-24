"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight, Zap, Rocket, Building2, Crown } from "lucide-react"
import { Container } from "../ui/container"
import { Badge } from "../ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertTitle, AlertDescription } from "../ui/alert"
import Link from "next/link"

const pricingPlans = [
  {
    id: 1,
    name: "Starter",
    description: "Idéal pour poser les bases de votre transformation digitale",
    price: "1 800€",
    features: [
      "Analyse complète : Audit data personnalisé pour identifier vos besoins",
      "Visualisation des performances : Dashboard de suivi des KPIs clés",
      "Première étape d'automatisation : Tâches simples automatisées grâce au no-code",
      "Apprentissage pratique : Formation de 4h pour maîtriser les bases",
      "Support technique : Accompagnement inclus pendant 1 mois",
    ],
    demo: {
      title: "E-commerce local",
      description: "Tableau de bord des ventes et automatisation des rapports hebdomadaires",
      metrics: [
        "Gain de temps estimé : 8h/semaine",
        "ROI projeté : 3x en 3 mois",
      ]
    },
    forWho: [
      "👩‍💻 TPE en digitalisation",
      "🛠️ Artisans et commerces locaux",
      "🛒 E-commerces émergents",
    ],
    ctaText: "Découvrez l'offre Starter",
    href: "/solutions/starter",
    icon: Rocket,
  },
  {
    id: 2,
    name: "Business",
    description: "Pour optimiser vos performances et automatiser vos processus",
    price: "4 500€",
    features: [
      "Analyse approfondie : Identification des goulots d'étranglement dans vos processus",
      "Automatisation avancée : Solutions personnalisées avec Python et no-code",
      "Dashboards interactifs : Des tableaux sur mesure pour suivre vos performances",
      "Formation d'équipe : 8h pour intégrer efficacement les nouveaux outils",
      "Support premium : Accompagnement pendant 3 mois",
    ],
    demo: {
      title: "PME industrielle",
      description: "Centralisation des données de production et reporting client automatisé",
      metrics: [
        "Optimisation des processus : -40% de temps",
        "ROI projeté : 5x en 6 mois",
      ]
    },
    forWho: [
      "🏭 PME en croissance",
      "⚙️ Entreprises industrielles",
      "💼 Services B2B",
    ],
    ctaText: "Demander un devis",
    href: "/solutions/business",
    icon: Building2,
    popular: true,
  },
  {
    id: 3,
    name: "Premium",
    description: "Pour une transformation complète et pérenne",
    price: "8 000€",
    features: [
      "Transformation digitale intégrale : Réorganisation totale de vos processus avec Python et API",
      "Analytics prédictif : Des outils avancés pour des décisions éclairées",
      "Formation sur mesure : Adaptée à vos équipes et à vos besoins",
      "Support illimité : Accompagnement expert pendant 6 mois",
    ],
    demo: {
      title: "Groupe multi-sites",
      description: "Centralisation des données multi-sources et modélisation prédictive des ventes et stocks",
      metrics: [
        "Automatisation totale du reporting",
        "ROI projeté : 8x en 12 mois",
      ]
    },
    forWho: [
      "🌐 ETI en transformation",
      "🏢 Groupes multi-sites",
      "📊 Entreprises data-driven",
    ],
    ctaText: "Contacter un expert",
    href: "/solutions/premium",
    icon: Crown,
  }
]

export function Pricing() {
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
    <section className="py-20 relative isolate overflow-hidden bg-[var(--color-dark)]" id="solutions">
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
                  <Zap className="h-3 w-3 mr-1" /> Nos Solutions
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
              Transformez vos données en leviers de croissance
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
                  <Building2 className="h-8 w-8 relative" />
                </div>
              </div>
              <div>
                <AlertTitle className="text-lg font-semibold mb-2 text-[var(--color-light)]">Solutions adaptées à votre entreprise</AlertTitle>
                <AlertDescription className="text-[var(--color-light)]/80">
                  <strong className="text-[var(--color-light)]">Choisissez la solution adaptée à votre entreprise et maximisez votre ROI</strong> grâce à des offres sur mesure combinant IA, automatisation no-code, scripts Python et expertise analytique.
                </AlertDescription>
              </div>
            </div>
          </Alert>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto relative z-10">
          {pricingPlans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.id}
                custom={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + (i * 0.2) }}
              >
                <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_var(--color-neon-glow)]">
                  {/* Bordure animée */}
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-neon)_0%,var(--color-gray)_50%,var(--color-neon)_100%)]" />
                  
                  {/* Contenu */}
                  <div className="relative h-full bg-[var(--color-dark)] p-[1px] backdrop-blur-xl">
                    <div className="h-full p-6 rounded-lg bg-[var(--color-dark-overlay)] backdrop-blur-sm border-t border-[var(--color-neon)]/10 overflow-hidden">
                      <span className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></span>
                      <div className="relative z-10">
                        {plan.popular && (
                          <div className="py-1 px-3 bg-[var(--color-neon)] text-[var(--color-dark)] text-sm font-bold rounded-full inline-block absolute -top-3 right-4">
                            Populaire
                          </div>
                        )}
                        <div className="relative mb-6">
                          <span className="absolute -inset-1 rounded-full animate-pulse opacity-30 blur-sm bg-[var(--color-neon)]"></span>
                          <div className="w-12 h-12 rounded-full bg-[var(--color-dark)] border border-[var(--color-neon)]/30 flex items-center justify-center text-[var(--color-neon)] relative group-hover:scale-110 transition-transform duration-300">
                            <Icon className="h-6 w-6" />
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-[var(--color-light)]">{plan.name}</h3>
                        <p className="text-[var(--color-light)]/70 mb-4">{plan.description}</p>
                        
                        <div className="text-xl font-bold mb-4 text-[var(--color-neon)]">{plan.price}</div>
                        
                        <div className="space-y-3 mb-6">
                          {plan.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-[var(--color-neon)] mt-0.5 flex-shrink-0" />
                              <span className="text-[var(--color-light)]/70">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="bg-[var(--color-dark)]/50 p-4 rounded-lg mb-6 border border-[var(--color-neon)]/10">
                          <h4 className="font-semibold text-[var(--color-neon)] mb-2">
                            {plan.demo.title}
                          </h4>
                          <p className="text-[var(--color-light)]/70 text-sm mb-3">
                            {plan.demo.description}
                          </p>
                          <ul className="space-y-1">
                            {plan.demo.metrics.map((metric, i) => (
                              <li key={i} className="text-[var(--color-light)]/60 text-sm flex items-start gap-2">
                                <span className="text-[var(--color-neon)]">•</span> {metric}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-1 mb-6">
                          {plan.forWho.map((item, i) => (
                            <div key={i} className="text-[var(--color-light)]/70 text-sm">
                              {item}
                            </div>
                          ))}
                        </div>
                        
                        <Link href={plan.href}>
                          <Button 
                            className="w-full gap-2 hover:scale-105 transition-transform bg-[var(--color-dark)] border border-[var(--color-neon)] text-[var(--color-neon)] hover:bg-[var(--color-neon)]/10" 
                          >
                            {plan.ctaText} <ArrowRight className="h-4 w-4 animate-pulse-slow" />
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
            Besoin d'une solution encore plus personnalisée ? <span className="text-[var(--color-neon)] font-semibold">Contactez-nous pour une étude approfondie de vos besoins</span> et une proposition sur mesure.
          </p>
          
          <Link href="#contact" className="inline-block mt-8">
            <div className="relative inline-flex overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-neon)_0%,var(--color-gray)_50%,var(--color-neon)_100%)]" />
              <Button className="relative rounded-full bg-[var(--color-dark)] px-6 py-2 text-[var(--color-neon)] hover:bg-[var(--color-dark-overlay)]">
                Discuter de mon projet <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
