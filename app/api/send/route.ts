import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, company, phone, message } = await request.json();
    
    console.log('Données reçues:', { name, email, company, phone });
    console.log('Clé API Resend:', process.env.RESEND_API_KEY?.substring(0, 10) + '...');

    if (!process.env.RESEND_API_KEY) {
      throw new Error('La clé API Resend n\'est pas configurée');
    }

    const data = await resend.emails.send({
      from: 'Dark Data Labs <onboarding@resend.dev>', // Temporairement, utilisons l'adresse de test
      to: ['contact@darkdatalabs.fr'],
      subject: `Nouveau message de ${name}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Entreprise:</strong> ${company}</p>` : ''}
        ${phone ? `<p><strong>Téléphone:</strong> ${phone}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    console.log('Réponse Resend:', data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Erreur détaillée:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
} 