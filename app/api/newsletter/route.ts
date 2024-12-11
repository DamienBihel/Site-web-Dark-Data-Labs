import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    console.log('Début de la requête POST /api/newsletter')
    const body = await request.json()
    console.log('Body reçu:', body)
    
    const { email } = body
    console.log('Email extrait:', email)
    
    if (!email) {
      console.log('Email manquant')
      return NextResponse.json(
        { error: 'Email requis' },
        { status: 400 }
      )
    }

    const apiKey = process.env.BREVO_API_KEY
    console.log('API Key présente:', !!apiKey)
    console.log('API Key (premiers caractères):', apiKey?.substring(0, 10))

    if (!apiKey) {
      console.log('API Key manquante')
      return NextResponse.json(
        { error: 'Configuration API manquante' },
        { status: 500 }
      )
    }

    const payload = {
      email,
      attributes: {
        FIRSTNAME: '',
        LASTNAME: '',
      },
      listIds: [21],
      updateEnabled: true
    }
    console.log('Payload pour Brevo:', payload)

    console.log('Envoi de la requête à Brevo...')
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify(payload),
    })

    console.log('Statut de la réponse:', response.status)
    const data = await response.json()
    console.log('Réponse de l\'API:', data)

    if (!response.ok) {
      if (response.status === 400 && data.message?.includes('already exists')) {
        console.log('Email déjà inscrit')
        return NextResponse.json(
          { error: 'Cette adresse email est déjà inscrite à la newsletter.' },
          { status: 400 }
        )
      }
      
      console.error('Erreur API:', data)
      return NextResponse.json(
        { error: data.message || 'Erreur lors de l\'inscription' },
        { status: response.status }
      )
    }

    console.log('Inscription réussie')
    return NextResponse.json({ 
      success: true,
      message: 'Inscription réussie !'
    })
  } catch (error: any) {
    console.error('Erreur complète:', {
      name: error?.name,
      message: error?.message,
      stack: error?.stack,
    })
    
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'inscription.' },
      { status: 500 }
    )
  }
}
