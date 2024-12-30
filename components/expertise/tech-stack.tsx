interface Stack {
  category: string
  items: string[]
}

interface TechStackProps {
  title: string
  stacks: Stack[]
}

export function TechStack({ title, stacks }: TechStackProps) {
  return (
    <div className="relative py-24 sm:py-32">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1F1F1F]/50" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-40 mix-blend-overlay" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-3xl font-['Montserrat'] font-extrabold tracking-[0.05em] text-[#F2F2F2] sm:text-4xl uppercase mb-6">
            {title}
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {stacks.map((stack) => (
              <div key={stack.category} className="group relative overflow-hidden rounded-2xl border border-[#F2F2F2]/10 bg-[#1F1F1F]/30 backdrop-blur-xl p-8 transition-all duration-300 hover:border-[#00FF85]/30 hover:bg-[#1F1F1F]/40">
                <div className="absolute inset-0 bg-gradient-to-b from-[#00FF85]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <dt className="text-lg font-['Montserrat'] font-semibold leading-7 text-[#00FF85] mb-4">
                  {stack.category}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-[#F2F2F2]/70 font-['Roboto']">
                  <ul className="space-y-3">
                    {stack.items.map((item) => (
                      <li key={item} className="flex items-center group/item">
                        <div className="mr-3 h-1.5 w-1.5 rounded-full bg-[#00FF85] group-hover/item:scale-125 transition-transform duration-300" />
                        <span className="group-hover/item:text-[#F2F2F2] transition-colors duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
