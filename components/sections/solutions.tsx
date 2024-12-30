"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Starter",
    description: "Idéal pour poser les bases de votre transformation digitale",
    price: "1 800",
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
    href: "/solutions/starter"
  },
  {
    name: "Business",
    description: "Pour optimiser vos performances et automatiser vos processus",
    price: "4 500",
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
    href: "/solutions/business"
  },
  {
    name: "Premium",
    description: "Pour une transformation complète et pérenne",
    price: "8 000",
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
    href: "/solutions/premium"
  }
]

export function Solutions() {
  return (
    <section className="relative py-24 bg-[#0A0A0A]">
      {/* Effets de fond */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00FF8520_1px,transparent_1px),linear-gradient(to_bottom,#00FF8520_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container px-4 mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#F2F2F2] via-[#00FF85] to-[#F2F2F2] font-['Montserrat'] uppercase tracking-[0.05em]">
            Transformez vos données en leviers de croissance
          </h2>
          <p className="text-xl text-[#F2F2F2]/80 max-w-3xl mx-auto leading-relaxed font-['Roboto']">
            <strong className="text-[#F2F2F2]">Choisissez la solution adaptée à votre entreprise et maximisez votre ROI</strong> grâce à des offres sur mesure combinant IA, automatisation no-code, scripts Python et expertise analytique.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className="relative bg-[#1F1F1F] border border-[#F2F2F2]/10 hover:border-[#00FF85]/50 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(0,255,133,0.2)] backdrop-blur-xl overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#F2F2F2] mb-2 font-['Montserrat'] uppercase tracking-wide">
                  {plan.name}
                </h3>
                <p className="text-[#F2F2F2]/80 mb-6 font-['Roboto']">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-[#00FF85] font-['Montserrat']">{plan.price}€</span>
                  <span className="text-[#F2F2F2]/60 font-['Roboto']"> / projet</span>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-[#00FF85] mt-1 mr-2 flex-shrink-0" />
                      <span className="text-[#F2F2F2]/80 font-['Roboto']">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#0A0A0A]/50 p-4 rounded-lg mb-8">
                  <h4 className="font-bold text-[#00FF85] mb-2 font-['Montserrat'] uppercase">
                    {plan.demo.title}
                  </h4>
                  <p className="text-[#F2F2F2]/80 text-sm mb-4 font-['Roboto']">
                    {plan.demo.description}
                  </p>
                  <ul className="space-y-2">
                    {plan.demo.metrics.map((metric, i) => (
                      <li key={i} className="text-[#F2F2F2]/60 text-sm font-['Roboto']">
                        • {metric}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 mb-8">
                  {plan.forWho.map((item, i) => (
                    <div key={i} className="text-[#F2F2F2]/80 font-['Roboto']">
                      {item}
                    </div>
                  ))}
                </div>

                <Link
                  href={plan.href}
                  className="block w-full text-center px-6 py-3 bg-[#00FF85] text-[#0A0A0A] rounded-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,133,0.2)] font-['Montserrat'] uppercase tracking-wider"
                >
                  {plan.ctaText}
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
