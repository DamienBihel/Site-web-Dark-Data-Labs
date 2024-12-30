/// <reference types="@testing-library/jest-dom" />
import { render, screen } from '@testing-library/react'
import { Expertise } from '../expertise'

// Mock des composants externes
jest.mock('lucide-react', () => ({
  LineChart: () => <div data-testid="icon-linechart" />,
  Code: () => <div data-testid="icon-code" />,
  Target: () => <div data-testid="icon-target" />
}))

jest.mock('@/components/ui/card', () => ({
  Card: ({ children, className }: { children: React.ReactNode, className: string }) => (
    <div data-testid="card" className={className}>{children}</div>
  )
}))

describe('Expertise Component', () => {
  beforeEach(() => {
    render(<Expertise />)
  })

  it('renders the main heading', () => {
    expect(screen.getByText('Triple Expertise')).toBeInTheDocument()
  })

  it('renders all expertise areas with correct titles', () => {
    const titles = ['Data & Analytics', 'Automation & Process', 'Stratégie & Formation']
    titles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })

  it('renders all expertise cards', () => {
    const cards = screen.getAllByTestId('card')
    expect(cards).toHaveLength(3)
    cards.forEach(card => {
      expect(card).toHaveClass('h-full', 'p-6')
    })
  })

  it('renders all icons', () => {
    expect(screen.getByTestId('icon-linechart')).toBeInTheDocument()
    expect(screen.getByTestId('icon-code')).toBeInTheDocument()
    expect(screen.getByTestId('icon-target')).toBeInTheDocument()
  })

  describe('Data & Analytics section', () => {
    const items = [
      'Data Analysis Professionnel',
      'Expert en Python',
      'Spécialiste du scraping et de l\'analyse de données'
    ]

    it('renders all items', () => {
      items.forEach(item => {
        expect(screen.getByText(`• ${item}`)).toBeInTheDocument()
      })
    })
  })

  describe('Automation & Process section', () => {
    const items = [
      'Création de workflows automatisés',
      'Intégration d\'outils no-code',
      'Optimisation des processus métier'
    ]

    it('renders all items', () => {
      items.forEach(item => {
        expect(screen.getByText(`• ${item}`)).toBeInTheDocument()
      })
    })
  })

  describe('Stratégie & Formation section', () => {
    const items = [
      'Formateur technique expérimenté',
      'Accompagnement personnalisé',
      'Vision stratégique data-driven'
    ]

    it('renders all items', () => {
      items.forEach(item => {
        expect(screen.getByText(`• ${item}`)).toBeInTheDocument()
      })
    })
  })

  it('has correct grid layout classes', () => {
    const grid = screen.getAllByTestId('card')[0].parentElement?.parentElement
    expect(grid).toHaveClass('grid', 'md:grid-cols-3', 'gap-8')
  })
})
