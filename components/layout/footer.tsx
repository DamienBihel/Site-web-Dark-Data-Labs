"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, Linkedin, Clock, MapPin } from "lucide-react"
import { Toaster } from "@/components/ui/toaster"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

const navigation = {
  sections: [
    { name: "Accueil", href: "#" },
    { name: "Problème", href: "#problem" },
    { name: "Solution", href: "#solution" },
    { name: "Offres", href: "#offers" },
    { name: "Processus", href: "#process" },
    { name: "Témoignages", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ],
  legal: [
    { name: "Mentions légales", href: "/legal" },
    { name: "Confidentialité", href: "/privacy" },
  ],
  contact: [
    {
      name: "contact@darkdatalabs.fr",
      href: "mailto:contact@darkdatalabs.fr",
      icon: Mail,
    },
    {
      name: "06 51 08 59 22",
      href: "tel:+33651085922",
      icon: Phone,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/damienbihel/",
      icon: Linkedin,
    },
  ],
  info: [
    {
      name: "Lundi-Vendredi, 9h-18h",
      icon: Clock,
    },
    {
      name: "Limoges, France",
      icon: MapPin,
    },
  ],
}

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [consent, setConsent] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    <footer className="relative bg-[#0A0A0A] text-[#F2F2F2]">
      {/* Effet de grain */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-40 mix-blend-overlay pointer-events-none"></div>
      
      {/* Effet de bordure néon */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#00FF85] opacity-30"></div>
      
      <Toaster />
      <div className="container py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Colonne 1: À propos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Link href="/" className="text-2xl font-montserrat font-extrabold tracking-wider text-[#F2F2F2] hover:text-[#00FF85] transition-colors uppercase">
              Dark Data Labs
            </Link>
            <p className="text-[#F2F2F2]/70 max-w-xs font-roboto leading-relaxed">
            On aide les PME & indépendants à automatiser intelligemment pour gagner du temps et booster leurs revenus.
            </p>
            <div className="space-y-3">
              {navigation.info.map((item) => (
                <div key={item.name} className="flex items-center gap-3 text-[#F2F2F2]/70">
                  <item.icon className="h-5 w-5 text-[#00FF85]" />
                  <span className="font-roboto">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Colonne 2: Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-montserrat font-bold uppercase tracking-wider mb-6 text-[#F2F2F2]">Navigation</h3>
            <ul className="space-y-3">
              {navigation.sections.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#F2F2F2]/70 hover:text-[#00FF85] transition-colors font-roboto"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne 3: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-montserrat font-bold uppercase tracking-wider mb-6 text-[#F2F2F2]">Contact</h3>
            <ul className="space-y-4">
              {navigation.contact.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 text-[#F2F2F2]/70 hover:text-[#00FF85] transition-colors font-roboto"
                  >
                    <item.icon className="h-5 w-5 text-[#00FF85]" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne 4: Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-montserrat font-bold uppercase tracking-wider text-[#F2F2F2]">Restez à la page</h3>
            <p className="text-[#F2F2F2]/70 font-roboto leading-relaxed">
              Recevez nos conseils IA & automatisation directement dans votre boîte mail.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Votre email"
                  className="bg-[#1F1F1F] text-[#F2F2F2] border border-[#F2F2F2]/10 focus:border-[#00FF85]/50 focus:ring-[#00FF85]/20 flex-grow font-roboto"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-[#00FF85] hover:bg-[#00FF85]/90 text-[#0A0A0A] font-bold transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "..." : "OK"}
                </Button>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="newsletter-consent" 
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(checked as boolean)}
                  required
                />
                <label 
                  htmlFor="newsletter-consent" 
                  className="text-xs text-[#F2F2F2]/70 cursor-pointer font-roboto"
                >
                  J'accepte de recevoir la newsletter et la <Link href="/privacy" className="text-[#00FF85] hover:underline">politique de confidentialité</Link>
                </label>
              </div>
              
              {status === "success" && (
                <p className="text-green-500 text-sm">Merci pour votre inscription !</p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-sm">Une erreur est survenue. Veuillez réessayer.</p>
              )}
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 border-t border-[#1F1F1F] pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#F2F2F2]/50 mb-4 md:mb-0 font-roboto">
              &copy; {new Date().getFullYear()} Dark Data Labs. Tous droits réservés.
            </p>
            <ul className="flex space-x-6">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#F2F2F2]/50 hover:text-[#00FF85] transition-colors font-roboto"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
