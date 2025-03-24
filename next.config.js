/**
 * @type {import('next').NextConfig}
 * Configuration Next.js pour le site Dark Data Labs
 */
const nextConfig = {
  // Configuration des images
  images: { 
    // Désactive l'optimisation automatique des images
    // À utiliser uniquement en développement ou pour des cas spécifiques
    unoptimized: true,
    
    // Autorise le chargement d'images depuis n'importe quelle source externe
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Ignore les erreurs TypeScript lors de la compilation
  // Utile en phase de développement, mais à éviter en production
  typescript: {
    ignoreBuildErrors: true
  },
  
  // Ignore les erreurs ESLint lors de la compilation
  // Utile en phase de développement, mais à éviter en production
  eslint: {
    ignoreDuringBuilds: true
  },
  
  // Optimisation pour le site one-page
  poweredByHeader: false,  // Supprime l'en-tête X-Powered-By pour la sécurité
};

module.exports = nextConfig;