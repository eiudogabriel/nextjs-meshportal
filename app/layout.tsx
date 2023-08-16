import './globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'

const font = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nextjs R3F',
  description: 'A nextJS site that shows 3d Models.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
