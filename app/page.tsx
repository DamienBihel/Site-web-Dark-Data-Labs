import { Hero } from "@/components/sections/hero"
import { Difference } from "@/components/sections/difference"
import { Solutions } from "@/components/sections/solutions"
import { Engagement } from "@/components/sections/engagement"
import { About } from "@/components/sections/about"
import { CaseStudies } from "@/components/sections/case-studies"
import { Contact } from "@/components/sections/contact"
import { Newsletter } from "@/components/sections/newsletter"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section - Introduction principale */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* Notre différence */}
      <div className="relative bg-slate-50">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent h-24" />
        <Difference />
      </div>

      {/* Solutions et Expertise */}
      <div className="relative bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-transparent h-24" />
        <Solutions />
      </div>

      {/* Études de cas */}
      <div className="relative bg-gray-50">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent h-24" />
        <CaseStudies />
      </div>

      {/* Notre engagement */}
      <div className="relative bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-transparent h-24" />
        <Engagement />
      </div>

      {/* À propos */}
      <div className="relative bg-slate-50">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent h-24" />
        <About />
      </div>

      {/* Newsletter */}
      <div className="relative bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-transparent h-24" />
        <Newsletter />
      </div>

      {/* Contact */}
      <div className="relative bg-slate-50">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent h-24" />
        <Contact />
      </div>

      {/* Footer */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-transparent h-24" />
        <Footer />
      </div>
    </main>
  )
}