"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface SolutionCardProps {
  name: string
  price: string
  description: string
  features: string[]
  demoProject: {
    title: string
    points: string[]
    roi: string
  }
  targetAudience: string[]
  index: number
  href: string
  className?: string
}

export function SolutionCard({
  name,
  price,
  description,
  features,
  demoProject,
  targetAudience,
  index,
  href,
  className
}: SolutionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      data-testid="solution-card"
    >
      <Card className={cn('relative overflow-hidden', className)}>
        <CardHeader>
          <CardTitle id={`solution-title-${index}`}>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="text-3xl font-bold" aria-label={`Prix : ${price}€`}>
              {price}<span className="text-lg">€</span>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 id={`features-title-${index}`} className="text-lg font-semibold mb-2">Ce que vous obtenez</h4>
              <ul aria-labelledby={`features-title-${index}`} className="space-y-2">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start" data-testid="feature-item">
                    <span className="sr-only">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 id={`demo-title-${index}`} className="text-lg font-semibold mb-2">Projet de démonstration</h4>
              <div>
                <h5 className="font-medium mb-2">{demoProject.title}</h5>
                <ul className="space-y-2">
                  {demoProject.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="sr-only">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-2">ROI : {demoProject.roi}</p>
              </div>
            </div>

            <div>
              <h4 id={`audience-title-${index}`} className="text-lg font-semibold mb-2">Pour qui</h4>
              <ul className="space-y-2">
                {targetAudience.map((audience, i) => (
                  <li key={i} className="flex items-start">
                    <span className="sr-only">•</span>
                    {audience}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full" aria-label={`Choisir ${name}`}>
            <a href={href} tabIndex={0}>Choisir {name}</a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}