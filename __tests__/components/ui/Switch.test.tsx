import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Switch } from '@/components/ui/switch'

describe('Switch Component', () => {
  it('renders in unchecked state by default', () => {
    render(<Switch aria-label="Test switch" />)
    
    const switchElement = screen.getByRole('switch')
    expect(switchElement).toHaveAttribute('aria-checked', 'false')
  })

  it('can be toggled', async () => {
    render(<Switch aria-label="Test switch" />)
    
    const switchElement = screen.getByRole('switch')
    
    // Initial state
    expect(switchElement).toHaveAttribute('aria-checked', 'false')
    
    // Click to toggle on
    await userEvent.click(switchElement)
    expect(switchElement).toHaveAttribute('aria-checked', 'true')
    
    // Click to toggle off
    await userEvent.click(switchElement)
    expect(switchElement).toHaveAttribute('aria-checked', 'false')
  })

  it('supports controlled state', async () => {
    const onCheckedChange = jest.fn()
    
    render(
      <Switch
        checked={true}
        onCheckedChange={onCheckedChange}
        aria-label="Test switch"
      />
    )
    
    const switchElement = screen.getByRole('switch')
    expect(switchElement).toHaveAttribute('aria-checked', 'true')
    
    await userEvent.click(switchElement)
    expect(onCheckedChange).toHaveBeenCalledWith(false)
  })

  it('can be disabled', async () => {
    const onCheckedChange = jest.fn()
    
    render(
      <Switch
        disabled
        onCheckedChange={onCheckedChange}
        aria-label="Test switch"
      />
    )
    
    const switchElement = screen.getByRole('switch')
    expect(switchElement).toBeDisabled()
    
    await userEvent.click(switchElement)
    expect(onCheckedChange).not.toHaveBeenCalled()
  })

  it('supports keyboard interaction', async () => {
    render(<Switch aria-label="Test switch" />)
    
    const switchElement = screen.getByRole('switch')
    
    // Focus the switch
    await userEvent.tab()
    expect(switchElement).toHaveFocus()
    
    // Toggle with space
    await userEvent.keyboard(' ')
    expect(switchElement).toHaveAttribute('aria-checked', 'true')
    
    // Toggle with enter
    await userEvent.keyboard('{Enter}')
    expect(switchElement).toHaveAttribute('aria-checked', 'false')
  })

  it('maintains accessibility attributes', () => {
    render(
      <Switch
        id="notifications"
        aria-label="Enable notifications"
        aria-describedby="notifications-desc"
      />
    )
    
    const switchElement = screen.getByRole('switch')
    expect(switchElement).toHaveAttribute('id', 'notifications')
    expect(switchElement).toHaveAttribute('aria-label', 'Enable notifications')
    expect(switchElement).toHaveAttribute('aria-describedby', 'notifications-desc')
  })
})
