"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Mail, ArrowRight, BookOpen, FileText, Lightbulb, Lock } from "lucide-react"
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

const benefits = [
  {
    icon: BookOpen,
    text: "Articles techniques pour perfectionner vos compétences"
  },
  {
    icon: FileText,
    text: "Études de cas détaillées pour vous inspirer"
  },
  {
    icon: Lightbulb,
    text: "Actualités et innovations pour garder une longueur d'avance"
  }
]

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [consent, setConsent] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!consent) {
      alert("Veuillez accepter la politique de confidentialité pour continuer.")
      return
    }
    setIsSubmitting(true)
    setStatus("idle")

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'inscription');
      }

      setStatus("success")
      setEmail("")
      setConsent(false)
    } catch (error) {
      console.error('Erreur:', error)
      setStatus("error")
    }

    setIsSubmitting(false)
  }

  return (
    <section className="relative py-24 bg-[#0A0A0A]">
      {/* Effets de fond */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00FF8520_1px,transparent_1px),linear-gradient(to_bottom,#00FF8520_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container px-4 mx-auto relative">
        <Card className="max-w-5xl mx-auto bg-[#1F1F1F] border border-[#F2F2F2]/10 hover:border-[#00FF85]/50 transition-all duration-300 backdrop-blur-xl overflow-hidden">
          <div className="grid md:grid-cols-5 gap-0">
            {/* Colonne de gauche - Contenu */}
            <div className="md:col-span-3 p-8 md:p-12 bg-gradient-to-br from-[#00FF85]/5 to-transparent">
              <div className="max-w-xl">
                <div className="inline-flex p-4 rounded-lg bg-[#00FF85]/10 mb-8">
                  <Mail className="w-8 h-8 text-[#00FF85]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#F2F2F2] via-[#00FF85] to-[#F2F2F2] font-['Montserrat'] uppercase tracking-[0.05em]">
                  Ne manquez plus les dernières tendances en Data Science et IA
                </h2>
                <p className="text-xl font-bold mb-4 text-[#F2F2F2] font-['Montserrat']">
                  Vous souhaitez rester à la pointe de l'innovation en Data Science ?
                </p>
                <p className="text-lg text-[#F2F2F2]/80 mb-8 font-['Roboto']">
                  Rejoignez notre newsletter et recevez directement dans votre boîte mail :
                </p>
                
                <ul className="space-y-6 mb-8">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-4 group">
                      <div className="p-2 rounded-lg bg-[#00FF85]/10 group-hover:bg-[#00FF85]/20 transition-colors">
                        <benefit.icon className="w-5 h-5 text-[#00FF85]" />
                      </div>
                      <span className="text-[#F2F2F2]/80 group-hover:text-[#F2F2F2] transition-colors font-['Roboto']">{benefit.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-start space-x-3 p-4 rounded-lg bg-[#00FF85]/5 border border-[#00FF85]/10">
                  <Lightbulb className="w-6 h-6 text-[#00FF85] flex-shrink-0 mt-1" />
                  <p className="text-sm text-[#F2F2F2]/60 italic font-['Roboto']">
                    Découvrez en exclusivité : « Comment l'IA transforme le reporting financier en 2024 »
                  </p>
                </div>
              </div>
            </div>

            {/* Colonne de droite - Formulaire */}
            <div className="md:col-span-2 p-8 md:p-12 bg-[#00FF85]/5 flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <Input
                    type="email"
                    placeholder="votre@email.com"
                    className="w-full h-14 text-lg px-6 bg-[#0A0A0A]/50 border-[#F2F2F2]/10 focus:border-[#00FF85] transition-all text-[#F2F2F2] font-['Roboto']"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {status === "error" && (
                    <p className="text-sm text-red-500 mt-2 font-['Roboto']">
                      Une erreur est survenue. Veuillez réessayer.
                    </p>
                  )}
                  {status === "success" && (
                    <p className="text-sm text-[#00FF85] mt-2 font-['Roboto']">
                      Inscription réussie ! Merci de nous rejoindre.
                    </p>
                  )}
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="newsletter-consent" 
                      checked={consent}
                      onCheckedChange={(checked) => setConsent(checked as boolean)}
                      required
                      className="mt-1 data-[state=checked]:bg-[#00FF85] data-[state=checked]:border-[#00FF85]"
                    />
                    <label 
                      htmlFor="newsletter-consent" 
                      className="text-sm text-[#F2F2F2]/80 font-['Roboto']"
                    >
                      J'accepte de recevoir la newsletter et confirme avoir lu la{" "}
                      <Link href="/privacy" className="text-[#00FF85] hover:underline">
                        politique de confidentialité
                      </Link>
                    </label>
                  </div>

                  <div className="flex items-start space-x-2 text-sm text-[#F2F2F2]/60 bg-[#0A0A0A]/50 p-4 rounded-lg font-['Roboto']">
                    <Lock className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#00FF85]" />
                    <p>
                      Vos données sont en sécurité avec nous. Conformément au RGPD, vos informations ne sont utilisées que pour l'envoi de notre newsletter. Vous pouvez vous désinscrire à tout moment.
                    </p>
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#00FF85] text-[#0A0A0A] hover:scale-105 transition-transform duration-300 group text-lg h-14 font-['Montserrat'] uppercase tracking-wider"
                  >
                    Rejoindre la communauté
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
