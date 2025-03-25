import { render, screen } from '@testing-library/react'
import { SolutionDetail } from '../solution-detail'

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
    price: '999',
    features: ['Feature 1', 'Feature 2'],
    demoProject: {
      title: 'Demo Project',
      points: ['Point 1', 'Point 2'],
      roi: '150%'
    },
    targetAudience: ['Audience 1', 'Audience 2'],
    href: '/solutions/test'
  }

  it('renders solution details with correct content', () => {
    render(<SolutionDetail {...mockProps} />)

    // Vérification du titre et de la description
    expect(screen.getByText(mockProps.title)).toBeInTheDocument()
    expect(screen.getByText(mockProps.description)).toBeInTheDocument()

    // Vérification du prix
    expect(screen.getByLabelText(/Prix : 999€/i)).toBeInTheDocument();

    // Vérification des features
    mockProps.features.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument()
    })

    // Vérification du projet de démonstration
    expect(screen.getByText(mockProps.demoProject.title)).toBeInTheDocument()
    
    // Vérification des points du projet de démonstration
    const demoPoints = screen.getAllByTestId('demo-point')
    expect(demoPoints).toHaveLength(mockProps.demoProject.points.length)
    mockProps.demoProject.points.forEach((point, index) => {
      expect(demoPoints[index].textContent).toContain(point)
    })
    
    // Vérification du ROI
    const elements = screen.getAllByText((content, element) => {
      return element?.textContent?.includes(mockProps.demoProject.roi) || false;
    });
    expect(elements.length).toBeGreaterThan(0);

    // Vérification du public cible
    const audienceItems = screen.getAllByTestId('audience-item')
    expect(audienceItems).toHaveLength(mockProps.targetAudience.length)
    mockProps.targetAudience.forEach((audience, index) => {
      expect(audienceItems[index].textContent).toContain(audience)
    })
  })

  it('applies custom className correctly', () => {
    const customClass = 'custom-class'
    const { container } = render(
      <SolutionDetail {...mockProps} className={customClass} />
    )

    expect(container.firstChild).toHaveClass(customClass)
  })

  it('renders correct number of features', () => {
    render(<SolutionDetail {...mockProps} />)
    
    const features = screen.getAllByTestId ? screen.getAllByTestId('feature-item') : screen.getAllByRole('listitem').slice(0, mockProps.features.length)
    expect(features).toHaveLength(mockProps.features.length)
  })

  it('renders correct number of demo points', () => {
    render(<SolutionDetail {...mockProps} />)
    
    const points = screen.getAllByTestId ? screen.getAllByTestId('demo-point') : screen.getAllByRole('listitem').slice(mockProps.features.length, mockProps.features.length + mockProps.demoProject.points.length)
    expect(points).toHaveLength(mockProps.demoProject.points.length)
  })

  it('renders correct number of target audiences', () => {
    render(<SolutionDetail {...mockProps} />)
    
    const audiences = screen.getAllByTestId ? screen.getAllByTestId('audience-item') : screen.getAllByRole('listitem').slice(mockProps.features.length + mockProps.demoProject.points.length)
    expect(audiences).toHaveLength(mockProps.targetAudience.length)
  })

  it('renders the link with correct href', () => {
    render(<SolutionDetail {...mockProps} />)
    
    const link = screen.getByTestId('solution-link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', mockProps.href)
  })
})
