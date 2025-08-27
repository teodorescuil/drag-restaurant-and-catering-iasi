import Link from 'next/link';
import {UtensilsCrossed, Award, Heart, Users} from 'lucide-react';
import {sectionTopTitle, sectionWrapper, sectionTitle, sectionSubtitle, sectionInfoContent} from '../../helpers/constants/styles';
import SlideShow from '../slideshow/Slideshow';
import {restaurant} from '../../helpers/constants/images-src';

export default function About() {
  return (
    <section id="about" className="py-20 bg-cream/50">
      <div className={sectionWrapper}>
        <div className={sectionInfoContent}>
          <div className="inline-block bg-gold/10 px-6 py-2 rounded-full mb-6">
            <span className={sectionTopTitle}>Povestea noastră</span>
          </div>
          <h2 className={sectionTitle}>
            <span className="text-gold font-dancing">Drag Catering</span> Restaurant
          </h2>
          <p className={sectionSubtitle}>
            Creem experiențe culinare de neuitat pentru evenimente speciale. 
            Fiecare farfurie pe care o servim este o poveste de pasiune, tradiție și inovație, spusă cu drag.
          </p>
        </div>

        <article className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-playfair font-bold text-charcoal mb-6">
              Povestea Noastră
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-justify">
              Drag Catering s-a născut din dorința de a aduce aromele autentice românești și 
              internaționale la masa dumneavoastră. Echipa noastră de bucătari experimentați 
              combină tehnicile tradiționale cu inovația modernă.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed text-justify">
              Folosim doar ingrediente proaspete, de cea mai bună calitate, multe dintre ele 
              provenind de la producători locali selectați cu grijă. Fiecare preparat este 
              gândit și realizat cu atenție la detalii.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify">
              Drag Catering înseamnă restaurant și servicii complete de catering pentru nunți, cununii civile, recepții, conferințe și evenimente corporate. În restaurantul nostru organizăm petreceri private, evenimente corporate, seri tematice și experiențe culinare speciale. Misiunea noastră este să transformăm fiecare ocazie într-o experiență gastronomică memorabilă, indiferent dacă este privată sau de business.
            </p>
          </div>
          
          <SlideShow images={restaurant} />
        </article>

        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6" aria-label="Valorile noastre">
          <li className="bg-cream p-6 rounded-lg text-center">
            <UtensilsCrossed className="w-10 h-10 text-gold mx-auto mb-4" aria-hidden="true"/>
            <h4 className="text-xl font-semibold text-charcoal mb-2">Bucătari experți</h4>
            <p className="text-gray-600">Peste 15 ani de experiență</p>
          </li>
          <li className="bg-cream p-6 rounded-lg text-center">
            <Award className="w-10 h-10 text-gold mx-auto mb-4" aria-hidden="true"/>
            <h4 className="text-xl font-semibold text-charcoal mb-2">Calitate premium</h4>
            <p className="text-gray-600">Ingrediente proaspete și locale</p>
          </li>
          <li className="bg-cream p-6 rounded-lg text-center">
            <Heart className="w-10 h-10 text-gold mx-auto mb-4" aria-hidden="true"/>
            <h4 className="text-xl font-semibold text-charcoal mb-2">Pasiune</h4>
            <p className="text-gray-600">Dragoste pentru arta culinară</p>
          </li>
          <li className="bg-cream p-6 rounded-lg text-center">
            <Users className="w-10 h-10 text-gold mx-auto mb-4" aria-hidden="true"/>
            <h4 className="text-xl font-semibold text-charcoal mb-2">Serviciu personalizat</h4>
            <p className="text-gray-600">Atenție la detalii</p>
          </li>
        </ul>

        <article className="bg-gradient-to-r from-gold/10 via-cream to-gold/10 p-12 rounded-2xl text-center">
          <Link 
            href="/despre-noi"
            className="inline-block bg-gold text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold/90 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Află mai multe despre noi
          </Link>
        </article>
      </div>
    </section>
  );
}