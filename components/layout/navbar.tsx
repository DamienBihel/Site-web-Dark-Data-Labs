"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Logo } from "@/components/ui/logo"
import { motion } from "framer-motion"
import { ScrollArea } from "@/components/ui/scroll-area"

// Éléments de navigation simplifiés pour un site one-page selon le CDC
const navigationItems = [
  {
    title: "Problématique",
    href: "#probleme",
    description: "Les défis que nous résolvons"
  },
  {
    title: "Solution",
    href: "#solution",
    description: "Notre approche unique"
  },
  {
    title: "Offres",
    href: "#offers",
    description: "Nos services sur mesure"
  },
  {
    title: "À propos",
    href: "#testimonials",
    description: "Qui est derrière Dark Data Labs"
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Réserver un audit gratuit"
  }
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0
      setIsScrolled(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "bg-background/95 backdrop-blur-xl border-b border-[var(--color-light)]/10" 
          : "bg-transparent"
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      data-testid="motion-header"
    >
      {/* Effet de grain uniquement quand scrollé */}
      {isScrolled && (
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-40 mix-blend-overlay pointer-events-none" />
      )}

      <div className="container flex h-16 items-center relative">
        <Logo className="mr-8" data-testid="logo" />
        <NavigationMenu data-testid="navigation-menu">
          <NavigationMenuList className="space-x-2" data-testid="navigation-menu-list">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title} data-testid="navigation-menu-item">
                <NavigationMenuLink asChild>
                  <a
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "font-['Montserrat'] font-bold uppercase tracking-wide text-[var(--color-light)] hover:text-[var(--color-neon)] transition-colors bg-transparent hover:bg-[var(--color-neon)]/10"
                    )}
                    href={item.href}
                    aria-label={item.description}
                    tabIndex={0}
                    data-testid="navigation-menu-link"
                  >
                    {item.title}
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link
              href="/contact"
              className="font-['Montserrat'] font-bold uppercase tracking-wide text-[var(--color-light)] hover:text-[var(--color-neon)] transition-colors"
              data-testid="next-link"
              aria-label="Réserver un audit gratuit"
              tabIndex={0}
            >
              Audit Gratuit
            </Link>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}