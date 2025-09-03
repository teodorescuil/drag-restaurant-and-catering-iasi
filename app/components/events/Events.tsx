'use client'
import Image from 'next/image';
import Link from 'next/link';
import {Phone, Info} from 'lucide-react';
import {sectionTopTitle, sectionWrapper, sectionTitle, sectionSubtitle, sectionInfoContent} from '../../helpers/constants/styles';
import {eventsAndServices} from '../../helpers/constants/events';

export default function Events() {
  return (
    <section id="services" className="py-20 bg-cream">
      <div className={sectionWrapper}>
        <div className={sectionInfoContent}>
          <div className="inline-block bg-gold/10 px-6 py-2 rounded-full mb-6">
            <span className={sectionTopTitle}>Catering</span>
          </div>
          <h2 className={sectionTitle}>
            Evenimente și Servicii <span className="text-gold font-dancing">Memorabile</span>
          </h2>
          <p className={sectionSubtitle}>
            De la întâlniri intime la celebrări grandioase, oferim servicii excepționale adaptate perfect evenimentelor dumneavoastră
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16 lg:grid-cols-3 xl:grid-cols-4">
          {eventsAndServices.map((service, index) => (
            <div key={index} className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden group">
            {/* <div key={index} className="cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"> */}
              <div className="relative overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  width={256}
                  height={256}
                />
                <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {service.priceRange}
                </div>
              </div>
              <div className="px-8 pt-8">
                <h3 className="text-2xl font-playfair font-semibold mb-4 text-center text-charcoal">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-6 text-center leading-relaxed">{service.description}</p>
                
                {/* <div className="mb-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className={service.capacity ? "flex items-center" : "invisible"}>
                      <Users className="w-5 h-5 mr-3 text-gold" aria-hidden="true" />
                      <span>{service.capacity}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-3 text-gold" aria-hidden="true" />
                      <span>4-8 ore</span>
                    </div>
                  </div>
                </div> */}

                {/* <ul className="text-sm text-gray-700 space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <i className="fas fa-check text-gold mr-3 mt-1 flex-shrink-0"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul> */}
              </div>
              <div className="mt-auto flex justify-center border-t border-gray-200 mx-2 p-8">
                  <Link href={service.href} className="labelButton">
                    <Info className="w-5 h-5 mr-3" aria-hidden="true" />
                    Solicită Detalii
                  </Link>
              </div>
            </div>
          ))}
        </div>
                
        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-playfair font-bold text-charcoal mb-6">
            Gata să Planifici Evenimentul Tău?
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Contactează-ne astăzi pentru o consultație personalizată și o ofertă detaliată. 
            Echipa noastră este gata să transforme viziunea ta în realitate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0754824625" 
              className="primary"
            >
              <Phone className="w-5 h-5 mr-3" fill="currentColor" aria-hidden="true" />
              Sună acum
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}