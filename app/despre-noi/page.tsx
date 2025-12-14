import { Metadata } from 'next';
import Link from 'next/link';
import { Leaf, Handshake, Heart, Shield, Mail, Phone } from 'lucide-react';
import {passion, excellence} from '../helpers/constants/images-src';
import SlideShow from '../components/slideshow/Slideshow';

export const metadata: Metadata = {
  title: 'Despre Drag Restaurant & Catering - Povestea Noastră | Restaurant și Catering Premium Iași',
  description: 'Descoperă povestea Drag Restaurant & Catering din Iași. Aducem autenticitatea gusturilor românești și rafinamentul bucătăriei internaționale.',
  keywords: 'despre Drag Restaurant & Catering, povestea restaurantului, catering iași istorie, echipa Drag Restaurant & Catering, experiență culinară iași, restaurant tradițional românesc',
  openGraph: {
    title: 'Despre Drag Restaurant & Catering - Povestea Unei Pasiuni Culinare în Iași',
    description: 'Drag Restaurant & Catering combină tradițiile culinare românești cu inovațiile moderne. Descoperă valorile și misiunea noastră.',
    type: 'website',
    locale: 'ro_RO',
    siteName: 'Drag Restaurant & Catering',
    images: [
      {
        url: 'https://dragcatering.ro/images/drag-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Drag Restaurant & Catering - Interior elegant restaurant Iași',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Despre Drag Restaurant & Catering - Povestea Unei Pasiuni Culinare în Iași',
    description: 'Drag Restaurant & Catering din Iași aduce autenticitate și rafinament.',
    images: ['https://dragcatering.ro/images/drag-1.jpg'],
  },
  alternates: {
    canonical: 'https://dragcatering.ro/despre-noi'
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
};

export default function AboutDetailed() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Drag Restaurant & Catering",
    "description": "Restaurant și servicii de catering premium în Iași cu peste 15 ani de experiență în arta culinară, specializat în bucătăria tradițională românească și internațională.",
    "foundingDate": "2008",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bulevardul Poitiers 12",
      "addressLocality": "Iași",
      "addressRegion": "Iași",
      "postalCode": "700671",
      "addressCountry": "RO"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "47.1364962954733",
        "longitude": "27.5900120231487"
      },
      "geoRadius": "50000"
    },
    "servesCuisine": ["Romanian", "International", "European"],
    "priceRange": "$$",
    "telephone": "+40741664241",
    "email": "contact@dragcatering.ro",
    "url": "https://dragcatering.ro",
    "logo": "https://dragcatering.ro/drag-logo.png",
    "image": [
      "https://dragcatering.ro/images/drag-1.jpg",
      "https://dragcatering.ro/images/drag-2.jpg"
    ],
    "sameAs": [
      "https://www.facebook.com/dragcatering",
      "https://www.instagram.com/dragcatering"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <section className="mt-20 py-20 bg-white" itemScope itemType="https://schema.org/AboutPage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <header className="text-center mb-15">
            <div className="inline-block px-6 py-2 rounded-full mb-6">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">Povestea Noastră</span>
            </div>
            <h1 className="text-4xl md:text-5xl md:text-6xl font-playfair font-bold text-charcoal mb-6" itemProp="name">
              Povestea <span className="text-gold font-dancing">Drag Restaurant & Catering</span> Iași
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-5 leading-relaxed" itemProp="description">
              Drag Restaurant & Catering din Iași aduce autenticitatea gusturilor românești și rafinamentul bucătăriei internaționale 
              atât în restaurantul nostru, cât și direct la masa dumneavoastră prin serviciile de catering premium.
            </p>
          </header>

        {/* Our Story */}
        <article className="bg-cream/50 rounded-3xl p-12 md:p-16 mb-15" itemScope itemType="https://schema.org/Article">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                <h3 className="text-xl md:text-2xl font-playfair font-semibold text-charcoal mb-8">
                  Pasiune și Tradiție la Fiecare Pas
                </h3>
                <p className="text:md md:text-lg">
                  Drag Restaurant & Catering s-a născut din pasiunea pentru bucătăria tradițională românească 
                  și dorința de a oferi experiențe culinare autentice. Începuturile noastre 
                  modeste s-au transformat treptat într-o poveste de succes, bazată pe dedicarea 
                  față de calitate și satisfacția clienților.
                </p>
                <p className="text:md md:text-lg">
                  De-a lungul anilor, am avut privilegiul să fim partenerii culinari pentru 
                  mii de evenimente speciale - de la nunți elegante până la conferințe corporate moderne.
                </p>
              </div>
              <SlideShow images={passion} />
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <SlideShow images={excellence} />

              <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                <h3 className="text-xl md:text-2xl font-playfair font-semibold text-charcoal mb-8">
                  Excelența în Fiecare Detaliu
                </h3>
                <p className="text:md md:text-lg text-gray-700 leading-relaxed">
                  Astăzi, echipa noastră de bucătari experimentați combină tehnicile culinare 
                  tradiționale cu inovațiile moderne, creând meniuri care satisfac cele mai 
                  rafinate gusturi.
                </p>
                <p className="text:md md:text-lg text-gray-700 leading-relaxed">
                  Rămânem fideli originilor noastre, oferind întotdeauna preparate proaspete, 
                  savuroase și prezentate cu grijă pentru detalii. Fiecare farfurie spune 
                  o poveste de dedicare și măiestrie culinară.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Our Values */}
        <section className="mb-15">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center text-charcoal mb-8">
            Valorile Care Ne Definesc
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <article className="text-center p-4 px-8" itemScope itemType="https://schema.org/Thing">
              <div className="rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-lg md:text-xl font-playfair font-semibold text-charcoal mb-4" itemProp="name">Ingrediente Proaspete</h3>
              <p className="text-gray-600 leading-relaxed" itemProp="description">
                Colaborăm exclusiv cu furnizori locali de încredere pentru a garanta 
                prospețimea și calitatea superioară a tuturor ingredientelor.
              </p>
            </article>

            <article className="text-center p-4 px-8" itemScope itemType="https://schema.org/Thing">
              <div className="rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-lg md:text-xl font-playfair font-semibold text-charcoal mb-4" itemProp="name">Respect și Integritate</h3>
              <p className="text-gray-600 leading-relaxed" itemProp="description">
                Construim relații bazate pe încredere și corectitudine, atât cu clienții noștri, cât și cu partenerii și echipa noastră.
              </p>
            </article>

            <article className="text-center p-4 px-8" itemScope itemType="https://schema.org/Thing">
              <div className="rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-lg md:text-xl font-playfair font-semibold text-charcoal mb-4" itemProp="name">Pasiune pentru Ospitalitate</h3>
              <p className="text-gray-600 leading-relaxed" itemProp="description">
                Oferim mai mult decât mâncare: creăm atmosferă, grijă și bucurie, pentru ca fiecare moment să fie memorabil.
              </p>
            </article>

            <article className="text-center p-4 px-8" itemScope itemType="https://schema.org/Thing">
              <div className="rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-lg md:text-xl font-playfair font-semibold text-charcoal mb-4" itemProp="name">Calm și Siguranță</h3>
              <p className="text-gray-600 leading-relaxed" itemProp="description">
                Asigurăm o experiență fără griji, prin organizare impecabilă, punctualitate și respectarea celor mai înalte standarde de siguranță alimentară.
              </p>
            </article>
          </div>
        </section>

        {/* <section className="grid md:grid-cols-2 gap-8 mb-15">
          <aside>
            <figure className="aspect-[4/3] rounded-3xl overflow-hidden">
              <Image 
                src="/images/drag-1.jpg"
                alt="Interior elegant al Restaurantului Drag Restaurant & Catering din Iași - atmosferă caldă și elegantă pentru evenimente speciale"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </figure>
            <article className="bg-cream/50 p-12 rounded-3xl mt-10 text-justify" itemScope itemType="https://schema.org/Mission">
              <div className="text-gold mb-6">
                <Heart className="w-8 h-8" fill="currentColor" />
              </div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-6">Misiunea Noastră</h2>
              <p className="text-gray-700 leading-relaxed mb-6" itemProp="description">
                Credem că fiecare masă este o oportunitate de a crea amintiri de neuitat. 
                Misiunea noastră este să transformăm fiecare experiență culinară într-o poveste 
                memorabilă, fie că vă așteptăm în restaurantul nostru din Iași sau venim la dumneavoastră 
                prin serviciile de catering.
              </p>
              <p className="text-gray-700 leading-relaxed">
                De la cine intime în restaurantul nostru la nunți elegante, de la conferințe corporate 
                la petreceri private, aducem aceeași pasiune și atenție la detalii în fiecare preparat servit.
              </p>
            </article>
          </aside>
          
          <aside>
            <figure className="aspect-[4/3] rounded-3xl overflow-hidden">
              <Image 
                src="/images/drag-2.jpg"
                alt="Echipa profesională Drag Restaurant & Catering în bucătărie - bucătari experimentați pregătind preparate de calitate superioară"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </figure>
            <article className="bg-cream/50 p-12 rounded-3xl mt-10 text-justify" itemScope itemType="https://schema.org/Vision">
              <div className="text-gold mb-6">
                <Star className="w-8 h-8" fill="currentColor"/>
              </div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-6">Viziunea Noastră</h2>
              <p className="text-gray-700 leading-relaxed mb-6" itemProp="description">
                Să devenim compania de catering din Iași recunoscută pentru excelența culinară, serviciul impecabil și modul în care transformăm fiecare eveniment într-o experiență memorabilă. Dorim să fim prima alegere a celor care caută rafinament și ospitalitate.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Aspirăm să păstrăm și să promovăm tradițiile culinare românești, 
                îmbinându-le armonios cu tendințele moderne ale gastronomiei internaționale.
              </p>
            </article>
          </aside>
        </section> */}
    </div>

      {/* Call to Action */}
      <footer className="text-center p-8 rounded-2xl">
        <h3 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-6">
          Să Creem Împreună Amintiri de Neuitat
        </h3>
        <p className="text-md md:text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
          Contactați-ne astăzi pentru a discuta despre evenimentul dumneavoastră. 
          Echipa noastră este pregătită să transforme viziunea culinară în realitate.
        </p>
        <nav className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/contact" 
            className="primary"
          >
            <Mail className="mr-3 w-5 h-5" />
            Contactează-ne
          </Link>
          <a 
            href="tel:0741664241" 
            className="secondary"
          >
            <Phone className="mr-3 w-5 h-5" />
            Sună Acum
          </a>
        </nav>
      </footer>
    </section>
    </>
  );
}