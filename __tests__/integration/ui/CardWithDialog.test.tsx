import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

describe('Card With Dialog Integration', () => {
  const TestCardWithDialog = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [selectedItem, setSelectedItem] = React.useState<string | null>(null)

    return (
      <div className="space-y-4">
        {['Item 1', 'Item 2', 'Item 3'].map((item) => (
          <Card key={item} interactive>
            <CardHeader>
              <CardTitle>{item}</CardTitle>
              <CardDescription>Description for {item}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Content for {item}</p>
            </CardContent>
            <CardFooter>
              <Dialog open={isOpen && selectedItem === item} onOpenChange={(open) => {
                setIsOpen(open)
                if (!open) setSelectedItem(null)
              }}>
                <DialogTrigger asChild>
                  <Button onClick={() => setSelectedItem(item)}>
                    View Details
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{item} Details</DialogTitle>
                    <DialogDescription>
                      Detailed information about {item}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <p>Extended content for {item}</p>
                  </div>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    )
  }

  it('renders multiple cards with dialog triggers', () => {
    render(<TestCardWithDialog />)
    
    // Check if all cards are rendered
    expect(screen.getAllByText(/Item \d/)).toHaveLength(3)
    expect(screen.getAllByText('View Details')).toHaveLength(3)
  })

  it('opens correct dialog when clicking card button', async () => {
    render(<TestCardWithDialog />)
    
    // Click the first card's button
    await userEvent.click(screen.getAllByText('View Details')[0])
    
    // Check if correct dialog content is shown
    expect(screen.getByText('Item 1 Details')).toBeInTheDocument()
    expect(screen.getByText('Extended content for Item 1')).toBeInTheDocument()
  })

  it('maintains card interactivity with dialog integration', async () => {
    render(<TestCardWithDialog />)
    
    const cards = screen.getAllByText(/Item \d/).map(
      element => element.closest('[class*="card"]')
    )
    
    // Check if cards have interactive styles
    cards.forEach(card => {
      expect(card).toHaveClass('hover:border-primary')
    })
  })

  it('closes dialog and resets selection when clicking outside', async () => {
    render(<TestCardWithDialog />)
    
    // Open dialog
    await userEvent.click(screen.getAllByText('View Details')[0])
    expect(screen.getByText('Item 1 Details')).toBeInTheDocument()
    
    // Click overlay to close
    const dialog = screen.getByRole('dialog')
    fireEvent.click(dialog.parentElement!)
    
    // Check if dialog is closed
    expect(screen.queryByText('Item 1 Details')).not.toBeInTheDocument()
  })

  it('maintains focus management between card and dialog', async () => {
    render(<TestCardWithDialog />)
    
    // Focus first button
    const buttons = screen.getAllByText('View Details')
    await userEvent.tab()
    expect(buttons[0]).toHaveFocus()
    
    // Open dialog
    await userEvent.click(buttons[0])
    
    // Dialog should trap focus
    await userEvent.tab()
    const closeButton = screen.getByRole('button', { name: /close/i })
    expect(closeButton).toHaveFocus()
  })

  it('preserves card state when opening/closing different dialogs', async () => {
    render(<TestCardWithDialog />)
    
    // Open first dialog
    await userEvent.click(screen.getAllByText('View Details')[0])
    expect(screen.getByText('Item 1 Details')).toBeInTheDocument()
    
    // Close first dialog
    const closeButton = screen.getByRole('button', { name: /close/i })
    await userEvent.click(closeButton)
    
    // Open second dialog
    await userEvent.click(screen.getAllByText('View Details')[1])
    expect(screen.getByText('Item 2 Details')).toBeInTheDocument()
    
    // Check if cards maintain their state
    expect(screen.getAllByText(/Item \d/)).toHaveLength(3)
  })
})
