import type { Metadata } from 'next'
import { Orbitron, Rajdhani, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-orbitron',
})

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-rajdhani',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Victor Ramos // Game Programmer & Developer',
  description: 'Portfólio de Victor Ramos — Game Programmer (Unreal Engine 5, Unity, Roblox/Luau) & Software Developer.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${orbitron.variable} ${rajdhani.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased bg-[#050811] text-slate-100">
        {children}
      </body>
    </html>
  )
}
