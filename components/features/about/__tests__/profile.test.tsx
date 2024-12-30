/// <reference types="@testing-library/jest-dom" />
import { render, screen } from '@testing-library/react'
import { Profile } from '../profile'

// Mock des composants externes
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ priority, ...props }: any) => {
    // Convertir priority en string pour éviter l'avertissement
    const imgProps = {
      ...props,
      ...(priority && { priority: 'true' })
    }
    return <img {...imgProps} />
  }
}))

jest.mock('@/components/ui/badge', () => ({
  Badge: ({ children }: { children: React.ReactNode }) => (
    <span data-testid="badge">{children}</span>
  )
}))

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, 'data-testid': dataTestId }: any) => (
      <div className={className} data-testid={dataTestId}>{children}</div>
    )
  }
}))

describe('Profile Component', () => {
  beforeEach(() => {
    render(<Profile />)
  })

  it('renders profile image correctly', () => {
    const image = screen.getByAltText('Damien Dassé')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/damien.png')
    expect(image).toHaveAttribute('width', '200')
    expect(image).toHaveClass('rounded-full')
  })

  it('renders name and title', () => {
    expect(screen.getByText('Damien')).toBeInTheDocument()
    expect(screen.getByText('Data Strategist & Automation Expert')).toBeInTheDocument()
  })

  it('renders the professional description', () => {
    const description = screen.getByText(/Après 18 ans comme métrologue/i)
    expect(description).toBeInTheDocument()
  })

  it('renders all expertise bullet points', () => {
    const expertisePoints = [
      'Rigueur méthodologique du métrologue',
      'Créativité du data analyst',
      'Vision stratégique du consultant'
    ]

    expertisePoints.forEach(point => {
      expect(screen.getByText(`• ${point}`)).toBeInTheDocument()
    })
  })

  it('renders all certifications as badges', () => {
    const certifications = [
      'Data Analyst (Certifié)',
      'Python Development',
      'Automation Specialist',
      '18 ans d\'expertise en métrologie'
    ]

    const badges = screen.getAllByTestId('badge')
    expect(badges).toHaveLength(certifications.length)
    
    certifications.forEach(cert => {
      expect(screen.getByText(cert)).toBeInTheDocument()
    })
  })

  it('has correct responsive layout classes', () => {
    const container = screen.getByTestId('profile-section')
    expect(container).toHaveClass('flex', 'flex-col', 'md:flex-row', 'gap-8', 'items-start')
  })
})
