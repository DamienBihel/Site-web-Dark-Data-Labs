import { render, screen } from '@testing-library/react'
import { SolutionCard } from '../solution-card'

// Mock framer-motion pour éviter les warnings
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>
  }
}))

describe('SolutionCard', () => {
  const mockSolution = {
    name: 'Test Solution',
    price: '999',
    description: 'Test Description',
    features: ['Feature 1', 'Feature 2'],
    demoProject: {
      title: 'Projet de démonstration',
      points: ['Point 1', 'Point 2'],
      roi: '150%'
    },
    targetAudience: ['Entreprise 1', 'Entreprise 2'],
    index: 0,
    href: '/test-solution'
  }

  it('renders solution card with correct content', () => {
    render(<SolutionCard {...mockSolution} />)
    
    // Vérification du nom et de la description
    expect(screen.getByText('Test Solution')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
    
    // Vérification du prix
    const priceElement = screen.getByText('999')
    expect(priceElement).toBeInTheDocument()
    
    // Vérification des features
    expect(screen.getByText('Feature 1')).toBeInTheDocument()
    expect(screen.getByText('Feature 2')).toBeInTheDocument()
  })

  it('applies custom className correctly', () => {
    const customClass = 'custom-class'
    const { container } = render(
      <SolutionCard 
        {...mockSolution} 
        className={customClass} 
      />
    )
    
    const cardElement = container.querySelector('.rounded-lg')
    expect(cardElement).toHaveClass(customClass)
  })

  it('renders correct number of features', () => {
    render(<SolutionCard {...mockSolution} />)
    
    const features = screen.getAllByTestId('feature-item')
    expect(features).toHaveLength(mockSolution.features.length)
  })

  it('renders link with correct href', () => {
    render(<SolutionCard {...mockSolution} />)
    
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', mockSolution.href)
  })
})
