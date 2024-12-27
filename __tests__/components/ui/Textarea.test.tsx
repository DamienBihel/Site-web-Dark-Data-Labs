import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Textarea } from '@/components/ui/textarea'

describe('Textarea Component', () => {
  it('renders correctly', () => {
    render(<Textarea aria-label="Test textarea" />)
    
    const textarea = screen.getByRole('textbox')
    expect(textarea).toBeInTheDocument()
  })

  it('accepts and displays user input', async () => {
    render(<Textarea aria-label="Test textarea" />)
    
    const textarea = screen.getByRole('textbox')
    await userEvent.type(textarea, 'Hello, World!')
    
    expect(textarea).toHaveValue('Hello, World!')
  })

  it('supports placeholder text', () => {
    render(<Textarea placeholder="Enter your message" />)
    
    const textarea = screen.getByPlaceholderText('Enter your message')
    expect(textarea).toBeInTheDocument()
  })

  it('handles controlled state', async () => {
    const onChange = jest.fn()
    
    render(
      <Textarea
        value="Controlled value"
        onChange={onChange}
        aria-label="Test textarea"
      />
    )
    
    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveValue('Controlled value')
    
    await userEvent.type(textarea, '!')
    expect(onChange).toHaveBeenCalled()
  })

  it('can be disabled', async () => {
    const onChange = jest.fn()
    
    render(
      <Textarea
        disabled
        onChange={onChange}
        aria-label="Test textarea"
      />
    )
    
    const textarea = screen.getByRole('textbox')
    expect(textarea).toBeDisabled()
    
    await userEvent.type(textarea, 'Test')
    expect(onChange).not.toHaveBeenCalled()
  })

  it('supports multiline input', async () => {
    render(<Textarea aria-label="Test textarea" />)
    
    const textarea = screen.getByRole('textbox')
    await userEvent.type(textarea, 'Line 1{enter}Line 2{enter}Line 3')
    
    expect(textarea).toHaveValue('Line 1\nLine 2\nLine 3')
  })

  it('supports custom rows', () => {
    render(<Textarea rows={5} aria-label="Test textarea" />)
    
    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveAttribute('rows', '5')
  })

  it('maintains accessibility attributes', () => {
    render(
      <Textarea
        id="message"
        aria-label="Message input"
        aria-describedby="message-desc"
        aria-required="true"
      />
    )
    
    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveAttribute('id', 'message')
    expect(textarea).toHaveAttribute('aria-label', 'Message input')
    expect(textarea).toHaveAttribute('aria-describedby', 'message-desc')
    expect(textarea).toHaveAttribute('aria-required', 'true')
  })

  it('applies custom className', () => {
    render(
      <Textarea
        className="custom-class"
        aria-label="Test textarea"
      />
    )
    
    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLTextAreaElement>()
    
    render(<Textarea ref={ref} aria-label="Test textarea" />)
    
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement)
  })
})
