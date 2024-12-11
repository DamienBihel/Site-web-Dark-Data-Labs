"use client"

import { useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export function BrevoForm() {
  useEffect(() => {
    // Injection des scripts Brevo
    const script = document.createElement("script")
    script.defer = true
    script.src = "https://sibforms.com/forms/end-form/build/main.js"
    document.body.appendChild(script)

    // Configuration des messages d'erreur
    window.REQUIRED_CODE_ERROR_MESSAGE = "Veuillez choisir un code pays"
    window.LOCALE = "fr"
    window.EMAIL_INVALID_MESSAGE = "Les informations que vous avez fournies ne sont pas valides. Veuillez vérifier le format du champ et réessayer."
    window.REQUIRED_ERROR_MESSAGE = "Vous devez renseigner ce champ."
    window.GENERIC_INVALID_MESSAGE = "Les informations que vous avez fournies ne sont pas valides. Veuillez vérifier le format du champ et réessayer."
    window.translation = {
      common: {
        selectedList: "{quantity} liste sélectionnée",
        selectedLists: "{quantity} listes sélectionnées"
      }
    }
    window.AUTOHIDE = Boolean(0)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="sib-form">
      <div id="sib-form-container" className="w-full max-w-xl mx-auto">
        {/* Messages d'erreur et de succès */}
        <div id="error-message" className="hidden p-4 mb-4 text-red-700 bg-red-100 rounded-lg">
          <p>Nous n&apos;avons pas pu confirmer votre inscription.</p>
        </div>
        <div id="success-message" className="hidden p-4 mb-4 text-green-700 bg-green-100 rounded-lg">
          <p>Votre inscription est confirmée.</p>
        </div>

        <Card className="p-6">
          <form 
            id="sib-form" 
            method="POST" 
            action="https://bdb7832c.sibforms.com/serve/MUIFAL_wANeZaV9Nr6GoNXmf6TKP5Y9jjx-tfy1Ec5r7K8MO6kOzsZBgd2hNQN5MjC5yXgoo1Mep4RBGA_Z5Qc6bjRkGddnHKHLXyGO8GsvKn_WGFb_Y2G0v0if-Jy66hJsgcdXK1iViSfTY-V5StsXDhiZDQZCQnAtRJoCjmOQv22jXbWgP5eVrH0zQNypgON1wM3lukgZX0R4v" 
            data-type="subscription"
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold mb-2">Newsletter</h2>
              <p className="text-muted-foreground">
                Inscrivez-vous à notre newsletter pour suivre nos actualités.
              </p>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block" htmlFor="EMAIL">
                Veuillez renseigner votre adresse email pour vous inscrire
              </label>
              <Input
                type="email"
                id="EMAIL"
                name="EMAIL"
                autoComplete="off"
                placeholder="votre@email.com"
                required
                className="w-full"
              />
              <p className="text-sm text-muted-foreground mt-1">
                Veuillez renseigner votre adresse email pour vous inscrire. Ex. : abc@xyz.com
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="OPT_IN" name="OPT_IN" value="1" required />
                <label 
                  htmlFor="OPT_IN" 
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  J&apos;accepte de recevoir vos e-mails et confirme avoir pris connaissance de votre politique de confidentialité et mentions légales.
                </label>
              </div>
              <p className="text-sm text-muted-foreground">
                Vous pouvez vous désinscrire à tout moment en cliquant sur le lien présent dans nos emails.
              </p>
            </div>

            <div className="text-sm text-muted-foreground">
              <p>
                Nous utilisons Brevo en tant que plateforme marketing. En soumettant ce formulaire, 
                vous acceptez que les données personnelles que vous avez fournies soient transférées 
                à Brevo pour être traitées conformément à la{" "}
                <a 
                  href="https://www.brevo.com/fr/legal/privacypolicy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  politique de confidentialité de Brevo
                </a>
                .
              </p>
            </div>

            <Button type="submit" className="w-full sm:w-auto">
              S&apos;inscrire
            </Button>

            <input type="text" name="email_address_check" value="" className="hidden" />
            <input type="hidden" name="locale" value="fr" />
          </form>
        </Card>
      </div>
    </div>
  )
}
