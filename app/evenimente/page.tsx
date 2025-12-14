'use client';
import { eventsTypes } from "../helpers/constants/events";
import Events from "../components/events/events-detailed";
import useIsMobile from "../helpers/hooks/useIsMobile";

export default function EventsDetailed() {
  const isMobile = useIsMobile();
  return (
    <section className="mt-20 py-20 bg-gradient-to-br from-cream via-white to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gold/10 px-6 py-2 rounded-full mb-6">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">Experiențe culinare</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-charcoal mb-6">
            Evenimente <span className="text-gold font-dancing">Premium</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transformăm fiecare eveniment într-o experiență culinară memorabilă. Servicii complete de catering pentru toate tipurile de sărbători și evenimente speciale
          </p>
        </div>

        {/* Event Types */}
        <div className="space-y-4 md:space-y-20">
          {eventsTypes.map((event, index) => (
            <Events key={index} index={index} event={event} isMobile={isMobile} />
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-6">
            Următorul Eveniment Vă Așteaptă La <span className="text-gold">Drag Restaurant & Catering</span>
          </h3>
          <p className="text-md md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactați-ne pentru a vă rezerva locul sau pentru o consultanță gratuită despre cum putem organiza evenimentul perfect pentru dumneavoastră.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0741664241" 
              className="primary"
            >
              <i className="fas fa-phone mr-3"></i>
              0741 664 241
            </a>
            {/* <a 
              href="#contact" 
              className="inline-flex items-center border-2 border-gold text-gold px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold hover:text-white transition-colors duration-200"
            >
              <i className="fas fa-envelope mr-3"></i>
              Trimite Cerere de Ofertă
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}