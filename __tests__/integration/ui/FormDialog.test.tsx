import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

describe('Form Dialog Integration', () => {
  const mockSubmit = jest.fn()

  const TestFormDialog = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      mockSubmit(formData)
      setIsOpen(false)
    }

    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button>Open Form</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>User Information</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <Card>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </CardContent>
            </Card>
            <DialogFooter className="mt-4">
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    )
  }

  it('integrates Dialog, Card, Input, and Button components correctly', async () => {
    render(<TestFormDialog />)
    
    // Initial state
    expect(screen.getByText('Open Form')).toBeInTheDocument()
    
    // Open dialog
    await userEvent.click(screen.getByText('Open Form'))
    
    // Check dialog content
    expect(screen.getByText('User Information')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
  })

  it('handles form submission correctly', async () => {
    render(<TestFormDialog />)
    
    // Open dialog
    await userEvent.click(screen.getByText('Open Form'))
    
    // Fill form
    await userEvent.type(screen.getByPlaceholderText('Name'), 'John Doe')
    await userEvent.type(screen.getByPlaceholderText('Email'), 'john@example.com')
    
    // Submit form
    await userEvent.click(screen.getByText('Submit'))
    
    // Check if form was submitted with correct data
    expect(mockSubmit).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john@example.com',
    })
  })

  it('maintains accessibility through component integration', async () => {
    render(<TestFormDialog />)
    
    // Check initial button accessibility
    const openButton = screen.getByText('Open Form')
    expect(openButton).toHaveAttribute('type', 'button')
    
    // Open dialog
    await userEvent.click(openButton)
    
    // Check dialog accessibility
    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    
    // Check form controls accessibility
    const nameInput = screen.getByPlaceholderText('Name')
    const emailInput = screen.getByPlaceholderText('Email')
    
    expect(nameInput).toHaveAttribute('type', 'text')
    expect(emailInput).toHaveAttribute('type', 'email')
  })

  it('handles keyboard navigation correctly', async () => {
    render(<TestFormDialog />)
    
    // Open dialog
    await userEvent.click(screen.getByText('Open Form'))
    
    // Check tab navigation
    await userEvent.tab()
    expect(screen.getByPlaceholderText('Name')).toHaveFocus()
    
    await userEvent.tab()
    expect(screen.getByPlaceholderText('Email')).toHaveFocus()
    
    await userEvent.tab()
    expect(screen.getByText('Submit')).toHaveFocus()
  })

  it('closes dialog on successful submission', async () => {
    render(<TestFormDialog />)
    
    // Open dialog
    await userEvent.click(screen.getByText('Open Form'))
    
    // Fill and submit form
    await userEvent.type(screen.getByPlaceholderText('Name'), 'John Doe')
    await userEvent.type(screen.getByPlaceholderText('Email'), 'john@example.com')
    await userEvent.click(screen.getByText('Submit'))
    
    // Check if dialog is closed
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })
  })
})
