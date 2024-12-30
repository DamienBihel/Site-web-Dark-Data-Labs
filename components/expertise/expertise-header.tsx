interface ExpertiseHeaderProps {
  title: string
  subtitle: string
  description: string
}

export function ExpertiseHeader({ title, subtitle, description }: ExpertiseHeaderProps) {
  return (
    <div className="relative overflow-hidden py-24 sm:py-32">
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
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00FF8520_1px,transparent_1px),linear-gradient(to_bottom,#00FF8520_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-['Montserrat'] font-extrabold tracking-[0.05em] text-transparent bg-clip-text bg-gradient-to-r from-[#F2F2F2] via-[#00FF85] to-[#F2F2F2] sm:text-6xl uppercase mb-6 animate-gradient-x">
            {title}
          </h2>
          <h3 className="text-2xl font-['Montserrat'] font-bold tracking-[0.05em] text-[#F2F2F2]/90 mb-4">
            {subtitle}
          </h3>
          <p className="mt-6 text-lg leading-8 text-[#F2F2F2]/70 font-['Roboto']">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
