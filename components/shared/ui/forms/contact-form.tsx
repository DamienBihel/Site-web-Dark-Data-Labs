"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarDays } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  company: z.string().min(1, "Le nom de l'entreprise est requis"),
  size: z.string(),
  budget: z.string(),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
  source: z.string()
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      size: "",
      budget: "",
      message: "",
      source: ""
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true)
      
      // Créer le corps du message
      const emailBody = `
Nouvelle demande de contact

Nom: ${values.name}
Email: ${values.email}
Téléphone: ${values.phone || "Non renseigné"}
Entreprise: ${values.company}
Taille de l'entreprise: ${values.size}
Budget: ${values.budget}
Source: ${values.source}

Message:
${values.message}
      `.trim()

      // Encoder les paramètres pour le lien mailto
      const mailtoLink = `mailto:damien.bihel@darkdatalabs.fr?subject=${encodeURIComponent(
        `Nouvelle demande de contact de ${values.name} - ${values.company}`
      )}&body=${encodeURIComponent(emailBody)}`

      // Ouvrir le client mail
      window.location.href = mailtoLink

      toast({
        title: "Redirection vers votre client mail",
        description: "Vous allez être redirigé vers votre client mail pour envoyer votre message.",
      })

      // Réinitialiser le formulaire
      form.reset()
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="grid lg:grid-cols-[2fr,1fr] gap-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto w-full">
          <div className="grid sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom*</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email professionnel*</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john@entreprise.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Téléphone</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+33 6 12 34 56 78" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Entreprise*</FormLabel>
                  <FormControl>
                    <Input placeholder="Nom de votre entreprise" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="size"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Taille de l'entreprise*</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez une taille" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employés</SelectItem>
                      <SelectItem value="11-50">11-50 employés</SelectItem>
                      <SelectItem value="51-200">51-200 employés</SelectItem>
                      <SelectItem value="200+">200+ employés</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Budget approximatif*</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez un budget" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="<2000">{"< 2000€"}</SelectItem>
                      <SelectItem value="2000-5000">2000€ - 5000€</SelectItem>
                      <SelectItem value="5000-10000">5000€ - 10000€</SelectItem>
                      <SelectItem value=">10000">{"> 10000€"}</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message*</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Décrivez votre projet ou vos besoins..."
                    className="min-h-[120px] resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="source"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comment avez-vous connu Dark Data Labs ?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez une option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="search">Moteur de recherche</SelectItem>
                    <SelectItem value="social">Réseaux sociaux</SelectItem>
                    <SelectItem value="recommendation">Recommandation</SelectItem>
                    <SelectItem value="other">Autre</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            size="lg" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
          </Button>
        </form>
      </Form>

      <div className="space-y-6 lg:sticky lg:top-24">
        <div className="bg-muted rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Planifier un call ?</h3>
          <Button variant="outline" size="lg" className="w-full" asChild>
            <Link href="/calendar">
              <CalendarDays className="mr-2 h-4 w-4" />
              Consultation gratuite
            </Link>
          </Button>
        </div>

        <div className="bg-muted rounded-lg p-6">
          <h3 className="font-semibold mb-4">Pourquoi nous contacter ?</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <span className="text-secondary">✓</span>
              <span className="text-muted-foreground">Réponse sous 24h garantie</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-secondary">✓</span>
              <span className="text-muted-foreground">Proposition personnalisée</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-secondary">✓</span>
              <span className="text-muted-foreground">Premier appel gratuit</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-secondary">✓</span>
              <span className="text-muted-foreground">Expertise technique reconnue</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}