import { Metadata } from "next"
import { Check, BarChart, Zap, Users, LineChart, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Business - Solution Entreprise | Dark Data Labs",
  description: "Solution data complète pour les moyennes et grandes entreprises. Transformez vos données en avantage compétitif.",
}

export default function BusinessPage() {
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
          <h1 className="text-5xl md:text-6xl font-['Montserrat'] font-extrabold tracking-[0.05em] uppercase mb-6">
            Solution <span className="text-[#00FF85] relative">
              Business
              <div className="absolute inset-0 animate-glow">
                <div className="absolute inset-0 bg-[#00FF85] opacity-20 blur-xl"></div>
              </div>
            </span>
          </h1>
          <h2 className="text-2xl font-['Montserrat'] font-bold tracking-[0.05em] text-[#F2F2F2]/90 mb-4">
            Accélérez votre croissance grâce à vos données
          </h2>
          <p className="text-xl font-['Roboto'] text-[#F2F2F2]/80 mb-12 leading-relaxed max-w-2xl mx-auto">
            Une solution complète pour les entreprises en croissance qui souhaitent maximiser leur potentiel data
          </p>
          <div className="flex justify-center">
            <Button 
              className="bg-[#00FF85] text-[#0A0A0A] hover:bg-[#00FF85]/90 font-['Montserrat'] font-bold uppercase tracking-wide px-6 h-12 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,133,0.3)]" 
              size="lg" 
              asChild
            >
              <Link href="/contact">Demander une démo</Link>
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
                Une solution Business complète
              </h2>
              <p className="text-lg font-['Roboto'] text-[#F2F2F2]/70 leading-relaxed">
                Tous les outils nécessaires pour transformer vos données en un avantage compétitif
              </p>
            </div>
            
            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <FeatureCard
                  title="Analytics avancés"
                  description="Prenez des décisions éclairées grâce à des analyses prédictives et descriptives"
                  icon={<LineChart className="h-8 w-8" />}
                  features={[
                    "BI temps réel",
                    "Modèles prédictifs",
                    "Rapports personnalisés",
                    "Export automatisé"
                  ]}
                />
                <FeatureCard
                  title="Automatisation"
                  description="Automatisez vos processus métier pour plus d'efficacité et de contrôle"
                  icon={<Settings className="h-8 w-8" />}
                  features={[
                    "Workflows avancés",
                    "Intégrations multiples",
                    "Triggers intelligents",
                    "Monitoring en temps réel"
                  ]}
                />
                <FeatureCard
                  title="Collaboration"
                  description="Favorisez une meilleure synergie d'équipe grâce à nos outils collaboratifs"
                  icon={<Users className="h-8 w-8" />}
                  features={[
                    "Partage sécurisé",
                    "Gestion des rôles",
                    "Annotations en temps réel",
                    "Historique complet"
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
                Un plan sur mesure pour répondre à vos besoins spécifiques
              </h2>
            </div>

            <div className="relative mx-auto max-w-2xl rounded-3xl overflow-hidden">
              {/* Background with grain and overlay */}
              <div className="absolute inset-0 bg-[#1F1F1F]/50 backdrop-blur-xl"></div>
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-40 mix-blend-overlay"></div>
              <div className="absolute inset-0 border border-[#F2F2F2]/10"></div>

              <div className="relative p-8 sm:p-10">
                <div className="flex flex-col items-start">
                  <h3 className="text-2xl font-['Montserrat'] font-extrabold tracking-[0.05em] uppercase mb-4">Pack Business</h3>
                  <p className="text-lg font-['Roboto'] text-[#F2F2F2]/70 italic mb-8">
                    Parfait pour les entreprises qui veulent maximiser leur croissance avec une solution data complète
                  </p>
                  
                  <div className="w-full mb-8">
                    <h4 className="text-lg font-['Montserrat'] font-semibold mb-4">Ce que vous obtenez :</h4>
                    <ul className="space-y-3">
                      {[
                        "Analytics avancés",
                        "10 tableaux de bord interactifs",
                        "Automatisation illimitée",
                        "Support prioritaire 24/7",
                        "Mises à jour en temps réel incluses dans l'offre initiale",
                        "Formation approfondie",
                        "API dédiée pour vos besoins spécifiques",
                        "Sécurité renforcée"
                      ].map((feature) => (
                        <li key={feature} className="flex items-center gap-x-3">
                          <Check className="h-5 w-5 flex-none text-[#00FF85]" />
                          <span className="font-['Roboto'] text-[#F2F2F2]/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="w-full text-center mb-8">
                    <div className="text-3xl font-['Montserrat'] font-bold text-[#00FF85] mb-2">À partir de 4 500 €</div>
                    <p className="text-sm font-['Roboto'] text-[#F2F2F2]/60 italic">
                      Facturation unique avec des options mensuelles disponibles pour l'hébergement et les mises à jour
                    </p>
                  </div>

                  <div className="w-full flex justify-center">
                    <Button 
                      size="lg" 
                      className="px-8 bg-[#00FF85] text-[#0A0A0A] hover:bg-[#00FF85]/90 font-['Montserrat'] font-bold uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,133,0.3)]" 
                      asChild
                    >
                      <Link href="/contact">Demandez une démo dès aujourd'hui</Link>
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