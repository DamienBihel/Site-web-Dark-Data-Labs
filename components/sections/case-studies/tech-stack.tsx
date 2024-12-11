"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const technologies = {
  "Data Pipeline": [
    "Python (Pandas, NumPy)",
    "SQL",
    "APIs REST"
  ],
  "Visualisation": [
    "Power BI",
    "Tableau",
    "Custom Dashboards"
  ],
  "Automation": [
    "Python Scripts",
    "Power Automate",
    "Zapier/Make"
  ]
}

export function TechStack() {
  return (
    <div className="mb-24">
      <h3 className="text-2xl font-bold mb-8">Notre Stack Technique</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(technologies).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6">
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {items.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground">• {item}</li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}