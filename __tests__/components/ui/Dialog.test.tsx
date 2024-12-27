import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

describe('Dialog Components', () => {
  it('renders dialog with all subcomponents when triggered', () => {
    render(
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Test Title</DialogTitle>
            <DialogDescription>Test Description</DialogDescription>
          </DialogHeader>
          <div>Test Content</div>
          <DialogFooter>
            <Button>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )

    // Click the trigger button
    fireEvent.click(screen.getByText('Open Dialog'))

    // Check if dialog content is rendered
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('closes when clicking outside', () => {
    const onOpenChange = jest.fn()
    render(
      <Dialog open onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogTitle>Test</DialogTitle>
        </DialogContent>
      </Dialog>
    )

    // Click the overlay/backdrop
    fireEvent.click(document.querySelector('[data-overlay]')!)
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it('closes when pressing escape', () => {
    const onOpenChange = jest.fn()
    render(
      <Dialog open onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogTitle>Test</DialogTitle>
        </DialogContent>
      </Dialog>
    )

    // Press escape key
    fireEvent.keyDown(document.body, { key: 'Escape' })
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it('applies custom className to DialogContent', () => {
    render(
      <Dialog open>
        <DialogContent className="custom-content">
          <DialogTitle>Test</DialogTitle>
        </DialogContent>
      </Dialog>
    )

    const content = screen.getByRole('dialog')
    expect(content).toHaveClass('custom-content')
  })

  it('renders with different sizes', () => {
    const { rerender } = render(
      <Dialog open>
        <DialogContent size="sm">
          <DialogTitle>Small Dialog</DialogTitle>
        </DialogContent>
      </Dialog>
    )

    let content = screen.getByRole('dialog')
    expect(content).toHaveClass('sm:max-w-[425px]')

    rerender(
      <Dialog open>
        <DialogContent size="lg">
          <DialogTitle>Large Dialog</DialogTitle>
        </DialogContent>
      </Dialog>
    )

    content = screen.getByRole('dialog')
    expect(content).toHaveClass('sm:max-w-[725px]')
  })
})
