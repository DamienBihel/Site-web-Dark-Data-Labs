import { Metadata } from "next"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Search } from "lucide-react"
import { Settings } from "lucide-react"
import { Plus } from "lucide-react"

export const metadata: Metadata = {
  title: "Starter - Solution pour PME et Startups | Dark Data Labs",
  description: "Solution data adaptée aux PME et startups, commencez votre transformation digitale avec Dark Data Labs",
}

export default function StarterPage() {
  return (
    <div className="relative min-h-screen isolate overflow-hidden bg-[#0A0A0A]">
      {/* Effets de fond */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#1F1F1F] to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00FF85]/20 via-transparent to-transparent blur-2xl" />
        </div>
      </div>

      {/* Grille animée */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00FF8520_1px,transparent_1px),linear-gradient(to_bottom,#00FF8520_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container relative">
        {/* Hero Section */}
        <div className="relative mx-auto max-w-5xl text-center py-24">
          {/* Grain Effect */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-40 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#00FF85]/10 via-[#00FF85]/5 to-transparent"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-['Montserrat'] font-extrabold tracking-[0.05em] uppercase mb-6">
            Solution <span className="text-[#00FF85] relative">
              Starter
              <div className="absolute inset-0 animate-glow">
                <div className="absolute inset-0 bg-[#00FF85] opacity-20 blur-xl"></div>
              </div>
            </span>
          </h1>
          <h2 className="text-2xl font-['Montserrat'] font-bold tracking-[0.05em] text-[#F2F2F2]/90 mb-4">
            Transformez vos données en opportunités concrètes
          </h2>
          <p className="text-xl font-['Roboto'] text-[#F2F2F2]/80 mb-12 leading-relaxed max-w-2xl mx-auto">
            Découvrez une solution clé en main pour votre transition digitale
          </p>
          <div className="flex justify-center">
            <Button 
              className="bg-[#00FF85] text-[#0A0A0A] hover:bg-[#00FF85]/90 font-['Montserrat'] font-bold uppercase tracking-wide px-6 h-12 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,133,0.3)]" 
              size="lg" 
              asChild
            >
              <Link href="/contact">Démarrer maintenant</Link>
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="relative py-24 mb-24 rounded-3xl overflow-hidden">
          {/* Background with grain and overlay */}
          <div className="absolute inset-0 bg-[#1F1F1F]/50 backdrop-blur-xl"></div>
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-40 mix-blend-overlay"></div>
          <div className="absolute inset-0 border border-[#F2F2F2]/10"></div>
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-['Montserrat'] font-extrabold tracking-[0.05em] uppercase mb-6">
                Tout ce dont vous avez besoin pour démarrer
              </h2>
              <p className="text-lg font-['Roboto'] text-[#F2F2F2]/70 leading-relaxed">
                Une solution complète et accessible pour transformer vos données en avantage compétitif
              </p>
            </div>
            
            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <FeatureCard
                  title="Analyse de données"
                  description="Transformez vos données brutes en insights actionnables grâce à nos outils d'analyse avancés"
                  icon={<Search className="h-8 w-8" />}
                  features={[
                    "Tableaux de bord personnalisés",
                    "Rapports automatisés",
                    "Visualisations interactives",
                    "Export des données"
                  ]}
                />
                <FeatureCard
                  title="Automatisation"
                  description="Optimisez vos processus métier grâce à l'automatisation intelligente"
                  icon={<Settings className="h-8 w-8" />}
                  features={[
                    "Workflows personnalisés",
                    "Intégration fluide avec vos outils",
                    "Alertes intelligentes",
                    "Suivi des performances"
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-['Montserrat'] font-extrabold tracking-[0.05em] uppercase mb-6">
                Tarification simple et transparente
              </h2>
              <p className="text-lg font-['Roboto'] text-[#F2F2F2]/70 leading-relaxed">
                Commencez avec une solution adaptée aux PME et startups
              </p>
            </div>

            <div className="relative mx-auto max-w-2xl rounded-3xl overflow-hidden">
              {/* Background with grain and overlay */}
              <div className="absolute inset-0 bg-[#1F1F1F]/50 backdrop-blur-xl"></div>
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-40 mix-blend-overlay"></div>
              <div className="absolute inset-0 border border-[#F2F2F2]/10"></div>

              <div className="relative p-8 sm:p-10">
                <div className="flex flex-col items-start">
                  <h3 className="text-2xl font-['Montserrat'] font-extrabold tracking-[0.05em] uppercase mb-4">Pack Starter</h3>
                  <p className="text-lg font-['Roboto'] text-[#F2F2F2]/70 italic mb-8">
                    Parfait pour les entreprises qui souhaitent poser les bases de leur transformation digitale
                  </p>
                  
                  <div className="w-full mb-8">
                    <h4 className="text-lg font-['Montserrat'] font-semibold mb-4">Ce que vous obtenez :</h4>
                    <ul className="space-y-3">
                      {[
                        "Analyse de données basique",
                        "2 tableaux de bord",
                        "Automatisation simple",
                        "Support par email",
                        "Formation initiale"
                      ].map((feature) => (
                        <li key={feature} className="flex items-center gap-x-3">
                          <Check className="h-5 w-5 flex-none text-[#00FF85]" />
                          <span className="font-['Roboto'] text-[#F2F2F2]/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="w-full mb-8">
                    <h4 className="text-lg font-['Montserrat'] font-semibold mb-4">Options supplémentaires :</h4>
                    <ul className="space-y-3">
                      {[
                        "Hébergement sécurisé et maintenance",
                        "Mise à jour mensuelle des outils et tableaux de bord"
                      ].map((option) => (
                        <li key={option} className="flex items-center gap-x-3">
                          <Plus className="h-5 w-5 flex-none text-[#00FF85]" />
                          <span className="font-['Roboto'] text-[#F2F2F2]/80">{option}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="w-full text-center mb-8">
                    <div className="text-3xl font-['Montserrat'] font-bold text-[#00FF85] mb-2">À partir de 1 800 €</div>
                    <p className="text-sm font-['Roboto'] text-[#F2F2F2]/60 italic">
                      Facturation unique avec options de mise à jour et hébergement sous forme d'abonnement mensuel
                    </p>
                  </div>

                  <div className="w-full flex justify-center">
                    <Button 
                      size="lg" 
                      className="px-8 bg-[#00FF85] text-[#0A0A0A] hover:bg-[#00FF85]/90 font-['Montserrat'] font-bold uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,133,0.3)]" 
                      asChild
                    >
                      <Link href="/contact">Contactez-nous dès aujourd'hui</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({
  title,
  description,
  icon,
  features,
}: {
  title: string
  description: string
  icon: JSX.Element
  features: string[]
}) {
  return (
    <Card className="relative p-8 bg-[#0A0A0A]/50 backdrop-blur-xl border-[#F2F2F2]/10 hover:border-[#00FF85] transition-all duration-300 group overflow-hidden">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-[#00FF85] opacity-5 blur-xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative">
        <div className="flex items-center mb-4">
          {icon}
          <h3 className="text-xl font-['Montserrat'] font-extrabold tracking-[0.05em] uppercase ml-4">{title}</h3>
        </div>
        <p className="font-['Roboto'] text-[#F2F2F2]/70 mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-x-3">
              <Check className="h-5 w-5 flex-none text-[#00FF85]" />
              <span className="font-['Roboto'] text-[#F2F2F2]/80">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}