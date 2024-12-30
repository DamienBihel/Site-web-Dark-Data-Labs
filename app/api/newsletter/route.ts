import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email requis' },
        { status: 400 }
      );
    }

    // Ajouter le contact à une liste Brevo
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        listIds: [22], // ID de la liste newsletter dans Brevo
        updateEnabled: true, // Met à jour le contact s'il existe déjà
        attributes: {
          SIGNUP_DATE: new Date().toISOString(),
          SOURCE: 'website_newsletter'
        }
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erreur lors de l\'inscription');
    }

    // Envoyer un email de confirmation
    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: 'Dark Data Labs',
          email: 'contact@darkdatalabs.fr'
        },
        to: [{
          email: email
        }],
        subject: 'Bienvenue dans la newsletter Dark Data Labs !',
        htmlContent: `
          <h2>Merci de votre inscription !</h2>
          <p>Vous êtes maintenant inscrit(e) à la newsletter de Dark Data Labs.</p>
          <p>Vous recevrez régulièrement :</p>
          <ul>
            <li>Des articles techniques pour perfectionner vos compétences</li>
            <li>Des études de cas détaillées pour vous inspirer</li>
            <li>Les dernières actualités et innovations en Data Science et IA</li>
          </ul>
          <p>À très bientôt !</p>
          <p>L'équipe Dark Data Labs</p>
        `,
      }),
    });

    return NextResponse.json(
      { message: 'Inscription réussie' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Erreur lors de l\'inscription à la newsletter:', error);
    return NextResponse.json(
      { error: error.message || 'Erreur lors de l\'inscription' },
      { status: 500 }
    );
  }
}
