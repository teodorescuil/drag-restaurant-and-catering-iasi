import Link from 'next/link';
import {sectionTopTitle, sectionWrapper, sectionTitle, sectionSubtitle, sectionInfoContent} from '../../constants/styles';

export default function FullMenuPreview() {
  return (
    <section id="full-menu" className="py-20 bg-gray-50">
      <div className={sectionWrapper}>
        <div className={sectionInfoContent}>
          <div className="inline-block bg-gold/10 px-6 py-2 rounded-full mb-6">
            <span className={sectionTopTitle}>Selecție Completă</span>
          </div>
          <h2 className={sectionTitle}>
            Descoperă <span className="text-gold font-dancing">Meniul</span> Nostru Complet
          </h2>
          <p className={sectionSubtitle}>
            O selecție variată de preparate pentru toate gusturile și ocaziile speciale
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
              <Link
                href="/meniu"
                className="bg-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-gold/90 transition-colors duration-200"
              >
                <i className="fas fa-book-open mr-2"></i>
                Vezi meniul complet
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-gold text-gold px-8 py-3 rounded-full font-semibold hover:bg-gold/90 hover:text-white transition-colors duration-200"
              >
                <i className="fas fa-phone mr-2"></i>
                Contactează-ne
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}