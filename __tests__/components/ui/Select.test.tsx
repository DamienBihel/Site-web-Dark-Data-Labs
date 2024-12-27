import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
} from '@/components/ui/select'

describe('Select Components', () => {
  const TestSelect = () => {
    const [value, setValue] = React.useState('')

    return (
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    )
  }

  it('renders select with placeholder', () => {
    render(<TestSelect />)
    expect(screen.getByText('Select a fruit')).toBeInTheDocument()
  })

  it('opens content when clicking trigger', async () => {
    render(<TestSelect />)
    
    await userEvent.click(screen.getByText('Select a fruit'))
    
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    expect(screen.getByText('Fruits')).toBeInTheDocument()
    expect(screen.getByText('Apple')).toBeInTheDocument()
  })

  it('selects item when clicked', async () => {
    render(<TestSelect />)
    
    await userEvent.click(screen.getByText('Select a fruit'))
    await userEvent.click(screen.getByText('Apple'))
    
    expect(screen.getByText('Apple')).toBeInTheDocument()
    expect(screen.queryByText('Select a fruit')).not.toBeInTheDocument()
  })

  it('closes when selecting an item', async () => {
    render(<TestSelect />)
    
    await userEvent.click(screen.getByText('Select a fruit'))
    await userEvent.click(screen.getByText('Apple'))
    
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('supports keyboard navigation', async () => {
    render(<TestSelect />)
    
    // Open select with keyboard
    const trigger = screen.getByText('Select a fruit')
    await userEvent.tab()
    expect(trigger).toHaveFocus()
    
    await userEvent.keyboard('{Enter}')
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    
    // Navigate items
    await userEvent.keyboard('{ArrowDown}')
    expect(screen.getByText('Apple')).toHaveFocus()
    
    await userEvent.keyboard('{ArrowDown}')
    expect(screen.getByText('Banana')).toHaveFocus()
  })

  it('maintains accessibility attributes', () => {
    render(<TestSelect />)
    
    const trigger = screen.getByRole('combobox')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    
    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
  })

  it('handles disabled state', () => {
    render(
      <Select disabled>
        <SelectTrigger>
          <SelectValue placeholder="Disabled" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="test">Test</SelectItem>
        </SelectContent>
      </Select>
    )
    
    const trigger = screen.getByRole('combobox')
    expect(trigger).toBeDisabled()
    expect(trigger).toHaveAttribute('aria-disabled', 'true')
  })

  it('handles required state', () => {
    render(
      <Select required>
        <SelectTrigger>
          <SelectValue placeholder="Required" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="test">Test</SelectItem>
        </SelectContent>
      </Select>
    )
    
    const trigger = screen.getByRole('combobox')
    expect(trigger).toHaveAttribute('aria-required', 'true')
  })
})
