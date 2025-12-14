import { Metadata } from 'next';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import PlatesTabs from '../components/plates-tabs/plates-tabs';

export const metadata: Metadata = {
  title: 'Platouri Drag Catering - Restaurant și Catering Iași | Preparate Tradiționale Românești',
  description: 'Descoperă platourile Drag Catering din Iași cu preparate tradiționale românești și internaționale. Servicii de restaurant și catering premium pentru evenimente speciale.',
  keywords: [
    'platouri drag catering iași',
    'restaurant iași platouri',
    'catering platouri complete',
    'preparate tradiționale iași',
    'mâncare românească iași',
    'restaurant tradițional iași',
    'catering evenimente iași',
    'drag restaurant platouri prețuri',
    'bucătărie românească autentică',
    'servicii catering profesionale iași'
  ].join(', '),
  
  openGraph: {
    title: 'Platouri Drag Catering - Preparate Premium Iași',
    description: 'Explorează varietatea de platouri autentice din meniul nostru complet. Bucătărie tradițională românească și internațională în Iași.',
    type: 'website',
    locale: 'ro_RO',
    url: 'https://www.dragcatering.ro/platouri',
    siteName: 'Drag Catering',
    images: [
      {
        url: '/og-images/platouri-drag-catering.jpg',
        width: 1200,
        height: 630,
        alt: 'Platouri Drag Catering - Restaurant și Catering Iași',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Platouri Drag Catering - Preparate Premium Iași',
    description: 'Explorează varietatea de platouri autentice din meniul nostru complet. Bucătărie tradițională românească și internațională.',
    images: ['/og-images/platouri-drag-catering.jpg'],
  },
  
  alternates: {
    canonical: 'https://www.dragcatering.ro/platouri',
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  other: {
    'geo.region': 'RO-IS',
    'geo.placename': 'Iași',
    'geo.position': '47.1585;27.6014',
    'ICBM': '47.1585, 27.6014',
  },
};

export default function PlatouriPage() {
  return (
    <>
      <main itemScope itemType="https://schema.org/Menu" className="mt-20 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-8">
            <div className="inline-block bg-gold/10 px-6 py-2 rounded-full mb-6">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">Platouri</span>
            </div>
            <h1 
              itemProp="name"
              className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-6"
            >
              Descoperă <span className="text-gold font-dancing">Platourile</span>
            </h1>
            <p 
              itemProp="description"
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              De la evenimente speciale la mese în familie – platouri autentice, gătite cu drag.
            </p>
          </header>

          <section className="mb-20">
            {/* Componentele cu tab-uri și carduri pentru platouri */}
            <PlatesTabs />
          </section>

          <section className="text-center p-8 bg-gradient-to-r from-gold/10 to-cream/30 rounded-3xl">
            <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
              Alege-ți Platourile Preferate
            </h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Pentru rezervări la restaurant sau servicii de catering, 
              contactează-ne direct sau vizitează restaurantul nostru.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link 
                href="/contact" 
                className="primary"
                aria-label="Contactează Drag Catering pentru rezervări"
              >
                Contactează-ne
              </Link>
              <a 
                href="tel:0741664241" 
                className="secondary"
                aria-label="Sună la numărul 0741664241 pentru rezervări"
              >
                <Phone className="w-5 h-5 mr-3" fill="currentColor" aria-hidden="true" />
                +40 741 664 241
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
