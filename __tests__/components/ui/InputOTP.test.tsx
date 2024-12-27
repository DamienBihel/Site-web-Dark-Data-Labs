import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '@/components/ui/input-otp'

describe('InputOTP Component', () => {
  const TestOTP = ({ length = 6, maxLength = 6, onComplete = () => {} }) => (
    <InputOTP maxLength={maxLength} onComplete={onComplete}>
      <InputOTPGroup>
        {Array.from({ length }, (_, i) => (
          <React.Fragment key={i}>
            <InputOTPSlot index={i} />
            {i !== length - 1 && <InputOTPSeparator />}
          </React.Fragment>
        ))}
      </InputOTPGroup>
    </InputOTP>
  )

  it('renders with correct structure', () => {
    render(<TestOTP length={4} maxLength={4} />)
    
    const container = screen.getByTestId('input-otp-container')
    expect(container).toBeInTheDocument()
    
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('maxlength', '4')
  })

  it('supports custom className', () => {
    render(
      <InputOTP maxLength={4} className="custom-class">
        <InputOTPGroup>
          <InputOTPSlot index={0} className="slot-class" />
        </InputOTPGroup>
      </InputOTP>
    )
    
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('custom-class')
  })

  it('maintains accessibility attributes', () => {
    render(
      <InputOTP maxLength={4}>
        <InputOTPGroup aria-label="Enter OTP">
          <InputOTPSlot index={0} aria-label="First digit" />
          <InputOTPSeparator />
          <InputOTPSlot index={1} aria-label="Second digit" />
        </InputOTPGroup>
      </InputOTP>
    )
    
    const container = screen.getByTestId('input-otp-container')
    const firstSlot = screen.getByLabelText('First digit')
    const secondSlot = screen.getByLabelText('Second digit')
    
    expect(firstSlot).toBeInTheDocument()
    expect(secondSlot).toBeInTheDocument()
  })

  it('handles user input correctly', async () => {
    const user = userEvent.setup()
    render(<TestOTP length={4} maxLength={4} />)
    
    const input = screen.getByRole('textbox')
    await user.type(input, '1234')
    
    expect(input).toHaveValue('1234')
  })

  it('calls onComplete when all digits are entered', async () => {
    const onComplete = jest.fn()
    const user = userEvent.setup()
    
    render(<TestOTP length={4} maxLength={4} onComplete={onComplete} />)
    
    const input = screen.getByRole('textbox')
    await user.type(input, '1234')
    
    expect(onComplete).toHaveBeenCalledWith('1234')
  })

  it('respects disabled state', () => {
    render(
      <InputOTP maxLength={4} disabled>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
        </InputOTPGroup>
      </InputOTP>
    )
    
    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()
  })
})
