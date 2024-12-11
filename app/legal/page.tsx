"use client"

import { LegalLayout } from "@/components/legal/legal-layout"
import { LegalHeader } from "@/components/legal/legal-header"
import { motion } from "framer-motion"
import { Mail } from "lucide-react"

export default function LegalPage() {
  return (
    <LegalLayout>
      <LegalHeader 
        title="Mentions Légales" 
        lastUpdated="10 décembre 2024"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container py-12"
      >
        <div className="prose prose-gray max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">1. Éditeur du Site</h2>
            <p className="text-muted-foreground mb-6">
              Le site web darkdatalabs.fr est édité par :
            </p>
            <div className="bg-muted rounded-lg p-6 mb-6">
              <h3 className="font-bold mb-4">Dark Data Labs</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Forme juridique : Micro-Entreprise</li>
                <li>Siège social : 10, rue des chênes 87800 St-Priest-Ligoure</li>
                <li>SIRET : 51786372600041</li>
                <li>Code APE : 7490b</li>
              
              </ul>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="font-bold mb-4">Responsable de la publication</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Damien Bihel</li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  contact@darkdatalabs.fr
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">2. Hébergement</h2>
            <div className="bg-muted rounded-lg p-6">
              <p className="text-muted-foreground mb-4">Le site est hébergé par :</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Raison sociale : o2switch</li>
                <li>Adresse : Chem. des Pardiaux, 63000 Clermont-Ferrand</li>
                <li>Téléphone : 04 44 44 60 40</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">3. Propriété Intellectuelle</h2>
            <p className="text-muted-foreground">
              L&apos;ensemble du contenu de ce site (textes, images, logos, codes source) est la propriété exclusive de Dark Data Labs ou fait l&apos;objet d&apos;une autorisation d&apos;utilisation. Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit est interdite.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">4. Cookies</h2>
            <p className="text-muted-foreground">
              Notre site utilise des cookies pour améliorer votre expérience. Pour plus d&apos;informations, consultez notre <a href="/privacy" className="text-secondary hover:underline">Politique de Confidentialité</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">5. Contact</h2>
            <p className="text-muted-foreground">
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter à : contact@darkdatalabs.fr
            </p>
          </section>
        </div>
      </motion.div>
    </LegalLayout>
  )
}