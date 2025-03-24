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
        lastUpdated="5 janvier 2025"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container py-12 bg-[#0A0A0A] text-[#F2F2F2]"
      >
        <div className="max-w-none">
          <section className="mb-12">
            <h2 className="text-3rem font-montserrat font-extrabold uppercase tracking-wider mb-6 text-[#00FF85]">1. Introduction</h2>
            <p className="font-roboto text-[#F2F2F2] leading-relaxed">
              Chez Dark Data Labs, la protection de vos données personnelles est une priorité. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3rem font-montserrat font-extrabold uppercase tracking-wider mb-6 text-[#00FF85]">2. Données Collectées</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#1F1F1F] rounded-lg p-6 hover:shadow-[0_0_20px_rgba(0,255,133,0.2)] transition-all duration-300">
                <h3 className="font-montserrat font-bold text-[#00FF85] mb-4">2.1 Informations que vous nous fournissez</h3>
                <ul className="space-y-2 font-roboto">
                  <li>Nom et prénom</li>
                  <li>Adresse email professionnelle</li>
                  <li>Numéro de téléphone (optionnel)</li>
                  <li>Nom de l&apos;entreprise</li>
                  <li>Poste occupé</li>
                  <li>Messages que vous nous envoyez</li>
                </ul>
              </div>
              <div className="bg-[#1F1F1F] rounded-lg p-6 hover:shadow-[0_0_20px_rgba(0,255,133,0.2)] transition-all duration-300">
                <h3 className="font-montserrat font-bold text-[#00FF85] mb-4">2.2 Informations collectées automatiquement</h3>
                <ul className="space-y-2 font-roboto">
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
            <h2 className="text-3rem font-montserrat font-extrabold uppercase tracking-wider mb-6 text-[#00FF85]">3. Utilisation des Données</h2>
            <div className="bg-[#1F1F1F] rounded-lg p-6 hover:shadow-[0_0_20px_rgba(0,255,133,0.2)] transition-all duration-300">
              <p className="font-roboto mb-4">Nous utilisons vos données pour :</p>
              <ul className="space-y-2 font-roboto">
                <li>Répondre à vos demandes</li>
                <li>Personnaliser votre expérience</li>
                <li>Améliorer nos services</li>
                <li>Envoyer des communications marketing (avec votre consentement)</li>
                <li>Analyser l&apos;utilisation de notre site</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3rem font-montserrat font-extrabold uppercase tracking-wider mb-6 text-[#00FF85]">4. Protection des Données</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-[#1F1F1F] rounded-lg p-6 text-center hover:shadow-[0_0_20px_rgba(0,255,133,0.2)] transition-all duration-300">
                <Shield className="h-8 w-8 mx-auto mb-4 text-[#00FF85]" />
                <h3 className="font-montserrat font-bold text-[#00FF85] mb-2">Chiffrement</h3>
                <p className="text-sm font-roboto">Protection de bout en bout</p>
              </div>
              <div className="bg-[#1F1F1F] rounded-lg p-6 text-center hover:shadow-[0_0_20px_rgba(0,255,133,0.2)] transition-all duration-300">
                <Lock className="h-8 w-8 mx-auto mb-4 text-[#00FF85]" />
                <h3 className="font-montserrat font-bold text-[#00FF85] mb-2">Accès Limité</h3>
                <p className="text-sm font-roboto">Contrôle strict des accès</p>
              </div>
              <div className="bg-[#1F1F1F] rounded-lg p-6 text-center hover:shadow-[0_0_20px_rgba(0,255,133,0.2)] transition-all duration-300">
                <UserCheck className="h-8 w-8 mx-auto mb-4 text-[#00FF85]" />
                <h3 className="font-montserrat font-bold text-[#00FF85] mb-2">Conformité RGPD</h3>
                <p className="text-sm font-roboto">Respect des normes</p>
              </div>
              <div className="bg-[#1F1F1F] rounded-lg p-6 text-center hover:shadow-[0_0_20px_rgba(0,255,133,0.2)] transition-all duration-300">
                <Shield className="h-8 w-8 mx-auto mb-4 text-[#00FF85]" />
                <h3 className="font-montserrat font-bold text-[#00FF85] mb-2">Audits Réguliers</h3>
                <p className="text-sm font-roboto">Contrôles de sécurité</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3rem font-montserrat font-extrabold uppercase tracking-wider mb-6 text-[#00FF85]">5. Vos Droits</h2>
            <div className="bg-[#1F1F1F] rounded-lg p-6 hover:shadow-[0_0_20px_rgba(0,255,133,0.2)] transition-all duration-300">
              <p className="font-roboto mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="space-y-2 font-roboto">
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
            <h2 className="text-3rem font-montserrat font-extrabold uppercase tracking-wider mb-6 text-[#00FF85]">6. Contact DPO</h2>
            <div className="bg-[#1F1F1F] rounded-lg p-6 hover:shadow-[0_0_20px_rgba(0,255,133,0.2)] transition-all duration-300">
              <p className="font-roboto mb-4">
                Pour exercer vos droits ou pour toute question :
              </p>
              <p className="flex items-center gap-2 text-[#00FF85]">
                <Mail className="h-4 w-4" />
                contact@darkdatalabs.fr
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3rem font-montserrat font-extrabold uppercase tracking-wider mb-6 text-[#00FF85]">8. Cookies et Traceurs</h2>
            <div className="bg-[#1F1F1F] rounded-lg p-6 hover:shadow-[0_0_20px_rgba(0,255,133,0.2)] transition-all duration-300">
              <h3 className="font-montserrat font-bold text-[#00FF85] mb-4">8.1 Types de Cookies</h3>
              <ul className="space-y-2 font-roboto mb-6">
                <li>Cookies essentiels (durée : session)</li>
                <li>Cookies analytiques (durée : 13 mois)</li>
                <li>Cookies de préférences (durée : 6 mois)</li>
                <li>Cookies marketing (durée : 30 jours, avec consentement)</li>
              </ul>
              
              <h3 className="font-montserrat font-bold text-[#00FF85] mb-4">8.2 Gestion des Cookies</h3>
              <p className="font-roboto mb-4">
                Vous pouvez à tout moment modifier vos préférences via notre panneau de configuration des cookies accessible depuis le bouton "Paramètres des cookies" en bas de page.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3rem font-montserrat font-extrabold uppercase tracking-wider mb-6 text-[#00FF85]">9. Transferts de Données</h2>
            <div className="bg-[#1F1F1F] rounded-lg p-6 hover:shadow-[0_0_20px_rgba(0,255,133,0.2)] transition-all duration-300">
              <h3 className="font-montserrat font-bold text-[#00FF85] mb-4">9.1 Localisation des Données</h3>
              <p className="font-roboto mb-4">
                Vos données sont principalement hébergées dans l'Union Européenne. Certaines données peuvent être transférées vers nos sous-traitants situés hors UE.
              </p>

              <h3 className="font-montserrat font-bold text-[#00FF85] mb-4">9.2 Sous-traitants</h3>
              <ul className="space-y-2 font-roboto mb-6">
                <li>Hostinger (Paris) - Hébergement</li>
              </ul>

              <h3 className="font-montserrat font-bold text-[#00FF85] mb-4">9.3 Garanties</h3>
              <p className="font-roboto">
                Ces transferts sont encadrés par les Clauses Contractuelles Types de la Commission Européenne et des mesures de sécurité appropriées.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3rem font-montserrat font-extrabold uppercase tracking-wider mb-6 text-[#00FF85]">10. Conservation des Données</h2>
            <div className="bg-[#1F1F1F] rounded-lg p-6 hover:shadow-[0_0_20px_rgba(0,255,133,0.2)] transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-montserrat font-bold text-[#00FF85] mb-4">10.1 Durées de Conservation</h3>
                  <ul className="space-y-2 font-roboto">
                    <li>Données de compte : Durée de l'utilisation du service</li>
                    <li>Données de facturation : 10 ans</li>
                    <li>Logs de connexion : 1 an</li>
                    <li>Cookies : Variable selon le type</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-[#00FF85] mb-4">10.2 Critères de Détermination</h3>
                  <ul className="space-y-2 font-roboto">
                    <li>Obligations légales et réglementaires</li>
                    <li>Besoins opérationnels</li>
                    <li>Consentement utilisateur</li>
                    <li>Recommandations CNIL</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3rem font-montserrat font-extrabold uppercase tracking-wider mb-6 text-[#00FF85]">11. Base Légale des Traitements</h2>
            <div className="bg-[#1F1F1F] rounded-lg p-6 hover:shadow-[0_0_20px_rgba(0,255,133,0.2)] transition-all duration-300">
              <div className="grid gap-6">
                <div>
                  <h3 className="font-montserrat font-bold text-[#00FF85] mb-4">Consentement</h3>
                  <ul className="space-y-2 font-roboto">
                    <li>Cookies marketing</li>
                    <li>Newsletter</li>
                    <li>Études et sondages</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-[#00FF85] mb-4">Exécution du Contrat</h3>
                  <ul className="space-y-2 font-roboto">
                    <li>Gestion du compte utilisateur</li>
                    <li>Fourniture des services</li>
                    <li>Support client</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-[#00FF85] mb-4">Intérêt Légitime</h3>
                  <ul className="space-y-2 font-roboto">
                    <li>Amélioration des services</li>
                    <li>Sécurité du site</li>
                    <li>Prévention de la fraude</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3rem font-montserrat font-extrabold uppercase tracking-wider mb-6 text-[#00FF85]">12. Protection des Mineurs</h2>
            <div className="bg-[#1F1F1F] rounded-lg p-6 hover:shadow-[0_0_20px_rgba(0,255,133,0.2)] transition-all duration-300">
              <p className="font-roboto mb-4">
                Notre service est destiné aux utilisateurs âgés de 15 ans ou plus. Nous ne collectons pas sciemment des données concernant des mineurs de moins de 15 ans.
              </p>
              <p className="font-roboto mb-4">
                Si vous êtes un parent ou tuteur et pensez que votre enfant nous a fourni des informations, contactez-nous pour leur suppression.
              </p>
              <div className="bg-[#0A0A0A] rounded p-4 mt-4">
                <p className="font-roboto text-[#00FF85] text-sm">
                  🔒 Les mineurs de 15 à 18 ans doivent obtenir l'autorisation de leurs parents avant d'utiliser nos services.
                </p>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </LegalLayout>
  )
}