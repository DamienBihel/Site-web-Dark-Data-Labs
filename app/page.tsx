import { Hero } from "@/components/sections/hero"
import { Problem } from "@/components/sections/problem"
import { Risk } from "@/components/sections/risk"
import { Solution } from "@/components/sections/solution"
import { Offers } from "@/components/sections/offers"
import { Process } from "@/components/sections/process"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { CTA } from "@/components/sections/cta"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <main className="relative">
      {/* 🔥 Accroche Captivante - Section héro avec promesse forte */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* 🎯 Présentation du Problème - Exemples concrets et situations client */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent h-24" />
        <Problem />
      </div>

      {/* ⚠️ Risques - Conséquences de l'inaction */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-transparent h-24" />
        <Risk />
      </div>

      {/* 💡 Solution Dark Data Labs - Proposition de valeur */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-transparent h-24" />
        <Solution />
      </div>

      {/* 🔐 Nos Offres - Services de consulting et formation */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-transparent h-24" />
        <Offers />
      </div>
      
      {/* 🔄 Notre Processus - Étapes d'automatisation */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg to-transparent h-24" />
        <Process />
      </div>

      {/* 🏅 Résultats & Preuves - Témoignages et études de cas */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-transparent h-24" />
        <Testimonials />
      </div>

      {/* ✅ FAQ - Réponses aux objections fréquentes */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent h-24" />
        <FAQ />
      </div>

      {/* 🚀 Appel à l'action - Incitation à la prise de contact */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-transparent h-24" />
        <CTA />
      </div>
      
      {/* 📝 Formulaire de contact - Prise de contact directe */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent h-24" />
        <Contact />
      </div>

      {/* Le footer est déjà inclus dans le layout.tsx */}
    </main>
  )
}