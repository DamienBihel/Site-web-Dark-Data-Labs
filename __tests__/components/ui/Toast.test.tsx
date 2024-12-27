import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Toast,
  ToastProvider,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
} from '@/components/ui/toast'

// Mock des fonctions pointer non supportées par JSDOM
beforeAll(() => {
  // @ts-ignore
  window.HTMLElement.prototype.hasPointerCapture = () => false
  // @ts-ignore
  window.HTMLElement.prototype.releasePointerCapture = () => {}
})

describe('Toast Component', () => {
  const TestToast = ({ variant = 'default', onClose, onAction }) => (
    <ToastProvider swipeDirection="right">
      <Toast variant={variant}>
        <div className="grid gap-1">
          <ToastTitle>Test Title</ToastTitle>
          <ToastDescription>Test Description</ToastDescription>
        </div>
        <ToastClose onClick={onClose} />
        {onAction && <ToastAction altText="Action" onClick={onAction}>Action</ToastAction>}
      </Toast>
      <ToastViewport />
    </ToastProvider>
  )

  it('renders with default variant', () => {
    render(<TestToast />)
    
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '' })).toBeInTheDocument()
  })

  it('renders with destructive variant', () => {
    render(<TestToast variant="destructive" />)
    
    const toastElement = screen.getByText('Test Title').closest('[role="status"]')
    expect(toastElement).toHaveClass('destructive')
  })

  it('handles close action', async () => {
    const onClose = jest.fn()
    
    render(<TestToast onClose={onClose} />)
    
    const closeButton = screen.getByRole('button', { name: '' })
    fireEvent.click(closeButton)
    
    expect(onClose).toHaveBeenCalled()
  })

  it('handles custom action', async () => {
    const onAction = jest.fn()
    
    render(<TestToast onAction={onAction} />)
    
    const actionButton = screen.getByRole('button', { name: 'Action' })
    fireEvent.click(actionButton)
    
    expect(onAction).toHaveBeenCalled()
  })

  it('applies custom className to components', () => {
    render(
      <ToastProvider swipeDirection="right">
        <Toast className="custom-toast">
          <div className="grid gap-1">
            <ToastTitle className="custom-title">Title</ToastTitle>
            <ToastDescription className="custom-description">Description</ToastDescription>
          </div>
          <ToastAction className="custom-action" altText="Action">Action</ToastAction>
          <ToastClose className="custom-close" />
        </Toast>
        <ToastViewport className="custom-viewport" />
      </ToastProvider>
    )
    
    const toastElement = screen.getByText('Title').closest('[role="status"]')
    expect(toastElement).toHaveClass('custom-toast')
    expect(screen.getByText('Title')).toHaveClass('custom-title')
    expect(screen.getByText('Description')).toHaveClass('custom-description')
    expect(screen.getByRole('button', { name: 'Action' })).toHaveClass('custom-action')
    expect(screen.getByRole('button', { name: '' })).toHaveClass('custom-close')
  })

  it('forwards refs correctly', () => {
    const toastRef = React.createRef<HTMLLIElement>()
    const titleRef = React.createRef<HTMLDivElement>()
    const descriptionRef = React.createRef<HTMLDivElement>()
    const actionRef = React.createRef<HTMLButtonElement>()
    const closeRef = React.createRef<HTMLButtonElement>()
    
    render(
      <ToastProvider swipeDirection="right">
        <Toast ref={toastRef}>
          <div className="grid gap-1">
            <ToastTitle ref={titleRef}>Title</ToastTitle>
            <ToastDescription ref={descriptionRef}>Description</ToastDescription>
          </div>
          <ToastAction ref={actionRef} altText="Action">Action</ToastAction>
          <ToastClose ref={closeRef} />
        </Toast>
        <ToastViewport />
      </ToastProvider>
    )
    
    expect(toastRef.current).toBeInstanceOf(HTMLLIElement)
    expect(titleRef.current).toBeInstanceOf(HTMLDivElement)
    expect(descriptionRef.current).toBeInstanceOf(HTMLDivElement)
    expect(actionRef.current).toBeInstanceOf(HTMLButtonElement)
    expect(closeRef.current).toBeInstanceOf(HTMLButtonElement)
  })
})
