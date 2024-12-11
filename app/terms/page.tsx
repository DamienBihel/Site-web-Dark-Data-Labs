"use client"

import { LegalLayout } from "@/components/legal/legal-layout"
import { LegalHeader } from "@/components/legal/legal-header"
import { motion } from "framer-motion"
import { Mail, Shield, Clock, Target } from "lucide-react"

export default function TermsPage() {
  return (
    <LegalLayout>
      <LegalHeader 
        title="Conditions Générales de Vente" 
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
            <h2 className="text-2xl font-bold mb-6">1. Préambule</h2>
            <p className="text-muted-foreground">
              Les présentes Conditions Générales de Vente (CGV) régissent les relations entre Dark Data Labs ("nous") et ses clients ("vous") pour tous les services de data analysis et d&apos;automation.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">2. Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-bold mb-4">2.1 Description des Services</h3>
                <p className="text-muted-foreground mb-4">Nous proposons :</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Analyse de données</li>
                  <li>Automatisation de processus</li>
                  <li>Création de dashboards</li>
                  <li>Formation et support</li>
                </ul>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-bold mb-4">2.2 Personnalisation</h3>
                <p className="text-muted-foreground mb-4">Chaque projet fait l&apos;objet d&apos;une proposition détaillée précisant :</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Périmètre exact</li>
                  <li>Livrables attendus</li>
                  <li>Délais</li>
                  <li>Prix</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">3. Tarifs et Paiement</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-bold mb-4">3.1 Prix</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Tous les prix sont en euros HT</li>
                  <li>TVA applicable selon la législation en vigueur</li>
                  <li>Validité des devis : 30 jours</li>
                </ul>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-bold mb-4">3.2 Modalités de Paiement</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Acompte : 30% à la commande</li>
                  <li>Solde : selon échéancier défini</li>
                  <li>Délai de paiement : 30 jours</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">4. Réalisation des Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-bold mb-4">4.1 Délais</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Planning défini dans la proposition</li>
                  <li>Mise à jour régulière du client</li>
                  <li>Notification des retards éventuels</li>
                </ul>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-bold mb-4">4.2 Obligations</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium mb-2">Nous nous engageons à :</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Respecter les délais</li>
                      <li>Maintenir la confidentialité</li>
                      <li>Fournir un travail professionnel</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Le client s&apos;engage à :</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Fournir les informations nécessaires</li>
                      <li>Respecter les délais de validation</li>
                      <li>Effectuer les paiements dans les délais</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">5. Propriété Intellectuelle</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-bold mb-4">5.1 Livrables</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Le client devient propriétaire des livrables après paiement complet</li>
                  <li>Dark Data Labs conserve la propriété intellectuelle du code et des méthodologies</li>
                </ul>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-bold mb-4">5.2 Réutilisation</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Dark Data Labs peut réutiliser les concepts et méthodologies</li>
                  <li>Les données client restent strictement confidentielles</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">6. Garanties</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-muted rounded-lg p-6 text-center">
                <Shield className="h-8 w-8 mx-auto mb-4 text-secondary" />
                <h3 className="font-bold mb-2">Garantie de Service</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>30 jours de garantie sur les livrables</li>
                  <li>Support technique selon le pack choisi</li>
                  <li>Corrections des bugs identifiés</li>
                </ul>
              </div>
              <div className="bg-muted rounded-lg p-6 text-center">
                <Clock className="h-8 w-8 mx-auto mb-4 text-secondary" />
                <h3 className="font-bold mb-2">Support & Maintenance</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Réponse sous 24h</li>
                  <li>Maintenance préventive</li>
                  <li>Mises à jour régulières</li>
                </ul>
              </div>
              <div className="bg-muted rounded-lg p-6 text-center">
                <Target className="h-8 w-8 mx-auto mb-4 text-secondary" />
                <h3 className="font-bold mb-2">Objectifs</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>KPIs définis</li>
                  <li>Suivi des performances</li>
                  <li>Optimisation continue</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">7. Contact</h2>
            <div className="bg-muted rounded-lg p-6">
              <p className="text-muted-foreground mb-4">Pour toute question concernant ces CGV :</p>
              <p className="flex items-center gap-2 text-secondary">
                <Mail className="h-4 w-4" />
                contact@darkdatalabs.fr
              </p>
            </div>
          </section>
        </div>
      </motion.div>
    </LegalLayout>
  )
}