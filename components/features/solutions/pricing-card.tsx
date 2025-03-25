"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

interface PricingCardProps {
  name: string
  price: string
  description: string
  features: string[]
  roi: string
  ideal: string
  index: number
}

export function PricingCard({ name, price, description, features, roi, ideal, index }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="flex flex-col h-full">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <p className="text-3xl font-bold" aria-label={`Prix : ${price}€`}>{price}€</p>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-2" role="list">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2" role="listitem" aria-label={feature}>
                <Check className="h-4 w-4 text-secondary" aria-hidden="true" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-2">
            <p className="text-sm text-muted-foreground">ROI moyen : {roi}</p>
            <p className="text-sm font-medium">Idéal pour : {ideal}</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" asChild>
            <Link href={`/contact?plan=${name.toLowerCase()}`}>
              Découvrir le Pack {name}
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}