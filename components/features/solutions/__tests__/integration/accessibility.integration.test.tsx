import { render, screen, within } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { SolutionsSection } from '../../solutions-section'
import { SolutionDetail } from '../../SolutionDetail'
import { PricingCard } from '../../pricing-card'

expect.extend(toHaveNoViolations)

describe('Solutions Accessibility Integration', () => {
  describe('SolutionsSection Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<SolutionsSection />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('provides appropriate ARIA labels', () => {
      render(<SolutionsSection />)
      
      // Vérifier la section principale
      const section = screen.getByRole('region', { name: /nos solutions/i })
      expect(section).toBeInTheDocument()

      // Vérifier les cartes de solution
      const solutionCards = screen.getAllByTestId('solution-card')
      solutionCards.forEach((card, index) => {
        const cardUtils = within(card)
        
        // Vérifier le titre de la carte
        const cardTitle = cardUtils.getByRole('heading', { level: 3 })
        expect(cardTitle).toHaveAttribute('id', `solution-title-${index}`)

        // Vérifier la liste des fonctionnalités
        const featuresList = cardUtils.getByRole('list', { name: /ce que vous obtenez/i })
        expect(featuresList).toHaveAttribute('aria-labelledby', `features-title-${index}`)
      })
    })

    it('ensures keyboard navigation', () => {
      render(<SolutionsSection />)
      
      // Vérifier que les éléments interactifs sont focusables
      const solutionCards = screen.getAllByTestId('solution-card')
      solutionCards.forEach(card => {
        const cardUtils = within(card)
        const links = cardUtils.getAllByRole('link')
        links.forEach(link => {
          expect(link).toHaveAttribute('tabindex', '0')
        })
      })
    })
  })

  describe('Content Accessibility', () => {
    it('ensures content is screen reader friendly', () => {
      render(<SolutionsSection />)
      
      // Vérifier les cartes de solution
      const solutionCards = screen.getAllByTestId('solution-card')
      solutionCards.forEach(card => {
        const cardUtils = within(card)
        
        // Vérifier la liste des fonctionnalités
        const featuresList = cardUtils.getByRole('list', { name: /ce que vous obtenez/i })
        expect(featuresList).toHaveAttribute('aria-labelledby')
        
        // Vérifier les points du projet de démonstration
        const demoPoints = cardUtils.getAllByRole('listitem')
        demoPoints.forEach(point => {
          expect(point).toHaveTextContent(/•/)
        })
      })
    })

    it('ensures price information is properly labeled', () => {
      render(<SolutionsSection />)
      
      // Vérifier les prix
      const solutionCards = screen.getAllByTestId('solution-card')
      solutionCards.forEach(card => {
        const cardUtils = within(card)
        const priceElement = cardUtils.getByText(/€$/)
        expect(priceElement.parentElement).toHaveAttribute('aria-label', expect.stringMatching(/Prix : \d+€/))
      })
    })
  })

  describe('SolutionDetail Accessibility', () => {
    const mockProps = {
      title: 'Test Solution',
      description: 'Test Description',
      benefits: ['Benefit 1'],
      features: [{ title: 'Feature 1', description: 'Description 1' }],
      technologies: ['Tech 1']
    }

    it('should have no accessibility violations', async () => {
      const { container } = render(<SolutionDetail {...mockProps} />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe('PricingCard Accessibility', () => {
    const mockPricing = {
      name: 'Test Pack',
      price: '999',
      description: 'Test Description',
      features: ['Feature 1'],
      roi: '300%',
      ideal: 'Test Market',
      index: 0
    }

    it('should have no accessibility violations', async () => {
      const { container } = render(<PricingCard {...mockPricing} />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('provides clear feature descriptions', () => {
      render(<PricingCard {...mockPricing} />)
      
      // Vérifier les features
      const features = screen.getAllByRole('listitem')
      features.forEach(feature => {
        expect(feature).toHaveAttribute('aria-label')
      })
    })
  })

  describe('Keyboard Navigation', () => {
    it('ensures all interactive elements are reachable via keyboard', () => {
      render(<SolutionsSection />)
      
      // Vérifier les liens
      const solutionCards = screen.getAllByTestId('solution-card')
      solutionCards.forEach(card => {
        const cardUtils = within(card)
        const links = cardUtils.getAllByRole('link')
        links.forEach(link => {
          expect(link).toHaveAttribute('tabindex', '0')
        })
      })
    })

    it('maintains logical tab order', () => {
      render(<SolutionsSection />)
      
      const interactiveElements = screen.getAllByRole('link')
      const tabIndices = interactiveElements.map(el => parseInt(el.getAttribute('tabindex') || '0'))
      
      // Vérifier que les indices sont dans l'ordre
      tabIndices.forEach((index, i) => {
        if (i > 0) {
          expect(index).toBeGreaterThanOrEqual(tabIndices[i - 1])
        }
      })
    })
  })
})
