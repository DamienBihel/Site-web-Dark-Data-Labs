import { render, screen } from '@testing-library/react'
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '../card'

describe('Card Component', () => {
  it('renders card with all its parts', () => {
    render(
      <Card data-testid="card">
        <CardHeader data-testid="card-header">
          <CardTitle data-testid="card-title">Card Title</CardTitle>
          <CardDescription data-testid="card-description">
            Card Description
          </CardDescription>
        </CardHeader>
        <CardContent data-testid="card-content">Card Content</CardContent>
        <CardFooter data-testid="card-footer">Card Footer</CardFooter>
      </Card>
    )

    expect(screen.getByTestId('card')).toBeInTheDocument()
    expect(screen.getByTestId('card-header')).toBeInTheDocument()
    expect(screen.getByTestId('card-title')).toBeInTheDocument()
    expect(screen.getByTestId('card-description')).toBeInTheDocument()
    expect(screen.getByTestId('card-content')).toBeInTheDocument()
    expect(screen.getByTestId('card-footer')).toBeInTheDocument()
  })

  it('applies custom className to card', () => {
    render(<Card className="custom-class">Card Content</Card>)
    expect(screen.getByText('Card Content')).toHaveClass('custom-class')
  })

  it('renders card title with proper heading level', () => {
    render(
      <CardTitle className="custom-title">
        Title
      </CardTitle>
    )
    expect(screen.getByText('Title')).toHaveClass('custom-title')
    expect(screen.getByText('Title').tagName).toBe('H3')
  })

  it('renders card description with proper styling', () => {
    render(<CardDescription>Description text</CardDescription>)
    const description = screen.getByText('Description text')
    expect(description).toHaveClass('text-sm', 'text-muted-foreground')
  })

  it('renders card content with proper padding', () => {
    render(<CardContent>Content</CardContent>)
    expect(screen.getByText('Content')).toHaveClass('p-6', 'pt-0')
  })

  it('renders card footer with proper alignment', () => {
    render(<CardFooter>Footer</CardFooter>)
    expect(screen.getByText('Footer')).toHaveClass('flex', 'items-center')
  })

  it('forwards ref to card component', () => {
    const ref = jest.fn()
    render(<Card ref={ref}>Card Content</Card>)
    expect(ref).toHaveBeenCalled()
  })

  it('handles additional props correctly', () => {
    const onClick = jest.fn()
    render(
      <Card onClick={onClick} aria-label="test-card">
        Card Content
      </Card>
    )
    const card = screen.getByLabelText('test-card')
    expect(card).toBeInTheDocument()
  })
})
