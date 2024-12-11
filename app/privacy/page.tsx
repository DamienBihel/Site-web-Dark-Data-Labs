"use client"

import { LegalLayout } from "@/components/legal/legal-layout"
import { LegalHeader } from "@/components/legal/legal-header"
import { motion } from "framer-motion"
import { Mail, Shield, Lock, UserCheck } from "lucide-react"

export default function PrivacyPage() {
  return (
    <LegalLayout>
      <LegalHeader 
        title="Politique de Confidentialité" 
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
            <h2 className="text-2xl font-bold mb-6">1. Introduction</h2>
            <p className="text-muted-foreground">
              Chez Dark Data Labs, la protection de vos données personnelles est une priorité. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">2. Données Collectées</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-bold mb-4">2.1 Informations que vous nous fournissez</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Nom et prénom</li>
                  <li>Adresse email professionnelle</li>
                  <li>Numéro de téléphone (optionnel)</li>
                  <li>Nom de l&apos;entreprise</li>
                  <li>Poste occupé</li>
                  <li>Messages que vous nous envoyez</li>
                </ul>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-bold mb-4">2.2 Informations collectées automatiquement</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Adresse IP</li>
                  <li>Type de navigateur</li>
                  <li>Pages visitées</li>
                  <li>Temps passé sur le site</li>
                  <li>Source du trafic</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">3. Utilisation des Données</h2>
            <div className="bg-muted rounded-lg p-6">
              <p className="text-muted-foreground mb-4">Nous utilisons vos données pour :</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Répondre à vos demandes</li>
                <li>Personnaliser votre expérience</li>
                <li>Améliorer nos services</li>
                <li>Envoyer des communications marketing (avec votre consentement)</li>
                <li>Analyser l&apos;utilisation de notre site</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">4. Protection des Données</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-muted rounded-lg p-6 text-center">
                <Shield className="h-8 w-8 mx-auto mb-4 text-secondary" />
                <h3 className="font-bold mb-2">Chiffrement</h3>
                <p className="text-sm text-muted-foreground">Protection de bout en bout</p>
              </div>
              <div className="bg-muted rounded-lg p-6 text-center">
                <Lock className="h-8 w-8 mx-auto mb-4 text-secondary" />
                <h3 className="font-bold mb-2">Accès Limité</h3>
                <p className="text-sm text-muted-foreground">Contrôle strict des accès</p>
              </div>
              <div className="bg-muted rounded-lg p-6 text-center">
                <UserCheck className="h-8 w-8 mx-auto mb-4 text-secondary" />
                <h3 className="font-bold mb-2">Conformité RGPD</h3>
                <p className="text-sm text-muted-foreground">Respect des normes</p>
              </div>
              <div className="bg-muted rounded-lg p-6 text-center">
                <Shield className="h-8 w-8 mx-auto mb-4 text-secondary" />
                <h3 className="font-bold mb-2">Audits Réguliers</h3>
                <p className="text-sm text-muted-foreground">Contrôles de sécurité</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">5. Vos Droits</h2>
            <div className="bg-muted rounded-lg p-6">
              <p className="text-muted-foreground mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Accès à vos données</li>
                <li>Rectification des données</li>
                <li>Effacement des données</li>
                <li>Opposition au traitement</li>
                <li>Portabilité des données</li>
                <li>Retrait du consentement</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">6. Contact DPO</h2>
            <div className="bg-muted rounded-lg p-6">
              <p className="text-muted-foreground mb-4">Pour exercer vos droits ou pour toute question :</p>
              <p className="flex items-center gap-2 text-secondary">
                <Mail className="h-4 w-4" />
                contact@darkdatalabs.fr
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">7. Mise à Jour</h2>
            <p className="text-muted-foreground">
              Cette politique peut être mise à jour. La date de dernière mise à jour sera toujours indiquée en haut de cette page.
            </p>
          </section>
        </div>
      </motion.div>
    </LegalLayout>
  )
}