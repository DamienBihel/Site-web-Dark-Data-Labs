"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

interface TimelineItem {
  icon: any
  title: string
  duration: string
  description: string
}

interface TimelineSectionProps {
  items: TimelineItem[]
}

export function TimelineSection({ items }: TimelineSectionProps) {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-16"
        >
          Planning Type
        </motion.h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border" />
          
          <div className="space-y-12">
            {items.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <Card className="inline-block p-6">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-secondary font-medium mb-3">{item.duration}</p>
                      <p className="text-muted-foreground">{item.description}</p>
                    </Card>
                  </div>

                  <div className="relative z-10 shrink-0">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
                  </div>

                  <div className="flex-1" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}