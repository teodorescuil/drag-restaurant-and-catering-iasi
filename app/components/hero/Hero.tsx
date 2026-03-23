/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import { CalendarDays, Utensils, ChevronDown } from 'lucide-react';

export default function Hero() {

  const seoTitle =
    'Drag Restaurant & Catering – catering și restaurant în Iași pentru nunți, botezuri și orice eveniment';

  return (
    <section
        id="home"
        aria-label="Prezentare Drag Restaurant & Catering"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/hero-bg.jpg"
            alt="Restaurant și catering în Iași — platouri"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-charcoal/50 to-black/50" />

      {/* Content */}
      <div
        className={`
          relative z-10 text-center text-white max-w-5xl mx-auto px-4
          transition-all duration-700
          opacity-100 translate-y-0
        `}
      >
        <h1 className="sr-only">{seoTitle}</h1>
        <p className="text-4xl md:text-5xl lg:text-7xl font-playfair font-bold mb-6 leading-tight drop-shadow-2xl">
          Preparate cu <span className="text-gold font-dancing drop-shadow-2xl">Drag</span> și Pasiune
        </p>
        <h2 className="text-lg lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
          Fiecare preparat este creat cu drag și devotament, transformând gătitul în artă culinară. Folosim preponderent
          produse locale de sezon de la producători autohtoni, pentru un gust autentic și proaspăt.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="#daily-menu" className="secondary-light" aria-label="Vezi meniul zilei">
            <CalendarDays className="w-5 h-5 mr-2 inline-block" aria-hidden="true" />
            VEZI MENIUL DE AZI
          </Link>
          <Link href="#full-menu" className="secondary-light" aria-label="Vezi meniul complet">
            <Utensils className="w-5 h-5 mr-2 inline-block" aria-hidden="true" />
            VEZI MENIUL COMPLET
          </Link>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <Link href="#daily-menu" aria-label="Mergi la meniul zilei" title="Mergi la meniul zilei">
          <ChevronDown className="w-6 h-6" aria-hidden="true" />
        </Link>
      </div>

      {/* JSON-LD */}
      <Script
        id="hero-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            headline: seoTitle,
            primaryImageOfPage: {
              '@type': 'ImageObject',
              url: 'https://www.dragcatering.ro/images/drag-food.jpg',
              width: 1200,
              height: 630,
            },
          }),
        }}
      />
    </section>
  );
}
