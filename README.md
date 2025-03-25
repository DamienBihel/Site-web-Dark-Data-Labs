# Dark Data Labs

![CI/CD](https://github.com/damienchangenot/Site-web-Dark-Data-Labs/workflows/CI%2FCD%20Pipeline/badge.svg)
[![codecov](https://codecov.io/gh/damienchangenot/Site-web-Dark-Data-Labs/branch/main/graph/badge.svg)](https://codecov.io/gh/damienchangenot/Site-web-Dark-Data-Labs)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=damienchangenot_Site-web-Dark-Data-Labs&metric=alert_status)](https://sonarcloud.io/dashboard?id=damienchangenot_Site-web-Dark-Data-Labs)

## À propos

Site web one-page de Dark Data Labs, entreprise spécialisée dans l'automatisation et l'intelligence artificielle pour indépendants et PME.

### Fonctionnalités principales

- Site one-page avec sections thématiques efficaces
- Design impactant et conversationnel
- Présentation ciblée des services avec exemples concrets
- Témoignages clients et études de cas réels
- Appel à l'action clair pour maximiser les conversions
- Interface responsive et animations engageantes

## Structure de la page

Le site se compose d'une page unique avec les sections suivantes :

1. **🔥 Accroche Captivante** - Section héro avec promesse forte
2. **🌟 Promesse Principale** - Présentation concise de l'offre
3. **🎯 Présentation du Problème** - Exemples concrets et situations client
4. **⚠️ Risques** - Conséquences de l'inaction
5. **💡 Solution Dark Data Labs** - Proposition de valeur
6. **🔐 Nos Offres** - Services de consulting et formation
7. **🏅 Résultats & Preuves** - Témoignages et études de cas
8. **✅ FAQ** - Réponses aux objections fréquentes
9. **🚀 Appel à l'action** - Incitation à la prise de contact

## Technologies

- Next.js 15.1.3 avec App Router
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion pour les animations
- Radix UI pour les composants accessibles
- React Hook Form et Zod pour la validation des formulaires
- Intersection Observer pour animations au scroll
- Embla Carousel pour les témoignages clients
- Lucide React pour les icônes

## Installation

```bash
# Cloner le projet
git clone https://github.com/damienchangenot/Site-web-Dark-Data-Labs.git

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

## Configuration

1. Créez un fichier `.env.local` à la racine du projet :

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
EMAILJS_SERVICE_ID=votre_service_id
EMAILJS_TEMPLATE_ID=votre_template_id
EMAILJS_USER_ID=votre_user_id
```

1. Installez les dépendances :

```bash
npm install
```

1. Lancez le serveur de développement :

```bash
npm run dev
```

## Tests

```bash
# Lancer tous les tests
npm test

# Lancer les tests d'intégration
npm run test:integration

# Lancer les tests d'accessibilité
npm run test:accessibility

# Lancer les tests A/B sur les CTA
npm run test:ab

# Mode watch
npm run test:watch
```

## Qualité du Code

- **Performance**: Optimisation des Core Web Vitals
- **Accessibilité**: Conformité WCAG
- **UX/UI**: Tests utilisateurs et analytics de conversion
- **Linting**: ESLint avec configuration stricte
- **Types**: TypeScript strict mode
- **Tests**: Jest, Testing Library, et tests d'accessibilité
- **CI/CD**: GitHub Actions pour l'intégration et le déploiement continus

## Environnements

- **Development**: `http://localhost:3000`
- **Production**: [https://darkdatalabs.fr](https://darkdatalabs.fr)

## Scripts

- `npm run dev`: Lance le serveur de développement
- `npm run build`: Build le projet
- `npm run start`: Lance le serveur de production
- `npm run lint`: Lance ESLint
- `npm run lint:fix`: Corrige automatiquement les erreurs de lint
- `npm run format`: Formate le code avec Prettier
- `npm run clean`: Nettoie les dossiers de build
- `npm test`: Lance les tests avec couverture
- `npm run test:ci`: Lance les tests en mode CI
- `npm run analyze`: Analyse la taille du bundle

## Sécurité

- Analyse CodeQL automatique
- Dépendances régulièrement mises à jour
- Tests de sécurité dans la CI/CD
- Protection des données utilisateurs (formulaire de contact)

## Licence

Ce projet est sous licence privée. Tous droits réservés.

## Structure du projet

```bash
project/
├── app/                 # Page principale Next.js (App Router)
│   ├── api/             # Routes API (formulaire contact)
│   ├── legal/           # Page mentions légales
│   ├── privacy/         # Page politique de confidentialité
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Page d'accueil
├── components/
│   ├── ui/              # Composants d'interface réutilisables
│   ├── layout/          # Composants de mise en page (Header, Footer, etc.)
│   ├── shared/          # Composants partagés entre sections
│   ├── legal/           # Composants spécifiques aux pages légales
│   └── sections/        # Sections de la page d'accueil
│       ├── hero/        # Section d'accroche
│       ├── problem/     # Section problème
│       ├── risk/        # Section risques
│       ├── solution/    # Section solution
│       ├── offers/      # Section offres
│       ├── process/     # Section processus
│       ├── testimonials/# Section témoignages
│       ├── faq/         # Section FAQ
│       ├── cta/         # Section appel à l'action
│       └── contact/     # Section formulaire de contact
├── hooks/               # Hooks personnalisés
├── lib/                 # Utilitaires et helpers
├── public/              # Assets statiques
├── styles/              # Fichiers CSS globaux
└── docs/                # Documentation technique
```

## Contenu Marketing

Le site présente une structure optimisée pour le marketing avec :

- Accroche immédiate et promesse de valeur
- Exemples concrets avec des cas clients réels
- Section "problème-solution" pour adresser les points de douleur
- Témoignages authentiques avec résultats chiffrés
- Design conversationnel pour maximiser les prises de contact

## Auteur

Damien Bihel

- [LinkedIn](https://www.linkedin.com/in/damienbihel/)
- [GitHub](https://github.com/DamienBihel)
