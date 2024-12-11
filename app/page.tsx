import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/components/sections/hero"
import { Challenges } from "@/components/sections/challenges"
import { Solutions } from "@/components/sections/solutions"
import { About } from "@/components/sections/about"
import { CaseStudies } from "@/components/sections/case-studies"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Challenges />
      <Solutions />
      <About />
      <CaseStudies />
      <Contact />
      <Footer />
    </main>
  )
}