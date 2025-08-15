// import SocialButtons from "../SocialButtons";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            <span className="text-gold">Contact</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Gata să faci evenimentul tău memorabil? Ia legătura cu specialiștii noștri.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-gold">Ia Legătura cu Noi</h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="bg-gold text-white w-12 h-12 rounded-full flex items-center justify-center">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Telefon</h4>
                    <a 
                      href="tel:0754824625" 
                      className="text-gold hover:text-gold/80 transition-colors duration-200 text-xl font-medium"
                    >
                      +40 754 824 625
                    </a>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="bg-gold text-white w-12 h-12 rounded-full flex items-center justify-center">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <a 
                      href="mailto:info@dragcatering.ro" 
                      className="text-gold hover:text-gold/80 transition-colors duration-200"
                    >
                      info@dragcatering.ro
                    </a>
                  </div>
                </div>
                
                {/* Address */}
                <div className="flex items-center space-x-4">
                  <div className="bg-gold text-white w-12 h-12 rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Locație</h4>
                    <p className="text-gray-300">
                      Bulevardul Poitiers 12<br />
                      Iași 700671, România
                    </p>
                  </div>
                </div>
                
                {/* Hours */}
                <div className="flex items-center space-x-4">
                  <div className="bg-gold text-white w-12 h-12 rounded-full flex items-center justify-center">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Program de Lucru</h4>
                    <div className="text-gray-300 text-sm">
                      <p>Luni - Joi: 10:00 - 22:00</p>
                      <p>Vineri - Duminică: 10:00 - 00:00</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="font-semibold text-lg mb-4">Urmărește-ne</h4>
                <div className="flex space-x-4">
                  {/* <SocialButtons /> */}
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-playfair font-semibold mb-6 text-gold">Locația Noastră</h3>
            <div className="rounded-xl h-80 overflow-hidden">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2713.8!2d27.59197485552699!3d47.13667728296564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDA4JzEyLjAiTiAyN8KwMzUnMzEuMSJF!5e0!3m2!1sen!2sro!4v1635789!5m2!1sen!2sro`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locația Drag Catering"
              />
            </div>
            <div className="mt-6">
              <p className="text-gray-300 text-sm mb-4">
                Servim catering în toată zona Iași și județele înconjurătoare. Se pot aplica taxe de livrare în funcție de distanță.
              </p>
              <a 
                href={`https://www.google.com/maps/dir//47.13667728296564,27.59197485552699`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gold hover:text-gold/80 transition-colors duration-200"
              >
                <i className="fas fa-directions mr-2"></i>
                Obține Indicații
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}