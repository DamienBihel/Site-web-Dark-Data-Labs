import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ContactForm } from '../contact-form'
import userEvent from '@testing-library/user-event'

// Mock des dépendances
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}))

// Mock lib/utils
jest.mock('@/lib/utils', () => ({
  cn: jest.fn((...args: any[]) => args.filter(Boolean).join(' '))
}))

// Mock de useToast
const mockToast = jest.fn()
jest.mock('@/components/shared/ui/use-toast', () => ({
  useToast: () => ({
    toast: mockToast
  })
}))

describe('ContactForm Component', () => {
  beforeEach(() => {
    // Reset des mocks avant chaque test
    jest.clearAllMocks()
  })

  it('renders all form fields', () => {
    render(<ContactForm />)
    
    expect(screen.getByLabelText(/nom/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/entreprise/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveTextContent(/envoyer/i)
  })

  it('displays validation errors for empty required fields', async () => {
    render(<ContactForm />)
    
    fireEvent.submit(screen.getByRole('form'))

    await waitFor(() => {
      expect(screen.getByText('Le nom est requis')).toBeInTheDocument()
      expect(screen.getByText('L\'email est requis')).toBeInTheDocument()
      expect(screen.getByText('Le message est requis')).toBeInTheDocument()
    })
  })

  it('validates email format', async () => {
    render(<ContactForm />)
    
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'invalid-email' },
    })
    fireEvent.submit(screen.getByRole('form'))

    await waitFor(() => {
      expect(screen.getByText('Format d\'email invalide')).toBeInTheDocument()
    })
  })

  it('submits form with valid data', async () => {
    const mockSubmit = jest.fn()
    render(<ContactForm onSubmit={mockSubmit} />)
    
    await userEvent.type(screen.getByLabelText(/nom/i), 'John Doe')
    await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com')
    await userEvent.type(screen.getByLabelText(/entreprise/i), 'ACME Inc')
    await userEvent.type(screen.getByLabelText(/message/i), 'Test message')
    
    fireEvent.submit(screen.getByRole('form'))

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'john@example.com',
        company: 'ACME Inc',
        message: 'Test message'
      })
    })
  })

  it('shows loading state during submission', async () => {
    render(<ContactForm />)
    
    // Remplir le formulaire avec des données valides
    await userEvent.type(screen.getByLabelText(/nom/i), 'John Doe')
    await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com')
    await userEvent.type(screen.getByLabelText(/message/i), 'Test message')

    // Simuler la soumission
    fireEvent.submit(screen.getByRole('form'))

    // Vérifier l'état de chargement
    await waitFor(() => {
      const submitButton = screen.getByRole('button')
      expect(submitButton).toBeDisabled()
      expect(submitButton).toHaveTextContent(/envoi en cours/i)
    })
  })

  it('handles server errors gracefully', async () => {
    const mockSubmit = jest.fn().mockRejectedValue(new Error('Server error'))
    render(<ContactForm onSubmit={mockSubmit} />)
    fireEvent.submit(screen.getByTestId('contact-form'))

    // Vérifier le message d'erreur
    await waitFor(() => {
      const errorMessages = screen.getAllByRole('alert')
      expect(errorMessages.some(el => el.textContent?.match(/requis|erreur/i))).toBeTruthy()
    })
  })
})
