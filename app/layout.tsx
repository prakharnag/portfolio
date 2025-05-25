import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../src/index.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prakhar Nag',
  description: 'Software Engineer Portfolio',
  icons: {
    icon: [
      { url: '/assets/images/prakhar.png', sizes: 'any' },
    ],
    apple: [
      { url: '/assets/images/prakhar.png' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    images: [
      {
        url: '/assets/images/prakhar.png',
        width: 1200,
        height: 630,
        alt: 'Prakhar Nag',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/assets/images/prakhar.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/prakhar.png" sizes="any" />
        <link rel="apple-touch-icon" href="/assets/images/prakhar.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta property="og:image" content="/assets/images/prakhar.png" />
        <meta name="twitter:image" content="/assets/images/prakhar.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 