'use client';
import {Phone} from 'lucide-react';
import {sectionTopTitle, sectionWrapper, sectionTitle, sectionSubtitle, sectionInfoContent} from '../../helpers/constants/styles';
import {eventsAndServices} from '../../helpers/constants/events';
import useIsMobile from '../../helpers/hooks/useIsMobile';
import Event from './event';

export default function Events() {
  const isMobile = useIsMobile();

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
            De la întâlniri intime la celebrări grandioase, oferim servicii excepționale adaptate perfect evenimentelor dumneavoastră.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16 lg:grid-cols-3 xl:grid-cols-4">
          {eventsAndServices.map((event, index) => (
              <Event key={index} event={event} isMobile={isMobile}/>
          ))}
        </div>
                
        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-6">
            Gata să Planifici Evenimentul Tău?
          </h3>
          <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Contactează-ne astăzi pentru o consultație personalizată și o ofertă detaliată. 
            Echipa noastră este gata să transforme viziunea ta în realitate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0741664241" 
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