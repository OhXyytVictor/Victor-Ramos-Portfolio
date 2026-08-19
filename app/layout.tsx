import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio Victor Ramos',
  description: 'Portfolio de Victor Ramos',
  generator: 'v0.dev',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  )
}
