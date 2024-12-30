interface VisualSectionProps {
  title: string
  description: string
  imagePath: string
  imageAlt: string
  reverse?: boolean
}

export function VisualSection({ title, description, imagePath, imageAlt, reverse = false }: VisualSectionProps) {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`mx-auto max-w-2xl lg:mx-0 ${reverse ? 'lg:ml-auto' : ''}`}>
          <div className={`grid grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 ${reverse ? 'lg:items-end' : 'lg:items-start'} lg:gap-y-10`}>
            <div className={`lg:order-${reverse ? 2 : 1} lg:max-w-lg`}>
              <h2 className="text-3xl font-['Montserrat'] font-extrabold tracking-[0.05em] text-[#F2F2F2] sm:text-4xl uppercase mb-6">
                {title}
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#F2F2F2]/70 font-['Roboto']">
                {description}
              </p>
            </div>
            <div className={`lg:order-${reverse ? 1 : 2}`}>
              <div className="relative aspect-[6/5] w-full max-w-xl lg:max-w-none">
                <img
                  src={imagePath}
                  alt={imageAlt}
                  className="absolute inset-0 h-full w-full rounded-2xl bg-[#1F1F1F]/50 object-cover shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#F2F2F2]/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
