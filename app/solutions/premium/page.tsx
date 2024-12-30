import { Metadata } from "next"
import { Check, Brain, Shield, Rocket, Star, Zap, HeadphonesIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Premium - Solution Enterprise | Dark Data Labs",
  description: "Solution data enterprise sur mesure pour les grandes organisations. Intelligence artificielle et data science de pointe.",
}

export default function PremiumPage() {
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
              Premium
              <div className="absolute inset-0 animate-glow">
                <div className="absolute inset-0 bg-[#00FF85] opacity-20 blur-xl"></div>
              </div>
            </span>
          </h1>
          <h2 className="text-2xl font-['Montserrat'] font-bold tracking-[0.05em] text-[#F2F2F2]/90 mb-4">
            Libérez le plein potentiel de votre organisation
          </h2>
          <p className="text-xl font-['Roboto'] text-[#F2F2F2]/80 mb-12 leading-relaxed max-w-2xl mx-auto">
            Une solution sur mesure pour les grandes entreprises ambitieuses qui visent l'excellence
          </p>
          <div className="flex justify-center">
            <Button 
              className="bg-[#00FF85] text-[#0A0A0A] hover:bg-[#00FF85]/90 font-['Montserrat'] font-bold uppercase tracking-wide px-6 h-12 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,133,0.3)]" 
              size="lg" 
              asChild
            >
              <Link href="/contact">Contacter un expert</Link>
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
                Des outils de pointe pour une performance exceptionnelle
              </h2>
            </div>
            
            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <FeatureCard
                  title="IA Avancée"
                  description="Exploitez les dernières technologies en intelligence artificielle pour vos projets les plus ambitieux"
                  icon={<Brain className="h-8 w-8" />}
                  features={[
                    "Machine Learning personnalisé",
                    "Deep Learning pour des analyses avancées",
                    "NLP (Traitement du Langage Naturel)",
                    "IA explicable pour une transparence totale"
                  ]}
                />
                <FeatureCard
                  title="Sécurité Enterprise"
                  description="Garantissez une protection maximale pour vos données sensibles"
                  icon={<Shield className="h-8 w-8" />}
                  features={[
                    "Chiffrement de bout en bout (E2E)",
                    "Conformité RGPD totale",
                    "Audit logs pour une traçabilité complète",
                    "Contrôle avancé des accès"
                  ]}
                />
                <FeatureCard
                  title="Performance"
                  description="Profitez d'une infrastructure de haute performance pour une fiabilité inégalée"
                  icon={<Zap className="h-8 w-8" />}
                  features={[
                    "Scaling automatique",
                    "Multi-region pour opérations internationales",
                    "Haute disponibilité",
                    "Équilibrage de charge"
                  ]}
                />
                <FeatureCard
                  title="Support Elite"
                  description="Un accompagnement personnalisé pour répondre à vos besoins les plus exigeants"
                  icon={<HeadphonesIcon className="h-8 w-8" />}
                  features={[
                    "Support prioritaire",
                    "SLA garanti pour vos opérations critiques",
                    "Expert dédié pour un suivi optimal",
                    "Formation sur mesure pour vos équipes"
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
                Une offre complète et personnalisée pour votre organisation
              </h2>
            </div>

            <div className="relative mx-auto max-w-2xl rounded-3xl overflow-hidden">
              {/* Background with grain and overlay */}
              <div className="absolute inset-0 bg-[#1F1F1F]/50 backdrop-blur-xl"></div>
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-40 mix-blend-overlay"></div>
              <div className="absolute inset-0 border border-[#F2F2F2]/10"></div>

              <div className="relative p-8 sm:p-10">
                <div className="flex flex-col items-start">
                  <h3 className="text-2xl font-['Montserrat'] font-extrabold tracking-[0.05em] uppercase mb-4">Pack Enterprise Premium</h3>
                  <p className="text-lg font-['Roboto'] text-[#F2F2F2]/70 italic mb-8">
                    La solution idéale pour les grandes organisations avec des besoins spécifiques
                  </p>
                  
                  <div className="w-full mb-8">
                    <h4 className="text-lg font-['Montserrat'] font-semibold mb-4">Ce que vous obtenez :</h4>
                    <ul className="space-y-3">
                      {[
                        "IA & Machine Learning sur mesure",
                        "Infrastructure dédiée",
                        "Sécurité de niveau enterprise-grade",
                        "Support prioritaire avec SLA personnalisé",
                        "Formation approfondie et accompagnement continu",
                        "Intégration sur mesure pour s'adapter à votre écosystème",
                        "Scaling illimité et déploiement multi-region",
                        "API personnalisée pour vos processus spécifiques",
                        "Audit régulier pour garantir la performance et la sécurité"
                      ].map((feature) => (
                        <li key={feature} className="flex items-center gap-x-3">
                          <Check className="h-5 w-5 flex-none text-[#00FF85]" />
                          <span className="font-['Roboto'] text-[#F2F2F2]/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="w-full text-center mb-8">
                    <div className="text-3xl font-['Montserrat'] font-bold text-[#00FF85] mb-2">À partir de 8 000 €</div>
                    <p className="text-sm font-['Roboto'] text-[#F2F2F2]/60 italic">
                      Facturation unique avec des options mensuelles pour l'hébergement et les mises à jour
                    </p>
                  </div>

                  <div className="w-full flex justify-center">
                    <Button 
                      size="lg" 
                      className="px-8 bg-[#00FF85] text-[#0A0A0A] hover:bg-[#00FF85]/90 font-['Montserrat'] font-bold uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,133,0.3)]" 
                      asChild
                    >
                      <Link href="/contact">Contactez un expert dès aujourd'hui</Link>
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
    <Card className="relative overflow-hidden border-[#F2F2F2]/10 bg-[#1F1F1F]/30 backdrop-blur-xl">
      {/* Content */}
      <div className="relative p-6">
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