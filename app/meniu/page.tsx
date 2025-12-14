import Script from 'next/script';
import { Metadata } from 'next';
import Link from 'next/link';
import {Phone} from 'lucide-react';
import MenuTabs from '../components/menu-tabs/menu-tabs';

export const metadata: Metadata = {
  title: 'Meniu Complet Drag Restaurant & Catering - Restaurant și Catering Iași | Preparate Tradiționale Românești',
  description: 'Descoperă meniul complet Drag Restaurant & Catering din Iași cu preparate tradiționale românești și internaționale. Servicii de restaurant și catering premium pentru evenimente speciale.',
  keywords: [
    'meniu Drag Restaurant & Catering iași',
    'restaurant iași meniu',
    'catering meniu complet',
    'preparate tradiționale iași', 
    'mâncare românească iași',
    'restaurant tradițional iași',
    'catering evenimente iași',
    'drag restaurant meniu prețuri',
    'bucătărie românească autentică',
    'servicii catering profesionale iași'
  ].join(', '),
  
  openGraph: {
    title: 'Meniu Complet Drag Restaurant & Catering - Preparate Premium Iași',
    description: 'Explorează varietatea de preparate autentice din meniul nostru complet. Bucătărie tradițională românească și internațională în Iași.',
    type: 'website',
    locale: 'ro_RO',
    url: 'https://www.dragcatering.ro/meniu',
    siteName: 'Drag Restaurant & Catering',
    images: [
      {
        url: '/og-images/meniu-drag-catering.jpg',
        width: 1200,
        height: 630,
        alt: 'Meniu Complet Drag Restaurant & Catering - Restaurant și Catering Iași',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Meniu Complet Drag Restaurant & Catering - Preparate Premium Iași',
    description: 'Explorează varietatea de preparate autentice din meniul nostru complet. Bucătărie tradițională românească și internațională.',
    images: ['/og-images/meniu-drag-catering.jpg'],
  },
  
  alternates: {
    canonical: 'https://www.dragcatering.ro/meniu',
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

export default function FullMenu() {
  // Structured Data pentru Restaurant Menu
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Meniu Complet Drag Restaurant & Catering",
    "description": "Meniul complet al restaurantului și serviciilor de catering Drag din Iași, cu preparate tradiționale românești și internaționale",
    "inLanguage": "ro-RO",
    "url": "https://www.dragcatering.ro/meniu",
    "provider": {
      "@type": "Restaurant",
      "name": "Drag Restaurant & Catering",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Strada Exemplu 123",
        "addressLocality": "Iași",
        "addressRegion": "Iași",
        "postalCode": "700000",
        "addressCountry": "RO"
      },
      "telephone": "+40741664241",
      "url": "https://www.dragcatering.ro",
      "servesCuisine": ["Romanian", "Traditional", "International", "Italian"],
      "priceRange": "$$",
      "acceptsReservations": true
    },
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": "Ciorbe",
        "description": "Ciorbă de pui, burtă, văcuță, legume, fasole, perișoare, rădăuțeană"
      },
      {
        "@type": "MenuSection",
        "name": "Aperitive",
        "description": "Cremă de brânză, pate de pui, salată de vinete, hummus"
      },
      {
        "@type": "MenuSection",
        "name": "Salate",
        "description": "Salată grecească, cu ton, asortată, de varză, de sfeclă cu hrean"
      },
      {
        "@type": "MenuSection",
        "name": "Platouri Calde",
        "description": "Platoul Gurmandului, Platou Pui, Platou Drag"
      },
      {
        "@type": "MenuSection",
        "name": "Preparate din Pește",
        "description": "Hamsii, Somon la grătar, Păstrăv"
      },
      {
        "@type": "MenuSection",
        "name": "Preparate din Carne",
        "description": "Pui, porc, vită și miel - diverse preparate la grătar și coapte"
      },
      {
        "@type": "MenuSection",
        "name": "Pizza",
        "description": "Varietate largă de pizza tradițională italiană"
      },
      {
        "@type": "MenuSection",
        "name": "Burgeri",
        "description": "Gourmand Burger, Classic Burger, Cheeseburger"
      },
      {
        "@type": "MenuSection",
        "name": "Deserturi",
        "description": "Clătite, papanași, lava cake, înghețată asortată"
      },
      {
        "@type": "MenuSection",
        "name": "Băuturi",
        "description": "Răcoritoare, cafea, băuturi alcoolice, vinuri"
      }
    ]
  };

  return (
    <>
      {/* Structured Data Script */}
      <Script
        id="menu-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main itemScope itemType="https://schema.org/Menu" className="mt-20 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section optimizat pentru SEO */}
          <header className="text-center">
            <div className="inline-block bg-gold/10 px-6 py-2 rounded-full mb-6">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">Meniu Complet</span>
            </div>
            <h1 
              itemProp="name"
              className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-6"
            >
              Descoperă <span className="text-gold font-dancing">Meniul</span>
            </h1>
            <p 
              itemProp="description"
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              De la mese în familie la evenimente speciale – preparate autentice, gătite cu drag
            </p>
            
            {/* Keywords naturale pentru context - ascunse vizual dar indexabile */}
            <div className="sr-only" itemProp="keywords">
              restaurant iași, catering iași, preparate tradiționale, bucătărie românească, meniu restaurant, servicii catering evenimente, Drag Restaurant & Catering meniu prețuri
            </div>
          </header>

          <section className="mb-20">
            {/* Componentele cu tab-uri și carduri pentru meniu */}
            <MenuTabs />
          </section>

          {/* Content Section pentru SEO */}
          <section className="bg-white rounded-3xl p-8 shadow-lg mb-16">
            {/* <div className="prose max-w-6xl mx-auto flex flex-col justify-center items-center"> */}
              {/* <h2 className="text-3xl font-playfair font-bold text-charcoal mb-6 text-center">
                Categoriile din Meniul Nostru
              </h2>
              <p className="text-gray-700 mb-8 text-lg max-w-3xl leading-relaxed text-center">
                Meniul complet <span className="text-gold">Drag Restaurant & Catering</span> include o selecție bogată de preparate tradiționale românești
                și specialități internaționale, toate pregătite cu ingrediente proaspete și
                rețete autentice în restaurantul nostru din Iași.
              </p> */}
              
              {/* Grid cu categorii de preparate */}
              {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {categories.map(cat => (
                  <div
                    key={cat.title}
                    className={`bg-gradient-to-br ${cat.bg} p-6 rounded-2xl border`}
                  >
                    <h3 className="text-xl font-bold text-charcoal mb-3 flex items-center">
                      {cat.icon} <span className="ml-2">{cat.title}</span>
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                ))}
              </div> */}

              {/* Servicii Section */}
              <div className=" grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-r from-gold/10 to-cream/30 p-8 rounded-3xl">
                  <h3 className="text-2xl font-playfair font-bold text-charcoal mb-4 flex items-center">
                    🏪 Servicii Disponibile
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span><strong>Restaurant</strong> - Experiență culinară în atmosferă tradițională</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span><strong>Catering pentru evenimente</strong> - Nunți, botezuri, zile de naștere, evenimente corporate etc.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span><strong>Comenzi personalizate</strong> - Meniu adaptat preferințelor dvs.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span><strong>Livrare la domiciliu</strong> - În zona Iași</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-cream/30 to-gold/10 p-8 rounded-3xl">
                  <h3 className="text-2xl font-playfair font-bold text-charcoal mb-4">
                    De ce să alegi Drag Restaurant & Catering?
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    Echipa noastră de bucătari profesioniști pregătește fiecare preparat cu atenție la detalii,
                    folosind doar ingrediente locale și de calitate superioară.
                    Fie că organizezi o nuntă în Iași, un botez, o zi de naștere,
                    o petrecere corporate sau orice alt eveniment, meniul nostru oferă opțiuni pentru toate gusturile.
                  </p>
                </div>
              </div>
            {/* </div> */}
          </section>

          {/* Call to Action Section */}
          <section className="text-center p-8 bg-gradient-to-r from-gold/10 to-cream/30 rounded-3xl">
            <h2 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-4">
              Alege-ți Preparatele Preferate
            </h2>
            <p className="text:md md:text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Pentru rezervări la restaurant sau servicii de catering, 
              contactează-ne direct sau vizitează restaurantul nostru.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link 
                href="/contact" 
                className="primary"
                aria-label="Contactează Drag Restaurant & Catering pentru rezervări"
              >
                Contactează-ne
              </Link>
              <a 
                href="tel:0755253253" 
                className="secondary"
                aria-label="Sună la numărul 0755253253 pentru comenzi și rezervări"
              >
                <Phone className="w-5 h-5 mr-3" fill="currentColor" aria-hidden="true" />
                0755 253 253
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}