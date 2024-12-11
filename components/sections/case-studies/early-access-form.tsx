"use client"

import { Button } from "@/components/ui/button"

export function EarlyAccessForm() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <h3 className="text-lg font-medium">Early Access Program</h3>
      <p className="text-sm text-muted-foreground">
        Rejoignez notre programme d'accès anticipé pour être parmi les premiers à tester nos solutions.
      </p>
      {/* Formulaire temporairement masqué */}
      <div className="text-sm text-muted-foreground">
        Formulaire en maintenance
      </div>
    </div>
  )
}