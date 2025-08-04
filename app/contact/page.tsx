export default function ContactDetailed() {
  return (
    <section className="mt-28 py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gold/10 px-6 py-2 rounded-full mb-6">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">Contactează-ne</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-charcoal mb-6">
            Să Discutăm <span className="text-gold font-dancing">Evenimentul</span> Tău
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Suntem aici să transformăm visurile tale culinare în realitate. Contactează echipa noastră pentru o consultanță personalizată și o ofertă adaptată nevoilor tale.
          </p>
        </div>

        {/* Direct Contact - Full Width */}
        <div className="bg-white rounded-3xl p-8 mb-16">
          {/* <h3 className="text-3xl font-playfair font-bold text-charcoal mb-8 text-center">Contact Direct</h3> */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gold/10 p-4 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                <i className="fas fa-phone text-gold text-xl"></i>
              </div>
              <h4 className="font-semibold text-charcoal mb-1">Telefon</h4>
              <a href="tel:0754824625" className="text-gold font-semibold text-lg hover:underline">
                +40 754 824 625
              </a>
            </div>

            <div className="text-center">
              <div className="bg-gold/10 p-4 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                <i className="fas fa-envelope text-gold text-xl"></i>
              </div>
              <h4 className="font-semibold text-charcoal mb-1">Email</h4>
              <a href="mailto:contact@dragcatering.ro" className="text-gold font-semibold hover:underline break-all">
                contact@dragcatering.ro
              </a>
            </div>

            <div className="text-center">
              <div className="bg-gold/10 p-4 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                <i className="fas fa-map-marker-alt text-gold text-xl"></i>
              </div>
              <h4 className="font-semibold text-charcoal mb-1">Adresa</h4>
              <p className="text-charcoal">
                Bulevardul Poitiers 12,<br />
                Iași 700671, România
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gold/10 p-4 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                <i className="fas fa-clock text-gold text-xl"></i>
              </div>
              <h4 className="font-semibold text-charcoal mb-1">Program</h4>
              <div className="text-gray-600 text-sm">
                <p>Luni - Joi: 10:00 - 22:00</p>
                <p>Vineri - Duminica: 10:00 - 00:00</p>
                <p className="text-xs mt-2 text-gold">*Personalizat pentru evenimente</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-3xl p-8">
          <h3 className="text-3xl font-playfair font-bold text-charcoal mb-8 text-center">Locația Noastră</h3>
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Google Maps Embed */}
            <div className="lg:col-span-2">
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
                ></iframe>
              </div>
            </div>

            {/* Directions Info */}
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-charcoal mb-3">Cum Ajungi la Noi</h4>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-car text-gold mt-1 w-[25px]"></i>
                    <div>
                      <p className="font-medium">Cu mașina:</p>
                      <p className="text-sm">Parcare gratuită disponibilă în fața restaurantului</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-bus text-gold mt-1 w-[25px]"></i>
                    <div>
                      <p className="font-medium">Transport public:</p>
                      <p className="text-sm">Autobuze: 3, 8, 13 - Stația Poitiers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-walking text-gold mt-1 w-[25px]"></i>
                    <div>
                      <p className="font-medium">Pe jos:</p>
                      <p className="text-sm">5 minute de la Palas Mall</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gold/10 rounded-xl">
                <h5 className="font-bold text-charcoal mb-2">Informații Utile</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Acces pentru persoane cu dizabilități</li>
                  <li>• WiFi gratuit pentru clienți</li>
                  <li>• Zonă de parcare privată</li>
                  <li>• Intrare separată pentru catering</li>
                </ul>
              </div>

              <div className="flex flex-col items-center gap-4 text-center">
                <a 
                  href="https://www.google.com/maps/place/Drag+Restaurant/@47.1366599,27.5912196,274m/data=!3m1!1e3!4m12!1m5!3m4!2zNDfCsDA4JzEyLjAiTiAyN8KwMzUnMzEuMSJF!8m2!3d47.1366773!4d27.5919749!3m5!1s0x40cafb99fc71293f:0xc54584d1f82cff77!8m2!3d47.1363867!4d27.5923591!16s%2Fg%2F11ld3l_t00?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors w-[270px]"
                >
                  <i className="fas fa-directions mr-2"></i>
                  Deschide în Google Maps
                </a>
                {/* Waze Button - Only on Mobile */}
                <a 
                  href="https://waze.com/ul?q=Bulevardul%20Poitiers%2012%2C%20Ia%C8%99i%20700671%2C%20Romania&navigate=yes" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="xl:hidden inline-flex items-center bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors w-[270px] justify-center"
                >
                  <i className="fas fa-route mr-2"></i>
                  Deschide în Waze
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-gradient-to-r from-gold/10 to-gold/5 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-playfair font-bold text-charcoal mb-4">Întrebări Frecvente</h3>
            <p className="text-gray-600">Răspunsuri la cele mai comune întrebări despre serviciile noastre</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-bold text-charcoal mb-2">Cât timp înainte trebuie să rezerv?</h4>
                <p className="text-gray-600 text-sm">Recomandăm rezervarea cu cel puțin 2-3 săptămâni înainte pentru a asigura disponibilitatea. Pentru evenimente mari (peste 100 persoane), idealul este 1-2 luni în avans.</p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h4 className="font-bold text-charcoal mb-2">Oferim servicii în afara Iașului?</h4>
                <p className="text-gray-600 text-sm">Da, oferim servicii de catering în întreaga regiune Moldova. Pentru distanțe mai mari de 50km se aplică o taxă de transport care va fi specificată în ofertă.</p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h4 className="font-bold text-charcoal mb-2">Ce include pachetul de catering?</h4>
                <p className="text-gray-600 text-sm">Fiecare pachet include meniul personalizat, echipamentele de servire, personalul necesar și transportul. Decorarea poate fi inclusă în funcție de pachetul ales.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-bold text-charcoal mb-2">Aveți opțiuni pentru diete speciale?</h4>
                <p className="text-gray-600 text-sm">Absolut! Preparăm meniuri vegetariene, vegane, fără gluten și pentru alte restricții dietetice. Vă rugăm să ne informați despre acestea la momentul rezervării.</p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h4 className="font-bold text-charcoal mb-2">Cum se face plata?</h4>
                <p className="text-gray-600 text-sm">Acceptăm plata cu card, transfer bancar sau numerar. De obicei se plătește un avans de 30% la confirmare și restul în ziua evenimentului.</p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h4 className="font-bold text-charcoal mb-2">Putem face o degustare înainte?</h4>
                <p className="text-gray-600 text-sm">Da, oferim degustări gratuite pentru evenimente cu peste 50 de persoane. Pentru evenimente mai mici, degustarea se poate face contra cost, care se deduce din factura finală.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}