import { motion } from "framer-motion"
import { BaseComponentProps } from "@/components/component.config"
import { cn } from "@/lib/utils"
import { Button } from "@/components/shared/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

interface SolutionDetailProps extends BaseComponentProps {
  title: string
  description: string
  benefits: string[]
  features: {
    title: string
    description: string
    icon?: string
  }[]
  technologies: string[]
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

export function SolutionDetail({
  title,
  description,
  benefits,
  features,
  technologies,
  className,
  ...props
}: SolutionDetailProps) {
  return (
    <section className={cn("py-16 md:py-24", className)} {...props}>
      <div className="container">
        <motion.div
          variants={animations.container}
          initial="hidden"
          animate="show"
          className="space-y-16"
        >
          {/* En-tête */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <motion.h1 
              variants={animations.item}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
            >
              {title}
            </motion.h1>
            <motion.p 
              variants={animations.item}
              className="text-xl text-muted-foreground"
            >
              {description}
            </motion.p>
          </div>

          {/* Bénéfices */}
          <motion.div 
            variants={animations.item}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-4 p-6 bg-card rounded-lg border"
              >
                <CheckCircle className="w-6 h-6 text-primary mt-1" />
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </motion.div>

          {/* Fonctionnalités */}
          <motion.div variants={animations.item} className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Fonctionnalités</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 bg-card rounded-lg border space-y-2"
                >
                  <div className="flex items-center gap-2">
                    {feature.icon && <span className="text-2xl">{feature.icon}</span>}
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div variants={animations.item} className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Technologies</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 bg-secondary/10 rounded-full text-secondary-foreground"
                >
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            variants={animations.item}
            className="text-center"
          >
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                Discuter de votre projet
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
