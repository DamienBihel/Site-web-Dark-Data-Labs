import React from 'react'
import { render, screen } from '@testing-library/react'
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'

describe('Card Components', () => {
  it('renders Card with all subcomponents', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Test Title</CardTitle>
          <CardDescription>Test Description</CardDescription>
        </CardHeader>
        <CardContent>Test Content</CardContent>
        <CardFooter>Test Footer</CardFooter>
      </Card>
    )

    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
    expect(screen.getByText('Test Footer')).toBeInTheDocument()
  })

  it('applies custom className to Card', () => {
    render(<Card className="custom-class">Test</Card>)
    const card = screen.getByText('Test').parentElement
    expect(card).toHaveClass('custom-class')
  })

  it('forwards ref correctly for Card', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Card ref={ref}>Test</Card>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('renders CardHeader with custom className', () => {
    render(
      <CardHeader className="custom-header">
        <CardTitle>Title</CardTitle>
      </CardHeader>
    )
    const header = screen.getByText('Title').parentElement
    expect(header).toHaveClass('custom-header')
  })

  it('renders interactive Card with hover effects', () => {
    render(
      <Card interactive>
        <CardContent>Interactive Card</CardContent>
      </Card>
    )
    const card = screen.getByText('Interactive Card').parentElement?.parentElement
    expect(card).toHaveClass('hover:border-primary')
  })

  it('renders Card with different variants', () => {
    const { rerender } = render(
      <Card variant="bordered">
        <CardContent>Bordered Card</CardContent>
      </Card>
    )
    let card = screen.getByText('Bordered Card').parentElement?.parentElement
    expect(card).toHaveClass('border')

    rerender(
      <Card variant="ghost">
        <CardContent>Ghost Card</CardContent>
      </Card>
    )
    card = screen.getByText('Ghost Card').parentElement?.parentElement
    expect(card).toHaveClass('bg-transparent')
  })
})
