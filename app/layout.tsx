import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script } from 'next/font/google'
import "./globals.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const dancing = Dancing_Script({ subsets: ['latin'], variable: '--font-dancing' })

export const metadata: Metadata = {
  title: 'Drag Restaurant&Catering',
  description: 'Drag Restaurant&Catering vă oferă o experiență unică, fie că doriți să vă delectați cu mâncăruri tradiționale românești sau să sărbătoriți evenimente speciale.',
  keywords: 'catering, restaurant, romanesc, Iasi, mancare traditionala, evenimente',
  openGraph: {
    title: 'Drag Restaurant&Catering - Românesc Autentic',
    description: 'Restaurant și servicii de catering profesionale cu specific românesc în Iași',
    url: 'https://dragcatering.ro',
    siteName: 'Drag Restaurant&Catering',
    images: [
      {
        url: '/icon.png',
        width: 500,
        height: 500,
      },
    ],
    locale: 'ro_RO',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className={`${inter.variable} ${playfair.variable} ${dancing.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
          <Header />
          <main>{children}</main>
          <Footer />
      </body>
    </html>
  )
}
