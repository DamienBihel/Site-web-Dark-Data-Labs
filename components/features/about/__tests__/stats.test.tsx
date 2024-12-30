/// <reference types="@testing-library/jest-dom" />
import { render, screen } from '@testing-library/react'
import { Stats } from '../stats'
import '@testing-library/jest-dom'

// Mock Framer Motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, 'data-testid': dataTestId }: any) => (
      <div className={className} data-testid={dataTestId}>{children}</div>
    )
  }
}))

describe('Stats Component', () => {
  beforeEach(() => {
    render(<Stats />)
  })

  it('renders all stats correctly', () => {
    // Vérifie les valeurs
    expect(screen.getByText('-40%')).toBeInTheDocument()
    expect(screen.getByText('x3')).toBeInTheDocument()
    expect(screen.getByText('18+')).toBeInTheDocument()

    // Vérifie les labels
    expect(screen.getByText('de temps administratif en moyenne')).toBeInTheDocument()
    expect(screen.getByText('retour sur investissement')).toBeInTheDocument()
    expect(screen.getByText("années d'expertise technique")).toBeInTheDocument()

    // Vérifie les descriptions
    expect(screen.getByText('Gain potentiel pour votre entreprise')).toBeInTheDocument()
    expect(screen.getByText('ROI projeté sur 6 mois')).toBeInTheDocument()
    expect(screen.getByText('En métrologie et analyse de données')).toBeInTheDocument()
  })

  it('renders correct number of stat items', () => {
    const statItems = screen.getAllByRole('generic').filter(
      element => element.className.includes('text-center')
    )
    expect(statItems).toHaveLength(3)
  })

  it('applies correct styling classes', () => {
    const statValues = screen.getAllByText(/-40%|x3|18\+/)
    statValues.forEach(value => {
      expect(value).toHaveClass('text-4xl', 'font-bold', 'text-secondary')
    })
  })
})
