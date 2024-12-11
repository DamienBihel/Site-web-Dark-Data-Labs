"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
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
        >
          <Card className="p-6">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Nom</label>
                  <Input placeholder="John Doe" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email professionnel</label>
                  <Input type="email" placeholder="john@entreprise.com" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Centres d'intérêt</label>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="text-sm">Technical content</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="text-sm">Business insights</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="text-sm">Templates</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="text-sm">Tous</span>
                  </label>
                </div>
              </div>

              <div>
                <Button className="w-full sm:w-auto" size="lg">
                  S'inscrire à la newsletter
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  🎁 Bonus : "5 Automatisations Rapides pour PME" (Mini-guide PDF gratuit)
                </p>
              </div>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}