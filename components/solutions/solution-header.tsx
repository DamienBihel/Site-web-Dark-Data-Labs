"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

interface SolutionHeaderProps {
  title: string
  subtitle: string
  description: string
  price: string
  ctaText: string
  highlights?: string[]
}

export function SolutionHeader({ 
  title, 
  subtitle, 
  description, 
  price,
  ctaText,
  highlights = []
}: SolutionHeaderProps) {
  return (
    <div className="relative py-16 md:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/5" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container relative"
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-6">{subtitle}</p>
            <p className="text-lg text-primary-foreground/60 mb-8">{description}</p>
          </motion.div>

          {highlights.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-8"
            >
              <ul className="grid sm:grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-2 text-primary-foreground/60">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 items-center"
          >
            <div className="text-center sm:text-left">
              <div className="text-sm text-primary-foreground/60 mb-1">À partir de</div>
              <div className="text-4xl font-bold">{price}€ HT</div>
            </div>
            <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90" asChild>
              <Link href="/contact">
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}