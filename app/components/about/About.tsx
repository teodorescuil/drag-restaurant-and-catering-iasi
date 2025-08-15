import Link from 'next/link';
import {sectionTopTitle, sectionWrapper, sectionTitle, sectionSubtitle, sectionInfoContent} from '../../helpers/constants/styles';


export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className={sectionWrapper}>
        <div className={sectionInfoContent}>
          <div className="inline-block bg-gold/10 px-6 py-2 rounded-full mb-6">
            <span className={sectionTopTitle}>Povestea noastră</span>
          </div>
          <h2 className={sectionTitle}>
            Despre <span className="text-gold font-dancing">Drag Catering</span>
          </h2>
          <p className={sectionSubtitle}>
            De peste 15 ani, creăm experiențe culinare de neuitat pentru evenimente speciale. 
            Fiecare farfurie pe care o servim este o poveste de pasiune, tradiție și inovație.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-playfair font-bold text-charcoal mb-6">
              Povestea Noastră
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Drag Catering s-a născut din dorința de a aduce aromele autentice românești și 
              internaționale la masa dumneavoastră. Echipa noastră de bucătari experimentați 
              combină tehnicile tradiționale cu inovația modernă.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Folosim doar ingrediente proaspete, de cea mai bună calitate, multe dintre ele 
              provenind de la producători locali selectați cu grijă. Fiecare preparat este 
              gândit și realizat cu atenție la detalii.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Misiunea noastră este să transformăm fiecare eveniment într-o experiență 
              gastronomică memorabilă, indiferent dacă este vorba de o nuntă, un eveniment 
              corporate sau o sărbătoare privată.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-cream p-6 rounded-lg text-center">
              <i className="fas fa-utensils text-4xl text-gold mx-auto mb-4 block"></i>
              <h4 className="text-xl font-semibold text-charcoal mb-2">Bucătari Experți</h4>
              <p className="text-gray-600">Echipă cu peste 15 ani experiență</p>
            </div>
            
            <div className="bg-cream p-6 rounded-lg text-center">
              <i className="fas fa-award text-4xl text-gold mx-auto mb-4 block"></i>
              <h4 className="text-xl font-semibold text-charcoal mb-2">Calitate Premium</h4>
              <p className="text-gray-600">Ingrediente proaspete și de calitate</p>
            </div>
            
            <div className="bg-cream p-6 rounded-lg text-center">
              <i className="fas fa-heart text-4xl text-gold mx-auto mb-4 block"></i>
              <h4 className="text-xl font-semibold text-charcoal mb-2">Pasiune</h4>
              <p className="text-gray-600">Dragoste pentru arta culinară</p>
            </div>
            
            <div className="bg-cream p-6 rounded-lg text-center">
              <i className="fas fa-users text-4xl text-gold mx-auto mb-4 block"></i>
              <h4 className="text-xl font-semibold text-charcoal mb-2">Serviciu Personal</h4>
              <p className="text-gray-600">Atenție personalizată la detalii</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gold/10 via-cream to-gold/10 p-12 rounded-2xl text-center">
          <h3 className="text-3xl font-playfair font-bold text-charcoal mb-6">
            Viziunea Noastră
          </h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Să fim prima alegere pentru evenimente memorabile în România, recunoscuți pentru 
            excelența culinară, serviciul impecabil și capacitatea de a transforma fiecare 
            masă într-o celebrare a gustului și eleganței.
          </p>
          <Link 
            href="/despre-noi"
            className="inline-block bg-gold text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold/90 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Află mai multe despre noi
          </Link>
        </div>
      </div>
    </section>
  );
}