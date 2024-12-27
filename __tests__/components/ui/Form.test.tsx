import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  username: z.string().min(2, 'Username must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
})

const TestForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
    },
  })

  const onSubmit = jest.fn()

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

describe('Form Components', () => {
  it('renders form with all subcomponents', () => {
    render(<TestForm />)
    
    expect(screen.getByLabelText('Username')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByText('Submit')).toBeInTheDocument()
  })

  it('displays validation errors for invalid input', async () => {
    render(<TestForm />)
    
    // Submit empty form
    await userEvent.click(screen.getByText('Submit'))
    
    // Check validation messages
    expect(await screen.findByText('Username must be at least 2 characters')).toBeInTheDocument()
    expect(await screen.findByText('Invalid email address')).toBeInTheDocument()
  })

  it('handles form submission with valid data', async () => {
    render(<TestForm />)
    
    // Fill form with valid data
    await userEvent.type(screen.getByLabelText('Username'), 'johndoe')
    await userEvent.type(screen.getByLabelText('Email'), 'john@example.com')
    
    // Submit form
    await userEvent.click(screen.getByText('Submit'))
    
    // No validation errors should be present
    expect(screen.queryByText('Username must be at least 2 characters')).not.toBeInTheDocument()
    expect(screen.queryByText('Invalid email address')).not.toBeInTheDocument()
  })

  it('maintains accessibility attributes', () => {
    render(<TestForm />)
    
    const usernameInput = screen.getByLabelText('Username')
    const emailInput = screen.getByLabelText('Email')
    
    expect(usernameInput).toHaveAttribute('aria-invalid', 'false')
    expect(emailInput).toHaveAttribute('aria-invalid', 'false')
  })

  it('updates aria-invalid attribute on error', async () => {
    render(<TestForm />)
    
    const emailInput = screen.getByLabelText('Email')
    await userEvent.type(emailInput, 'invalid-email')
    await userEvent.tab() // Blur the input
    
    expect(emailInput).toHaveAttribute('aria-invalid', 'true')
  })

  it('supports keyboard navigation', async () => {
    render(<TestForm />)
    
    // Start from first input
    await userEvent.tab()
    expect(screen.getByLabelText('Username')).toHaveFocus()
    
    // Move to email input
    await userEvent.tab()
    expect(screen.getByLabelText('Email')).toHaveFocus()
    
    // Move to submit button
    await userEvent.tab()
    expect(screen.getByText('Submit')).toHaveFocus()
  })
})
