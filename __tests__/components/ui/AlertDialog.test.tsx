import { render, screen, fireEvent } from '@testing-library/react'
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog'

describe('AlertDialog Component', () => {
  const renderAlertDialog = () => {
    return render(
      <AlertDialog>
        <AlertDialogTrigger>Open Dialog</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Test Title</AlertDialogTitle>
            <AlertDialogDescription>Test Description</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }

  it('renders trigger button', () => {
    renderAlertDialog()
    const trigger = screen.getByText('Open Dialog')
    expect(trigger).toBeInTheDocument()
  })

  it('opens dialog when trigger is clicked', () => {
    renderAlertDialog()
    const trigger = screen.getByText('Open Dialog')
    fireEvent.click(trigger)
    
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
  })

  it('renders action and cancel buttons', async () => {
    renderAlertDialog()
    const trigger = screen.getByText('Open Dialog')
    fireEvent.click(trigger)
    
    expect(screen.getByText('Cancel')).toBeInTheDocument()
    expect(screen.getByText('Continue')).toBeInTheDocument()
  })

  it('closes dialog when cancel button is clicked', () => {
    renderAlertDialog()
    const trigger = screen.getByText('Open Dialog')
    fireEvent.click(trigger)
    
    const cancelButton = screen.getByText('Cancel')
    fireEvent.click(cancelButton)
    
    expect(screen.queryByText('Test Title')).not.toBeInTheDocument()
  })

  it('applies custom className to components', () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger>Open Dialog</AlertDialogTrigger>
        <AlertDialogContent className="custom-content">
          <AlertDialogHeader className="custom-header">
            <AlertDialogTitle className="custom-title">Title</AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    )
    
    const trigger = screen.getByText('Open Dialog')
    fireEvent.click(trigger)
    
    expect(screen.getByText('Title').parentElement).toHaveClass('custom-header')
    expect(screen.getByText('Title')).toHaveClass('custom-title')
  })
})
