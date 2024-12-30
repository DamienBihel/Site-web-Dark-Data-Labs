interface ContentHeaderProps {
  title: string
  subtitle: string
  description: string
}

export function ContentHeader({ title, subtitle, description }: ContentHeaderProps) {
  return (
    <div className="relative overflow-hidden py-24 sm:py-32">
      {/* Grille animée */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00FF8520_1px,transparent_1px),linear-gradient(to_bottom,#00FF8520_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-['Montserrat'] font-extrabold tracking-[0.05em] text-transparent bg-clip-text bg-gradient-to-r from-[#F2F2F2] via-[#00FF85] to-[#F2F2F2] sm:text-6xl uppercase mb-6 animate-gradient-x">
            {title}
          </h1>
          <h2 className="text-2xl font-['Montserrat'] font-bold tracking-[0.05em] text-[#F2F2F2]/90 mb-4">
            {subtitle}
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#F2F2F2]/70 font-['Roboto']">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
