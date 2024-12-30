import { motion } from "framer-motion"
import Image from "next/image"
import { BaseComponentProps } from "@/components/component.config"
import { cn } from "@/lib/utils"
import { Button } from "@/components/shared/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle, Quote } from "lucide-react"

interface CaseStudyDetailProps extends BaseComponentProps {
  study: {
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
  }
}

const animations = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }
}

export function CaseStudyDetail({ study, className, ...props }: CaseStudyDetailProps) {
  return (
    <article className={cn("py-16 md:py-24", className)} {...props}>
      <div className="container">
        <motion.div
          variants={animations.container}
          initial="hidden"
          animate="show"
          className="space-y-16"
        >
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <motion.div variants={animations.item}>
              <span className="text-sm font-medium text-primary">
                {study.industry} • {study.client}
              </span>
            </motion.div>
            <motion.h1 
              variants={animations.item}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
            >
              {study.title}
            </motion.h1>
            <motion.p 
              variants={animations.item}
              className="text-xl text-muted-foreground"
            >
              {study.description}
            </motion.p>
          </div>

          {/* Main Image */}
          <motion.div 
            variants={animations.item}
            className="relative aspect-video rounded-lg overflow-hidden"
          >
            <Image
              src={study.images.main}
              alt={study.title}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Challenge */}
            <motion.section variants={animations.item} className="space-y-4">
              <h2 className="text-2xl font-bold">Le Challenge</h2>
              <p className="text-muted-foreground">{study.challenge}</p>
            </motion.section>

            {/* Solution */}
            <motion.section variants={animations.item} className="space-y-4">
              <h2 className="text-2xl font-bold">Notre Solution</h2>
              <p className="text-muted-foreground">{study.solution}</p>
            </motion.section>

            {/* Implementation */}
            <motion.section variants={animations.item} className="space-y-4">
              <h2 className="text-2xl font-bold">Mise en Place</h2>
              <p className="text-muted-foreground">{study.implementation}</p>
            </motion.section>

            {/* Results */}
            <motion.section variants={animations.item} className="space-y-8">
              <h2 className="text-2xl font-bold">Résultats</h2>
              
              {/* Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {study.results.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="text-center space-y-2 p-6 bg-card rounded-lg border"
                  >
                    <div className="text-3xl font-bold text-primary">
                      {metric.prefix}{metric.value}{metric.suffix}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Detailed Results */}
              <ul className="space-y-2">
                {study.results.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Testimonial */}
            {study.testimonial && (
              <motion.section 
                variants={animations.item}
                className="relative p-8 bg-primary/5 rounded-lg border space-y-4"
              >
                <Quote className="absolute text-primary/10 w-16 h-16 -top-2 -left-2" />
                <blockquote className="relative text-lg italic">
                  "{study.testimonial.quote}"
                </blockquote>
                <footer className="text-right">
                  <div className="font-semibold">{study.testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {study.testimonial.position}
                  </div>
                </footer>
              </motion.section>
            )}

            {/* Technologies */}
            <motion.section variants={animations.item} className="space-y-4">
              <h2 className="text-2xl font-bold">Technologies Utilisées</h2>
              <div className="flex flex-wrap gap-2">
                {study.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* CTA */}
            <motion.div 
              variants={animations.item}
              className="text-center pt-8"
            >
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  Démarrer votre projet
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </article>
  )
}
