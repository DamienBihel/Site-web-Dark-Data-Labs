export default function ExpertisePage() {
  return (
    <main className="container py-24 sm:py-32">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Notre Expertise</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Découvrez comment notre expertise technique peut transformer vos données en avantage compétitif.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Data Analysis</h2>
          <p className="text-muted-foreground mb-6">
            Transformez vos données brutes en insights actionnables grâce à nos analyses approfondies et nos dashboards personnalisés.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ Analyse prédictive</li>
            <li>✓ Visualisation de données</li>
            <li>✓ KPIs personnalisés</li>
            <li>✓ Reporting automatisé</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Automatisation</h2>
          <p className="text-muted-foreground mb-6">
            Éliminez les tâches répétitives et optimisez vos processus grâce à nos solutions d&apos;automatisation sur mesure.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ Workflows automatisés</li>
            <li>✓ Intégration de systèmes</li>
            <li>✓ Scripts personnalisés</li>
            <li>✓ Monitoring en temps réel</li>
          </ul>
        </div>
      </div>
    </main>
  )
}