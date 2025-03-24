"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle, ChevronDown, ChevronRight, MessageCircle } from "lucide-react"

export function FAQ() {
  const faqs = [
    {
      id: "faq-1",
      question: "Combien de temps faut-il pour mettre en place une solution d'automatisation ?",
      answer: "Cela dépend de la complexité de votre besoin. Pour une automatisation simple (comme des relances automatiques), comptez 2-3 jours. Pour un système plus complet, prévoyez 1-2 semaines. Nous travaillons par itérations rapides pour vous apporter de la valeur immédiatement."
    },
    {
      id: "faq-2",
      question: "Est-ce que je dois avoir des compétences techniques ?",
      answer: "Absolument pas ! Notre spécialité est justement de rendre l'IA et l'automatisation accessibles aux non-techniciens. Nous nous occupons de toute la partie technique et vous apprenons à utiliser les outils de façon intuitive."
    },
    {
      id: "faq-3",
      question: "Comment se déroule la collaboration ?",
      answer: "Tout commence par un audit gratuit de 30 minutes pour comprendre vos besoins. Ensuite, nous vous proposons une solution adaptée. Après validation, nous mettons en place le système et vous formons à son utilisation. Un support est inclus pour répondre à vos questions."
    },
    {
      id: "faq-4",
      question: "Combien coûte une solution sur-mesure ?",
      answer: "Nos tarifs démarrent à 1 500€ pour un système d'automatisation complet. Le prix exact dépend de la complexité de votre besoin et du nombre d'intégrations nécessaires. Nous vous proposons toujours un devis transparent et détaillé avant de commencer."
    },
    {
      id: "faq-5",
      question: "Est-ce que ça va fonctionner avec mes outils actuels ?",
      answer: "Oui ! Nous intégrons votre solution avec les outils que vous utilisez déjà (CRM, emails, calendrier, facturation, etc.). Notre objectif est d'améliorer votre flux de travail existant, pas de vous imposer de nouveaux outils."
    },
    {
      id: "faq-6",
      question: "Quel retour sur investissement puis-je espérer ?",
      answer: "La plupart de nos clients récupèrent leur investissement en 2-3 mois. Par exemple, si vous gagnez 10 heures par semaine à 50€/h, vous économisez 2 000€ par mois. Sans compter les opportunités commerciales que vous pouvez saisir grâce au temps libéré."
    },
    {
      id: "faq-7",
      question: "Je n'y connais rien en IA, est-ce un problème ?",
      answer: "C'est justement pour ça que nous sommes là ! Notre mission est de vous faire bénéficier des avantages de l'IA sans que vous ayez à comprendre les aspects techniques. Nous traduisons la technologie en solutions concrètes adaptées à votre métier."
    },
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="py-20 relative isolate overflow-hidden bg-[var(--color-dark)]" id="faq">
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
                  <HelpCircle className="h-3 w-3 mr-1" /> FAQ
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
              Questions fréquentes
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-[var(--color-light)]/80 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Tout ce que vous devez savoir avant de commencer
          </motion.p>
        </div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.id}
                custom={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_var(--color-neon-glow)]">
                  {/* Bordure animée */}
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-neon)_0%,var(--color-gray)_50%,var(--color-neon)_100%)]" />
                  
                  {/* Contenu */}
                  <div className="relative bg-[var(--color-dark)] p-[1px] backdrop-blur-xl">
                    <AccordionItem value={faq.id} className="border-none rounded-lg overflow-hidden">
                      <div className="bg-[var(--color-dark-overlay)] backdrop-blur-sm border-t border-[var(--color-neon)]/10 overflow-hidden rounded-t-lg">
                        <span className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></span>
                        <AccordionTrigger className="relative z-10 text-left font-medium px-6 py-4 text-[var(--color-light)] hover:no-underline group">
                          <span className="flex items-center">
                            <div className="relative mr-3">
                              <span className="absolute -inset-1 rounded-full animate-pulse opacity-30 blur-sm bg-[var(--color-neon)]"></span>
                              <ChevronRight className="h-4 w-4 text-[var(--color-neon)] group-data-[state=open]:hidden relative" />
                              <ChevronDown className="h-4 w-4 text-[var(--color-neon)] hidden group-data-[state=open]:block relative" />
                            </div>
                            {faq.question}
                          </span>
                        </AccordionTrigger>
                      </div>
                      <AccordionContent className="relative text-[var(--color-light)]/80 px-6 pb-6 pt-2 bg-[var(--color-dark-overlay)]/80 backdrop-blur-sm border-t border-[var(--color-neon)]/5">
                        <span className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></span>
                        <div className="relative z-10">
                          {faq.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                </div>
              </motion.div>
            ))}
          </Accordion>
        </div>
        
        <motion.div 
          className="mt-16 max-w-2xl mx-auto relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_var(--color-neon-glow)]">
            {/* Bordure animée */}
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-neon)_0%,var(--color-gray)_50%,var(--color-neon)_100%)]" />
            
            {/* Contenu */}
            <div className="relative bg-[var(--color-dark)] p-[1px] backdrop-blur-xl">
              <div className="p-8 text-center rounded-lg bg-[var(--color-dark-overlay)] backdrop-blur-sm border-t border-[var(--color-neon)]/10 overflow-hidden">
                <span className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></span>
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-4">
                    <div className="relative mr-3">
                      <span className="absolute -inset-1 rounded-full animate-pulse opacity-30 blur-sm bg-[var(--color-neon)]"></span>
                      <MessageCircle className="h-6 w-6 text-[var(--color-neon)] relative" />
                    </div>
                    <p className="text-xl font-medium text-[var(--color-light)] font-['Montserrat']">Vous avez d&apos;autres questions ?</p>
                  </div>
                  <p className="text-[var(--color-light)]/80 mb-6">
                    Contactez-nous directement, nous vous répondons sous 24h.
                  </p>
                  <div className="flex justify-center gap-6 flex-wrap">
                    <motion.a 
                      href="mailto:contact@darkdatalabs.fr" 
                      className="relative overflow-hidden rounded-md p-[1px] group inline-block"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-neon)_0%,var(--color-gray)_50%,var(--color-neon)_100%)]" />
                      <span className="inline-flex h-full w-full items-center justify-center rounded-md bg-[var(--color-dark)] px-4 py-2 text-[var(--color-neon)] backdrop-blur-3xl transition-colors group-hover:bg-[var(--color-neon)]/10">
                        contact@darkdatalabs.fr
                      </span>
                    </motion.a>
                    <span className="text-[var(--color-light)]/50 self-center">•</span>
                    <motion.a 
                      href="tel:+33651085922" 
                      className="relative overflow-hidden rounded-md p-[1px] group inline-block"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-neon)_0%,var(--color-gray)_50%,var(--color-neon)_100%)]" />
                      <span className="inline-flex h-full w-full items-center justify-center rounded-md bg-[var(--color-dark)] px-4 py-2 text-[var(--color-neon)] backdrop-blur-3xl transition-colors group-hover:bg-[var(--color-neon)]/10">
                        06 51 08 59 22
                      </span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
