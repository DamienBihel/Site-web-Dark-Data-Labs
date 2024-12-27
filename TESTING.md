# Guide des Tests - Dark Data Labs

## 📚 Table des Matières
1. [Types de Tests](#types-de-tests)
2. [Structure des Tests](#structure-des-tests)
3. [Bonnes Pratiques](#bonnes-pratiques)
4. [Commandes](#commandes)
5. [Exemples](#exemples)

## Types de Tests

### 1. Tests Unitaires (Jest + React Testing Library)
- Testent des composants/fonctions isolés
- Situés dans le dossier `__tests__`
- Extension : `.test.tsx` ou `.test.ts`
- Focalisés sur le comportement plutôt que l'implémentation

### 2. Tests de Composants (Cypress Component Testing)
- Testent des composants React dans un environnement isolé
- Situés dans `cypress/component`
- Extension : `.cy.tsx`
- Permettent de tester les interactions utilisateur

### 3. Tests E2E (Cypress)
- Testent l'application de bout en bout
- Situés dans `cypress/e2e`
- Extension : `.cy.ts`
- Simulent le comportement réel de l'utilisateur

## Structure des Tests

### Tests Unitaires
\`\`\`typescript
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Component/Function Name', () => {
  beforeEach(() => {
    // Setup
  })

  it('should do something specific', () => {
    // Test
  })

  afterEach(() => {
    // Cleanup
  })
})
\`\`\`

### Tests E2E
\`\`\`typescript
describe('Feature Name', () => {
  beforeEach(() => {
    cy.visit('/path')
  })

  it('should accomplish a user story', () => {
    // Test steps
  })
})
\`\`\`

## Bonnes Pratiques

### 1. Nommage
- Noms descriptifs et clairs
- Format : `[feature].[type].tsx`
- Descriptions des tests en langage métier

### 2. Organisation
- Un fichier de test par composant/feature
- Regrouper les tests logiquement
- Maintenir une hiérarchie claire des tests

### 3. Assertions
- Privilégier les assertions positives
- Tester les cas limites
- Vérifier les états d'erreur

### 4. Mocks et Stubs
- Mocker uniquement ce qui est nécessaire
- Documenter les mocks
- Utiliser des données de test réalistes

### 5. Performance
- Éviter les tests redondants
- Optimiser les setup/teardown
- Paralléliser quand possible

## Commandes

### Jest
\`\`\`bash
# Lancer tous les tests
npm test

# Mode watch
npm run test:watch

# Avec couverture
npm run test:coverage
\`\`\`

### Cypress
\`\`\`bash
# Ouvrir l'interface Cypress
npm run cypress

# Tests headless
npm run cypress:headless
\`\`\`

## Exemples

### Test d'un Composant React
\`\`\`typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button', () => {
  it('should handle click events', async () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    await userEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalled()
  })
})
\`\`\`

### Test E2E d'une Fonctionnalité
\`\`\`typescript
describe('Navigation', () => {
  it('should navigate through main sections', () => {
    cy.visit('/')
    cy.get('nav').should('be.visible')
    cy.get('a[href="/about"]').click()
    cy.url().should('include', '/about')
  })
})
\`\`\`

## Ressources
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Cypress Documentation](https://docs.cypress.io/)
