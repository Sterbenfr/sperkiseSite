import Navbar from '@/components/Navbar'
import '../style/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sperkise - Club de Minéralogie et de Paléontologie de Wasquehal ',
  description:
    'Site du club de Minéralogie et de Paléontologie de la Métropole Nord - Wasquehal: Sperkise',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
