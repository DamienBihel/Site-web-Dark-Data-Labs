"use client"

import { FooterLinks } from "./footer-links"
import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/damienbihel/", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/DamienBihel", icon: Github }
]

export function Footer() {
  return (
    <footer className="border-t">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container py-12"
      >
        <div className="mb-12">
          <Link href="/" className="inline-block mb-6">
            <span className="font-montserrat text-xl font-bold">Dark Data Labs</span>
          </Link>
          <p className="text-muted-foreground max-w-md mb-6">
            Solutions data sur mesure pour PME ambitieuses. Transformez vos données en avantage compétitif.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </Link>
              )
            })}
          </div>
        </div>

        <FooterLinks />

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p> 2024 Dark Data Labs - Tous droits réservés</p>
        </div>
      </motion.div>
    </footer>
  )
}