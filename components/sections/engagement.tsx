"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, LineChart, Headphones, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

const results = [
  {
    icon: Target,
    title: "Objectifs Clairs",
    description: "Une définition précise des KPIs et des priorités stratégiques pour garantir une vision alignée sur vos besoins."
  },
  {
    icon: LineChart,
    title: "Résultats Mesurables",
    description: "Des résultats concrets grâce à des analyses et automatisations conçues sur mesure."
  }
]

const approach = [
  {
    icon: Headphones,
    title: "Accompagnement Personnalisé",
    description: "Support technique dédié, formations adaptées et suivi continu pour assurer votre autonomie."
  },
  {
    icon: Sparkles,
    title: "Innovation Permanente",
    description: "Nos solutions intègrent les dernières technologies IA, no-code et Python pour toujours rester à la pointe."
  }
]

export function Engagement() {
  return (
    <section className="relative py-24 bg-[#0A0A0A]">
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
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#F2F2F2] via-[#00FF85] to-[#F2F2F2] font-['Montserrat'] uppercase tracking-[0.05em]">
            Notre Engagement : Des solutions taillées pour vos succès mesurables
          </h2>
          <p className="text-xl text-[#F2F2F2]/80 max-w-3xl mx-auto font-['Roboto']">
            Une approche personnalisée et des résultats concrets pour accompagner votre transformation digitale.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-16">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-8 text-center text-[#F2F2F2] font-['Montserrat'] uppercase tracking-wide"
            >
              Quels résultats pouvez-vous attendre ?
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {results.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-8 bg-[#1F1F1F] border border-[#F2F2F2]/10 hover:border-[#00FF85]/50 transition-all duration-300 backdrop-blur-xl hover:shadow-[0_0_20px_rgba(0,255,133,0.2)] h-full">
                    <div className="flex flex-col h-full">
                      <div className="p-4 rounded-lg bg-[#00FF85]/10 w-fit mb-6">
                        <item.icon className="w-8 h-8 text-[#00FF85]" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-[#F2F2F2] font-['Montserrat'] uppercase tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-lg text-[#F2F2F2]/80 font-['Roboto']">{item.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-8 text-center text-[#F2F2F2] font-['Montserrat'] uppercase tracking-wide"
            >
              Pourquoi choisir notre approche ?
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {approach.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-8 bg-[#1F1F1F] border border-[#F2F2F2]/10 hover:border-[#00FF85]/50 transition-all duration-300 backdrop-blur-xl hover:shadow-[0_0_20px_rgba(0,255,133,0.2)] h-full">
                    <div className="flex flex-col h-full">
                      <div className="p-4 rounded-lg bg-[#00FF85]/10 w-fit mb-6">
                        <item.icon className="w-8 h-8 text-[#00FF85]" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-[#F2F2F2] font-['Montserrat'] uppercase tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-lg text-[#F2F2F2]/80 font-['Roboto']">{item.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center pt-8"
          >
            <Link href="/contact">
              <Button className="bg-[#00FF85] text-[#0A0A0A] hover:scale-105 transition-transform duration-300 group text-lg px-8 py-6 font-['Montserrat'] uppercase tracking-wider">
                Démarrer votre projet
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
