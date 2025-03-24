# Plan de restructuration des composants

## Analyse de la structure actuelle

Après analyse de la structure actuelle des composants, nous avons identifié plusieurs problèmes :

1. **Duplication de composants** : Plusieurs composants avec des fonctionnalités similaires existent dans différents dossiers
2. **Structure incohérente** : La séparation entre `sections/`, `features/`, `core/` et `ui/` n'est pas claire
3. **Composants obsolètes** : Certains composants ne sont plus utilisés ou ont été remplacés

## Plan de migration

### 1. Composants UI (à conserver et centraliser)

Les composants UI de base sont déjà bien organisés dans le dossier `components/ui/`. Nous allons :

- Conserver tous les composants existants dans `components/ui/`
- Déplacer les composants UI pertinents d'autres dossiers vers `components/ui/`

**Composants UI à conserver :**

- `ui/accordion.tsx`
- `ui/alert.tsx`
- `ui/avatar.tsx`
- `ui/badge.tsx`
- `ui/button.tsx`
- `ui/card.tsx`
- `ui/checkbox.tsx`
- `ui/container.tsx`
- `ui/input.tsx`
- `ui/logo.tsx`
- `ui/navigation-menu.tsx`
- `ui/progress-bar.tsx`
- `ui/scroll-area.tsx`
- `ui/sheet.tsx`
- `ui/textarea.tsx`
- `ui/toast.tsx`
- `ui/toaster.tsx`
- `ui/use-toast.ts`

### 2. Composants Layout (à consolider)

**Doublons identifiés :**

- `layout/footer.tsx` (simple) vs `sections/footer.tsx` (complet)
- `layout/header.tsx` vs divers headers spécifiques
- Multiples composants de navigation

**Plan de consolidation :**

1. **Footer** : Utiliser la version complète de `sections/footer.tsx` et la déplacer vers `layout/footer.tsx`
2. **Header** : Conserver `layout/header.tsx` comme composant principal
3. **Navigation** : Conserver `ui/navigation-menu.tsx` comme composant principal

### 3. Sections de page (à unifier)

**Doublons identifiés :**

- `sections/problem.tsx` vs `sections/challenges.tsx` (contenu similaire)
- `sections/solutions.tsx` vs `sections/pricing.tsx` (fonction similaire)
- `sections/difference.tsx` vs `sections/solution.tsx` (contenu complémentaire)
- `sections/newsletter.tsx` vs formulaire dans `layout/footer.tsx` (fonction similaire)
- `sections/about.tsx` vs composants dans `features/about/` (contenu complémentaire)
- `sections/contact.tsx` vs `features/contact/contact-form.tsx` (fonction similaire)
- `features/solutions/SolutionsSection.tsx` vs `sections/solution.tsx` (fonction similaire)
- `sections/engagement.tsx` vs `sections/solution.tsx` (contenu complémentaire)

**Actions réalisées :**

1. **Suppression de sections redondantes :**
   - ✅ `sections/challenges.tsx` supprimé (redondant avec `problem.tsx`)
   - ✅ `sections/difference.tsx` supprimé après fusion avec `solution.tsx`
   - ✅ `sections/newsletter.tsx` supprimé après amélioration du formulaire dans le footer

2. **Renommage de sections :**
   - ✅ `sections/solutions.tsx` renommé en `sections/pricing.tsx` pour clarifier sa fonction

3. **Fusion de sections complémentaires :**
   - ✅ Contenu de `sections/difference.tsx` intégré dans `sections/solution.tsx` pour une présentation plus complète
   - ✅ Fonctionnalités de `sections/newsletter.tsx` intégrées dans le formulaire du footer

**Actions à réaliser :**

1. **Fusion des composants de features/ vers sections/ :**
   - ✅ Intégré `features/about/expertise.tsx`, `features/about/values.tsx` et `features/about/stats.tsx` dans `sections/about.tsx`
   - ✅ Intégré `features/contact/contact-form.tsx` dans `sections/contact.tsx`
   - Intégrer `features/solutions/SolutionsSection.tsx` dans `sections/solution.tsx`

2. **Évaluation et fusion des sections complémentaires :**
   - ✅ Fusionné `sections/engagement.tsx` avec `sections/solution.tsx` puis supprimé

**Structure cible :**
Toutes les sections principales du site one-page doivent être dans `components/sections/` selon le cahier des charges :

1. **Sections à conserver :**
   - `sections/hero.tsx` - Section d'accroche
   - `sections/problem.tsx` - Section problème
   - `sections/risk.tsx` - Section risques
   - `sections/solution.tsx` - Section solution
   - `sections/offers.tsx` - Section offres
   - `sections/testimonials.tsx` - Section témoignages
   - `sections/faq.tsx` - Section FAQ
   - `sections/cta.tsx` - Section appel à l'action
   - `sections/process.tsx` - Section processus

2. **Sections à consolider :**
   - ✅ Fusionné `sections/about.tsx` avec les éléments pertinents de `features/about/`
   - Fusionner `sections/case-studies.tsx` avec les éléments pertinents de `features/case-studies/`
   - ✅ Fusionné `sections/contact.tsx` avec les éléments pertinents de `features/contact/`

3. **Sections potentiellement redondantes :**
   - `sections/challenges.tsx` (similaire à problem.tsx) - ✅ Supprimé
   - `sections/difference.tsx` (similaire à solution.tsx) - ✅ Supprimé
   - `sections/engagement.tsx` (complémentaire à solution.tsx) - ✅ Fusionné avec solution.tsx
   - `sections/newsletter.tsx` (fonction intégrée au footer) - ✅ Supprimé
   - `sections/solutions.tsx` (similaire à solution.tsx ou offers.tsx) - ✅ Renommé en pricing.tsx
   - Composants dans `features/about/`, `features/contact/` et `features/solutions/` - À intégrer dans les sections correspondantes

## Plan d'exécution

1. **Préparation :**
   - Créer des sauvegardes des composants à modifier
   - Documenter les dépendances entre composants

2. **Migration par étapes :**
   - Commencer par les composants de mise en page (layout)
   - Puis consolider les sections principales
   - Enfin, nettoyer les composants obsolètes

3. **Tests :**
   - Tester chaque section après migration
   - Vérifier les imports et dépendances
   - S'assurer que toutes les fonctionnalités sont préservées

## Suivi des modifications

| Date | Composant | Action | Statut |
|------|-----------|--------|--------|
| 24/03/2025 | `layout/footer.tsx` | Remplacé par la version complète de `sections/footer.tsx` | ✅ Terminé |
| 24/03/2025 | `layout/footer.tsx` | Amélioré avec les fonctionnalités de newsletter | ✅ Terminé |
| 24/03/2025 | `sections/footer.tsx` | Supprimé car redondant après migration | ✅ Terminé |
| 24/03/2025 | `sections/challenges.tsx` | Supprimé car redondant avec `problem.tsx` | ✅ Terminé |
| 24/03/2025 | `sections/solutions.tsx` | Renommé en `pricing.tsx` pour clarifier sa fonction | ✅ Terminé |
| 24/03/2025 | `sections/difference.tsx` | Fusionné avec `solution.tsx` puis supprimé | ✅ Terminé |
| 24/03/2025 | `sections/newsletter.tsx` | Fonctionnalités intégrées au footer puis supprimé | ✅ Terminé |
| 24/03/2025 | `sections/solution.tsx` | Amélioré avec le contenu de `difference.tsx` | ✅ Terminé |
| 24/03/2025 | `layout/header.tsx` | Conservé comme composant principal | ✅ Terminé |
| 24/03/2025 | `layout/navbar.tsx` | Conservé comme composant principal | ✅ Terminé |
| 24/03/2025 | `ui/navigation-menu.tsx` | Conservé comme composant principal | ✅ Terminé |
| - | `sections/hero.tsx` | Conserver | À faire |
| - | `sections/problem.tsx` | Conserver | À faire |
| - | `sections/risk.tsx` | Conserver | À faire |
| - | `sections/solution.tsx` | Améliorer avec le contenu de `features/solutions/SolutionsSection.tsx` et `sections/engagement.tsx` | À faire |
| - | `sections/offers.tsx` | Conserver | À faire |
| - | `sections/testimonials.tsx` | Conserver | À faire |
| - | `sections/faq.tsx` | Conserver | À faire |
| - | `sections/cta.tsx` | Conserver | À faire |
| - | `sections/process.tsx` | Conserver | À faire |
| 25/03/2025 | `sections/about.tsx` | Amélioré avec le contenu de `features/about/` | ✅ Terminé |
| 25/03/2025 | `sections/contact.tsx` | Amélioré avec le contenu de `features/contact/contact-form.tsx` | ✅ Terminé |
| 25/03/2025 | `sections/engagement.tsx` | Fusionné avec `sections/solution.tsx` puis supprimé | ✅ Terminé |
