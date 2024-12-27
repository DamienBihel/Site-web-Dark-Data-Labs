import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

describe('RadioGroup Component', () => {
  const TestRadioGroup = () => (
    <RadioGroup defaultValue="option1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="option1" />
        <label htmlFor="option1">Option 1</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="option2" />
        <label htmlFor="option2">Option 2</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option3" id="option3" />
        <label htmlFor="option3">Option 3</label>
      </div>
    </RadioGroup>
  )

  it('renders all radio options', () => {
    render(<TestRadioGroup />)
    
    const radioButtons = screen.getAllByRole('radio')
    expect(radioButtons).toHaveLength(3)
    
    expect(screen.getByLabelText('Option 1')).toBeInTheDocument()
    expect(screen.getByLabelText('Option 2')).toBeInTheDocument()
    expect(screen.getByLabelText('Option 3')).toBeInTheDocument()
  })

  it('has correct default value selected', () => {
    render(<TestRadioGroup />)
    
    const option1 = screen.getByLabelText('Option 1')
    const option2 = screen.getByLabelText('Option 2')
    const option3 = screen.getByLabelText('Option 3')
    
    expect(option1).toHaveAttribute('aria-checked', 'true')
    expect(option2).toHaveAttribute('aria-checked', 'false')
    expect(option3).toHaveAttribute('aria-checked', 'false')
  })

  it('allows selection of different options', async () => {
    render(<TestRadioGroup />)
    
    const option1 = screen.getByLabelText('Option 1')
    const option2 = screen.getByLabelText('Option 2')
    
    expect(option1).toHaveAttribute('aria-checked', 'true')
    expect(option2).toHaveAttribute('aria-checked', 'false')
    
    await userEvent.click(option2)
    
    expect(option1).toHaveAttribute('aria-checked', 'false')
    expect(option2).toHaveAttribute('aria-checked', 'true')
  })

  it('supports controlled state', async () => {
    const onValueChange = jest.fn()
    
    render(
      <RadioGroup value="option1" onValueChange={onValueChange}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" />
          <label htmlFor="option1">Option 1</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="option2" />
          <label htmlFor="option2">Option 2</label>
        </div>
      </RadioGroup>
    )
    
    const option2 = screen.getByLabelText('Option 2')
    await userEvent.click(option2)
    
    expect(onValueChange).toHaveBeenCalledWith('option2')
  })

  it('supports keyboard navigation', async () => {
    render(<TestRadioGroup />)
    
    const option1 = screen.getByLabelText('Option 1')
    const option2 = screen.getByLabelText('Option 2')
    const option3 = screen.getByLabelText('Option 3')
    
    // Focus first option
    await userEvent.tab()
    expect(option1).toHaveFocus()
    
    // Navigate with arrow keys and select options
    await userEvent.keyboard('{ArrowDown}')
    expect(option2).toHaveFocus()
    await userEvent.keyboard(' ') // Press space to select
    expect(option2).toHaveAttribute('aria-checked', 'true')
    
    await userEvent.keyboard('{ArrowDown}')
    expect(option3).toHaveFocus()
    await userEvent.keyboard(' ')
    expect(option3).toHaveAttribute('aria-checked', 'true')
    
    // Wrap around to first option
    await userEvent.keyboard('{ArrowDown}')
    expect(option1).toHaveFocus()
    await userEvent.keyboard(' ')
    expect(option1).toHaveAttribute('aria-checked', 'true')
  })

  it('maintains accessibility attributes', () => {
    render(
      <RadioGroup aria-label="Options" defaultValue="option1">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" />
          <label htmlFor="option1">Option 1</label>
        </div>
      </RadioGroup>
    )
    
    const radioGroup = screen.getByRole('radiogroup')
    expect(radioGroup).toHaveAttribute('aria-label', 'Options')
    
    const radio = screen.getByRole('radio')
    expect(radio).toHaveAttribute('id', 'option1')
  })
})
