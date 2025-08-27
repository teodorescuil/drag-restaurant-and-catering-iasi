import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, Car, Bus, User, Wifi, ParkingCircle, Navigation, Route } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Drag Catering - Catering și Restaurant Premium în Iași | Rezervări Evenimente',
  description: 'Contactează Drag Catering pentru servicii de catering premium în Iași. Telefon: +40 754 824 625. Consultanță gratuită pentru evenimente, nunți și servicii de restaurant.',
  keywords: 'contact drag catering, catering iași, restaurant iași, rezervări evenimente, catering nuntă iași, drag catering contact',
  openGraph: {
    title: 'Contact Drag Catering - Catering Evenimente Premium Iași',
    description: 'Transformăm visurile tale culinare în realitate. Contactează Drag Catering pentru servicii premium și consultanță personalizată în Iași.',
    type: 'website',
    locale: 'ro_RO',
  },
  alternates: {
    canonical: 'https://dragcatering.ro/contact'
  }
};

export default function ContactDetailed() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Drag Catering",
    "alternateName": "Drag Catering & Restaurant",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bulevardul Poitiers 12",
      "addressLocality": "Iași",
      "postalCode": "700671",
      "addressCountry": "RO"
    },
    "telephone": "+40754824625",
    "email": "contact@dragcatering.ro",
    "openingHours": [
      "Mo-Th 10:00-22:00",
      "Fr-Su 10:00-00:00"
    ],
    "servesCuisine": ["Romanian", "International"],
    "priceRange": "$$",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "47.1364962954733",
      "longitude": "27.5900120231487"
    },
    "url": "https://dragcatering.ro",
    "sameAs": [
      "https://www.facebook.com/dragcatering",
      "https://www.instagram.com/dragcatering"
    ],
    "hasMenu": "https://dragcatering.ro/meniu",
    "acceptsReservations": true
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="mt-20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <header className="text-center mb-16">
            <div className="inline-block bg-gold/10 px-6 py-2 rounded-full mb-6">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">Contactează-ne</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-charcoal mb-6">
              Contact <span className="text-gold font-dancing">Drag Catering</span> Iași
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Suntem aici să transformăm visele tale culinare în realitate. Contactează echipa Drag Catering din Iași pentru o consultanță personalizată și o ofertă adaptată nevoilor tale pentru evenimente și restaurant.
            </p>
          </header>

          {/* Direct Contact - Full Width */}
          <section className="bg-white rounded-3xl p-8 mb-16" itemScope itemType="https://schema.org/Organization">
            <h2 className="text-3xl font-playfair font-bold text-charcoal mb-8 text-center">Informații Contact Drag Catering</h2>
            
            <address className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 not-italic">
              <article className="text-center">
                <div className="bg-gold/10 p-4 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  <Phone className="text-gold w-6 h-6" aria-label="Telefon contact" />
                </div>
                <h3 className="font-semibold text-charcoal mb-1">Telefon Rezervări</h3>
                <a href="tel:0754824625" className="text-gold font-semibold text-lg hover:underline" itemProp="telephone">
                  +40 754 824 625
                </a>
              </article>

              <article className="text-center">
                <div className="bg-gold/10 p-4 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  <Mail className="text-gold w-6 h-6" aria-label="Email contact" />
                </div>
                <h3 className="font-semibold text-charcoal mb-1">Email Contact</h3>
                <a href="mailto:contact@dragcatering.ro" className="text-gold font-semibold hover:underline break-all" itemProp="email">
                  contact@dragcatering.ro
                </a>
              </article>

              <article className="text-center" itemScope itemType="https://schema.org/PostalAddress">
                <div className="bg-gold/10 p-4 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  <MapPin className="text-gold w-6 h-6" aria-label="Adresa restaurant" />
                </div>
                <h3 className="font-semibold text-charcoal mb-1">Adresa Restaurant</h3>
                <address className="text-charcoal" itemProp="address">
                  <span itemProp="streetAddress">Bulevardul Poitiers 12</span>,<br />
                  <span itemProp="addressLocality">Iași</span> <span itemProp="postalCode">700671</span>, <span itemProp="addressCountry">România</span>
                </address>
              </article>

              <article className="text-center">
                <div className="bg-gold/10 p-4 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  <Clock className="text-gold w-6 h-6" aria-label="Program restaurant" />
                </div>
                <h3 className="font-semibold text-charcoal mb-1">Program Restaurant</h3>
                <time className="text-gray-600 text-sm block" itemProp="openingHours">
                  <p>Luni - Joi: 10:00 - 22:00</p>
                  <p>Vineri - Duminică: 10:00 - 00:00</p>
                </time>
              </article>
            </address>
          </section>

          {/* Map Section */}
          <section className="bg-white rounded-3xl p-8">
            <h2 className="text-3xl font-playfair font-bold text-charcoal mb-8 text-center">Locația <span className="text-gold">Drag Catering</span> în Iași</h2>
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Google Maps Embed */}
              <figure className="lg:col-span-2">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1001.2648012498357!2d27.5900120231487!3d47.1364962954733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb99fc71293f%3A0xc54584d1f82cff77!2sDrag%20Restaurant!5e1!3m2!1sen!2sro!4v1753522494068!5m2!1sen!2sro"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl"
                    title="Harta locație Drag Catering Iași - Bulevardul Poitiers 12"
                  ></iframe>
                </div>
                <figcaption className="sr-only">Harta interactivă cu locația Drag Catering pe Bulevardul Poitiers 12, Iași</figcaption>
              </figure>

              {/* Directions Info */}
              <aside className="space-y-6 grid sm:grid-cols-2 lg:grid-cols-1">
                <article>
                  <h3 className="font-bold text-charcoal mb-3">Cum Ajungi la Drag Catering</h3>
                  <dl className="space-y-4 text-gray-600">
                    <div className="flex items-start space-x-3">
                      <Car className="text-gold mt-1 w-[25px] h-[25px]" />
                      <div>
                        <dt className="font-medium">Cu mașina:</dt>
                        <dd className="text-sm">Parcare gratuită disponibilă în fața restaurantului</dd>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Bus className="text-gold mt-1 w-[25px] h-[25px]" />
                      <div>
                        <dt className="font-medium">Transport public:</dt>
                        <dd className="text-sm">Autobuze: 3, 8, 13 - Stația Poitiers</dd>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <User className="text-gold mt-1 w-[25px] h-[25px]" />
                      <div>
                        <dt className="font-medium">Pe jos:</dt>
                        <dd className="text-sm">5 minute de la Palas Mall</dd>
                      </div>
                    </div>
                  </dl>
                </article>

                <aside className="bg-gold/10 rounded-xl">
                  <h4 className="font-bold text-charcoal mb-2">Facilități Drag Catering</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center gap-2"><User className="w-4 h-4 text-gold" /> Acces pentru persoane cu dizabilități</li>
                    <li className="flex items-center gap-2"><Wifi className="w-4 h-4 text-gold" /> WiFi gratuit pentru clienți</li>
                    <li className="flex items-center gap-2"><ParkingCircle className="w-4 h-4 text-gold" /> Zonă de parcare privată</li>
                  </ul>
                </aside>

                <nav className="flex flex-col items-center lg:items-start gap-4 text-center sm:col-span-2 lg:col-span-1">
                  <a 
                    href="https://www.google.com/maps/place/Drag+Restaurant/@47.1366599,27.5912196,274m/data=!3m1!1e3!4m12!1m5!3m4!2zNDfCsDA4JzEyLjAiTiAyN8KwMzUnMzEuMSJF!8m2!3d47.1366773!4d27.5919749!3m5!1s0x40cafb99fc71293f:0xc54584d1f82cff77!8m2!3d47.1363867!4d27.5923591!16s%2Fg%2F11ld3l_t00?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors w-[270px]"
                  >
                    <Navigation className="mr-2 w-5 h-5" />
                    Deschide în Google Maps
                  </a>
                  {/* Waze Button - Only on Mobile */}
                  <a 
                    href="https://waze.com/ul?q=Bulevardul%20Poitiers%2012%2C%20Ia%C8%99i%20700671%2C%20Romania&navigate=yes" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="xl:hidden inline-flex items-center bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors w-[270px] justify-center"
                  >
                    <Route className="mr-2 w-5 h-5" />
                    Deschide în Waze
                  </a>
                </nav>
              </aside>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}