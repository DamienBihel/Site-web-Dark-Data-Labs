'use client';

import Script from 'next/script';

export function UmamiScript() {
  const handleLoad = () => {
    console.log('Umami script chargé avec succès');
    console.log('Umami website ID:', process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID);
  };

  const handleError = () => {
    console.error('Erreur lors du chargement du script Umami');
  };

  return (
    <Script
      id="umami-script"
      strategy="afterInteractive"
      src="https://umami.darkdatalabs.fr/script.js"
      data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
      onLoad={handleLoad}
      onError={handleError}
    />
  );
} 