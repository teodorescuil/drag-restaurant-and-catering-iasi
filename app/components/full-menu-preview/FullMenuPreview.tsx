export default function FullMenuPreview() {
  return (
    <section id="full-menu" className="py-20 bg-gray-50 border-gold/20 border-b-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gold/10 px-6 py-2 rounded-full mb-6">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">Selecție Completă</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-4">
            Descoperă <span className="text-gold font-dancing">Meniul</span> Nostru Complet
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            O selecție variată de preparate pentru toate gusturile și ocasiile speciale
          </p>
        </div>
        
        <div className="text-center bg-white rounded-2xl p-12 shadow-lg">
          <div className="max-w-2xl mx-auto">
            <i className="fas fa-utensils text-6xl text-gold mb-6"></i>
            <h3 className="text-2xl font-playfair font-semibold text-charcoal mb-4">
              Explorează meniul
            </h3>
            <p className="text-gray-600 mb-8">
              Descoperă selecția noastră completă de preparate organizate în categorii: platouri, aperitive, 
              feluri principale, paste, supe și deserturi. Fiecare preparat este realizat cu ingrediente 
              proaspete și tehnici culinare rafinate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/meniu-complet"
                className="bg-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-gold/90 transition-colors duration-200"
              >
                <i className="fas fa-book-open mr-2"></i>
                Vezi meniul complet
              </a>
              <a 
                href="tel:0754824625"
                className="border-2 border-gold text-gold px-8 py-3 rounded-full font-semibold hover:bg-gold hover:text-white transition-colors duration-200"
              >
                <i className="fas fa-phone mr-2"></i>
                Contactează-ne
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}