"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"

export function NewsletterSection() {
  return (
    <section className="py-24 bg-muted">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex p-3 rounded-lg bg-secondary/10 mb-4">
            <Mail className="h-6 w-6 text-secondary" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Newsletter "Data & Automation Insights"</h2>
          <p className="text-lg text-muted-foreground">
            Recevez nos meilleurs conseils et ressources directement dans votre boîte mail
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          {/* Formulaire temporairement masqué */}
          <div className="text-center text-muted-foreground">
            Formulaire en maintenance
          </div>
        </motion.div>
      </div>
    </section>
  )
}