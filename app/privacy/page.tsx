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
            <h2 className="text-3rem font-montserrat font-extrabold uppercase tracking-wider mb-6 text-[#00FF85]">7. Outils et Services Utilisés</h2>
            <div className="bg-[#1F1F1F] rounded-lg p-6 hover:shadow-[0_0_20px_rgba(0,255,133,0.2)] transition-all duration-300">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-montserrat font-bold text-[#00FF85] mb-4">Umami Analytics</h3>
                  <p className="font-roboto mb-2">Outil d'analyse respectueux de la vie privée :</p>
                  <ul className="space-y-2 font-roboto">
                    <li>Ne collecte aucun cookie</li>
                    <li>Auto-hébergé à Paris, France</li>
                    <li>Données anonymisées</li>
                    <li>Pas de suivi entre sites</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-[#00FF85] mb-4">Mautic</h3>
                  <p className="font-roboto mb-2">Plateforme de gestion des contacts :</p>
                  <ul className="space-y-2 font-roboto">
                    <li>Auto-hébergée à Paris, France</li>
                    <li>Inscription newsletter avec consentement</li>
                    <li>Option de désinscription dans chaque email</li>
                    <li>Conservation limitée des données</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-[#00FF85] mb-4">EmailJS</h3>
                  <p className="font-roboto mb-2">Service d'envoi d'emails :</p>
                  <ul className="space-y-2 font-roboto">
                    <li>Utilisé uniquement pour le formulaire de contact</li>
                    <li>Traitement limité aux données nécessaires</li>
                    <li>Protection par chiffrement</li>
                    <li>Pas d'utilisation commerciale des données</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3rem font-montserrat font-extrabold uppercase tracking-wider mb-6 text-[#00FF85]">8. Cookies et Traceurs</h2>
            <div className="bg-[#1F1F1F] rounded-lg p-6 hover:shadow-[0_0_20px_rgba(0,255,133,0.2)] transition-all duration-300">
              <h3 className="font-montserrat font-bold text-[#00FF85] mb-4">8.1 Cookies utilisés</h3>
              <p className="font-roboto mb-4">
                Notre site utilise un nombre minimal de cookies pour assurer son bon fonctionnement :
              </p>
              <ul className="space-y-2 font-roboto mb-6">
                <li>Cookie de session Next.js (durée : session) - Nécessaire au fonctionnement technique du site</li>
                <li>Cookies techniques Umami (_ko_id et ko_sid) - Utilisés par notre outil d'analyse pour mesurer l'audience du site (durée : 2024 jours)</li>
              </ul>
              
              <h3 className="font-montserrat font-bold text-[#00FF85] mb-4">8.2 Outils d'analyse respectueux de la vie privée</h3>
              <p className="font-roboto mb-4">
                Pour l'analyse de notre site, nous utilisons Umami, un outil d'analyse qui respecte votre vie privée. Umami utilise deux cookies techniques qui ne contiennent aucune information personnelle et ne permettent pas de vous suivre à travers différents sites. Cette approche est conforme aux recommandations de la CNIL concernant les outils d'analyse d'audience.
              </p>
              
              <h3 className="font-montserrat font-bold text-[#00FF85] mb-4">8.3 Absence de cookies marketing ou publicitaires</h3>
              <p className="font-roboto mb-4">
                Notre site ne dépose aucun cookie publicitaire, marketing ou de traçage. Nous ne vendons pas vos données et ne partageons pas vos informations de navigation avec des tiers à des fins commerciales.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3rem font-montserrat font-extrabold uppercase tracking-wider mb-6 text-[#00FF85]">9. Transferts de Données</h2>
            <div className="bg-[#1F1F1F] rounded-lg p-6 hover:shadow-[0_0_20px_rgba(0,255,133,0.2)] transition-all duration-300">
              <h3 className="font-montserrat font-bold text-[#00FF85] mb-4">9.1 Localisation des Données</h3>
              <p className="font-roboto mb-4">
                Toutes vos données sont hébergées dans l'Union Européenne. Nos outils d'analyse (Umami) et de gestion de contacts (Mautic) sont auto-hébergés sur nos serveurs situés à Paris, France, garantissant ainsi que vos données restent dans l'UE et bénéficient pleinement de la protection du RGPD.
              </p>

              <h3 className="font-montserrat font-bold text-[#00FF85] mb-4">9.2 Sous-traitants</h3>
              <ul className="space-y-2 font-roboto mb-6">
                <li>Hostinger (Paris) - Hébergement du site et de nos outils</li>
                <li>EmailJS - Service d'envoi d'emails pour le formulaire de contact</li>
              </ul>

              <h3 className="font-montserrat font-bold text-[#00FF85] mb-4">9.3 Garanties</h3>
              <p className="font-roboto">
                Pour les services non auto-hébergés, les transferts sont encadrés par les Clauses Contractuelles Types de la Commission Européenne et des mesures de sécurité appropriées. Notre politique privilégie l'auto-hébergement en Europe pour garantir un niveau élevé de protection de vos données.
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
                    <li>Newsletter (via Mautic, auto-hébergé en France)</li>
                    <li>Études et sondages</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-[#00FF85] mb-4">Exécution du Contrat</h3>
                  <ul className="space-y-2 font-roboto">
                    <li>Gestion du compte utilisateur</li>
                    <li>Fourniture des services</li>
                    <li>Support client (via EmailJS)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-[#00FF85] mb-4">Intérêt Légitime</h3>
                  <ul className="space-y-2 font-roboto">
                    <li>Analyse statistique anonyme du site (via Umami, sans cookies)</li>
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