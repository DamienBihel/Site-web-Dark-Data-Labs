import { render, screen } from '@testing-library/react'
import { SolutionCard } from '../SolutionCard'

// Mock framer-motion pour éviter les warnings
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>
  }
}))

describe('SolutionCard', () => {
  const mockSolution = {
    title: 'Test Solution',
    description: 'Test Description',
    icon: '🚀',
    features: ['Feature 1', 'Feature 2'],
    href: '/test-solution'
  }

  it('renders solution card with correct content', () => {
    render(<SolutionCard solution={mockSolution} />)

    // Vérification du titre
    expect(screen.getByText('Test Solution')).toBeInTheDocument()
    
    // Vérification de la description
    expect(screen.getByText('Test Description')).toBeInTheDocument()
    
    // Vérification de l'icône
    expect(screen.getByText('🚀')).toBeInTheDocument()
    
    // Vérification des features
    expect(screen.getByText('Feature 1')).toBeInTheDocument()
    expect(screen.getByText('Feature 2')).toBeInTheDocument()
  })

  it('applies custom className correctly', () => {
    const customClass = 'custom-class'
    const { container } = render(
      <SolutionCard solution={mockSolution} className={customClass} />
    )

    expect(container.firstChild).toHaveClass(customClass)
  })

  it('renders correct number of features', () => {
    render(<SolutionCard solution={mockSolution} />)
    
    const features = screen.getAllByRole('listitem')
    expect(features).toHaveLength(mockSolution.features.length)
  })

  it('renders link with correct href', () => {
    render(<SolutionCard solution={mockSolution} />)
    
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', mockSolution.href)
  })
})
