import Link from "next/link"

const links = {
  solutions: [
    { name: "Pack Starter", href: "/solutions/starter" },
    { name: "Pack Business", href: "/solutions/business" },
    { name: "Pack Premium", href: "/solutions/premium" }
  ],
  expertise: [
    { name: "Data Analysis", href: "/expertise/data-analysis" },
    { name: "Automatisation", href: "/expertise/automation" },
    { name: "Études de cas", href: "/expertise/case-studies" }
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Guides", href: "/guides" },
    { name: "Templates", href: "/templates" }
  ],
  legal: [
    { name: "Mentions légales", href: "/legal" },
    { name: "Politique de confidentialité", href: "/privacy" },
    { name: "CGV", href: "/terms" }
  ]
}

export function FooterLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-sm font-semibold mb-3">Solutions</h3>
        <ul className="space-y-2">
          {links.solutions.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Expertise</h3>
        <ul className="space-y-2">
          {links.expertise.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Ressources</h3>
        <ul className="space-y-2">
          {links.resources.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Légal</h3>
        <ul className="space-y-2">
          {links.legal.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}