import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/shared/ui/button'
import { Input } from '@/components/shared/ui/input'
import { Textarea } from '@/components/shared/ui/textarea'
import { useToast } from '@/components/shared/ui/use-toast'
import { cn } from '@/lib/utils'

const formSchema = z.object({
  name: z.string().min(1, 'Le nom est requis'),
  email: z.string().min(1, 'L\'email est requis').email('Format d\'email invalide'),
  company: z.string().optional(),
  message: z.string().min(1, 'Le message est requis'),
})

type FormData = z.infer<typeof formSchema>

interface ContactFormProps {
  onSubmit?: (data: FormData) => Promise<void>
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const handleFormSubmit = async (data: FormData) => {
    try {
      setIsLoading(true)
      setError(null)
      if (onSubmit) {
        await onSubmit(data)
      } else {
        // Simulation d'un appel API
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
      toast({
        title: 'Message envoyé',
        description: 'Nous vous répondrons dans les plus brefs délais.',
      })
      reset()
    } catch (error) {
      setError('Une erreur est survenue. Veuillez réessayer plus tard.')
      toast({
        title: 'Une erreur est survenue',
        description: 'Veuillez réessayer plus tard.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form 
      onSubmit={handleSubmit(handleFormSubmit)} 
      className="space-y-6" 
      role="form"
      data-testid="contact-form"
      id="contact-form"
    >
      {error && (
        <p className="text-sm text-destructive mb-4" role="alert">{error}</p>
      )}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Nom
        </label>
        <Input
          id="name"
          {...register('name')}
          className={cn(errors.name && 'border-destructive')}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-sm text-destructive mt-1" role="alert">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          className={cn(errors.email && 'border-destructive')}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-destructive mt-1" role="alert">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2">
          Entreprise (optionnel)
        </label>
        <Input
          id="company"
          {...register('company')}
          className={cn(errors.company && 'border-destructive')}
          aria-invalid={!!errors.company}
          aria-describedby={errors.company ? 'company-error' : undefined}
        />
        {errors.company && (
          <p id="company-error" className="text-sm text-destructive mt-1" role="alert">{errors.company.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <Textarea
          id="message"
          {...register('message')}
          className={cn(errors.message && 'border-destructive')}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-destructive mt-1" role="alert">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Envoi en cours...' : 'Envoyer'}
      </Button>
    </form>
  )
}
