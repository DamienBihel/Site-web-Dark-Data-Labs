import React from 'react'
import { render, screen } from '@testing-library/react'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

describe('Alert Component', () => {
  it('renders with default variant', () => {
    render(
      <Alert>
        <AlertTitle>Test Alert</AlertTitle>
        <AlertDescription>This is a test alert</AlertDescription>
      </Alert>
    )

    const alert = screen.getByRole('alert')
    expect(alert).toBeInTheDocument()
    expect(alert).toHaveClass('bg-background')
    
    const title = screen.getByText('Test Alert')
    expect(title).toBeInTheDocument()
    expect(title).toHaveClass('mb-1', 'font-medium')
    
    const description = screen.getByText('This is a test alert')
    expect(description).toBeInTheDocument()
  })

  it('renders with destructive variant', () => {
    render(
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong</AlertDescription>
      </Alert>
    )

    const alert = screen.getByRole('alert')
    expect(alert).toHaveClass('border-destructive/50', 'text-destructive')
  })

  it('accepts and applies custom className', () => {
    render(
      <Alert className="custom-class">
        <AlertTitle className="title-class">Custom Title</AlertTitle>
        <AlertDescription className="description-class">Custom Description</AlertDescription>
      </Alert>
    )

    const alert = screen.getByRole('alert')
    expect(alert).toHaveClass('custom-class')
    
    const title = screen.getByText('Custom Title')
    expect(title).toHaveClass('title-class')
    
    const description = screen.getByText('Custom Description')
    expect(description).toHaveClass('description-class')
  })

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(
      <Alert ref={ref}>
        <AlertTitle>Test Alert</AlertTitle>
      </Alert>
    )
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('maintains proper HTML structure', () => {
    render(
      <Alert>
        <AlertTitle>Test Alert</AlertTitle>
        <AlertDescription>Test Description</AlertDescription>
      </Alert>
    )

    const alert = screen.getByRole('alert')
    const title = screen.getByText('Test Alert')
    const description = screen.getByText('Test Description')

    expect(title.tagName).toBe('H5')
    expect(description.tagName).toBe('DIV')
    expect(alert.contains(title)).toBe(true)
    expect(alert.contains(description)).toBe(true)
  })
})
