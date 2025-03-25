import { render, screen } from '@testing-library/react'
import { ServiceCard } from '../solution-card'

// Mock framer-motion pour éviter les warnings
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>
  }
}))

describe('ServiceCard', () => {
  const mockService = {
    name: 'Test Service',
    price: '100',
    description: 'Test Description',
    features: ['Feature 1', 'Feature 2'],
    demoProject: {
      title: 'Demo Project',
      points: ['Point 1', 'Point 2'],
      roi: '2x'
    },
    targetAudience: ['Audience 1', 'Audience 2'],
    index: 0,
    href: '/test-service'
  }

  it('renders service card with correct content', () => {
    render(<ServiceCard {...mockService} />)

    // Vérification du nom et prix
    expect(screen.getByText('Test Service')).toBeInTheDocument()
    expect(screen.getByText('À partir de 100€')).toBeInTheDocument()
    
    // Vérification de la description
    expect(screen.getByText('Test Description')).toBeInTheDocument()
    
    // Vérification des features
    expect(screen.getByText('Feature 1')).toBeInTheDocument()
    expect(screen.getByText('Feature 2')).toBeInTheDocument()
    
    // Vérification du projet de démo
    expect(screen.getByText('Demo Project')).toBeInTheDocument()
    expect(screen.getByText('Point 1')).toBeInTheDocument()
    expect(screen.getByText('Point 2')).toBeInTheDocument()
    expect(screen.getByText('ROI projeté : 2x')).toBeInTheDocument()
    
    // Vérification de l'audience cible
    expect(screen.getByText('Audience 1')).toBeInTheDocument()
    expect(screen.getByText('Audience 2')).toBeInTheDocument()
  })

  it('renders link with correct href and text', () => {
    render(<ServiceCard {...mockService} />)
    
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/test-service')
    expect(link).toHaveTextContent('Je choisis Test Service')
  })
}) 