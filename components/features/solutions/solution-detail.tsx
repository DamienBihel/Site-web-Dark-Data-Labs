"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { memo } from "react"

interface SolutionDetailProps {
  title: string
  description: string
  price: string
  features: string[]
  demoProject: {
    title: string
    points: string[]
    roi: string
  }
  targetAudience: string[]
  href: string
  className?: string
}

export const SolutionDetail = memo(function SolutionDetail({
  title,
  description,
  price,
  features,
  demoProject,
  targetAudience,
  href,
  className
}: SolutionDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`h-full ${className || ''}`}
      data-testid="solution-detail"
    >
      <Card className="flex flex-col h-full">
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl">{title}</CardTitle>
          <CardDescription className="text-lg">{description}</CardDescription>
          <p className="text-2xl sm:text-3xl font-bold" aria-label={`Prix : ${price}€`}>À partir de {price}€</p>
        </CardHeader>
        <CardContent className="flex-grow space-y-8">
          <section aria-labelledby="features-heading">
            <h3 id="features-heading" className="text-xl font-semibold mb-4">Ce que vous obtenez :</h3>
            <ul className="space-y-3" role="list" aria-label="Liste des fonctionnalités">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground" role="listitem" data-testid="feature-item">
                  <span className="text-secondary mt-1" aria-hidden="true">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="demo-heading">
            <h3 id="demo-heading" className="text-xl font-semibold mb-4">Projet de démonstration :</h3>
            <p className="text-base font-medium text-secondary mb-4">{demoProject.title}</p>
            <ul className="space-y-3" role="list" aria-label="Points clés du projet de démonstration">
              {demoProject.points.map((point, i) => (
                <li key={i} className="text-base text-muted-foreground" role="listitem" data-testid="demo-point">• {point}</li>
              ))}
            </ul>
            <p className="text-base font-medium mt-4">ROI projeté : {demoProject.roi}</p>
          </section>

          <section aria-labelledby="audience-heading">
            <h3 id="audience-heading" className="text-xl font-semibold mb-4">Pour qui ?</h3>
            <ul className="space-y-3" role="list" aria-label="Public cible">
              {targetAudience.map((audience, i) => (
                <li key={i} className="text-base text-muted-foreground" role="listitem" data-testid="audience-item">• {audience}</li>
              ))}
            </ul>
          </section>
        </CardContent>
        <CardFooter className="pt-8">
          <Button className="w-full" size="lg" asChild>
            <Link 
              href={href} 
              role="link" 
              aria-label={`Choisir ${title}`}
              tabIndex={0}
              data-testid="solution-link"
            >
              Je choisis {title}
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}) 