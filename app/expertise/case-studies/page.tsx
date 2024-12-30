"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Hourglass } from "lucide-react"
import Link from "next/link"

export default function CaseStudiesPage() {
  return (
    <main className="bg-[#0A0A0A]">
      <Navbar />
      
      <div className="relative min-h-[80vh] flex items-center justify-center">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#1F1F1F] to-[#0A0A0A]" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-40 mix-blend-overlay" />
          <div className="absolute inset-0">
            <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00FF85]/20 via-transparent to-transparent blur-2xl" />
          </div>
        </div>

        {/* Grille animée */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00FF8520_1px,transparent_1px),linear-gradient(to_bottom,#00FF8520_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,black,transparent)]" />
        </div>

        <div className="relative text-center px-6">
          <div className="flex justify-center mb-8">
            <Hourglass className="h-24 w-24 text-[#00FF85] animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-['Montserrat'] font-extrabold tracking-[0.05em] text-transparent bg-clip-text bg-gradient-to-r from-[#F2F2F2] via-[#00FF85] to-[#F2F2F2] mb-6 animate-gradient-x">
            Bientôt Disponible
          </h1>
          <p className="text-xl text-[#F2F2F2]/70 font-['Roboto'] max-w-2xl mx-auto mb-12">
            Nos études de cas sont en cours de préparation. Revenez bientôt pour découvrir des exemples concrets de nos réalisations et de l'impact que nous avons eu sur nos clients.
          </p>
          <Link href="/">
            <Button
              variant="outline"
              className="bg-transparent border-[#00FF85] text-[#00FF85] hover:bg-[#00FF85]/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}