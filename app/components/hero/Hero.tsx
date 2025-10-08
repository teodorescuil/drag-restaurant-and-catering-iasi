'use client'

import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { CalendarDays, Utensils, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  // Titlu SEO clar, cu keywords principale (folosit în H1)
  const seoTitle = 'Drag Catering – catering și restaurant în Iași pentru nunți, botezuri și orice eveniment';

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      aria-label="Prezentare Drag Catering"
    >
      {/* Background Image cu optimizări LCP: sizes + blurDataURL */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/cover.png"
          alt="Restaurant și catering în Iași — platouri cu preparate tradiționale de la Drag Catering"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII="
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-charcoal/50 to-black/50" aria-hidden="true" />

      {/* Conținut textual SEO-friendly */}
      <div
        className={`relative z-10 text-center text-white max-w-4xl mx-auto px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h1 className="sr-only">
          {seoTitle} 
        </h1>
        {/* H1 unic și descriptiv */}
        <p className="text-4xl md:text-7xl font-playfair font-bold mb-6 leading-tight drop-shadow-2xl">
          Farfurii cu <span className="text-gold font-dancing drop-shadow-2xl">Drag</span> și Pasiune 
        </p>
        
        {/* Subtitlu ca H2 pentru ierarhie semantică */}
        <h2 className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
          Fiecare fel de mâncare este o capodoperă creată cu drag și devotament. De la aperitive frumos aranjate la feluri principale impresionante, punem suflet în fiecare preparat pentru a crea artă culinară care încântă atât ochiul, cât și papilele gustative.
        </h2>

        {/* CTA-uri ca link-uri reale (ancore interne) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#daily-menu"
            className="primary"
            aria-label="Vezi meniul zilei"
          >
            <CalendarDays className="w-5 h-5 mr-2 inline-block" aria-hidden="true" />
            Vezi meniul de azi
          </Link>
          <Link
            href="#full-menu"
            className="secondary-light"
            aria-label="Vezi meniul complet"
          >
            <Utensils className="w-5 h-5 mr-2 inline-block" aria-hidden="true" />
            Vezi meniul complet
          </Link>
        </div>
      </div>

      {/* Săgeată scroll (ancoră reală) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <Link href="#daily-menu" aria-label="Mergi la meniul zilei" title="Mergi la meniul zilei">
          <ChevronDown className="w-6 h-6" aria-hidden="true" />
        </Link>
      </div>

      {/* JSON-LD opțional pentru a întări contextul eroului */}
      <Script
        id="hero-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            'headline': seoTitle,
            'primaryImageOfPage': {
              '@type': 'ImageObject',
              'url': 'https://www.dragcatering.ro/images/drag-food.jpg',
              'width': 1200,
              'height': 630
            }
          }),
        }}
      />
    </section>
  );
}
