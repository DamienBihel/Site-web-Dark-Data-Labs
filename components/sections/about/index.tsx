"use client"

import { motion } from "framer-motion"
import { Stats } from "./stats"
import { Profile } from "./profile"
import { Expertise } from "./expertise"
import { Values } from "./values"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function About() {
  return (
    <section className="py-24 sm:py-32 bg-muted">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold mb-4">À Propos de Dark Data Labs</h2>
          <p className="text-lg text-muted-foreground">
            Démocratiser l&apos;analyse de données et l&apos;automatisation pour les PME ambitieuses, 
            en combinant expertise technique pointue et solutions sur mesure.
          </p>
        </div>

        <Stats />
        <Profile />

        <div className="mt-24 space-y-24">
          <Expertise />
          <Values />
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-bold mb-6">Philosophie de Travail</h3>
          <blockquote className="text-lg text-muted-foreground border-l-4 border-secondary pl-6 mb-12">
            "Je crois en la puissance des données pour transformer les entreprises, mais seulement 
            lorsqu&apos;elles sont analysées avec rigueur et transformées en actions concrètes. 
            Mon rôle est de vous guider dans cette transformation, en alliant expertise technique 
            et compréhension business."
          </blockquote>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">
                Découvrez comment nous pouvons collaborer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}