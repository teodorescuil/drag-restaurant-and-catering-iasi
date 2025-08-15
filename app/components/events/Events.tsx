'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {sectionTopTitle, sectionWrapper, sectionTitle, sectionSubtitle, sectionInfoContent} from '../../helpers/constants/styles';
import {services} from '../../helpers/constants/metadata';

export default function Events() {
  const router = useRouter();

  const goToEvents = () => {
    router.push('/evenimente');
  };
  return (
    <section id="services" className="py-20 bg-cream">
      <div className={sectionWrapper}>
        <div className={sectionInfoContent}>
          <div className="inline-block bg-gold/10 px-6 py-2 rounded-full mb-6">
            <span className={sectionTopTitle}>Servicii Evenimente</span>
          </div>
          <h2 className={sectionTitle}>
            Evenimente <span className="text-gold font-dancing">Memorabile</span>
          </h2>
          <p className={sectionSubtitle}>
            De la întâlniri intime la celebrări grandioase, oferim servicii de catering excepționale 
            adaptate perfect nevoilor dumneavoastră
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div onClick={goToEvents} key={index} className="cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
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
              <div className="p-8">
                <div className="text-gold text-4xl mb-4 text-center">
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-2xl font-playfair font-semibold mb-4 text-center text-charcoal">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <i className="fas fa-users mr-2 text-gold"></i>
                      <span>{service.capacity}</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-clock mr-2 text-gold"></i>
                      <span>4-8 ore</span>
                    </div>
                  </div>
                </div>

                <ul className="text-sm text-gray-700 space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <i className="fas fa-check text-gold mr-3 mt-1 flex-shrink-0"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-center border-t border-gray-200 pt-6">
                  <Link href="/evenimente" className="text-gold transition-colors duration-200">
                    <i className="fas fa-info-circle mr-2"></i>
                    Solicită Detalii
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Statistics */}
        {/* <div className="bg-gradient-to-r from-gold/10 via-cream to-gold/10 rounded-2xl p-12 mb-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-charcoal mb-2">500+</div>
              <div className="text-gray-600">Evenimente Realizate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-charcoal mb-2">15+</div>
              <div className="text-gray-600">Ani Experiență</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-charcoal mb-2">50+</div>
              <div className="text-gray-600">Preparate în Meniu</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-charcoal mb-2">300</div>
              <div className="text-gray-600">Persoane Max/Eveniment</div>
            </div>
          </div>
        </div> */}
        
        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-playfair font-bold text-charcoal mb-6">
            Gata să planifici evenimentul tău?
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Contactează-ne astăzi pentru o consultație personalizată și o ofertă detaliată. 
            Echipa noastră este gata să transforme viziunea ta în realitate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0754824625" 
              // bg-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-gold/90 transition-colors duration-200
              className="inline-flex items-center bg-gold text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gold/90 transition-all duration-200 shadow-lg"
            >
              <i className="fas fa-phone mr-3"></i>
              Sună acum
            </a>
            <a 
              href="mailto:info@dragcatering.ro"
              className="inline-flex items-center border-2 border-gold text-gold px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold/90 hover:text-white transition-all duration-200"
            >
              <i className="fas fa-envelope mr-3"></i>
              Trimite email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}