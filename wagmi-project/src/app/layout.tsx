import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import { getConfig } from '../wagmi'
import { Providers } from './providers'
import { Header } from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Wagmi Project',
    description: 'Generated by create-wagmi + Next.js 14 + React 18',
}

export default function RootLayout(props: { children: ReactNode }) {
    // Aucune hydratation SSR : on laisse wagmi gérer son état côté client
    // (ou via cookieStorage, localStorage, etc. configuré dans `getConfig`).
    // Notez qu'on peut quand même faire du SSR si wagmi le gère.

    return (
        <html lang="en">
        <body className={inter.className}>
        <Providers>
            <Header />
            {props.children}
        </Providers>
        </body>
        </html>
    )
}
