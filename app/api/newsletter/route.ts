import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    console.log('[DEBUG] Traitement de l\'inscription newsletter pour:', email);
    console.log('[DEBUG] Variables d\'environnement Mautic:', {
      baseUrl: process.env.MAUTIC_BASE_URL?.substring(0, 10) + '...',
      username: process.env.MAUTIC_USERNAME?.substring(0, 5) + '...',
      passwordLength: process.env.MAUTIC_PASSWORD ? process.env.MAUTIC_PASSWORD.length : 0,
      formId: process.env.MAUTIC_FORM_ID
    });

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
      console.log('[DEBUG] Tentative d\'authentification Mautic avec les paramètres:', {
        url: `${process.env.MAUTIC_BASE_URL}/oauth/v2/token`,
        method: 'POST',
        bodyParams: ['grant_type', 'client_id', 'client_secret', 'username', 'password']
      });
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
        console.error('[DEBUG] Échec de l\'authentification Mautic:', {
          status: authResponse.status,
          statusText: authResponse.statusText,
          responseText: errorText.substring(0, 500) + (errorText.length > 500 ? '...' : '')
        });
        throw new Error(`Échec de l'authentification Mautic: ${authResponse.status} ${authResponse.statusText}`);
      }

      const authData = await authResponse.json();
      const accessToken = authData.access_token;
      console.log('[DEBUG] Authentification Mautic réussie. Token reçu (premiers caractères):', accessToken.substring(0, 10) + '...');
      console.log('[DEBUG] Token type:', authData.token_type);
      console.log('[DEBUG] Expires in:', authData.expires_in, 'secondes');

      // Vérifier si le contact existe déjà
      console.log('[DEBUG] Vérification de l\'existence du contact avec email:', email);
      const checkContactResponse = await fetch(
        `${process.env.MAUTIC_BASE_URL}/api/contacts?search=${encodeURIComponent(email)}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!checkContactResponse.ok) {
        const errorText = await checkContactResponse.text();
        console.error('[DEBUG] Erreur lors de la vérification du contact:', {
          status: checkContactResponse.status,
          statusText: checkContactResponse.statusText,
          responseText: errorText.substring(0, 300) + (errorText.length > 300 ? '...' : ''),
          email
        });
        throw new Error('Erreur lors de la vérification du contact');
      }

      const contactData = await checkContactResponse.json();
      console.log('[DEBUG] Réponse de vérification contact:', {
        total: contactData.total,
        contactsCount: Object.keys(contactData.contacts || {}).length,
        contactsKeys: Object.keys(contactData.contacts || {})
      });
      
      let contactId;

      // Si le contact existe, récupérer son ID, sinon en créer un nouveau
      if (contactData.total > 0) {
        console.log('[DEBUG] Contact existant trouvé. ID:', Object.keys(contactData.contacts)[0]);
        // Récupérer le premier contact correspondant
        contactId = Object.keys(contactData.contacts)[0];
      } else {
        console.log('[DEBUG] Création d\'un nouveau contact pour:', email);
        // Créer un nouveau contact
        const createContactPayload = {
          email: email,
          firstname: '',
          lastname: '',
          tags: ['website_newsletter'],
        };
        console.log('[DEBUG] Payload pour création de contact:', createContactPayload);
        
        const createContactResponse = await fetch(`${process.env.MAUTIC_BASE_URL}/api/contacts/new`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(createContactPayload),
        });

        if (!createContactResponse.ok) {
          const errorText = await createContactResponse.text();
          console.error('[DEBUG] Erreur lors de la création du contact:', {
            status: createContactResponse.status,
            statusText: createContactResponse.statusText,
            responseText: errorText.substring(0, 300) + (errorText.length > 300 ? '...' : '')
          });
          throw new Error('Erreur lors de la création du contact');
        }

        const newContactData = await createContactResponse.json();
        contactId = newContactData.contact.id;
        console.log('[DEBUG] Nouveau contact créé avec ID:', contactId, 'pour email:', email);
        console.log('[DEBUG] Détails du contact créé:', {
          id: newContactData.contact.id,
          email: newContactData.contact.fields?.core?.email,
          dateAdded: newContactData.contact.dateAdded
        });
      }

      // Soumettre le contact au formulaire Mautic
      console.log('[DEBUG] Soumission au formulaire Mautic...', 'Form ID:', process.env.MAUTIC_FORM_ID);
      const formId = process.env.MAUTIC_FORM_ID;
      const formPayload = {
        mauticform: {
          formId: formId,
          email: email,
          source: 'website_newsletter',
          signup_date: new Date().toISOString(),
        },
      };
      console.log('[DEBUG] Payload de soumission du formulaire:', formPayload);
      
      const submitFormResponse = await fetch(
        `${process.env.MAUTIC_BASE_URL}/api/forms/${formId}/submissions/action/submit`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formPayload),
      });

      if (!submitFormResponse.ok) {
        const errorText = await submitFormResponse.text();
        console.error('[DEBUG] Erreur lors de la soumission du formulaire:', {
          status: submitFormResponse.status,
          statusText: submitFormResponse.statusText,
          responseText: errorText.substring(0, 300) + (errorText.length > 300 ? '...' : ''),
          formId
        });
        throw new Error('Erreur lors de la soumission du formulaire');
      }

      const formResponseData = await submitFormResponse.json();
      console.log('[DEBUG] Réponse de soumission du formulaire:', formResponseData);

      console.log('[DEBUG] Inscription newsletter réussie pour:', email);
      return NextResponse.json(
        { message: 'Inscription réussie' },
        { status: 200 }
      );
    } catch (fetchError: any) {
      console.error('[DEBUG] Erreur réseau lors des requêtes Mautic:', {
        message: fetchError.message,
        stack: fetchError.stack?.substring(0, 200) + '...',
        name: fetchError.name,
        code: fetchError.code,
        status: fetchError.status
      });
      throw fetchError;
    }
  } catch (error: any) {
    console.error('[DEBUG] Erreur générale lors de l\'inscription à la newsletter:', {
      message: error.message,
      stack: error.stack?.substring(0, 200) + '...',
      name: error.name,
      code: error.code,
      status: error.status
    });
    return NextResponse.json(
      { error: error.message || 'Erreur lors de l\'inscription' },
      { status: 500 }
    );
  }
}
