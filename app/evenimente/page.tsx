import {Phone} from 'lucide-react';
import SlideShow from "../components/slideshow/Slideshow";
import { eventsTypes } from "../helpers/constants/events";
export default function EventsDetailed() {
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
        <div className="space-y-20">
          {eventsTypes.map((event, index) => (
            <div key={event.id} id={event.slug} className={`scroll-mt-30 grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Images */}
              <SlideShow images={event.gallery} />

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <h2 className="text-4xl font-playfair font-bold text-charcoal">{event.name}</h2>
                <p className="text-lg text-gray-700 mb-2">{event.description}</p>
                <div className="bg-cream/70 rounded-xl p-4">
                  <p className="text-gray-600 leading-relaxed text-md text-justify">{event.detailedDescription}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="">
                    <h4 className="font-bold text-charcoal mb-3">Servicii Incluse:</h4>
                    <ul className="space-y-2">
                      {event.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-600 text-sm flex items-start">
                          <i className="fas fa-check text-gold mr-2 mt-0.5 text-xs"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="">
                    <h4 className="font-bold text-charcoal mb-3">Pachetul Include:</h4>
                    <ul className="grid gap-4">
                      {event.included.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700 text-sm flex items-start">
                          <i className="fas fa-star text-gold mr-2 mt-0.5 text-xs"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Capacitate:</span>
                    <span className="font-semibold text-charcoal">{event.capacity}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Durată:</span>
                    <span className="font-semibold text-charcoal">{event.duration}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-gold/20">
                    <span className="text-lg font-bold text-charcoal">Preț:</span>
                    <span className="text-xl font-bold text-gold">începând de la {event.priceRange}</span>
                  </div>
                </div> */}
                <nav className="flex flex-row justify-start">
                  <a 
                    href="tel:0754824625" 
                    className="secondary"
                  >
                    <Phone className="mr-3 w-5 h-5" fill="white" />
                    Sună Acum
                  </a>
                </nav>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-playfair font-bold text-charcoal mb-6">
            Următorul eveniment vă așteaptă la <span className="text-gold">Drag Catering</span>
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactați-ne pentru a vă rezerva locul sau pentru o consultanță gratuită despre cum putem organiza evenimentul perfect pentru dumneavoastră.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0754824625" 
              className="primary"
            >
              <i className="fas fa-phone mr-3"></i>
              0754 824 625
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