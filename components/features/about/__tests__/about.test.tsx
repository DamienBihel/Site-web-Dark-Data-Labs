/// <reference types="@testing-library/jest-dom" />
import { render, screen } from '@testing-library/react'
import { About } from '../index'
import '@testing-library/jest-dom'

// Mock des sous-composants pour isoler les tests
jest.mock('../stats', () => ({
  Stats: () => <div data-testid="stats-section">Stats Component</div>
}))

jest.mock('../profile', () => ({
  Profile: () => <div data-testid="profile-section">Profile Component</div>
}))

jest.mock('../expertise', () => ({
  Expertise: () => <div data-testid="expertise-values-container">Expertise Component</div>
}))

jest.mock('../values', () => ({
  Values: () => <div data-testid="values-section">Values Component</div>
}))

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href} data-testid="next-link">{children}</a>
  ),
}))

// Mock Framer Motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, 'data-testid': dataTestId }: any) => (
      <div className={className} data-testid={dataTestId}>{children}</div>
    )
  }
}))

describe('About Component', () => {
  beforeEach(() => {
    render(<About />)
  })

  it('renders the main heading correctly', () => {
    const heading = screen.getByRole('heading', { name: /à propos de dark data labs/i })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveClass('text-3xl', 'font-bold', 'mb-4')
  })

  it('renders the description text', () => {
    const description = screen.getByText(/démocratiser l'analyse de données/i)
    expect(description).toBeInTheDocument()
    expect(description).toHaveClass('text-lg', 'text-muted-foreground')
  })

  it('renders all child components', () => {
    expect(screen.getByTestId('stats-section')).toBeInTheDocument()
    expect(screen.getByTestId('profile-section')).toBeInTheDocument()
    expect(screen.getByTestId('expertise-values-container')).toBeInTheDocument()
    expect(screen.getByTestId('values-section')).toBeInTheDocument()
  })

  it('renders the philosophy section', () => {
    const philosophyHeading = screen.getByRole('heading', { name: /philosophie de travail/i })
    expect(philosophyHeading).toBeInTheDocument()
    expect(philosophyHeading).toHaveClass('text-2xl', 'font-bold', 'mb-6')

    const quote = screen.getByText(/je crois en la puissance des données/i)
    expect(quote).toBeInTheDocument()
    expect(quote).toHaveClass('text-lg', 'text-muted-foreground', 'border-l-4', 'border-secondary', 'pl-6', 'mb-12')
  })

  it('renders the CTA button', () => {
    const ctaButton = screen.getByRole('link', { name: /découvrez comment nous pouvons collaborer/i })
    expect(ctaButton).toBeInTheDocument()
    expect(ctaButton).toHaveAttribute('href', '/contact')
  })
})
