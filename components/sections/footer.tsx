"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"

const navigation = {
  solutions: [
    { name: "Starter", href: "/solutions/starter" },
    { name: "Business", href: "/solutions/business" },
    { name: "Premium", href: "/solutions/premium" },
  ],
  expertise: [
    { name: "Analyse de données", href: "/expertise/data-analysis" },
    { name: "Automatisation", href: "/expertise/automation" },
    { name: "Intelligence Artificielle", href: "/expertise/ia" },
    { name: "Études de cas", href: "/expertise/case-studies" },
  ],
  ressources: [
    { name: "Blog", href: "/blog" },
    { name: "Guides", href: "/guides" },
  ],
  company: [
    { name: "À propos", href: "/about" },
    { name: "Blog", href: "/blog" },
  ],
  legal: [
    { name: "Mentions légales", href: "/legal" },
    { name: "Confidentialité", href: "/privacy" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/damienbihel/",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      href: "https://github.com/DamienBihel",
      icon: Github,
    },
  ],
}

export function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A] border-t border-[#F2F2F2]/10">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00FF85]/5 via-transparent to-transparent blur-2xl" />
        </div>
      </div>

      <div className="relative container py-12 md:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <Link href="/" className="text-2xl font-['Montserrat'] font-extrabold tracking-[0.05em] text-[#F2F2F2] hover:text-[#00FF85] transition-colors">
              Dark Data Labs
            </Link>
            <p className="text-[#F2F2F2]/70 max-w-xs font-['Roboto']">
              Transformez vos données obscures en insights stratégiques avec notre expertise en IA.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#F2F2F2]/70 hover:text-[#00FF85] transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0"
          >
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-['Montserrat'] font-bold tracking-[0.05em] text-[#F2F2F2] uppercase">Solutions</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-[#F2F2F2]/70 hover:text-[#00FF85] transition-colors font-['Roboto']"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-['Montserrat'] font-bold tracking-[0.05em] text-[#F2F2F2] uppercase">Expertise</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.expertise.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-[#F2F2F2]/70 hover:text-[#00FF85] transition-colors font-['Roboto']"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-['Montserrat'] font-bold tracking-[0.05em] text-[#F2F2F2] uppercase">Ressources</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.ressources.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-[#F2F2F2]/70 hover:text-[#00FF85] transition-colors font-['Roboto']"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-['Montserrat'] font-bold tracking-[0.05em] text-[#F2F2F2] uppercase">Entreprise</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-[#F2F2F2]/70 hover:text-[#00FF85] transition-colors font-['Roboto']"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 border-t border-[#F2F2F2]/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#F2F2F2]/60 font-['Roboto'] mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Dark Data Labs. Tous droits réservés.
            </p>
            <ul className="flex space-x-6">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#F2F2F2]/60 hover:text-[#00FF85] transition-colors font-['Roboto']"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
