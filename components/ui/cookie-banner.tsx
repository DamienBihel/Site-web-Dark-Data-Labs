"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà accepté les cookies
    const hasAcknowledged = localStorage.getItem("cookie-acknowledged")
    if (!hasAcknowledged) {
      setIsVisible(true)
    }
  }, [])

  const handleAcknowledge = () => {
    localStorage.setItem("cookie-acknowledged", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-0 right-0 mx-auto w-full max-w-[90%] md:max-w-md z-50 animate-fadeIn">
      <div className="bg-[#0F0F0F] border border-[#00FF85]/20 rounded-lg p-4 shadow-lg shadow-[#00FF85]/5">
        <div className="flex items-start justify-between mb-2">
          <p className="text-sm font-medium text-[#F2F2F2]">
            🍪 Utilisation des cookies
          </p>
          <button 
            onClick={handleAcknowledge}
            className="ml-4 text-[#F2F2F2]/60 hover:text-[#00FF85] transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        <p className="text-xs text-[#F2F2F2]/80 mb-3">
          Ce site n'utilise que des cookies essentiels et des cookies d'analyse Umami (respectueux de la vie privée). 
          Vos données restent hébergées en France et sont traitées conformément au RGPD.
        </p>
        <div className="flex justify-end items-center gap-3">
          <Link 
            href="/privacy" 
            className="text-xs text-[#00FF85] hover:underline"
            target="_blank"
          >
            En savoir plus
          </Link>
          <button
            onClick={handleAcknowledge}
            className="bg-[#00FF85] text-[#0A0A0A] text-xs px-3 py-1.5 rounded-md font-medium hover:bg-[#00FF85]/90 transition-colors"
          >
            J'ai compris
          </button>
        </div>
      </div>
    </div>
  )
} 