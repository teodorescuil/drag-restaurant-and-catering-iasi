import { Phone, Mail, MapPin, Clock, Navigation } from 'lucide-react';
import SocialButtons from '../SocialButtons';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-charcoal text-white" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
              id="contact-heading"
              className="text-4xl md:text-5xl font-playfair font-bold mb-4"
            >
              Contact <span className="text-gold">Drag Restaurant & Catering</span> Iași
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Gata să faci evenimentul tău memorabil? Contactează specialiștii noștri din Iași pentru evenimente de neuitat.
            </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <article className="space-y-8">
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-gold">
                  Contactează Drag Restaurant & Catering
                </h3>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="bg-gold text-white w-12 h-12 rounded-full flex items-center justify-center" aria-hidden="true">
                      <Phone className="w-5 h-5" fill="currentColor"/>
                    </div>
                  <div>
                    <h4 className="font-semibold text-lg">Telefon Restaurant & Catering</h4>
                    <a 
                      href="tel:+40741664241" 
                      className="text-gold hover:text-gold/80 transition-colors duration-200 text-xl font-medium"
                      itemProp="telephone"
                      aria-label="Sună la Drag Restaurant & Catering Iași"
                      title="Apelează pentru rezervări și comenzi catering"
                    >
                      +40 741 664 241
                    </a>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="bg-gold text-white w-12 h-12 rounded-full flex items-center justify-center" aria-hidden="true">
                      <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email Drag Restaurant & Catering Iași</h4>
                    <a 
                      href="mailto:dragcatering@gmail.com?subject=Solicitare%20Catering%20Iași" 
                      className="text-gold hover:text-gold/80 transition-colors duration-200"
                      itemProp="email"
                      aria-label="Trimite email pentru oferte catering"
                      title="Scrie-ne pentru oferte personalizate de catering"
                    >
                      dragcatering@gmail.com
                    </a>
                  </div>
                </div>
                
                {/* Address */}
                <div className="flex items-center space-x-4">
                  <div className="bg-gold text-white w-12 h-12 rounded-full flex items-center justify-center" aria-hidden="true">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                    <h4 className="font-semibold text-lg">Locație Restaurant Iași</h4>
                    <address className="text-gray-300 not-italic">
                      <span itemProp="streetAddress">Bulevardul Poitiers 12</span><br />
                      <span itemProp="addressLocality">Iași</span> <span itemProp="postalCode">700671</span>, 
                      <span itemProp="addressCountry"> România</span>
                    </address>
                  </div>
                </div>
                
                {/* Hours */}
                <div className="flex items-center space-x-4">
                  <div className="bg-gold text-white w-12 h-12 rounded-full flex items-center justify-center" aria-hidden="true">
                      <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Program Restaurant</h4>
                    <div className="text-gray-300 text-sm" itemProp="openingHours" content="Mo-Th 10:00-21:00, Fr-Su 10:00-22:00">
                      <p><time>Luni - Joi: 10:00 - 21:00</time></p>
                      <p><time>Vineri - Duminică: 10:00 - 22:00</time></p>
                    </div>
                  </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="font-semibold text-lg mb-4">Urmărește-ne</h4>
                <div className="flex space-x-4">
                  <SocialButtons />
                </div>
              </div>
            </div>
          </div>
        </article>
          
          {/* Map Section */}
            <aside className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-gold">
                Harta Locație Restaurant
              </h3>
              <div className="rounded-xl h-80 overflow-hidden">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2713.8!2d27.59197485552699!3d47.13667728296564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDA4JzEyLjAiTiAyN8KwMzUnMzEuMSJF!5e0!3m2!1sen!2sro!4v1635789!5m2!1sen!2sro`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Harta Restaurant Drag Restaurant & Catering Iași - Bulevardul Poitiers 12"
                  aria-label="Hartă interactivă cu locația restaurantului din Iași"
                />
              </div>
              <div className="mt-6">
                <a 
                  href={`https://www.google.com/maps/dir//47.13667728296564,27.59197485552699`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gold hover:text-gold/80 transition-colors duration-200"
                  aria-label="Obține indicații către restaurant"
                  title="Deschide Google Maps pentru a ajunge la restaurant"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Obține Indicații
                </a>
              </div>
            </aside>
        </div>
      </div>
    </section>
  );
}