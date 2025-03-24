import { type CaseStudy } from "@/types/case-study"

export const waterAnalysis: CaseStudy = {
  id: "water-analysis",
  title: "Analyse de l'Accès à l'Eau Potable dans le Monde",
  description: "Une étude approfondie des disparités d'accès à l'eau potable à travers le monde, utilisant des techniques avancées de data science pour identifier les zones critiques et proposer des solutions.",
  industry: "Développement Durable",
  client: "ONG Internationale",
  images: {
    thumbnail: "/images/case-studies/water-analysis-thumb.jpg",
    main: "/images/case-studies/water-analysis/water-analysis.jpg",
  },
  challenge: "L'accès à l'eau potable reste un défi majeur dans de nombreuses régions du monde. Notre mission était d'analyser les données globales sur l'accès à l'eau potable pour identifier les zones les plus touchées et comprendre les facteurs contribuant à ces disparités.",
  solution: "Nous avons développé une approche analytique complète combinant :\n\n1. Collecte et nettoyage de données provenant de multiples sources (OMS, Banque Mondiale, ONU)\n\n2. Analyse statistique approfondie pour identifier les corrélations entre l'accès à l'eau et divers facteurs socio-économiques\n\n3. Création de visualisations interactives pour communiquer efficacement les résultats\n\n4. Développement d'un modèle prédictif pour anticiper les zones à risque",
  implementation: "Notre équipe a utilisé Tableau pour créer une visualisation interactive permettant d'explorer et d'analyser les données sur l'accès à l'eau potable dans le monde. Cette approche nous a permis de :\n\n- Créer des visualisations dynamiques\n- Intégrer différentes échelles d'analyse\n- Permettre une exploration intuitive des données\n- Mettre en évidence les disparités géographiques\n- Faciliter la compréhension des enjeux",
  results: [
    {
      title: "Analyse approfondie des données mondiales",
      description: "Analyse détaillée des données de l'OMS et de la Banque Mondiale pour comprendre les disparités d'accès à l'eau potable dans différentes régions du monde. Cette analyse nous a permis d'identifier les principaux facteurs influençant l'accès à l'eau potable."
    },
    {
      title: "Visualisation interactive des données",
      description: "Création d'un tableau de bord interactif permettant d'explorer les données sur l'accès à l'eau potable à différentes échelles (mondiale, régionale, nationale). Cette visualisation facilite la compréhension des enjeux et des disparités."
    },
    {
      title: "Recommandations stratégiques",
      description: "Élaboration de recommandations basées sur les données pour améliorer l'accès à l'eau potable dans les zones prioritaires. Ces recommandations s'appuient sur l'analyse des facteurs de succès observés dans différentes régions."
    }
  ],
  technologies: ["Tableau"],
  links: {
    github: "https://github.com/yourusername/water-analysis"
  }
}
