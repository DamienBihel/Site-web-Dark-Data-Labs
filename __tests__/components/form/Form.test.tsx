import React from 'react'
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/form/form'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const TestForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
    mode: "onBlur"
  })

  const onSubmit = jest.fn()

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} data-testid="test-form">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <input {...field} data-testid="username-input" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button type="submit">Submit</button>
      </form>
    </Form>
  )
}

describe('Form', () => {
  it('renders form elements correctly', () => {
    render(<TestForm />)
    
    expect(screen.getByLabelText('Username')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
  })

  it('displays validation error for short username', async () => {
    render(<TestForm />)
    
    const input = screen.getByTestId('username-input')
    await act(async () => {
      fireEvent.change(input, { target: { value: 'a' } })
      fireEvent.blur(input)
    })
    
    await waitFor(() => {
      const errorMessage = screen.getByRole('alert')
      expect(errorMessage).toHaveTextContent('Username must be at least 2 characters.')
    }, { timeout: 2000 })
  })

  it('allows valid input', async () => {
    render(<TestForm />)
    
    const input = screen.getByTestId('username-input')
    await act(async () => {
      fireEvent.change(input, { target: { value: 'validuser' } })
      fireEvent.blur(input)
    })
    
    await waitFor(() => {
      expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    }, { timeout: 2000 })
  })

  it('maintains form state', async () => {
    render(<TestForm />)
    
    const input = screen.getByTestId('username-input')
    await act(async () => {
      fireEvent.change(input, { target: { value: 'testuser' } })
    })
    
    expect(input).toHaveValue('testuser')
  })

  it('handles form submission', async () => {
    render(<TestForm />)
    
    const input = screen.getByTestId('username-input')
    const form = screen.getByTestId('test-form')
    
    await act(async () => {
      fireEvent.change(input, { target: { value: 'testuser' } })
      fireEvent.submit(form)
    })
  })
})
