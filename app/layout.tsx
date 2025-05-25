import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../src/index.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prakhar Nag - Portfolio',
  description: 'Software Engineer Portfolio',
  icons: {
    icon: [
      { url: 'https://imagizer.imageshack.com/img923/623/o1YQTc.png', sizes: 'any' },
    ],
    apple: [
      { url: 'https://imagizer.imageshack.com/img923/623/o1YQTc.png' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    images: [
      {
        url: 'https://imagizer.imageshack.com/img923/623/o1YQTc.png',
        width: 1200,
        height: 630,
        alt: 'Prakhar Nag',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://imagizer.imageshack.com/img923/623/o1YQTc.png'],
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
        <link rel="icon" href="https://imagizer.imageshack.com/img923/623/o1YQTc.png" sizes="any" />
        <link rel="apple-touch-icon" href="https://imagizer.imageshack.com/img923/623/o1YQTc.png" />
        <meta property="og:image" content="https://imagizer.imageshack.com/img923/623/o1YQTc.png" />
        <meta name="twitter:image" content="https://imagizer.imageshack.com/img923/623/o1YQTc.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 