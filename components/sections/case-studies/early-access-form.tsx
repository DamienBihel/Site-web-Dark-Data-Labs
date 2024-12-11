"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function EarlyAccessForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h3 className="text-2xl font-bold mb-4">Early Access Program</h3>
      <p className="text-muted-foreground mb-8">
        Soyez parmi les premiers à explorer nos solutions
      </p>
      <Card className="max-w-md mx-auto p-6">
        <ul className="text-left space-y-2 mb-6">
          <li className="text-sm text-muted-foreground">✓ Accès prioritaire aux démonstrations</li>
          <li className="text-sm text-muted-foreground">✓ Consultation personnalisée offerte</li>
          <li className="text-sm text-muted-foreground">✓ Tarifs préférentiels de lancement</li>
        </ul>
        <div className="flex gap-4">
          <Input placeholder="Votre email professionnel" type="email" />
          <Button>
            Je m'inscris
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Card>
      <div className="mt-8">
        <Button variant="outline" asChild>
          <Link href="/contact">
            Parlons de votre projet
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </motion.div>
  )
}