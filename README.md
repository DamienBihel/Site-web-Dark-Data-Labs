# Dark Data Labs

![CI/CD](https://github.com/damienchangenot/Site-web-Dark-Data-Labs/workflows/CI%2FCD%20Pipeline/badge.svg)
[![codecov](https://codecov.io/gh/damienchangenot/Site-web-Dark-Data-Labs/branch/main/graph/badge.svg)](https://codecov.io/gh/damienchangenot/Site-web-Dark-Data-Labs)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=damienchangenot_Site-web-Dark-Data-Labs&metric=alert_status)](https://sonarcloud.io/dashboard?id=damienchangenot_Site-web-Dark-Data-Labs)

## À propos

Site web de Dark Data Labs, une entreprise spécialisée dans l'analyse de données et l'automatisation pour les PME.

### Fonctionnalités principales
- Landing page moderne et responsive
- Présentation détaillée des services et solutions
- Système de newsletter avec emails de confirmation personnalisés
- Pages légales conformes RGPD
- Interface utilisateur intuitive et animations fluides

## Technologies

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Jest & Testing Library
- Framer Motion

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
BREVO_API_KEY=votre_clé_api_brevo
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
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

# Mode watch
npm run test:watch
```

## Qualité du Code

- **Coverage**: > 80% sur toutes les métriques
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
- `npm test`: Lance les tests avec couverture
- `npm run test:ci`: Lance les tests en mode CI

## Sécurité

- Analyse CodeQL automatique
- Dépendances régulièrement mises à jour
- Tests de sécurité dans la CI/CD

## Licence

Ce projet est sous licence privée. Tous droits réservés.

## Structure du projet

```
├── app/                # Configuration Next.js et pages principales
│   ├── api/           # Routes API (newsletter)
│   ├── legal/         # Pages légales
│   └── privacy/       # Politique de confidentialité
├── components/         # Composants React réutilisables
│   ├── sections/      # Sections principales du site
│   └── ui/            # Composants UI réutilisables
├── public/            # Assets statiques
└── styles/            # Fichiers CSS globaux
```

## Déploiement

Le site est optimisé pour le déploiement sur Netlify.

## Auteur

Damien Bihel
- [LinkedIn](https://www.linkedin.com/in/damienbihel/)
- [GitHub](https://github.com/DamienBihel)
