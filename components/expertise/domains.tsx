"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Target } from "lucide-react"

interface Domain {
  title: string
  items: string[]
}

interface DomainsProps {
  title: string
  domains: Domain[]
}

export function Domains({ title, domains }: DomainsProps) {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex p-3 rounded-lg bg-secondary/10 mb-4">
            <Target className="h-6 w-6 text-secondary" />
          </div>
          <h2 className="text-3xl font-bold">{title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-6">
                <h3 className="font-semibold mb-4">{domain.title}</h3>
                <ul className="space-y-2">
                  {domain.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground">• {item}</li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}