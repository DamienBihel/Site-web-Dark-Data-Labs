import { render, screen } from '@testing-library/react'
import { PricingCard } from '../pricing-card'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>
  }
}))

describe('PricingCard', () => {
  const mockProps = {
    name: 'Pack Standard',
    price: '999',
    description: 'Solution complète pour PME',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    roi: '300%',
    ideal: 'PME en croissance',
    index: 0
  }

  it('renders pricing card with correct content', () => {
    render(<PricingCard {...mockProps} />)

    // Vérification des informations principales
    expect(screen.getByText(mockProps.name)).toBeInTheDocument()
    expect(screen.getByText(`${mockProps.price}€`)).toBeInTheDocument()
    expect(screen.getByText(mockProps.description)).toBeInTheDocument()

    // Vérification du ROI et de l'idéal
    expect(screen.getByText(`ROI moyen : ${mockProps.roi}`)).toBeInTheDocument()
    expect(screen.getByText(`Idéal pour : ${mockProps.ideal}`)).toBeInTheDocument()
  })

  it('renders all features correctly', () => {
    render(<PricingCard {...mockProps} />)

    mockProps.features.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument()
    })
  })

  it('renders correct number of features', () => {
    render(<PricingCard {...mockProps} />)

    const features = screen.getAllByRole('listitem')
    expect(features).toHaveLength(mockProps.features.length)
  })

  it('renders contact link with correct href', () => {
    render(<PricingCard {...mockProps} />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute(
      'href',
      `/contact?plan=${mockProps.name.toLowerCase()}`
    )
    expect(link).toHaveTextContent(`Découvrir le Pack ${mockProps.name}`)
  })

  it('renders check icons for each feature', () => {
    render(<PricingCard {...mockProps} />)

    const checkIcons = document.querySelectorAll('.text-secondary')
    expect(checkIcons).toHaveLength(mockProps.features.length)
  })

  it('applies animation delay based on index prop', () => {
    const { container } = render(<PricingCard {...mockProps} />)
    
    const motionDiv = container.firstChild
    expect(motionDiv).toBeInTheDocument()
    expect(motionDiv).toHaveAttribute('transition')
  })
})
