import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '../button'
import { ArrowRight } from 'lucide-react'

describe('Button Component', () => {
  it('renders button with text content', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('handles click events', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders with different variants', () => {
    const { rerender } = render(<Button variant="default">Default</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-primary')

    rerender(<Button variant="secondary">Secondary</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-secondary')

    rerender(<Button variant="outline">Outline</Button>)
    expect(screen.getByRole('button')).toHaveClass('border')
  })

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="default">Default</Button>)
    expect(screen.getByRole('button')).toHaveClass('h-10 px-4 py-2')

    rerender(<Button size="sm">Small</Button>)
    expect(screen.getByRole('button')).toHaveClass('h-9 px-3')

    rerender(<Button size="lg">Large</Button>)
    expect(screen.getByRole('button')).toHaveClass('h-11 px-8')
  })

  it('renders with an icon', () => {
    render(
      <Button>
        Next
        <ArrowRight className="ml-2 h-4 w-4" aria-label="arrow-right" />
      </Button>
    )
    expect(screen.getByRole('button')).toContainElement(screen.getByLabelText('arrow-right'))
  })

  it('renders as disabled', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('renders as a link when asChild is used with Link', () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    )
    const linkButton = screen.getByRole('link')
    expect(linkButton).toHaveAttribute('href', '/test')
    expect(linkButton).toHaveClass('inline-flex items-center justify-center')
  })
})
