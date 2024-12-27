"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { EnhancedImage } from "@/components/ui/enhanced-image"
import { OptimizedSection } from "./OptimizedSection"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const challenges = [
  {
    stat: "68%",
    text: "des PME perdent 12h/semaine en tâches manuelles répétitives",
    image: "/images/challenges/automation.jpg"
  },
  {
    stat: "73%",
    text: "n'exploitent que 20% du potentiel de leurs données",
    image: "/images/challenges/data-potential.jpg"
  },
  {
    stat: "82%",
    text: "manquent de visibilité sur leurs KPIs critiques",
    image: "/images/challenges/kpi-monitoring.jpg"
  },
  {
    stat: "91%",
    text: "des décisions stratégiques sont prises sans données fiables",
    image: "/images/challenges/decision-making.jpg"
  }
]

export function Challenges() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <OptimizedSection priority="high" className="container">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-6">La différence Dark Data Labs</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Nous transformons ces défis en opportunités grâce à des solutions sur mesure, 
              alliant expertise technique et compréhension business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-6 rounded-lg shadow-sm overflow-hidden"
              >
                <div className="relative h-40 mb-4 rounded-md overflow-hidden">
                  <EnhancedImage
                    src={challenge.image}
                    alt={challenge.text}
                    width={400}
                    height={300}
                    className="object-cover"
                    loading={index < 2 ? "eager" : "lazy"}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
                <div className="text-3xl font-bold text-secondary mb-2">
                  {challenge.stat}
                </div>
                <p className="text-muted-foreground">{challenge.text}</p>
              </motion.div>
            ))}
          </div>

          <Button size="lg" variant="secondary" asChild>
            <Link href="/solutions">
              Voir les solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </OptimizedSection>
    </section>
  )
}