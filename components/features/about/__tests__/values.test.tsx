import { render, screen } from '@testing-library/react'
import { Values } from '../values'

jest.mock('lucide-react', () => ({
  Gauge: () => <div data-testid="gauge-icon" />,
  Lightbulb: () => <div data-testid="lightbulb-icon" />,
  LineChart: () => <div data-testid="linechart-icon" />
}))

describe('Values Component', () => {
  beforeEach(() => {
    render(<Values />)
  })

  it('renders the main heading correctly', () => {
    expect(screen.getByText('Valeurs Fondamentales')).toBeInTheDocument()
  })

  it('renders all value cards', () => {
    expect(screen.getByText('Excellence Technique')).toBeInTheDocument()
    expect(screen.getByText('Innovation Pragmatique')).toBeInTheDocument()
    expect(screen.getByText('Transparence & Efficacité')).toBeInTheDocument()
  })

  it('renders all icons', () => {
    expect(screen.getByTestId('gauge-icon')).toBeInTheDocument()
    expect(screen.getByTestId('lightbulb-icon')).toBeInTheDocument()
    expect(screen.getByTestId('linechart-icon')).toBeInTheDocument()
  })

  it('renders all list items for each value', () => {
    // Excellence Technique items
    expect(screen.getByText('• Rigueur méthodologique')).toBeInTheDocument()
    expect(screen.getByText('• Solutions robustes et évolutives')).toBeInTheDocument()
    expect(screen.getByText('• Documentation précise')).toBeInTheDocument()

    // Innovation Pragmatique items
    expect(screen.getByText('• Solutions adaptées à vos besoins réels')).toBeInTheDocument()
    expect(screen.getByText('• Approche progressive et mesurable')).toBeInTheDocument()
    expect(screen.getByText('• Focus sur le ROI')).toBeInTheDocument()

    // Transparence & Efficacité items
    expect(screen.getByText('• Communication claire et directe')).toBeInTheDocument()
    expect(screen.getByText('• Processus structuré')).toBeInTheDocument()
    expect(screen.getByText('• Résultats mesurables')).toBeInTheDocument()
  })

  it('applies correct grid layout classes', () => {
    const grid = screen.getByText('Valeurs Fondamentales').nextElementSibling
    expect(grid).toHaveClass('grid', 'md:grid-cols-3', 'gap-8')
  })
})
