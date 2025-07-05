import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mohd Saqib | Full Stack Developer',
  description: 'Portfolio of Mohd Saqib – Full Stack Developer skilled in React, Next.js, Node.js, and backend development. Explore projects, skills, and real-world work.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
