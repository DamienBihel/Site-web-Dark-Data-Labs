"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
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
}

export function ServiceCard({ 
  name, 
  price, 
  description, 
  features, 
  demoProject,
  targetAudience,
  index,
  href
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="flex flex-col h-full">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl">{name}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
          <p className="text-xl sm:text-2xl font-bold">À partir de {price}€</p>
        </CardHeader>
        <CardContent className="flex-grow space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Ce que vous obtenez :</h4>
            <ul className="space-y-2.5">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-secondary mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Projet de démonstration :</h4>
            <p className="text-sm font-medium text-secondary mb-3">{demoProject.title}</p>
            <ul className="space-y-2">
              {demoProject.points.map((point, i) => (
                <li key={i} className="text-sm text-muted-foreground">• {point}</li>
              ))}
            </ul>
            <p className="text-sm font-medium mt-3">ROI projeté : {demoProject.roi}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Pour qui ?</h4>
            <ul className="space-y-2">
              {targetAudience.map((audience, i) => (
                <li key={i} className="text-sm text-muted-foreground">• {audience}</li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter className="pt-6">
          <Button className="w-full" size="lg" asChild>
            <Link href={href}>
              Je choisis {name}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}