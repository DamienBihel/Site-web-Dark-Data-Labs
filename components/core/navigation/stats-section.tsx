"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/core"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Stat {
  value: string
  description: string
}

interface StatsSectionProps {
  title: string
  description: string
  stats: Stat[]
  ctaText?: string
  ctaLink?: string
  className?: string
}

const animations = {
  container: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  },
  item: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay: 0.2 }
  }
}

export function StatsSection({
  title,
  description,
  stats,
  ctaText,
  ctaLink,
  className = ""
}: StatsSectionProps) {
  return (
    <section className={`bg-muted py-24 sm:py-32 ${className}`}>
      <motion.div 
        {...animations.container}
        className="container"
      >
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <p className="text-lg text-muted-foreground mb-12">
            {description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              {...animations.item}
              className="bg-background rounded-lg p-6 shadow-sm"
            >
              <p className="text-4xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {ctaText && ctaLink && (
          <motion.div {...animations.item}>
            <Link href={ctaLink}>
              <Button size="lg" className="gap-2">
                {ctaText}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
