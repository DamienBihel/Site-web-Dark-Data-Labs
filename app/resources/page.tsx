export default function ResourcesPage() {
  return (
    <main className="container py-24 sm:py-32">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Ressources</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Explorez nos guides, articles et templates pour maîtriser l&apos;analyse de données et l&apos;automatisation.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Blog</h2>
          <p className="text-muted-foreground mb-4">
            Articles techniques et études de cas détaillées.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Meilleures pratiques</li>
            <li>• Études de cas</li>
            <li>• Tendances data</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Guides</h2>
          <p className="text-muted-foreground mb-4">
            Guides pratiques et tutoriels étape par étape.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Guides débutants</li>
            <li>• Tutoriels avancés</li>
            <li>• Documentation API</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Templates</h2>
          <p className="text-muted-foreground mb-4">
            Modèles et outils prêts à l&apos;emploi.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Dashboards</li>
            <li>• Scripts Python</li>
            <li>• Workflows</li>
          </ul>
        </div>
      </div>
    </main>
  )
}