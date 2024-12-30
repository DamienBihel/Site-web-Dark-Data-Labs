import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { SolutionsSection } from '../../SolutionsSection'
import { SolutionDetail } from '../../SolutionDetail'
import { PricingCard } from '../../pricing-card'

expect.extend(toHaveNoViolations)

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>
  }
}))

describe('Solutions Accessibility Integration', () => {
  describe('SolutionsSection Accessibility', () => {
    it('should have no accessibility violations', async () => {
      const { container } = render(<SolutionsSection />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('ensures proper heading hierarchy', () => {
      render(<SolutionsSection />)
      
      const headings = screen.getAllByRole('heading')
      const headingLevels = headings.map(h => parseInt(h.getAttribute('aria-level') || '0'))
      
      // Vérifier que les niveaux de titre sont séquentiels
      headingLevels.reduce((prev, current) => {
        expect(current - prev).toBeLessThanOrEqual(1)
        return current
      })
    })

    it('provides appropriate ARIA labels', () => {
      render(<SolutionsSection />)
      
      // Vérifier les landmarks
      expect(screen.getByRole('region', { name: /solutions/i })).toBeInTheDocument()
      
      // Vérifier les boutons et liens
      const interactiveElements = screen.getAllByRole('link')
      interactiveElements.forEach(element => {
        expect(element).toHaveAttribute('aria-label')
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

    it('ensures content is screen reader friendly', () => {
      render(<SolutionDetail {...mockProps} />)
      
      // Vérifier les listes
      const lists = screen.getAllByRole('list')
      lists.forEach(list => {
        expect(list).toHaveAttribute('aria-label')
      })
      
      // Vérifier les descriptions
      const descriptions = screen.getAllByRole('article')
      descriptions.forEach(desc => {
        expect(desc).toHaveAttribute('aria-describedby')
      })
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

    it('ensures price information is properly labeled', () => {
      render(<PricingCard {...mockPricing} />)
      
      // Vérifier le prix
      const priceElement = screen.getByText(/999€/)
      expect(priceElement).toHaveAttribute('aria-label', expect.stringContaining('prix'))
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
      
      const interactiveElements = screen.getAllByRole('link')
      interactiveElements.forEach(element => {
        expect(element).toHaveAttribute('tabindex', '0')
      })
    })

    it('maintains logical tab order', () => {
      render(<SolutionsSection />)
      
      const interactiveElements = screen.getAllByRole('link')
      const tabIndices = interactiveElements.map(el => parseInt(el.getAttribute('tabindex') || '0'))
      
      // Vérifier que l'ordre des tabindex est logique
      tabIndices.forEach((index, i) => {
        if (i > 0) {
          expect(index).toBeGreaterThanOrEqual(tabIndices[i - 1])
        }
      })
    })
  })
})
