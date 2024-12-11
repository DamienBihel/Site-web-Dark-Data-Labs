"use client"

import { motion } from "framer-motion"
import { ContactForm } from "./contact-form"

export function Contact() {
  return (
    <section className="py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container max-w-6xl"
      >
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Prêt à transformer vos données en résultats concrets ?</h2>
          <p className="text-lg text-muted-foreground">
            Nous répondons sous 24h avec une proposition personnalisée.
          </p>
        </div>

        <ContactForm />
      </motion.div>
    </section>
  )
}