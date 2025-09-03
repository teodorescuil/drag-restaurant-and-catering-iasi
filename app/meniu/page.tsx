import Script from 'next/script';
import { Metadata } from 'next';
import Link from 'next/link';
import {Phone} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Meniu Complet Drag Catering - Restaurant și Catering Iași | Preparate Tradiționale Românești',
  description: 'Descoperă meniul complet Drag Catering din Iași cu preparate tradiționale românești și internaționale. Servicii de restaurant și catering premium pentru evenimente speciale.',
  keywords: [
    'meniu drag catering iași',
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
    title: 'Meniu Complet Drag Catering - Preparate Premium Iași',
    description: 'Explorează varietatea de preparate autentice din meniul nostru complet. Bucătărie tradițională românească și internațională în Iași.',
    type: 'website',
    locale: 'ro_RO',
    url: 'https://www.dragcatering.ro/meniu',
    siteName: 'Drag Catering',
    images: [
      {
        url: '/og-images/meniu-drag-catering.jpg',
        width: 1200,
        height: 630,
        alt: 'Meniu Complet Drag Catering - Restaurant și Catering Iași',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Meniu Complet Drag Catering - Preparate Premium Iași',
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
    "name": "Meniu Complet Drag Catering",
    "description": "Meniul complet al restaurantului și serviciilor de catering Drag din Iași, cu preparate tradiționale românești și internaționale",
    "inLanguage": "ro-RO",
    "url": "https://www.dragcatering.ro/meniu",
    "provider": {
      "@type": "Restaurant",
      "name": "Drag Catering",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Strada Exemplu 123",
        "addressLocality": "Iași",
        "addressRegion": "Iași",
        "postalCode": "700000",
        "addressCountry": "RO"
      },
      "telephone": "+40754824625",
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

  // Array cu toate categoriile de produse pentru grid
  const categories = [
    {
      icon: "🍲",
      title: "Ciorbe",
      bg: "from-orange-50 to-orange-100 border-orange-200",
      description: "Ciorbă de pui, burtă, văcuță, legume, fasole, perișoare, rădăuțeană"
    },
    {
      icon: "🥟",
      title: "Aperitive",
      bg: "from-green-50 to-green-100 border-green-200",
      description: "Cremă de brânză, pate de pui, salată de vinete, hummus"
    },
    {
      icon: "🥗",
      title: "Salate",
      bg: "from-emerald-50 to-emerald-100 border-emerald-200",
      description: "Salată grecească, cu ton, asortată, de varză, de sfeclă cu hrean"
    },
    {
      icon: "🍝",
      title: "Paste",
      bg: "from-yellow-50 to-yellow-100 border-yellow-200",
      description: "Spaghetti Carbonara și alte specialități"
    },
    {
      icon: "🍖",
      title: "Platouri Calde",
      bg: "from-red-50 to-red-100 border-red-200",
      description: "Platoul Gurmandului, Platou Pui, Platou Drag"
    },
    {
      icon: "🐟",
      title: "Preparate din Pește",
      bg: "from-blue-50 to-blue-100 border-blue-200",
      description: "Hamsii, Somon la grătar, Păstrăv"
    },
    {
      icon: "🍗",
      title: "Preparate din Pui",
      bg: "from-amber-50 to-amber-100 border-amber-200",
      description: "Piept de pui, pulpe la grătar, pui copt lent, șnițel, crispy, coaste, kebab"
    },
    {
      icon: "🥩",
      title: "Carne de Porc, Vită și Miel",
      bg: "from-rose-50 to-rose-100 border-rose-200",
      description: "Ceafă de porc, cârnați, aripioare, antricot de vită, fălcuțe de vițel, pastramă de miel, tochitură moldovenească"
    },
    {
      icon: "🌱",
      title: "Preparate Vegane",
      bg: "from-lime-50 to-lime-100 border-lime-200",
      description: "Nuggets vegani, burger vegan, salată grecească cu brânză vegană"
    },
    {
      icon: "🍔",
      title: "Burgeri",
      bg: "from-purple-50 to-purple-100 border-purple-200",
      description: "Gourmand Burger, Classic Burger, Cheeseburger"
    },
    {
      icon: "🍕",
      title: "Pizza",
      bg: "from-indigo-50 to-indigo-100 border-indigo-200",
      description: "Diavola, Italia, Salami, Margherita, Quattro Formaggi, Quattro Stagioni, Vegetariana, Tonno, Gourmand, Orientală, Rustica, Pollo, Drag, Mortadella, Carnivore, Hawaii, Prosciutto e Funghi, Carbonara, Funghi"
    },
    {
      icon: "🍟",
      title: "Garnituri",
      bg: "from-stone-50 to-stone-100 border-stone-200",
      description: "Piure, cartofi pai, cartofi rustici, barabule coapte, legume la grătar"
    },
    {
      icon: "🥫",
      title: "Sosuri și Extra",
      bg: "from-orange-50 to-orange-100 border-orange-200",
      description: "Sosuri diverse (verdețuri, iaurt, rozé, ketchup etc.), pâinea casei, murături, focaccia"
    },
    {
      icon: "🍰",
      title: "Deserturi",
      bg: "from-pink-50 to-pink-100 border-pink-200",
      description: "Clătite cu ciocolată, clătite cu dulceață, papanași, lava cake, înghețată asortată"
    },
    {
      icon: "🥤",
      title: "Răcoritoare & Cafea",
      bg: "from-cyan-50 to-cyan-100 border-cyan-200",
      description: "Apă, sucuri, limonadă, ceaiuri, cafea, ciocolată caldă"
    },
    {
      icon: "🍺",
      title: "Băuturi Alcoolice",
      bg: "from-teal-50 to-teal-100 border-teal-200",
      description: "Bere (draft, brună, blondă, fără alcool, radler), cocktailuri, whisky, rom, gin, rachiu, lichior"
    },
    {
      icon: "🍷",
      title: "Crame de Vinuri",
      bg: "from-violet-50 to-violet-100 border-violet-200",
      description: "Vinuri albe, roșii, roze, spumante, vinul casei"
    }
  ];

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
          <header className="text-center mb-16">
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
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              De la mese în familie la evenimente speciale – preparate autentice, gătite cu drag
            </p>
            
            {/* Keywords naturale pentru context - ascunse vizual dar indexabile */}
            <div className="sr-only" itemProp="keywords">
              restaurant iași, catering iași, preparate tradiționale, bucătărie românească, meniu restaurant, servicii catering evenimente, drag catering meniu prețuri
            </div>
          </header>

          {/* PDF Viewer Section */}
          <section 
            className="bg-white rounded-3xl p-6 md:p-8 shadow-xl mb-16"
            aria-labelledby="pdf-section-title"
          >
            <h2 
              id="pdf-section-title" 
              className="text-2xl font-playfair font-bold text-charcoal mb-6 text-center"
            >
              Vizualizare Meniu PDF
            </h2>
            
            <div className="pdf w-full max-w-6xl mx-auto">
              <iframe
                src="/pdfs/meniu-drag-catering.pdf#toolbar=0"
                className="w-full h-[calc(100vh-200px)] rounded-xl shadow-lg border-2 border-gray-100"
                title="Meniu Complet Drag Catering - Preparate și Prețuri Restaurant Iași"
                aria-label="Meniul complet al restaurantului Drag Catering din Iași cu toate preparatele și prețurile"
                loading="lazy"
              />
            </div>
          </section>

          {/* Content Section pentru SEO */}
          <section className="bg-white rounded-3xl p-8 shadow-lg mb-16">
            <div className="prose max-w-6xl mx-auto flex flex-col justify-center items-center">
              <h2 className="text-3xl font-playfair font-bold text-charcoal mb-6 text-center">
                Categoriile din Meniul Nostru
              </h2>
              <p className="text-gray-700 mb-8 text-lg max-w-3xl leading-relaxed text-center">
                Meniul complet <span className="text-gold">Drag Catering</span> include o selecție bogată de preparate tradiționale românești
                și specialități internaționale, toate pregătite cu ingrediente proaspete și
                rețete autentice în restaurantul nostru din Iași.
              </p>
              
              {/* Grid cu categorii de preparate */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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
              </div>

              {/* Servicii Section */}
              <div className="mt-12 grid md:grid-cols-2 gap-8">
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
                    De ce să alegi Drag Catering?
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    Cu o experiență de peste 15 ani în industria HoReCa din Iași,
                    echipa noastră de bucătari profesioniști pregătește fiecare preparat cu atenție la detalii,
                    folosind doar ingrediente locale și de calitate superioară.
                    Fie că organizezi o nuntă în Iași, un botez, o zi de naștere,
                    o petrecere corporate sau orice alt eveniment, meniul nostru oferă opțiuni pentru toate gusturile.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="text-center p-8 bg-gradient-to-r from-gold/10 to-cream/30 rounded-3xl">
            <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
              Alege-ți Preparatele Preferate
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
                href="tel:0754824625" 
                className="secondary"
                aria-label="Sună la numărul 0754824625 pentru rezervări"
              >
                <Phone className="w-5 h-5 mr-3" fill="currentColor" aria-hidden="true" />
                +40 754 824 625
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}