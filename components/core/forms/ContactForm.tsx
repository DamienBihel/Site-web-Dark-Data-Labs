"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import Link from "next/link"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [consent, setConsent] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!consent) {
      alert("Veuillez accepter la politique de confidentialité pour continuer.")
      return
    }
    setIsSubmitting(true)

    // TODO: Implémenter l'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-sm font-medium">
            Prénom
          </label>
          <Input 
            id="firstName" 
            name="firstName"
            placeholder="John" 
            required 
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className="text-sm font-medium">
            Nom
          </label>
          <Input 
            id="lastName" 
            name="lastName"
            placeholder="Doe" 
            required 
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <Input 
          id="email" 
          name="email"
          type="email" 
          placeholder="john@example.com" 
          required 
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Comment pouvons-nous vous aider ?"
          rows={4}
          required
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-start space-x-2">
          <Checkbox 
            id="consent" 
            checked={consent}
            onCheckedChange={(checked) => setConsent(checked as boolean)}
            required
          />
          <label 
            htmlFor="consent" 
            className="text-sm text-muted-foreground"
          >
            J'accepte la {" "}
            <Link 
              href="/privacy-policy" 
              className="text-primary hover:underline"
              target="_blank"
            >
              politique de confidentialité
            </Link>
            {" "}et le traitement de mes données personnelles conformément au RGPD.
          </label>
        </div>
        
        <p className="text-xs text-muted-foreground">
          Vos données personnelles sont traitées de manière sécurisée et ne seront jamais partagées avec des tiers sans votre consentement. 
          Vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
        </p>
      </div>

      <Button 
        type="submit" 
        className="w-full"
        disabled={isSubmitting || !consent}
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer"}
      </Button>
    </form>
  )
}
