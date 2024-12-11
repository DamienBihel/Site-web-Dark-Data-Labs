"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { ExpertiseHeader } from "@/components/expertise/expertise-header"
import { CaseStudies } from "@/components/sections/case-studies"

export default function CaseStudiesPage() {
  return (
    <main>
      <Navbar />
      <ExpertiseHeader
        title="Études de Cas"
        subtitle="De la théorie à la pratique : nos projets de démonstration"
        description="Découvrez comment nos solutions peuvent transformer votre entreprise à travers ces cas d'usage types. Chaque exemple illustre notre approche technique et le potentiel de transformation pour votre business."
      />
      <CaseStudies />
      <Footer />
    </main>
  )
}