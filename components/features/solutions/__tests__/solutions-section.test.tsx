import { render, screen } from '@testing-library/react'
import { SolutionsSection } from '../SolutionsSection'

// Mock des composants externes
jest.mock('../SolutionCard', () => ({
  SolutionCard: ({ solution }: any) => (
    <div data-testid="solution-card">
      <div>{solution.title}</div>
      <div>{solution.description}</div>
    </div>
  )
}))

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>
  }
}))

describe('SolutionsSection', () => {
  it('renders the section title and description', () => {
    render(<SolutionsSection />)
    
    expect(screen.getByText(/Nos Solutions/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Découvrez nos solutions innovantes/i)
    ).toBeInTheDocument()
  })

  it('renders all solution cards', () => {
    render(<SolutionsSection />)
    
    const solutionCards = screen.getAllByTestId('solution-card')
    // Vérifie que nous avons les cartes pour l'analyse de données et l'IA
    expect(solutionCards).toHaveLength(2)
  })

  it('renders solution titles correctly', () => {
    render(<SolutionsSection />)
    
    expect(screen.getByText('Analyse de Données')).toBeInTheDocument()
    expect(screen.getByText('Intelligence Artificielle')).toBeInTheDocument()
  })

  it('renders solution descriptions correctly', () => {
    render(<SolutionsSection />)
    
    expect(screen.getByText(/Transformez vos données brutes/i)).toBeInTheDocument()
    expect(screen.getByText(/Intégrez l'IA dans votre entreprise/i)).toBeInTheDocument()
  })

  it('applies custom className correctly', () => {
    const customClass = 'custom-class'
    const { container } = render(<SolutionsSection className={customClass} />)
    
    expect(container.firstChild).toHaveClass(customClass)
  })

  it('renders the contact button with correct link', () => {
    render(<SolutionsSection />)
    
    const contactButton = screen.getByRole('link', { name: /Contactez-nous/i })
    expect(contactButton).toBeInTheDocument()
    expect(contactButton).toHaveAttribute('href', '/contact')
  })

  it('renders the view all solutions button with correct link', () => {
    render(<SolutionsSection />)
    
    const viewAllButton = screen.getByRole('link', { name: /Voir toutes nos solutions/i })
    expect(viewAllButton).toBeInTheDocument()
    expect(viewAllButton).toHaveAttribute('href', '/solutions')
  })
})
