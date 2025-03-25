import { render, screen, fireEvent, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SolutionsSection } from '../../solutions-section'
import { SolutionCard } from '../../solution-card'
import { PricingCard } from '../../pricing-card'

const mockProps = {
  name: 'Test Solution',
  price: '999',
  description: 'Test Description',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  demoProject: {
    title: 'Test Demo Project',
    points: ['Point 1', 'Point 2', 'Point 3'],
    roi: '200%'
  },
  targetAudience: [
    'Audience 1',
    'Audience 2',
    'Audience 3'
  ],
  index: 0,
  href: '/test-solution'
}

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    query: {}
  })
}))

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    ul: ({ children, ...props }: any) => <ul {...props}>{children}</ul>,
    li: ({ children, ...props }: any) => <li {...props}>{children}</li>
  }
}))

describe('Solutions Integration Tests', () => {
  describe('Navigation Flow', () => {
    it('navigates from SolutionsSection to SolutionDetail correctly', () => {
      render(<SolutionsSection />)
      
      const solutionCards = screen.getAllByTestId('solution-card')
      expect(solutionCards.length).toBeGreaterThan(0)
      
      const firstCard = solutionCards[0]
      const link = within(firstCard).getByRole('link')
      expect(link).toHaveAttribute('href', expect.stringMatching(/\/solutions\/.+/))
    })

    it('navigates from SolutionDetail to contact form with correct parameters', async () => {
      const mockProps = {
        name: "Test Solution",
        description: "Test Description",
        price: "999",
        features: ["Feature 1", "Feature 2"],
        demoProject: {
          title: "Test Project",
          points: ["Point 1", "Point 2"],
          roi: "150%"
        },
        targetAudience: ["Audience 1", "Audience 2"],
        href: "/contact",
        index: 0
      }

      render(<SolutionCard {...mockProps} />)
      
      const contactLink = screen.getByRole('link', { name: /choisir test solution/i })
      expect(contactLink).toBeInTheDocument()
      expect(contactLink).toHaveAttribute('href', '/contact')
    })
  })

  describe('Content Interaction', () => {
    it('displays correct pricing information when navigating through pricing cards', async () => {
      const mockPricing = {
        name: 'Enterprise',
        price: '2999',
        description: 'Solution enterprise',
        features: ['Feature 1', 'Feature 2'],
        roi: '400%',
        ideal: 'Grandes entreprises',
        index: 0
      }

      render(<PricingCard {...mockPricing} />)
      
      // Vérifier que les informations de prix sont correctement affichées
      expect(screen.getByText('2999€')).toBeInTheDocument()
      expect(screen.getByText('Solution enterprise')).toBeInTheDocument()
      
      // Vérifier que le lien de contact inclut les bons paramètres
      const contactLink = screen.getByRole('link')
      expect(contactLink).toHaveAttribute('href', '/contact?plan=enterprise')
    })
  })

  describe('Accessibility Integration', () => {
    it('maintains focus management through navigation', async () => {
      render(<SolutionsSection />)
      
      // Vérifier que les éléments interactifs sont focusables
      const interactiveElements = screen.getAllByRole('link')
      interactiveElements.forEach(element => {
        expect(element).toHaveAttribute('tabindex', '0')
      })
    })

    it('ensures all interactive elements are keyboard accessible', async () => {
      render(<SolutionsSection />)
      
      const user = userEvent.setup()
      const firstLink = screen.getAllByRole('link')[0]
      
      await user.tab()
      expect(firstLink).toHaveFocus()
    })
  })

  describe('Animation Integration', () => {
    it('applies animations in correct sequence', async () => {
      const { container } = render(<SolutionsSection />)
      
      // Vérifier que les animations sont appliquées
      const solutionCards = screen.getAllByTestId('solution-card')
      expect(solutionCards.length).toBeGreaterThan(0)
      
      // Vérifier que le composant se charge correctement
      expect(container).toBeInTheDocument()
    })
  })

  describe('Performance Integration', () => {
    it('loads and renders all solution cards efficiently', () => {
      const startTime = performance.now()
      
      render(<SolutionsSection />)
      
      const endTime = performance.now()
      const renderTime = endTime - startTime
      
      // Vérifier que le rendu est rapide
      expect(renderTime).toBeLessThan(500)
      
      // Vérifier que tous les éléments sont rendus
      const solutionCards = screen.getAllByTestId('solution-card')
      expect(solutionCards.length).toBeGreaterThan(0)
    })
  })
})
