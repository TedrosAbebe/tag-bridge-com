import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from './contexts/LanguageContext'
import LanguageWrapper from './components/LanguageWrapper'

const inter = Inter({ subsets: ['latin'] })

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://tag-bridge-com.vercel.app'),
  title: 'TagBridge - We bridge the gap between your problems and solutions',
  description: 'TagBridge specializes in AI tool reviews, app analysis, software solutions, ERP systems, and crypto insights. Your trusted digital solutions partner.',
  keywords: 'AI tools, app reviews, software solutions, ERP systems, crypto insights, technology analysis, digital solutions, TagBridge, ታግብሪጅ, AI መሳሪያዎች, የመተግበሪያ ግምገማዎች',
  authors: [{ name: 'TagBridge' }],
  openGraph: {
    title: 'TagBridge - We bridge the gap between your problems and solutions',
    description: 'Specialized content creators focused on AI tools, app reviews, software solutions, and digital innovation insights.',
    type: 'website',
    locale: 'en_US',
    siteName: 'TagBridge',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TagBridge - We bridge the gap between your problems and solutions',
    description: 'Your trusted partner for AI tool reviews, software analysis, and digital solutions.',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <LanguageWrapper>
            {children}
          </LanguageWrapper>
        </LanguageProvider>
      </body>
    </html>
  )
}