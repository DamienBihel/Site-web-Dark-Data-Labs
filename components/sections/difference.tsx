"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Clock, Database, LineChart, Brain } from "lucide-react"

const stats = [
  {
    icon: Clock,
    title: "Gagnez du temps",
    stat: "12h/semaine",
    description: "libérées grâce à l'automatisation des tâches répétitives",
  },
  {
    icon: Database,
    title: "Maximisez votre potentiel",
    stat: "80% de potentiel",
    description: "exploité grâce à des analyses avancées et des outils adaptés",
  },
  {
    icon: LineChart,
    title: "Visualisez vos résultats",
    stat: "Visibilité totale",
    description: "sur vos KPIs grâce à des dashboards interactifs",
  },
  {
    icon: Brain,
    title: "Prenez des décisions éclairées",
    stat: "Des décisions guidées",
    description: "par des données fiables et accessibles",
  },
]

export function Difference() {
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
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#F2F2F2] via-[#00FF85] to-[#F2F2F2] font-['Montserrat'] uppercase tracking-[0.05em]">
            Transformez vos données en succès mesurable
          </h2>
          <p className="text-xl text-[#F2F2F2]/80 max-w-3xl mx-auto leading-relaxed font-['Roboto']">
            <strong className="text-[#F2F2F2]">Révélons le plein potentiel de vos données</strong> grâce à des solutions personnalisées alliant IA, automatisation et expertise analytique.
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
    </section>
  )
}
