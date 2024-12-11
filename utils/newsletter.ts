import { NewsletterSubscription } from './newsletter'

const API_KEY = process.env.BREVO_API_KEY || ''

export interface NewsletterSubscription {
  email: string
  name?: string
  interests?: string[]
  isSimpleForm?: boolean
}

export async function subscribeToNewsletter({ email, name, interests, isSimpleForm = false }: NewsletterSubscription) {
  try {
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        name,
        interests,
        isSimpleForm,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Une erreur est survenue')
    }

    return { success: true, data }
  } catch (error: any) {
    console.error('Newsletter subscription error:', error)
    return { 
      success: false, 
      error: error.message || 'Une erreur est survenue lors de l\'inscription.'
    }
  }
}
