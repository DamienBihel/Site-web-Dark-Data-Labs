# Dark Data Labs - Documentation Technique

## 📚 Table des Matières

1. [Vue d'Ensemble](#vue-densemble)
2. [Architecture](#architecture)
3. [Stack Technique](#stack-technique)
4. [Guide de Développement](#guide-de-développement)
5. [Tests](#tests)
6. [Documentation](#documentation)
7. [Prochaines Étapes](#prochaines-étapes)

---

## Vue d'Ensemble

### 🎯 Objectifs du Projet

- Site web one-page moderne pour Dark Data Labs
- Interface utilisateur impactante et responsive
- Performance et conversion optimales
- Maintenance simplifiée

### 📋 Fonctionnalités Principales

- Design single-page avec sections thématiques
- Présentation des services et solutions avec exemples concrets
- Témoignages clients et études de cas
- Système de contact avec appel à l'action clair
- Interface adaptative (desktop et mobile)
- Animations et éléments visuels engageants

---

## Architecture

### 📁 Structure des Dossiers

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

### 🧩 Organisation des Composants

#### Composants UI

- `button.tsx` - Boutons avec variantes
- `card.tsx` - Cartes et conteneurs
- `badge.tsx` - Étiquettes et badges
- `navigation-menu.tsx` - Menu de navigation
- `accordion.tsx` - Composant FAQ
- `carousel.tsx` - Carrousel de témoignages
- `toast.tsx` - Notifications
- `form.tsx` - Formulaire de contact

#### Composants Section

- `hero.tsx` - Section d'accroche captivante
- `promise.tsx` - Section promesse forte
- `problem.tsx` - Section présentant le problème
- `risk.tsx` - Section sur les risques
- `solution.tsx` - Section solution Dark Data Labs
- `offers.tsx` - Section offres de services
- `testimonials.tsx` - Section témoignages et résultats
- `faq.tsx` - Section FAQ
- `cta.tsx` - Section appel à l'action
- `footer.tsx` - Pied de page

---

## Stack Technique

### 🛠 Technologies Principales

- **Next.js 15.1.3** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styles et design system
- **Framer Motion** - Animations optimisées
- **Radix UI** - Composants accessibles
- **React Hook Form** - Gestion des formulaires
- **Zod** - Validation des données
- **Intersection Observer** - Animations au scroll

### 📚 Bibliothèques

- `class-variance-authority` - Gestion des variantes de style
- `lucide-react` - Icônes
- `next/font` - Optimisation des polices
- `next/image` - Optimisation des images
- `embla-carousel` - Carrousel de témoignages
- `react-hook-form` - Gestion du formulaire de contact

---

## Guide de Développement

### 🚀 Installation

```bash
# Cloner le projet
git clone https://github.com/damienchangenot/Site-web-Dark-Data-Labs.git

# Installer les dépendances
npm install

# Créer un fichier .env.local (si nécessaire)
touch .env.local

# Lancer le serveur de développement
npm run dev
```

### 🎨 Conventions de Code

- Utilisation de TypeScript strict
- Composants fonctionnels avec hooks
- Styles Tailwind avec classes utilitaires
- Animations avec Framer Motion
- Sections modulaires indépendantes
- Formatage avec Prettier
- Linting avec ESLint

### 📝 Bonnes Pratiques

- Composants atomiques et réutilisables
- Props typées avec interfaces TypeScript
- Animations optimisées pour la performance
- Composants accessibles avec Radix UI
- Mobile-first pour un design responsive

### 🔐 Configuration requise

```env
# Fichier .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000/api  # URL de base de l'API
EMAILJS_SERVICE_ID=votre_service_id  # ID du service EmailJS
EMAILJS_TEMPLATE_ID=votre_template_id  # ID du template EmailJS
EMAILJS_USER_ID=votre_user_id  # ID utilisateur EmailJS
```

---

## Tests

### 🧪 Tests Unitaires

- Tests des composants UI
- Tests des sections
- Tests de performance
- Tests d'accessibilité

### 📊 Métriques

- Couverture de code
- Performance des composants (Core Web Vitals)
- Accessibilité WCAG
- Taux de conversion

---

## Documentation

### 📖 Guides

- Guide de style et charte graphique (`docs/charte-graphique.md`)
- Documentation des optimisations (`optimisations-config.md`)
- Plan d'action d'optimisation (`plan-action-optimisation.md`)
- Journal de restructuration (`components/restructuration-log.md`)
- Documentation des composants
- Guide d'accessibilité

### 🔄 Mises à Jour

- Journal des modifications
- Versions des dépendances
- Notes de déploiement
- Suivi des optimisations réalisées

---

## Prochaines Étapes

### 🎯 Priorités Immédiates

#### 1. Tests et Qualité

- [ ] Tests d'intégration pour les sections principales
- [ ] Tests de performance des animations
- [ ] Tests d'accessibilité WCAG
- [ ] Configuration de Lighthouse CI
- [ ] Tests A/B sur les appels à l'action

#### 2. Optimisation

- [ ] Lazy loading des sections
- [ ] Optimisation des images et assets
- [ ] Réduction de la taille du bundle
- [ ] Amélioration des Core Web Vitals
- [ ] Optimisation SEO pour une page unique

#### 3. Fonctionnalités

- [ ] Formulaire de contact avec validation
- [ ] Système de notifications toast
- [ ] Animations déclenchées au scroll
- [ ] Carrousel de témoignages interactif

### 🚀 Évolutions Futures

#### 1. UX/UI

- [ ] Mode sombre
- [ ] Curseur personnalisé
- [ ] Effets de parallaxe
- [ ] Microinteractions sur les éléments d'interface
- [ ] Ajout d'illustrations personnalisées

#### 2. Contenu

- [ ] Système de collecte de témoignages
- [ ] Études de cas détaillées avec mesures de résultats
- [ ] FAQ dynamique avec recherche
- [ ] Vidéos de démonstration intégrées
- [ ] Blog complémentaire (section séparée)

#### 3. Infrastructure

- [ ] Mise en place de Vercel Analytics
- [ ] Configuration de Sentry pour le suivi des erreurs
- [ ] Intégration avec CRM pour les leads
- [ ] Système de réservation de rendez-vous intégré
- [ ] Dashboard de suivi des conversions

### 📈 Objectifs à Long Terme

- [ ] Intégration d'un agent conversationnel IA pour préqualifier les leads
- [ ] Section démonstration interactive des solutions
- [ ] Système de personnalisation du contenu selon le profil visiteur
- [ ] Version multilingue du site
- [ ] Contenu localisé
- [ ] SEO multilingue
- [ ] Adaptation culturelle du design

#### 2. Performance

- [ ] Score Lighthouse > 95
- [ ] Temps de chargement < 2s
- [ ] FPS > 60 pour les animations
- [ ] Optimisation mobile avancée

#### 3. Communauté

- [ ] Système de commentaires
- [ ] Forum de discussion
- [ ] Newsletter hebdomadaire
- [ ] Programme de partenariat

---

## Journal des Modifications

### 24/03/2025

- ✅ Restructuration complète des composants
- ✅ Correction des erreurs d'importation du footer
- ✅ Optimisation des fichiers de configuration
- ✅ Mise à jour du design du footer selon la charte graphique
- ✅ Mise à jour de la documentation

### 28/12/2024

- ✅ Ajout des composants UI manquants
- ✅ Correction des chemins d'importation
- ✅ Mise à jour de la structure des dossiers
- ✅ Amélioration de la documentation
