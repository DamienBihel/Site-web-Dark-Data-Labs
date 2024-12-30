import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { About } from '../../index'

expect.extend(toHaveNoViolations)

describe('About Section Accessibility Integration', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<About />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('uses proper heading hierarchy', () => {
    render(<About />)
    
    const headings = screen.getAllByRole('heading')
    const headingLevels = headings.map(h => parseInt(h.tagName.toLowerCase().replace('h', '')))
    
    // Verify heading levels are in order
    headingLevels.forEach((level, index) => {
      if (index > 0) {
        // Each heading should be at most one level deeper than the previous
        expect(level - headingLevels[index - 1]).toBeLessThanOrEqual(1)
      }
    })
  })

  it('has proper section structure', () => {
    render(<About />)
    
    // Vérifier la structure principale
    const aboutHeading = screen.getByRole('heading', { name: /à propos de dark data labs/i })
    const section = aboutHeading.closest('section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveClass('py-24', 'sm:py-32', 'bg-muted')

    // Vérifier les conteneurs principaux
    const container = section?.querySelector('.container')
    expect(container).toBeInTheDocument()

    // Vérifier les sections de contenu
    const contentSections = container?.querySelectorAll('[class*="space-y-"]')
    expect(contentSections?.length).toBeGreaterThan(0)
  })

  it('ensures all images have alt text', () => {
    render(<About />)
    
    const images = screen.getAllByRole('img')
    images.forEach(img => {
      expect(img).toHaveAttribute('alt')
      expect(img.getAttribute('alt')).not.toBe('')
    })
  })

  it('ensures keyboard accessibility', () => {
    render(<About />)
    
    const interactiveElements = screen.getAllByRole('link')
    interactiveElements.forEach(element => {
      expect(element).toHaveAttribute('href')
      expect(element.className).toMatch(/focus-visible:/)
    })
  })

  it('ensures proper text contrast', () => {
    render(<About />)
    
    // Vérifier les textes principaux
    const description = screen.getByText(/démocratiser l'analyse de données/i)
    expect(description).toHaveClass('text-lg', 'text-muted-foreground')

    const quote = screen.getByText(/je crois en la puissance des données/i)
    expect(quote).toHaveClass('text-lg', 'text-muted-foreground')

    // Vérifier les titres
    const mainHeading = screen.getByRole('heading', { name: /à propos de dark data labs/i })
    expect(mainHeading).toHaveClass('text-3xl', 'font-bold')

    const philosophyHeading = screen.getByRole('heading', { name: /philosophie de travail/i })
    expect(philosophyHeading).toHaveClass('text-2xl', 'font-bold')
  })

  it('ensures proper focus indicators', () => {
    render(<About />)
    
    const interactiveElements = screen.getAllByRole('link')
    interactiveElements.forEach(element => {
      expect(element.className).toMatch(/focus-visible:/)
    })
  })
})
