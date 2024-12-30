import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SolutionsSection } from '../../SolutionsSection'
import { SolutionDetail } from '../../SolutionDetail'
import { PricingCard } from '../../pricing-card'

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
    it('navigates from SolutionsSection to SolutionDetail correctly', async () => {
      const { container } = render(<SolutionsSection />)
      
      // Trouver et cliquer sur une carte de solution
      const solutionCard = screen.getByText('Analyse de Données').closest('a')
      expect(solutionCard).toHaveAttribute('href', '/solutions/data-analysis')
      
      // Vérifier que le lien est accessible
      expect(solutionCard).toHaveAttribute('role', 'link')
      expect(solutionCard).not.toHaveAttribute('aria-hidden')
    })

    it('navigates from SolutionDetail to contact form with correct parameters', async () => {
      const { container } = render(
        <SolutionDetail
          title="Test Solution"
          description="Test Description"
          benefits={['Benefit 1']}
          features={[{ title: 'Feature 1', description: 'Description 1' }]}
          technologies={['Tech 1']}
        />
      )
      
      const contactButton = screen.getByRole('link', { name: /contact/i })
      expect(contactButton).toHaveAttribute('href', '/contact')
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
        element.focus()
        expect(document.activeElement).toBe(element)
      })
    })

    it('ensures all interactive elements are keyboard accessible', async () => {
      render(<SolutionsSection />)
      
      const user = userEvent.setup()
      const firstLink = screen.getAllByRole('link')[0]
      
      // Simuler la navigation au clavier
      firstLink.focus()
      await user.keyboard('{Enter}')
      
      // Vérifier que le lien est activable au clavier
      expect(firstLink).toHaveAttribute('href')
    })
  })

  describe('Animation Integration', () => {
    it('applies animations in correct sequence', async () => {
      const { container } = render(<SolutionsSection />)
      
      // Vérifier que les animations sont appliquées dans l'ordre
      const animatedElements = container.querySelectorAll('[data-motion]')
      
      // Vérifier que les délais d'animation sont croissants
      let previousDelay = -1
      animatedElements.forEach(element => {
        const delay = parseFloat(element.getAttribute('style')?.match(/delay: ([\d.]+)s/)?.[1] || '0')
        expect(delay).toBeGreaterThanOrEqual(previousDelay)
        previousDelay = delay
      })
    })
  })

  describe('Performance Integration', () => {
    it('loads and renders all solution cards efficiently', async () => {
      const startTime = performance.now()
      
      render(<SolutionsSection />)
      
      const endTime = performance.now()
      const renderTime = endTime - startTime
      
      // Le rendu devrait prendre moins de 100ms
      expect(renderTime).toBeLessThan(100)
      
      // Vérifier que toutes les cartes sont rendues
      const solutionCards = screen.getAllByTestId('solution-card')
      expect(solutionCards.length).toBeGreaterThan(0)
    })
  })
})
