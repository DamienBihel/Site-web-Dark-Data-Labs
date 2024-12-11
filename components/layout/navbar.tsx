"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Logo } from "@/components/ui/logo"
import { motion } from "framer-motion"
import { NavigationItem } from "./navigation-item"

const navigation = [
  {
    name: "Solutions",
    href: "/solutions",
    items: [
      {
        name: "Pack Starter",
        href: "/solutions/starter",
        description: "Pour débuter votre transformation digitale"
      },
      {
        name: "Pack Business",
        href: "/solutions/business",
        description: "Pour optimiser vos performances"
      },
      {
        name: "Pack Premium",
        href: "/solutions/premium",
        description: "Pour une transformation complète"
      }
    ]
  },
  {
    name: "Expertise",
    href: "/expertise",
    items: [
      {
        name: "Data Analysis",
        href: "/expertise/data-analysis",
        description: "Transformez vos données en insights actionnables"
      },
      {
        name: "Automatisation",
        href: "/expertise/automation",
        description: "Optimisez vos processus métier"
      },
      {
        name: "Études de cas",
        href: "/expertise/case-studies",
        description: "Découvrez nos success stories"
      }
    ]
  },
  {
    name: "Resources",
    href: "/resources",
    items: [
      {
        name: "Blog",
        href: "/blog",
        description: "Articles techniques et études de cas"
      },
      {
        name: "Guides",
        href: "/guides",
        description: "Tutoriels et documentation"
      },
      {
        name: "Templates",
        href: "/templates",
        description: "Modèles et outils prêts à l'emploi"
      }
    ]
  }
]

export function Navbar() {
  const [open, setOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-12">
          <Logo />
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <NavigationItem key={item.name} item={item} />
            ))}
          </div>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <SheetTitle className="mb-8">Menu</SheetTitle>
            <ScrollArea className="h-[calc(100vh-8rem)] pb-10">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      pathname === item.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <Link href="/contact">Contactez-nous</Link>
                </Button>
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>

        <div className="hidden md:block">
          <Button asChild className="bg-accent hover:bg-accent/90 text-white">
            <Link href="/contact">
              Contactez-nous
            </Link>
          </Button>
        </div>
      </nav>
    </motion.header>
  )
}