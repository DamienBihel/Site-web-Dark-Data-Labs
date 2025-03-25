import { render, screen } from '@testing-library/react'
import { SolutionsSection } from '../solutions-section'

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
    
    expect(screen.getByRole('heading', { name: /Nos Solutions/i })).toBeInTheDocument()
    expect(
      screen.getByText(/Découvrez nos solutions innovantes/i)
    ).toBeInTheDocument()
  })

  it('renders all solution cards', () => {
    render(<SolutionsSection />)
    const solutionCards = screen.getAllByTestId('solution-card')
    expect(solutionCards).toHaveLength(3)
  })

  it('renders solution titles correctly', () => {
    render(<SolutionsSection />)
    expect(screen.getByText('Analyse de Données')).toBeInTheDocument()
    expect(screen.getByText('Cloud Solutions')).toBeInTheDocument()
    expect(screen.getByText('Intelligence Artificielle')).toBeInTheDocument()
  })

  it('renders solution descriptions correctly', () => {
    render(<SolutionsSection />)
    expect(screen.getByText(/Transformez vos données brutes/)).toBeInTheDocument()
    expect(screen.getByText(/Déployez vos applications/)).toBeInTheDocument()
    expect(screen.getByText(/Leverez la puissance de l'IA/)).toBeInTheDocument()
  })

  it('applies custom className correctly', () => {
    const customClass = 'custom-class'
    const { container } = render(<SolutionsSection className={customClass} />)
    
    const section = screen.getByRole('region', { name: /nos solutions/i })
    expect(section).toHaveClass(customClass)
  })

  it('renders the view all solutions button with correct link', () => {
    render(<SolutionsSection />)
    
    const viewAllButton = screen.getByRole('link', { name: /voir toutes nos solutions/i })
    expect(viewAllButton).toBeInTheDocument()
    expect(viewAllButton).toHaveAttribute('href', '/solutions')
  })

  it('has correct accessibility attributes', () => {
    render(<SolutionsSection />)
    
    // Vérifier la section principale
    const section = screen.getByRole('region', { name: /nos solutions/i })
    expect(section).toBeInTheDocument()

    // Vérifier la liste des solutions
    const solutionsList = screen.getByRole('list', { name: /liste des solutions/i })
    expect(solutionsList).toBeInTheDocument()

    // Vérifier les cartes de solution
    const solutionCards = screen.getAllByTestId('solution-card')
    expect(solutionCards).toHaveLength(3)

    // Vérifier les éléments de la liste
    const solutionItems = screen.getAllByTestId('solution-card')
    expect(solutionItems).toHaveLength(3) // Un pour chaque carte de solution
  })
})
