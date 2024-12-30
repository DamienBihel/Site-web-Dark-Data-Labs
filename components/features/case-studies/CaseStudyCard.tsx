import { motion } from "framer-motion"
import Image from "next/image"
import { BaseComponentProps } from "@/components/component.config"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

interface CaseStudy {
  title: string
  client: string
  description: string
  image: string
  results: string[]
  technologies: string[]
  industry: string
  href: string
}

interface CaseStudyCardProps extends BaseComponentProps {
  caseStudy: CaseStudy
}

const animations = {
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2
    }
  }
}

export function CaseStudyCard({ caseStudy, className, ...props }: CaseStudyCardProps) {
  return (
    <Link href={caseStudy.href}>
      <motion.article
        whileHover={animations.hover}
        className={cn(
          "group relative overflow-hidden rounded-lg border bg-card",
          className
        )}
        {...props}
      >
        {/* Image */}
        <div className="aspect-[16/9] relative overflow-hidden">
          <Image
            src={caseStudy.image}
            alt={caseStudy.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">
                {caseStudy.industry}
              </span>
              <span className="text-sm font-medium text-primary">
                {caseStudy.client}
              </span>
            </div>
            <h3 className="text-xl font-semibold leading-tight">{caseStudy.title}</h3>
            <p className="text-muted-foreground">{caseStudy.description}</p>
          </div>

          {/* Results */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Résultats Clés</h4>
            <ul className="space-y-1">
              {caseStudy.results.map((result) => (
                <li key={result} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {caseStudy.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center text-sm font-medium text-primary">
            Voir l'étude de cas
            <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </motion.article>
    </Link>
  )
}
