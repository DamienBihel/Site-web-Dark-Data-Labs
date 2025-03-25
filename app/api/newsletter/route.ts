import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    console.log('Traitement de l\'inscription newsletter pour:', email);
    console.log('URL Mautic configurée:', process.env.MAUTIC_BASE_URL);

    if (!email) {
      return NextResponse.json(
        { error: 'Email requis' },
        { status: 400 }
      );
    }

    // Vérifier que les variables d'environnement Mautic sont définies
    if (!process.env.MAUTIC_BASE_URL || !process.env.MAUTIC_USERNAME || !process.env.MAUTIC_PASSWORD || !process.env.MAUTIC_FORM_ID) {
      console.error('Configuration Mautic incomplète:', {
        baseUrl: !!process.env.MAUTIC_BASE_URL,
        username: !!process.env.MAUTIC_USERNAME,
        password: !!process.env.MAUTIC_PASSWORD,
        formId: !!process.env.MAUTIC_FORM_ID
      });
      throw new Error('Configuration Mautic incomplète');
    }

    // Authentification auprès de Mautic pour obtenir un token
    try {
      console.log('Tentative d\'authentification Mautic...');
      const authResponse = await fetch(`${process.env.MAUTIC_BASE_URL}/oauth/v2/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'grant_type': 'password',
          'client_id': 'mauticoauth',
          'client_secret': 'mauticoauth',
          'username': process.env.MAUTIC_USERNAME!,
          'password': process.env.MAUTIC_PASSWORD!,
        }).toString(),
      });

      if (!authResponse.ok) {
        const errorText = await authResponse.text();
        console.error('Échec de l\'authentification Mautic:', {
          status: authResponse.status,
          statusText: authResponse.statusText,
          responseText: errorText
        });
        throw new Error(`Échec de l'authentification Mautic: ${authResponse.status} ${authResponse.statusText}`);
      }

      const authData = await authResponse.json();
      const accessToken = authData.access_token;
      console.log('Authentification Mautic réussie');

      // Vérifier si le contact existe déjà
      console.log('Vérification de l\'existence du contact...');
      const checkContactResponse = await fetch(
        `${process.env.MAUTIC_BASE_URL}/api/contacts?search=${encodeURIComponent(email)}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!checkContactResponse.ok) {
        const errorText = await checkContactResponse.text();
        console.error('Erreur lors de la vérification du contact:', {
          status: checkContactResponse.status,
          statusText: checkContactResponse.statusText,
          responseText: errorText
        });
        throw new Error('Erreur lors de la vérification du contact');
      }

      const contactData = await checkContactResponse.json();
      let contactId;

      // Si le contact existe, récupérer son ID, sinon en créer un nouveau
      if (contactData.total > 0) {
        console.log('Contact existant trouvé');
        // Récupérer le premier contact correspondant
        contactId = Object.keys(contactData.contacts)[0];
      } else {
        console.log('Création d\'un nouveau contact...');
        // Créer un nouveau contact
        const createContactResponse = await fetch(`${process.env.MAUTIC_BASE_URL}/api/contacts/new`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            firstname: '',
            lastname: '',
            tags: ['website_newsletter'],
          }),
        });

        if (!createContactResponse.ok) {
          const errorText = await createContactResponse.text();
          console.error('Erreur lors de la création du contact:', {
            status: createContactResponse.status,
            statusText: createContactResponse.statusText,
            responseText: errorText
          });
          throw new Error('Erreur lors de la création du contact');
        }

        const newContactData = await createContactResponse.json();
        contactId = newContactData.contact.id;
        console.log('Nouveau contact créé avec ID:', contactId);
      }

      // Soumettre le contact au formulaire Mautic
      console.log('Soumission au formulaire...');
      const formId = process.env.MAUTIC_FORM_ID;
      const submitFormResponse = await fetch(
        `${process.env.MAUTIC_BASE_URL}/api/forms/${formId}/submissions/action/submit`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mauticform: {
            formId: formId,
            email: email,
            source: 'website_newsletter',
            signup_date: new Date().toISOString(),
          },
        }),
      });

      if (!submitFormResponse.ok) {
        const errorText = await submitFormResponse.text();
        console.error('Erreur lors de la soumission du formulaire:', {
          status: submitFormResponse.status,
          statusText: submitFormResponse.statusText,
          responseText: errorText
        });
        throw new Error('Erreur lors de la soumission du formulaire');
      }

      console.log('Inscription newsletter réussie pour:', email);
      return NextResponse.json(
        { message: 'Inscription réussie' },
        { status: 200 }
      );
    } catch (fetchError: any) {
      console.error('Erreur réseau lors des requêtes Mautic:', fetchError);
      throw fetchError;
    }
  } catch (error: any) {
    console.error('Erreur lors de l\'inscription à la newsletter:', error);
    return NextResponse.json(
      { error: error.message || 'Erreur lors de l\'inscription' },
      { status: 500 }
    );
  }
}
