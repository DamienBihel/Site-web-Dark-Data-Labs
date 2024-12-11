"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"

interface VisualSectionProps {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  stats: {
    value: string
    label: string
  }[]
}

export function VisualSection({ imageSrc, imageAlt, title, description, stats }: VisualSectionProps) {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square rounded-lg overflow-hidden"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">{title}</h2>
            <p className="text-lg text-muted-foreground mb-8">{description}</p>
            
            <div className="grid sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="p-4 text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}