import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Montserrat, Roboto, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { ProgressBar } from '@/components/ui/progress-bar'
import { Toaster } from "@/components/ui/toaster"
import { MobileOptimizationProvider } from '@/contexts/MobileOptimizationContext'
import { useImagePreloader } from "@/hooks/useImagePreloader"

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['600', '700'],
})

const roboto = Roboto({ 
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

const inter = Inter({ subsets: ['latin'] })

// Images critiques à précharger
const criticalImages = [
  { src: '/images/hero-background.jpg', width: 1920, height: 1080 },
  { src: '/images/about/team-photo.jpg', width: 800, height: 600 },
];

// Images de haute priorité
const highPriorityImages = [
  { src: '/images/challenges/automation.jpg', width: 400, height: 300 },
  { src: '/images/challenges/data-potential.jpg', width: 400, height: 300 },
];

export const metadata: Metadata = {
  title: 'Dark Data Labs - Transform Your Data into Measurable Growth',
  description: 'Dark Data Labs aide les PME ambitieuses à exploiter leurs données pour générer de la croissance mesurable.',
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Préchargement des images critiques
  useImagePreloader(criticalImages, { priority: 'critical' });
  
  // Préchargement des images de haute priorité
  useImagePreloader(highPriorityImages, { 
    priority: 'high',
    threshold: 1500 
  });

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        <link rel="preload" as="image" href="/images/hero-background.jpg" />
      </head>
      <body className={`${montserrat.variable} ${roboto.variable} ${jetbrainsMono.variable} ${inter.className} font-roboto`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <MobileOptimizationProvider>
            <ProgressBar />
            {children}
            <Toaster />
          </MobileOptimizationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}