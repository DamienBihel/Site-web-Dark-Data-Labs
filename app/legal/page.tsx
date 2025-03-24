"use client"

import { LegalLayout } from "@/components/legal/legal-layout"
import { LegalHeader } from "@/components/legal/legal-header"
import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import Link from 'next/link'

export default function LegalPage() {
  return (
    <LegalLayout>
      <LegalHeader 
        title="Mentions Légales" 
        lastUpdated="24 mars 2025"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container py-12 bg-[#0A0A0A] text-[#F2F2F2]"
      >
        <div className="max-w-none">
          <section className="mb-12">
            <h2 className="text-3rem font-montserrat font-extrabold uppercase tracking-wider mb-6 text-[#00FF85]">1. Éditeur du Site</h2>
            <div className="bg-[#1F1F1F] rounded-lg p-6 hover:shadow-[0_0_20px_rgba(0,255,133,0.2)] transition-all duration-300">
              <h3 className="font-montserrat font-bold text-[#00FF85] mb-4">Identité</h3>
              <ul className="space-y-2 font-roboto">
                <li><span className="text-[#00FF85]">Raison sociale :</span> BIHEL DAMIEN</li>
                <li><span className="text-[#00FF85]">Statut :</span> AUTO-ENTREPRENEUR</li>
                <li><span className="text-[#00FF85]">SIRET :</span> 51786372600041</li>
                <li><span className="text-[#00FF85]">Adresse :</span> 10 RUE DES CHENES, 87800 ST PRIEST LIGOURE</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3rem font-montserrat font-extrabold uppercase tracking-wider mb-6 text-[#00FF85]">2. Responsable de Publication</h2>
            <div className="bg-[#1F1F1F] rounded-lg p-6 hover:shadow-[0_0_20px_rgba(0,255,133,0.2)] transition-all duration-300">
              <p className="font-roboto mb-4">
                <span className="text-[#00FF85]">Directeur de la publication :</span> Damien BIHEL
              </p>
              <p className="font-roboto">
                <span className="text-[#00FF85]">Fonction :</span> Auto-entrepreneur
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3rem font-montserrat font-extrabold uppercase tracking-wider mb-6 text-[#00FF85]">3. Contact</h2>
            <div className="bg-[#1F1F1F] rounded-lg p-6 hover:shadow-[0_0_20px_rgba(0,255,133,0.2)] transition-all duration-300">
              <p className="font-roboto">
                <span className="text-[#00FF85]">Email :</span> damien.bihel@darkdatalabs.fr
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3rem font-montserrat font-extrabold uppercase tracking-wider mb-6 text-[#00FF85]">4. Hébergement</h2>
            <div className="bg-[#1F1F1F] rounded-lg p-6 hover:shadow-[0_0_20px_rgba(0,255,133,0.2)] transition-all duration-300">
              <p className="font-roboto mb-4">Ce site est hébergé par :</p>
              <ul className="space-y-2 font-roboto">
                <li><span className="text-[#00FF85]">Société :</span> Hostinger (Paris, France)</li>
                <li><span className="text-[#00FF85]">Adresse :</span> Vilnius, Lithuania</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3rem font-montserrat font-extrabold uppercase tracking-wider mb-6 text-[#00FF85]">5. Propriété Intellectuelle</h2>
            <div className="bg-[#1F1F1F] rounded-lg p-6 hover:shadow-[0_0_20px_rgba(0,255,133,0.2)] transition-all duration-300">
              <p className="font-roboto mb-4">
                L'ensemble de ce site, créé en 2024, relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="font-roboto mb-4">
                La reproduction de tout ou partie de ce site sur quelque support que ce soit est formellement interdite sauf autorisation expresse de Damien BIHEL.
              </p>
              <p className="font-roboto">
                2025 Dark Data Labs - Tous droits réservés
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3rem font-montserrat font-extrabold uppercase tracking-wider mb-6 text-[#00FF85]">6. Protection des Données</h2>
            <div className="bg-[#1F1F1F] rounded-lg p-6 hover:shadow-[0_0_20px_rgba(0,255,133,0.2)] transition-all duration-300">
              <p className="font-roboto mb-4">
                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez de droits concernant vos données personnelles.
              </p>
              <p className="font-roboto">
                Pour plus d'informations, veuillez consulter notre <Link href="/privacy" className="text-[#00FF85] hover:underline">Politique de Confidentialité</Link>.
              </p>
            </div>
          </section>
        </div>
      </motion.div>
    </LegalLayout>
  );
}