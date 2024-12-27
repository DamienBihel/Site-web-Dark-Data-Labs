import { render, screen } from '@testing-library/react'
import { ParticlesBackground } from '@/components/particles-background'
import { loadSlim } from "@tsparticles/slim"

// Mock des dépendances
jest.mock("@tsparticles/slim", () => ({
  loadSlim: jest.fn()
}))

jest.mock("@tsparticles/react", () => ({
  Particles: ({ id, className }: { id: string; className: string }) => (
    <div data-testid="particles-container" id={id} className={className} />
  )
}))

describe('ParticlesBackground', () => {
  beforeEach(() => {
    // Reset des mocks avant chaque test
    jest.clearAllMocks()
  })

  it('should render the particles container', () => {
    render(<ParticlesBackground />)
    const container = screen.getByTestId('particles-container')
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass('absolute inset-0 -z-10')
  })

  it('should initialize particles engine', () => {
    render(<ParticlesBackground />)
    expect(loadSlim).toHaveBeenCalled()
  })

  it('should have correct particle configuration', () => {
    render(<ParticlesBackground />)
    const container = screen.getByTestId('particles-container')
    expect(container).toHaveAttribute('id', 'tsparticles')
  })
})
