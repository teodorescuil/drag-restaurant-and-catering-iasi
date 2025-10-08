import {Phone} from 'lucide-react';
import { services } from "../helpers/constants/events";
export default function EventsDetailed() {
  return (
    <section className="mt-20 py-20 bg-gradient-to-br from-cream via-white to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gold/10 px-6 py-2 rounded-full mb-6">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">Servicii catering</span>
          </div>
          <h1 className="text-4xl md:text-5xl md:text-6xl font-playfair font-bold text-charcoal mb-6">
            Catering <span className="text-gold font-dancing">Premium</span>
          </h1>
          <p className="tex-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Aducem experiența culinară premium direct la tine acasă sau la evenimentul tău. Servicii complete de catering cu echipament profesional, de la livrarea la domiciliu până la evenimente corporate de anvergură.
          </p>
        </div>

       {/* Servicii principale cu design rafinat */}
      <section className="mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map(service => (
            //   <div key={service.id} className="backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div key={service.id} id={service.slug} className="scroll-mt-30 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50">
                <div className="p-8 lg:p-10">
                  {/* Header cu iconită și titlu */}
                  <div className="flex items-start gap-6 mb-8">
                    <div className="flex-shrink-0 w-15 h-15 rounded-xl flex items-center justify-center border border-gold/20">
                      <div className="text-2xl">{service.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-playfair font-bold text-charcoal mb-1">
                        {service.name}
                      </h3>
                      <div className="w-16 h-0.5 bg-gold/60 mb-1"></div>
                      <p className="text:md md:text-lg text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>

                  {/* Lista de caracteristici cu hover effects */}
                  <div className="mb-8">
                    <div className="grid md:grid-cols-2 gap-2 md:gap-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start group">
                          <div className="w-2 h-2 bg-gold/60 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-200"></div>
                          <span className="text-gray-700 group-hover:text-charcoal transition-colors duration-200">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Grid cu informații despre preț, capacitate etc. */}
                  <div className="border-t border-gray-200/60 pt-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {/* Carduri condiționale pentru diferite tipuri de servicii */}
                      {service.details?.map(detail => (
                        <div key={detail.type} className="text-center p-4 bg-gray-50/80 rounded-lg border border-gray-200/50 hover:bg-gray-100/50 transition-colors duration-200">
                          <div className="text-sm text-gray-500 mb-2">{detail.type}</div>
                          {detail.description.split(" / ").map(detailInfo => (
                            <div key={detail.description.concat(detailInfo)} className="text-sm text-charcoal">{detailInfo}</div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-6">
            Să Planificăm Următorul Dumneavoastră Eveniment
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactați-ne pentru o consultanță gratuită. Echipa noastră de specialiști vă va ajuta să organizați 
            un eveniment perfect, adaptat exact nevoilor și bugetului dumneavoastră.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0754824625" 
              className="primary"
            >
              <Phone className="mr-3 w-5 h-5" fill="white" />
              0754 824 625
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}