"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Mail, Phone, ArrowRight, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@darkdatalabs.fr",
    href: "mailto:contact@darkdatalabs.fr"
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: "+33 (0)6 51 08 59 22",
    href: "tel:+33651085922"
  }
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus("idle")

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi')
      }

      setFormStatus("success")
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      })
    } catch (error) {
      console.error('Erreur:', error)
      setFormStatus("error")
    }

    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <section className="relative py-24 bg-[#0A0A0A]">
      {/* Effets de fond */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00FF8520_1px,transparent_1px),linear-gradient(to_bottom,#00FF8520_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container px-4 mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#F2F2F2] via-[#00FF85] to-[#F2F2F2] font-['Montserrat'] uppercase tracking-[0.05em]">
            Parlez-nous de vos projets, faisons équipe pour atteindre vos objectifs !
          </h2>
          <p className="text-xl text-[#F2F2F2]/80 max-w-3xl mx-auto font-['Roboto']">
            Chaque projet commence par une conversation. Partagez vos idées avec nous et voyons ensemble comment les concrétiser.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Colonne de gauche - Coordonnées */}
          <div className="space-y-6">
            <Card className="p-8 bg-[#1F1F1F] border border-[#F2F2F2]/10 hover:border-[#00FF85]/50 transition-all duration-300 backdrop-blur-xl">
              <h3 className="text-2xl font-extrabold mb-6 text-[#00FF85] font-['Montserrat'] uppercase tracking-wide">
                Nos coordonnées
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    className="flex items-start group hover:text-[#00FF85] transition-colors"
                  >
                    <div className="p-3 rounded-lg bg-[#00FF85]/10 mr-4 group-hover:bg-[#00FF85]/20 transition-colors">
                      <item.icon className="w-6 h-6 text-[#00FF85]" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-[#F2F2F2] font-['Montserrat'] uppercase">{item.title}</h4>
                      <p className="text-[#F2F2F2]/80 group-hover:text-[#00FF85] font-['Roboto']">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-[#1F1F1F] border border-[#F2F2F2]/10 hover:border-[#00FF85]/50 transition-all duration-300 backdrop-blur-xl">
              <div className="flex items-start space-x-3">
                <Lock className="w-5 h-5 text-[#00FF85] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2 text-[#F2F2F2] font-['Montserrat'] uppercase">Votre confidentialité, notre priorité</h3>
                  <p className="text-sm text-[#F2F2F2]/60 font-['Roboto']">
                    Vos informations restent entre de bonnes mains. Conformément au RGPD, vos données sont utilisées de manière sécurisée et jamais partagées sans votre consentement. Vous disposez d'un droit d'accès, de rectification et de suppression à tout moment.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Colonne de droite - Formulaire */}
          <Card className="md:col-span-2 p-8 bg-[#1F1F1F] border border-[#F2F2F2]/10 hover:border-[#00FF85]/50 transition-all duration-300 backdrop-blur-xl">
            <h3 className="text-2xl font-extrabold mb-8 text-[#00FF85] font-['Montserrat'] uppercase tracking-wide">
              Votre projet
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-bold mb-2 block text-[#F2F2F2] font-['Montserrat'] uppercase">
                    Prénom
                  </label>
                  <Input
                    required
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="h-12 bg-[#0A0A0A]/50 border-[#F2F2F2]/10 focus:border-[#00FF85] text-[#F2F2F2] font-['Roboto']"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold mb-2 block text-[#F2F2F2] font-['Montserrat'] uppercase">
                    Nom
                  </label>
                  <Input
                    required
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="h-12 bg-[#0A0A0A]/50 border-[#F2F2F2]/10 focus:border-[#00FF85] text-[#F2F2F2] font-['Roboto']"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-bold mb-2 block text-[#F2F2F2] font-['Montserrat'] uppercase">
                  Email
                </label>
                <Input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="h-12 bg-[#0A0A0A]/50 border-[#F2F2F2]/10 focus:border-[#00FF85] text-[#F2F2F2] font-['Roboto']"
                />
              </div>

              <div>
                <label className="text-sm font-bold mb-2 block text-[#F2F2F2] font-['Montserrat'] uppercase">
                  Votre projet
                </label>
                <Textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez vos idées ou vos besoins spécifiques."
                  className="min-h-[150px] bg-[#0A0A0A]/50 border-[#F2F2F2]/10 focus:border-[#00FF85] text-[#F2F2F2] font-['Roboto']"
                />
              </div>

              {formStatus === "error" && (
                <p className="text-sm text-red-500 font-['Roboto']">
                  Une erreur est survenue. Veuillez réessayer.
                </p>
              )}
              {formStatus === "success" && (
                <p className="text-sm text-[#00FF85] font-['Roboto']">
                  Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                </p>
              )}

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#00FF85] text-[#0A0A0A] hover:scale-105 transition-transform duration-300 group text-lg h-14 font-['Montserrat'] uppercase tracking-wider"
              >
                Envoyer
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
