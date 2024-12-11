import './globals.css'
import './brevo-styles.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Montserrat, Roboto, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { ProgressBar } from '@/components/ui/progress-bar'
import { Toaster } from "@/components/ui/toaster"
import Script from 'next/script'

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

export const metadata: Metadata = {
  title: 'Dark Data Labs - Transform Your Data into Measurable Growth',
  description: 'Premium technical expertise in data analysis and automation for ambitious SMEs. Custom solutions with guaranteed ROI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script 
          src="https://sibforms.com/forms/end-form/build/main.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${montserrat.variable} ${roboto.variable} ${jetbrainsMono.variable} ${inter.className} font-roboto`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ProgressBar />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}