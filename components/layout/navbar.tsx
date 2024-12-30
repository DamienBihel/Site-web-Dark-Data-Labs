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

const navigationItems = [
  {
    title: "Solutions",
    href: "/solutions",
    description: "Découvrez nos solutions data sur mesure",
    items: [
      {
        title: "Starter",
        href: "/solutions/starter",
        description: "Pour les petites entreprises et startups"
      },
      {
        title: "Business",
        href: "/solutions/business",
        description: "Pour les moyennes et grandes entreprises"
      },
      {
        title: "Premium",
        href: "/solutions/premium",
        description: "Pour les grandes entreprises avec des besoins spécifiques"
      }
    ]
  },
  {
    title: "Expertise",
    href: "/expertise",
    description: "Notre expertise en data science",
    items: [
      {
        title: "Analyse de données",
        href: "/expertise/data-analysis",
        description: "Analyse approfondie de vos données"
      },
      {
        title: "Automatisation",
        href: "/expertise/automation",
        description: "Automatisation de vos processus data"
      },
      {
        title: "Intelligence Artificielle",
        href: "/expertise/ia",
        description: "Solutions IA innovantes"
      },
      {
        title: "Études de cas",
        href: "/expertise/case-studies",
        description: "Découvrez nos réalisations"
      }
    ]
  },
  {
    title: "Ressources",
    href: "/resources",
    description: "Ressources et documentation",
    items: [
      {
        title: "Blog",
        href: "/blog",
        description: "Articles et actualités"
      },
      {
        title: "Guides",
        href: "/guides",
        description: "Guides et tutoriels"
      }
    ]
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
          ? "bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-[#F2F2F2]/10" 
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
        <Logo className="mr-8" />
        <NavigationMenu data-testid="navigation-menu">
          <NavigationMenuList className="space-x-2" data-testid="navigation-menu-list">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title} data-testid="navigation-menu-item">
                <NavigationMenuTrigger 
                  className="font-['Montserrat'] font-bold uppercase tracking-wide text-[#F2F2F2] hover:text-[#00FF85] transition-colors data-[state=open]:text-[#00FF85] bg-transparent hover:bg-[#00FF85]/10"
                  data-testid="navigation-menu-trigger"
                >
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent 
                  className="bg-[#1F1F1F] border border-[#F2F2F2]/10 backdrop-blur-xl"
                  data-testid="navigation-menu-content"
                >
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {item.items.map((subItem) => (
                      <li key={subItem.title}>
                        <Link
                          href={subItem.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all hover:bg-[#00FF85]/10 focus:bg-[#00FF85]/10 group"
                          data-testid="next-link"
                        >
                          <div className="text-sm font-bold leading-none text-[#F2F2F2] group-hover:text-[#00FF85] font-['Montserrat'] uppercase tracking-wide">
                            {subItem.title}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-[#F2F2F2]/60 group-hover:text-[#F2F2F2]/80 font-['Roboto']">
                            {subItem.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link
              href="/contact"
              className="px-6 py-2.5 text-sm font-bold leading-none rounded-md bg-[#00FF85] text-[#0A0A0A] hover:scale-105 transition-all duration-300 font-['Montserrat'] uppercase tracking-wider"
              data-testid="next-link"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}