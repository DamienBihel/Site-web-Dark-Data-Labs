import { render, screen } from '@testing-library/react'
import { About } from '../../index'

// Mock des composants enfants
jest.mock('../../stats', () => ({
  Stats: () => <div data-testid="stats-section">Stats Component</div>
}))

jest.mock('../../profile', () => ({
  Profile: () => <div data-testid="profile-section">Profile Component</div>
}))

jest.mock('../../expertise', () => ({
  Expertise: () => <div data-testid="expertise-values-container">Expertise Component</div>
}))

jest.mock('../../values', () => ({
  Values: () => <div data-testid="values-section">Values Component</div>
}))

describe('About Section Integration', () => {
  beforeEach(() => {
    render(<About />)
  })

  it('renders all major components correctly', () => {
    const aboutHeading = screen.getByRole('heading', { name: /à propos de dark data labs/i })
    expect(aboutHeading).toBeInTheDocument()
    expect(aboutHeading).toHaveClass('text-3xl', 'font-bold', 'mb-4')

    const description = screen.getByText(/démocratiser l'analyse de données/i)
    expect(description).toHaveClass('text-lg', 'text-muted-foreground')
  })

  it('renders section headings in correct order', () => {
    const headings = screen.getAllByRole('heading')
    const headingTexts = headings.map(h => h.textContent?.toLowerCase().trim())

    expect(headingTexts).toContain('à propos de dark data labs')
    expect(headingTexts).toContain('philosophie de travail')
  })

  it('has correct layout structure', () => {
    const aboutHeading = screen.getByRole('heading', { name: /à propos de dark data labs/i })
    const section = aboutHeading.closest('section')
    expect(section).toHaveClass('py-24', 'sm:py-32', 'bg-muted')

    const container = section?.querySelector('.container')
    expect(container).toBeInTheDocument()

    const introDiv = container?.querySelector('.max-w-2xl')
    expect(introDiv).toHaveClass('max-w-2xl', 'mb-12')
  })

  it('renders child components', () => {
    // Verify all components are rendered
    expect(screen.getByTestId('stats-section')).toBeInTheDocument()
    expect(screen.getByTestId('profile-section')).toBeInTheDocument()
    expect(screen.getByTestId('expertise-values-container')).toBeInTheDocument()
    expect(screen.getByTestId('values-section')).toBeInTheDocument()
  })

  it('renders the philosophy section correctly', () => {
    const philosophyHeading = screen.getByRole('heading', { name: /philosophie de travail/i })
    expect(philosophyHeading).toHaveClass('text-2xl', 'font-bold', 'mb-6')

    const quote = screen.getByText(/je crois en la puissance des données/i)
    expect(quote).toHaveClass('text-lg', 'text-muted-foreground', 'border-l-4', 'border-secondary', 'pl-6', 'mb-12')

    const ctaButton = screen.getByRole('link', { name: /découvrez comment nous pouvons collaborer/i })
    expect(ctaButton).toHaveAttribute('href', '/contact')
    expect(ctaButton.closest('div')).toHaveClass('flex', 'flex-col', 'sm:flex-row', 'gap-4')
  })
})
