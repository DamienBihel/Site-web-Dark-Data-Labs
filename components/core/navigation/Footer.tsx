import { BaseComponentProps } from "@/components/component.config"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface FooterProps extends BaseComponentProps {}

const footerLinks = [
  {
    title: "Solutions",
    links: [
      { label: "Analyse de données", href: "/solutions/data-analysis" },
      { label: "Intelligence artificielle", href: "/solutions/ai" },
      { label: "Big Data", href: "/solutions/big-data" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { label: "À propos", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Mentions légales", href: "/legal/mentions" },
      { label: "Politique de confidentialité", href: "/legal/privacy" },
      { label: "CGV", href: "/legal/terms" },
    ],
  },
]

export function Footer({ className, ...props }: FooterProps) {
  return (
    <footer className={cn(
      "bg-background border-t grid gap-8 text-muted p-8",
      className
    )} {...props}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="font-semibold mb-4">À propos</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:opacity-80 transition-opacity">
                Notre histoire
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:opacity-80 transition-opacity">
                L'équipe
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:opacity-80 transition-opacity">
                Carrières
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h2 className="font-semibold mb-4">Services</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/services/data-analysis" className="hover:opacity-80 transition-opacity">
                Analyse de données
              </Link>
            </li>
            <li>
              <Link href="/services/automation" className="hover:opacity-80 transition-opacity">
                Automatisation
              </Link>
            </li>
            <li>
              <Link href="/services/consulting" className="hover:opacity-80 transition-opacity">
                Conseil
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h2 className="font-semibold mb-4">Ressources</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/blog" className="hover:opacity-80 transition-opacity">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/guides" className="hover:opacity-80 transition-opacity">
                Guides
              </Link>
            </li>
            <li>
              <Link href="/case-studies" className="hover:opacity-80 transition-opacity">
                Études de cas
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h2 className="font-semibold mb-4">Légal</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy" className="hover:opacity-80 transition-opacity">
                Confidentialité
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:opacity-80 transition-opacity">
                Conditions
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:opacity-80 transition-opacity">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="text-center pt-8 border-t">
        <p>&copy; {new Date().getFullYear()} Dark Data Labs. Tous droits réservés.</p>
      </div>
    </footer>
  )
}
