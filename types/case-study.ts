export interface CaseStudy {
  id: string
  title: string
  client: string
  description: string
  challenge: string
  solution: string
  implementation: string
  results: {
    metrics: {
      label: string
      value: string
      prefix?: string
      suffix?: string
    }[]
    details: string[]
  }
  testimonial?: {
    quote: string
    author: string
    position: string
  }
  technologies: string[]
  images: {
    main: string
    gallery?: string[]
  }
  industry: string
  links?: {
    github?: string
    demo?: string
    live?: string
  }
}
