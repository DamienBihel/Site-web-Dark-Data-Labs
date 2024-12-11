# Structure du Projet Dark Data Labs

## Organisation des Dossiers

```
├── app/                    # Pages et routes de l'application
│   ├── api/               # API routes
│   ├── (routes)/         # Routes de l'application
│   └── layout.tsx        # Layout principal
│
├── components/            # Composants React
│   ├── ui/               # Composants UI réutilisables
│   ├── layout/           # Composants de mise en page
│   └── sections/         # Sections de pages
│
├── lib/                  # Utilitaires et configurations
│   └── utils.ts         # Fonctions utilitaires
│
├── hooks/               # Custom React hooks
│
└── public/             # Assets statiques
```

## Simplifications Apportées

1. **Dépendances** :
   - Suppression des composants Radix UI non utilisés
   - Mise à jour des versions des packages
   - Optimisation des dépendances

2. **Structure des Composants** :
   - Regroupement des composants similaires
   - Structure plus plate et plus maintenable
   - Meilleure organisation des composants UI

3. **Conventions de Nommage** :
   - Utilisation de noms descriptifs
   - Cohérence dans le nommage des fichiers
   - Documentation claire des composants

## Bonnes Pratiques

1. **Components** :
   - Un composant par fichier
   - Utilisation de TypeScript pour le typage
   - Props documentées avec des interfaces

2. **Styles** :
   - Utilisation de Tailwind CSS
   - Classes utilitaires pour la réutilisabilité
   - Thème cohérent

3. **Performance** :
   - Chargement dynamique des composants
   - Optimisation des images
   - Minimisation du bundle

## Maintenance

Pour maintenir la simplicité du projet :

1. Suivre les conventions de nommage
2. Documenter les nouveaux composants
3. Éviter la duplication de code
4. Utiliser les composants UI existants
5. Mettre à jour régulièrement les dépendances