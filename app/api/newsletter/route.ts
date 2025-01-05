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
          name: 'Damien de Dark Data Labs',
          email: 'damien.bihel@darkdatalabs.fr'
        },
        to: [{
          email: email
        }],
        subject: 'Bienvenue chez Dark Data Labs – Transformons vos données en leviers de performance !',
        htmlContent: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <p>Bonjour,</p>
            
            <p>Bienvenue dans la communauté Dark Data Labs ! 🚀</p>
            
            <p>Tu viens de faire un premier pas vers une utilisation plus stratégique et efficace de tes données. Chez Dark Data Labs, notre mission est claire : rendre l'analyse de données accessible, simple et impactante pour les PME/TPE.</p>
            
            <p>✨ Voici ce que tu trouveras dans notre newsletter :</p>
            <ul>
              <li>Des astuces pratiques pour maîtriser tes données.</li>
              <li>Des idées d'automatisations pour gagner du temps et réduire les erreurs.</li>
              <li>Des exemples concrets d'entreprises qui boostent leur rentabilité grâce à l'analyse de données.</li>
            </ul>
            
            <p>🛠️ Envie d'en savoir plus ?</p>
            <p>Chaque mail que tu recevras est pensé pour t'apporter une vraie valeur ajoutée. Pas de blabla, que du concret pour t'aider à mieux piloter ton activité.</p>
            
            <p>Si tu as des questions, des défis spécifiques, ou si tu veux simplement échanger sur l'automatisation et l'analyse de données, réponds à cet email. On est là pour ça, et toujours avec le sourire (virtuel 😄).</p>
            
            <p>On se retrouve très vite pour découvrir comment libérer tout le potentiel de tes données. 💡</p>
            
            <p>À bientôt,<br>
            Damien</p>
            
            <p><a href="https://darkdatalabs.fr/" style="color: #00FF85; text-decoration: none;">https://darkdatalabs.fr/</a></p>
          </div>
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
