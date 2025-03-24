"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Card } from "@/components/ui/card"
import { Mail, Phone, ArrowRight, Lock, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

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
    value: "06 51 08 59 22",
    href: "tel:+33651085922"
  },
  {
    icon: Calendar,
    title: "Disponibilité",
    value: "Lundi-Vendredi, 9h-18h"
  },
  {
    icon: MapPin,
    title: "Localisation",
    value: "Limoges, France"
  }
]

// Schéma de validation du formulaire
const formSchema = z.object({
  name: z.string().min(1, 'Le nom est requis'),
  email: z.string().email('Format d\'email invalide').min(1, 'L\'email est requis'),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(1, 'Le message est requis'),
})

type FormData = z.infer<typeof formSchema>

export function Contact() {
  const { toast } = useToast()
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setFormStatus("idle")
    setError(null)

    try {
      // Simule un envoi réussi (remplacer par un véritable appel API)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setFormStatus("success")
      toast({
        title: 'Message envoyé',
        description: 'Nous vous répondrons dans les plus brefs délais.',
      })
      reset()
    } catch (error) {
      console.error('Erreur:', error)
      setFormStatus("error")
      setError('Une erreur est survenue. Veuillez réessayer plus tard.')
      toast({
        title: 'Une erreur est survenue',
        description: 'Veuillez réessayer plus tard.',
        variant: 'destructive',
      } as any)
    }

    setIsSubmitting(false)
  }

  return (
    <section className="py-24 relative isolate overflow-hidden bg-[var(--color-dark)]" id="contact-form">
      {/* Effets de fond */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-dark)] via-[var(--color-gray)] to-[var(--color-dark)]" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[var(--color-neon)]/10 via-transparent to-transparent blur-2xl" />
        </div>
      </div>

      {/* Grille animée */}
      <div className="absolute inset-0 overflow-hidden grid-pattern"></div>
      
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-12 relative z-10">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2">
              <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-neon)_0%,var(--color-gray)_50%,var(--color-neon)_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[var(--color-dark)] px-3 py-1 text-sm font-bold text-[var(--color-neon)] backdrop-blur-3xl font-['Montserrat'] uppercase tracking-wider">
                  <Mail className="h-3 w-3 mr-1" /> Contact
                </div>
              </span>
            </div>
          </motion.div>
          
          <motion.h2 
            className="relative z-10 text-4xl sm:text-5xl mb-8 font-['Montserrat']"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Effet de halo lumineux atténué */}
            <span className="absolute -inset-1 blur-lg opacity-15 bg-[var(--color-neon)] rounded-full"></span>
            
            {/* Texte principal avec effet néon */}
            <span className="neon-title relative block">
              Discutons de votre projet d&apos;automatisation
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-[var(--color-light)]/80 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            30 minutes pour débloquer des heures. Remplissez le formulaire ci-dessous, et on planifie ensemble votre audit.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
          {/* Colonne de gauche - Coordonnées */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_var(--color-neon-glow)]">
              {/* Bordure animée */}
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-neon)_0%,var(--color-gray)_50%,var(--color-neon)_100%)]" />
              
              {/* Contenu */}
              <div className="relative bg-[var(--color-dark)] p-[1px] backdrop-blur-xl">
                <Card className="p-6 bg-[var(--color-dark-overlay)]/80 backdrop-blur-sm border-t border-[var(--color-neon)]/10 overflow-hidden rounded-lg border-none">
                  <span className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></span>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-6 text-[var(--color-light)] font-['Montserrat']">
                      Contactez-nous
                    </h3>
                    <div className="space-y-5">
                      {contactInfo.map((item, index) => (
                        item.href ? (
                          <a 
                            key={index}
                            href={item.href}
                            className="flex items-start group hover:text-[var(--color-neon)] transition-colors"
                          >
                            <div className="relative mr-3">
                              <span className="absolute -inset-1 rounded-full animate-pulse opacity-30 blur-sm bg-[var(--color-neon)]"></span>
                              <div className="p-2 rounded-lg bg-[var(--color-neon)]/10 relative group-hover:bg-[var(--color-neon)]/20 transition-colors">
                                <item.icon className="w-5 h-5 text-[var(--color-neon)]" />
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium text-sm text-[var(--color-light)]">{item.title}</h4>
                              <p className="text-[var(--color-light)]/70 group-hover:text-[var(--color-neon)]">{item.value}</p>
                            </div>
                          </a>
                        ) : (
                          <div 
                            key={index}
                            className="flex items-start"
                          >
                            <div className="relative mr-3">
                              <span className="absolute -inset-1 rounded-full animate-pulse opacity-30 blur-sm bg-[var(--color-neon)]"></span>
                              <div className="p-2 rounded-lg bg-[var(--color-neon)]/10 relative">
                                <item.icon className="w-5 h-5 text-[var(--color-neon)]" />
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium text-sm text-[var(--color-light)]">{item.title}</h4>
                              <p className="text-[var(--color-light)]/70">{item.value}</p>
                            </div>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_var(--color-neon-glow)]">
              {/* Bordure animée */}
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-neon)_0%,var(--color-gray)_50%,var(--color-neon)_100%)]" />
              
              {/* Contenu */}
              <div className="relative bg-[var(--color-dark)] p-[1px] backdrop-blur-xl">
                <Card className="p-6 bg-[var(--color-dark-overlay)]/80 backdrop-blur-sm border-t border-[var(--color-neon)]/10 overflow-hidden rounded-lg border-none">
                  <span className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></span>
                  <div className="relative z-10 flex items-start space-x-3">
                    <div className="relative flex-shrink-0">
                      <span className="absolute -inset-1 rounded-full animate-pulse opacity-30 blur-sm bg-[var(--color-neon)]"></span>
                      <Lock className="w-5 h-5 text-[var(--color-neon)] mt-1 relative" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-2 text-[var(--color-light)]">Confidentialité garantie</h3>
                      <p className="text-sm text-[var(--color-light)]/70">
                      Vos infos sont protégées. Aucune revente. 100 % conforme RGPD.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </motion.div>

          {/* Colonne de droite - Formulaire */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_var(--color-neon-glow)]">
              {/* Bordure animée */}
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-neon)_0%,var(--color-gray)_50%,var(--color-neon)_100%)]" />
              
              {/* Contenu */}
              <div className="relative bg-[var(--color-dark)] p-[1px] backdrop-blur-xl">
                <Card className="p-8 bg-[var(--color-dark-overlay)]/80 backdrop-blur-sm border-t border-[var(--color-neon)]/10 overflow-hidden rounded-lg border-none">
                  <span className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></span>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-6 text-[var(--color-light)] font-['Montserrat']">
                      Parlez-nous de votre projet
                    </h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                      {error && (
                        <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
                          {error}
                        </div>
                      )}
                      
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="text-sm font-medium mb-2 block text-[var(--color-light)]">
                            Nom complet*
                          </label>
                          <Input
                            id="name"
                            type="text"
                            {...register('name')}
                            className={cn(
                              "h-10 bg-[var(--color-dark-overlay)] border-[var(--color-neon)]/20 text-[var(--color-light)] focus:border-[var(--color-neon)] focus:ring-[var(--color-neon)]/10",
                              errors.name && "border-red-500"
                            )}
                            placeholder="Jean Dupont"
                          />
                          {errors.name && (
                            <p className="text-sm text-red-400 mt-1">{errors.name.message}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="company" className="text-sm font-medium mb-2 block text-[var(--color-light)]">
                            Entreprise
                          </label>
                          <Input
                            id="company"
                            type="text"
                            {...register('company')}
                            className="h-10 bg-[var(--color-dark-overlay)] border-[var(--color-neon)]/20 text-[var(--color-light)] focus:border-[var(--color-neon)] focus:ring-[var(--color-neon)]/10"
                            placeholder="Nom de votre entreprise"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="email" className="text-sm font-medium mb-2 block text-[var(--color-light)]">
                            Email*
                          </label>
                          <Input
                            id="email"
                            type="email"
                            {...register('email')}
                            className={cn(
                              "h-10 bg-[var(--color-dark-overlay)] border-[var(--color-neon)]/20 text-[var(--color-light)] focus:border-[var(--color-neon)] focus:ring-[var(--color-neon)]/10",
                              errors.email && "border-red-500"
                            )}
                            placeholder="vous@exemple.fr"
                          />
                          {errors.email && (
                            <p className="text-sm text-red-400 mt-1">{errors.email.message}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="phone" className="text-sm font-medium mb-2 block text-[var(--color-light)]">
                            Téléphone
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            {...register('phone')}
                            className="h-10 bg-[var(--color-dark-overlay)] border-[var(--color-neon)]/20 text-[var(--color-light)] focus:border-[var(--color-neon)] focus:ring-[var(--color-neon)]/10"
                            placeholder="06 XX XX XX XX"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="text-sm font-medium mb-2 block text-[var(--color-light)]">
                          Comment pouvons-nous vous aider ?*
                        </label>
                        <Textarea
                          id="message"
                          rows={5}
                          {...register('message')}
                          className={cn(
                            "min-h-[120px] bg-[var(--color-dark-overlay)] border-[var(--color-neon)]/20 text-[var(--color-light)] focus:border-[var(--color-neon)] focus:ring-[var(--color-neon)]/10",
                            errors.message && "border-red-500"
                          )}
                          placeholder="Décrivez votre besoin d'automatisation ou vos questions sur nos services..."
                        />
                        {errors.message && (
                          <p className="text-sm text-red-400 mt-1">{errors.message.message}</p>
                        )}
                      </div>

                      {formStatus === "error" && (
                        <p className="text-sm text-red-400">
                          Une erreur est survenue. Veuillez réessayer.
                        </p>
                      )}
                      {formStatus === "success" && (
                        <p className="text-sm text-[var(--color-neon)]">
                          Message envoyé avec succès ! Nous vous répondrons sous 24h.
                        </p>
                      )}

                      <div className="flex justify-between items-center pt-2">
                        <p className="text-xs text-[var(--color-light)]/60">
                          Tous les champs marqués * sont obligatoires
                        </p>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="relative overflow-hidden rounded-md p-[1px] group inline-block bg-transparent border-0 hover:bg-transparent"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-neon)_0%,var(--color-gray)_50%,var(--color-neon)_100%)]" />
                    <span className="inline-flex h-full w-full items-center justify-center gap-2 rounded-md bg-[var(--color-dark)] px-4 py-2 text-[var(--color-neon)] backdrop-blur-3xl transition-colors group-hover:bg-[var(--color-neon)]/10">
                      {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Button>
                </div>
                    </form>
                  </div>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
