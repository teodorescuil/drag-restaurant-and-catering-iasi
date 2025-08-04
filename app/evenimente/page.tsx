/* eslint-disable @next/next/no-img-element */
// import Image from 'next/image';
// import {getCurrentWeek} from '../../utils/getCurrentWeek';
// import {days, foodWeeklyMenu} from '../../constants/weekly-menu';
// import {metadata} from '../../constants/metadata';
// import {sectionTopTitle, sectionWrapper, sectionTitle, sectionSubtitle} from '../../constants/styles';
// import { useRouter } from 'next/navigation';
import { eventsTypes } from "../constants/events";
export default function EventsDetailed() {

  return (
    <section className="mt-28 py-20 bg-gradient-to-br from-cream via-white to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gold/10 px-6 py-2 rounded-full mb-6">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">Servicii Complete</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-charcoal mb-6">
            Evenimente <span className="text-gold font-dancing">Premium</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transformăm fiecare eveniment într-o experiență culinară memorabilă. Servicii complete de catering pentru toate tipurile de sărbători și evenimente speciale
          </p>
        </div>

        {/* Service Stats
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-gold mb-2">500+</div>
            <div className="text-charcoal font-medium">Evenimente Organizate</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-gold mb-2">15+</div>
            <div className="text-charcoal font-medium">Ani de Experiență</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-gold mb-2">98%</div>
            <div className="text-charcoal font-medium">Clienți Mulțumiți</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-gold mb-2">24/7</div>
            <div className="text-charcoal font-medium">Suport Clienți</div>
          </div>
        </div> */}

        {/* Event Types */}
        <div className="space-y-20">
          {eventsTypes.map((event, index) => (
            <div key={event.id} className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Images */}
              <div className={`space-y-4 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <img 
                    src={event.image}
                    alt={event.name}
                    className="w-full h-80 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300"
                  />
                  {/* <div className="absolute top-4 left-4 bg-gold text-white px-4 py-2 rounded-full text-sm font-bold">
                    {event.category}
                  </div> */}
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {event.gallery.splice(3).map((img, imgIndex) => (
                    <img 
                      key={imgIndex}
                      src={img}
                      alt={`${event.name} ${imgIndex + 1}`}
                      className="w-full h-24 object-cover rounded-lg hover:scale-105 transition-transform duration-200"
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <h2 className="text-4xl font-playfair font-bold text-charcoal mb-4">{event.name}</h2>
                  <p className="text-lg text-gray-700 mb-6">{event.description}</p>
                </div>

                <div className="bg-cream/50 rounded-xl p-6">
                  <h3 className="font-bold text-charcoal text-lg mb-3">Despre Serviciile Noastre</h3>
                  <p className="text-gray-600 leading-relaxed">{event.detailedDescription}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
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
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-3">
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
                        <span className="text-xl font-bold text-gold">{event.priceRange}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gold/10 rounded-xl p-6">
                  <h4 className="font-bold text-charcoal mb-3">Pachetul Include:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {event.included.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700 text-sm flex items-start">
                        <i className="fas fa-star text-gold mr-2 mt-0.5 text-xs"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:0754824625" 
                    className="flex-1 bg-gold text-white px-6 py-3 rounded-full text-center font-semibold hover:bg-gold/90 transition-colors duration-200"
                  >
                    <i className="fas fa-phone mr-2"></i>
                    Solicită Ofertă
                  </a>
                  <button className="flex-1 border-2 border-gold text-gold px-6 py-3 rounded-full font-semibold hover:bg-gold hover:text-white transition-colors duration-200">
                    <i className="fas fa-calendar mr-2"></i>
                    Programează Întâlnire
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20 bg-gradient-to-r from-gold/10 to-gold/5 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-playfair font-bold text-charcoal mb-4">
              Procesul Nostru de Organizare
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Organizăm fiecare eveniment cu atenție la detalii și profesionalism desăvârșit
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gold text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h4 className="font-bold text-charcoal mb-2">Consultanță Inițială</h4>
              <p className="text-gray-600 text-sm">Discutăm nevoile și viziunea dumneavoastră pentru eveniment</p>
            </div>
            <div className="text-center">
              <div className="bg-gold text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h4 className="font-bold text-charcoal mb-2">Planificare Detaliată</h4>
              <p className="text-gray-600 text-sm">Creăm meniul personalizat și planul complet al evenimentului</p>
            </div>
            <div className="text-center">
              <div className="bg-gold text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h4 className="font-bold text-charcoal mb-2">Pregătire & Setup</h4>
              <p className="text-gray-600 text-sm">Preparăm totul cu grijă și amenajăm spațiul pentru eveniment</p>
            </div>
            <div className="text-center">
              <div className="bg-gold text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h4 className="font-bold text-charcoal mb-2">Serviciu Impecabil</h4>
              <p className="text-gray-600 text-sm">Asigurăm serviciu profesional pe toată durata evenimentului</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-playfair font-bold text-charcoal mb-6">
            Să planificăm următorul dumneavoastră eveniment
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactați-ne pentru o consultanță gratuită. Echipa noastră de specialiști vă va ajuta să organizați 
            un eveniment perfect, adaptat exact nevoilor și bugetului dumneavoastră.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0754824625" 
              className="inline-flex items-center bg-gold text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold/90 transition-colors duration-200 shadow-lg"
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