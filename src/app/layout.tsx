import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './style.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LexoGuess',
  description: 'LexoGuess is a vibrant and challenging word puzzle inspired by the popular game Wordle. Guess the hidden word, crack the code, and enjoy the thrill of linguistic discovery in this addictive and fun-filled adventure!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
