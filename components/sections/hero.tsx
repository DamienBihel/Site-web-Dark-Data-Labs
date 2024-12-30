import Link from 'next/link'

export function Hero() {
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

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge animé */}
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2">
              <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00FF85_0%,#1F1F1F_50%,#00FF85_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0A0A0A] px-3 py-1 text-sm font-bold text-[#00FF85] backdrop-blur-3xl font-['Montserrat'] uppercase tracking-wider">
                  Nouveau
                </div>
              </span>
            </div>
          </div>

          {/* Titre principal */}
          <h1 className="text-4xl font-extrabold tracking-[0.05em] text-transparent bg-clip-text bg-gradient-to-r from-[#F2F2F2] via-[#00FF85] to-[#F2F2F2] sm:text-6xl mb-6 font-['Montserrat'] uppercase">
            Prenez le contrôle de vos données pour propulser votre entreprise
          </h1>
          
          {/* Sous-titre */}
          <p className="text-xl text-[#F2F2F2] mb-12 font-['Roboto'] leading-relaxed">
            <strong>Exploitez tout le potentiel caché de vos données</strong> grâce à l'IA, l'automatisation et le no-code.
          </p>

          {/* Solutions */}
          <div className="mt-12 mb-16">
            <h2 className="text-2xl font-extrabold text-[#F2F2F2] mb-8 font-['Montserrat'] uppercase tracking-[0.05em]">
              Découvrir nos solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Carte IA et Python */}
              <div className="group p-6 rounded-lg bg-[#1F1F1F] border border-[#F2F2F2]/10 backdrop-blur-xl hover:border-[#00FF85]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,133,0.2)]">
                <h3 className="text-xl font-bold text-[#F2F2F2] mb-3 font-['Montserrat']">IA et Python</h3>
                <p className="text-[#F2F2F2]/80 font-['Roboto']">Anticipez l'avenir avec des analyses prédictives et des automatisations puissantes.</p>
              </div>
              {/* Carte No-code */}
              <div className="group p-6 rounded-lg bg-[#1F1F1F] border border-[#F2F2F2]/10 backdrop-blur-xl hover:border-[#00FF85]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,133,0.2)]">
                <h3 className="text-xl font-bold text-[#F2F2F2] mb-3 font-['Montserrat']">No-code</h3>
                <p className="text-[#F2F2F2]/80 font-['Roboto']">Simplifiez vos processus et gagnez un temps précieux grâce à des workflows efficaces.</p>
              </div>
              {/* Carte Dashboards */}
              <div className="group p-6 rounded-lg bg-[#1F1F1F] border border-[#F2F2F2]/10 backdrop-blur-xl hover:border-[#00FF85]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,133,0.2)]">
                <h3 className="text-xl font-bold text-[#F2F2F2] mb-3 font-['Montserrat']">Dashboards</h3>
                <p className="text-[#F2F2F2]/80 font-['Roboto']">Visualisez vos performances en un coup d'œil grâce à nos tableaux de bord interactifs.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Link 
              href="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-[#0A0A0A] bg-[#00FF85] rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,133,0.2)] focus:outline-none focus:ring-2 focus:ring-[#00FF85] focus:ring-offset-2 focus:ring-offset-[#0A0A0A] font-['Montserrat'] uppercase tracking-wider"
            >
              <span className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></span>
              <span className="relative inline-flex items-center">
                👉 Démarrer maintenant
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}