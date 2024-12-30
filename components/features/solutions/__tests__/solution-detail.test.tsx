import { render, screen } from '@testing-library/react'
import { SolutionDetail } from '../SolutionDetail'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    ul: ({ children, ...props }: any) => <ul {...props}>{children}</ul>,
    li: ({ children, ...props }: any) => <li {...props}>{children}</li>
  }
}))

describe('SolutionDetail', () => {
  const mockProps = {
    title: 'Test Solution',
    description: 'Test Description',
    benefits: ['Benefit 1', 'Benefit 2'],
    features: [
      {
        title: 'Feature 1',
        description: 'Feature Description 1',
        icon: '🔧'
      },
      {
        title: 'Feature 2',
        description: 'Feature Description 2',
        icon: '⚡'
      }
    ],
    technologies: ['Tech 1', 'Tech 2']
  }

  it('renders solution details with correct content', () => {
    render(<SolutionDetail {...mockProps} />)

    // Vérification du titre et de la description
    expect(screen.getByText(mockProps.title)).toBeInTheDocument()
    expect(screen.getByText(mockProps.description)).toBeInTheDocument()

    // Vérification des bénéfices
    mockProps.benefits.forEach(benefit => {
      expect(screen.getByText(benefit)).toBeInTheDocument()
    })

    // Vérification des features
    mockProps.features.forEach(feature => {
      expect(screen.getByText(feature.title)).toBeInTheDocument()
      expect(screen.getByText(feature.description)).toBeInTheDocument()
      if (feature.icon) {
        expect(screen.getByText(feature.icon)).toBeInTheDocument()
      }
    })

    // Vérification des technologies
    mockProps.technologies.forEach(tech => {
      expect(screen.getByText(tech)).toBeInTheDocument()
    })
  })

  it('applies custom className correctly', () => {
    const customClass = 'custom-class'
    const { container } = render(
      <SolutionDetail {...mockProps} className={customClass} />
    )

    expect(container.firstChild).toHaveClass(customClass)
  })

  it('renders correct number of benefits', () => {
    render(<SolutionDetail {...mockProps} />)
    
    const benefits = screen.getAllByRole('listitem', { name: /benefit/i })
    expect(benefits).toHaveLength(mockProps.benefits.length)
  })

  it('renders correct number of features', () => {
    render(<SolutionDetail {...mockProps} />)
    
    const features = screen.getAllByRole('listitem', { name: /feature/i })
    expect(features).toHaveLength(mockProps.features.length)
  })

  it('renders correct number of technologies', () => {
    render(<SolutionDetail {...mockProps} />)
    
    const technologies = screen.getAllByRole('listitem', { name: /technology/i })
    expect(technologies).toHaveLength(mockProps.technologies.length)
  })

  it('renders the contact button', () => {
    render(<SolutionDetail {...mockProps} />)
    
    const contactButton = screen.getByRole('link', { name: /contact/i })
    expect(contactButton).toBeInTheDocument()
    expect(contactButton).toHaveAttribute('href', '/contact')
  })
})
