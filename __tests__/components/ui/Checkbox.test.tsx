import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Checkbox } from '@/components/ui/checkbox'

describe('Checkbox Component', () => {
  it('renders unchecked by default', () => {
    render(<Checkbox aria-label="Test checkbox" />)
    
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
  })

  it('can be checked and unchecked', async () => {
    render(<Checkbox aria-label="Test checkbox" />)
    
    const checkbox = screen.getByRole('checkbox')
    
    // Check
    await userEvent.click(checkbox)
    expect(checkbox).toBeChecked()
    
    // Uncheck
    await userEvent.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('supports controlled state', async () => {
    const onCheckedChange = jest.fn()
    
    render(
      <Checkbox
        checked={true}
        onCheckedChange={onCheckedChange}
        aria-label="Test checkbox"
      />
    )
    
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()
    
    await userEvent.click(checkbox)
    expect(onCheckedChange).toHaveBeenCalledWith(false)
  })

  it('can be disabled', async () => {
    const onCheckedChange = jest.fn()
    
    render(
      <Checkbox
        disabled
        onCheckedChange={onCheckedChange}
        aria-label="Test checkbox"
      />
    )
    
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeDisabled()
    
    await userEvent.click(checkbox)
    expect(onCheckedChange).not.toHaveBeenCalled()
  })

  it('supports keyboard interaction', async () => {
    const onCheckedChange = jest.fn()
    
    render(
      <Checkbox
        onCheckedChange={onCheckedChange}
        aria-label="Test checkbox"
      />
    )
    
    const checkbox = screen.getByRole('checkbox')
    
    // Focus the checkbox
    await userEvent.tab()
    expect(checkbox).toHaveFocus()
    
    // Toggle with space
    await userEvent.keyboard(' ')
    expect(checkbox).toBeChecked()
    expect(onCheckedChange).toHaveBeenCalledWith(true)
    
    // Toggle again
    await userEvent.keyboard(' ')
    expect(checkbox).not.toBeChecked()
    expect(onCheckedChange).toHaveBeenCalledWith(false)
  })

  it('maintains accessibility attributes', () => {
    render(
      <Checkbox
        id="terms"
        aria-label="Accept terms"
        aria-describedby="terms-description"
      />
    )
    
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toHaveAttribute('id', 'terms')
    expect(checkbox).toHaveAttribute('aria-label', 'Accept terms')
    expect(checkbox).toHaveAttribute('aria-describedby', 'terms-description')
  })

  it('supports custom label via children', () => {
    render(
      <Checkbox>
        <div>Custom label</div>
      </Checkbox>
    )
    
    expect(screen.getByText('Custom label')).toBeInTheDocument()
  })

  it('supports indeterminate state', () => {
    render(
      <Checkbox
        checked="indeterminate"
        aria-label="Indeterminate checkbox"
      />
    )
    
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toHaveAttribute('data-state', 'indeterminate')
  })
})
