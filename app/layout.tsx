import './globals.css'
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CookieBanner } from "@/components/ui/cookie-banner"
import Script from "next/script"
import { cn } from "@/lib/utils"
import { Montserrat, Roboto } from "next/font/google"
import { UmamiScript } from '@/components/analytics/umami-script'

// Fonction de diagnostic au démarrage de l'application
function logEnvironmentStatus() {
  if (typeof window === 'undefined') {
    // Exécuté uniquement côté serveur
    console.log("[DEPLOYMENT] ========== DIAGNOSTIC DE DÉPLOIEMENT ==========");
    console.log("[DEPLOYMENT] Next.js version:", require('next/package.json').version);
    console.log("[DEPLOYMENT] Node.js version:", process.version);
    
    // Vérification des variables d'environnement critiques (sans exposer les valeurs)
    console.log("[DEPLOYMENT] Variables d'environnement :");
    console.log("[DEPLOYMENT] - NEXT_PUBLIC_EMAILJS_SERVICE_ID présent:", !!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
    console.log("[DEPLOYMENT] - NEXT_PUBLIC_EMAILJS_TEMPLATE_ID présent:", !!process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
    console.log("[DEPLOYMENT] - NEXT_PUBLIC_EMAILJS_PUBLIC_KEY présent:", !!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    console.log("[DEPLOYMENT] - NEXT_PUBLIC_UMAMI_WEBSITE_ID présent:", !!process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID);
    console.log("[DEPLOYMENT] - MAUTIC_BASE_URL présent:", !!process.env.MAUTIC_BASE_URL);
    console.log("[DEPLOYMENT] - MAUTIC_USERNAME présent:", !!process.env.MAUTIC_USERNAME);
    console.log("[DEPLOYMENT] - MAUTIC_PASSWORD présent:", !!process.env.MAUTIC_PASSWORD);
    console.log("[DEPLOYMENT] - MAUTIC_FORM_ID présent:", !!process.env.MAUTIC_FORM_ID);
    console.log("[DEPLOYMENT] ==============================================");

    // Vérifier les modules installés
    try {
      require('@emailjs/browser');
      console.log("[DEPLOYMENT] Module @emailjs/browser correctement chargé");
    } catch (e) {
      console.error("[DEPLOYMENT] ERREUR: Module @emailjs/browser non trouvé");
      console.error("[DEPLOYMENT] Détails:", e);
    }
  }
}

// Appel de la fonction de diagnostic
logEnvironmentStatus();

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: "Dark Data Labs - Expertise en Data Science & IA",
  description: "Dark Data Labs - Votre partenaire en Data Science et Intelligence Artificielle. Transformez vos données en insights actionnables.",
  icons: [
    {
      rel: 'icon',
      url: '/favicon.png',
      type: 'image/png',
    },
    {
      rel: 'apple-touch-icon',
      url: '/favicon.png',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-roboto antialiased",
        montserrat.variable,
        roboto.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="darkdatalabs-theme"
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <CookieBanner />
          </div>
        </ThemeProvider>
        <UmamiScript />
      </body>
    </html>
  )
}