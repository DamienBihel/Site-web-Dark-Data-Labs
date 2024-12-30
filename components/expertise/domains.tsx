interface Domain {
  title: string
  description: string
  icon: JSX.Element
}

interface DomainsProps {
  title: string
  description: string
  domains: Domain[]
}

export function Domains({ title, description, domains }: DomainsProps) {
  return (
    <div className="relative py-24 sm:py-32">
      {/* Background with grain and overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1F1F1F]/50" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00FF85]/10 via-transparent to-transparent blur-2xl" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-3xl font-['Montserrat'] font-extrabold tracking-[0.05em] text-[#F2F2F2] sm:text-4xl uppercase mb-6">
            {title}
          </h2>
          <p className="text-lg leading-8 text-[#F2F2F2]/70 font-['Roboto']">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {domains.map((domain) => (
              <div key={domain.title} 
                className="group relative overflow-hidden rounded-2xl border border-[#F2F2F2]/10 bg-[#1F1F1F]/30 backdrop-blur-xl p-8 transition-all duration-300 hover:border-[#00FF85]/30 hover:bg-[#1F1F1F]/40"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#00FF85]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <dt className="flex items-center gap-x-3 text-lg font-['Montserrat'] font-semibold leading-7 text-[#00FF85] mb-4">
                  <div className="rounded-lg bg-[#1F1F1F]/50 p-2 ring-1 ring-[#F2F2F2]/10 group-hover:ring-[#00FF85]/30 transition-all duration-300">
                    {domain.icon}
                  </div>
                  <span className="group-hover:text-[#F2F2F2] transition-colors duration-300">
                    {domain.title}
                  </span>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-[#F2F2F2]/70 font-['Roboto'] group-hover:text-[#F2F2F2]/90 transition-colors duration-300">
                  <p className="flex-auto">{domain.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
