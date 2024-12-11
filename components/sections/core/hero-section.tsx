"use client"

import { Button } from "@/components/ui/core"
import { motion } from "framer-motion"
import { ParticlesBackground } from "@/components/particles-background"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface HeroSectionProps {
  title: string
  highlightedText?: string
  subtitle: string
  description: string
  ctaText: string
  ctaLink: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
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

export function HeroSection({
  title,
  highlightedText,
  subtitle,
  description,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-gradient-to-br from-primary to-primary/80">
      <ParticlesBackground />
      <div className="container py-16 sm:py-24 relative z-10">
        <motion.div
          variants={animations.container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          <div className="space-y-6 max-w-3xl">
            <motion.h1 
              variants={animations.item}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              {title}{" "}
              {highlightedText && (
                <span className="text-secondary">{highlightedText}</span>
              )}
            </motion.h1>
            <motion.h2 
              variants={animations.item}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/80"
            >
              {subtitle}
            </motion.h2>
            <motion.p 
              variants={animations.item}
              className="text-base sm:text-lg text-white/60"
            >
              {description}
            </motion.p>
          </div>

          <motion.div 
            variants={animations.item}
            className="flex flex-wrap gap-4"
          >
            <Link href={ctaLink}>
              <Button size="lg" className="gap-2">
                {ctaText}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            {secondaryCtaText && secondaryCtaLink && (
              <Link href={secondaryCtaLink}>
                <Button variant="outline" size="lg">
                  {secondaryCtaText}
                </Button>
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
