import { render, screen } from '@testing-library/react'
import { Badge } from '../badge'

describe('Badge Component', () => {
  it('renders badge with default variant', () => {
    render(<Badge>Default Badge</Badge>)
    const badge = screen.getByText('Default Badge')
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass('bg-primary', 'text-primary-foreground')
  })

  it('renders badge with secondary variant', () => {
    render(<Badge variant="secondary">Secondary Badge</Badge>)
    const badge = screen.getByText('Secondary Badge')
    expect(badge).toHaveClass('bg-secondary', 'text-secondary-foreground')
  })

  it('renders badge with destructive variant', () => {
    render(<Badge variant="destructive">Destructive Badge</Badge>)
    const badge = screen.getByText('Destructive Badge')
    expect(badge).toHaveClass('bg-destructive', 'text-destructive-foreground')
  })

  it('renders badge with outline variant', () => {
    render(<Badge variant="outline">Outline Badge</Badge>)
    const badge = screen.getByText('Outline Badge')
    expect(badge).toHaveClass('text-foreground')
  })

  it('applies custom className', () => {
    render(<Badge className="custom-class">Custom Badge</Badge>)
    expect(screen.getByText('Custom Badge')).toHaveClass('custom-class')
  })

  it('handles additional HTML attributes', () => {
    render(
      <Badge data-testid="test-badge" aria-label="badge">
        Test Badge
      </Badge>
    )
    const badge = screen.getByTestId('test-badge')
    expect(badge).toHaveAttribute('aria-label', 'badge')
  })

  it('renders with proper base styles', () => {
    render(<Badge>Style Test</Badge>)
    const badge = screen.getByText('Style Test')
    expect(badge).toHaveClass(
      'inline-flex',
      'items-center',
      'rounded-full',
      'border',
      'px-2.5',
      'py-0.5',
      'text-xs',
      'font-semibold'
    )
  })

  it('maintains hover state classes', () => {
    render(<Badge>Hover Test</Badge>)
    const badge = screen.getByText('Hover Test')
    expect(badge).toHaveClass('hover:bg-primary/80')
  })
})
