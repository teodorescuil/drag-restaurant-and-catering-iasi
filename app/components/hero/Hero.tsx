/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { CalendarDays, Utensils, ChevronDown } from 'lucide-react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
// CSS Swiper este importat în globals.css cu: @import "swiper/css";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const swiperRef = useRef<any>(null);

  const slides = [
    { image: '/images/platouri-festive/platou-international.png', name: 'Platou Internațional' },
    { image: '/images/platouri-festive/platou-aperitiv-rece.png', name: 'Platou Aperitiv Rece' },
    { image: '/images/platouri-festive/platou-peste.png', name: 'Platou Pește' },
    { image: '/images/platouri-festive/platou-branzeturi.png', name: 'Platou Brânzeturi' },
    { image: '/images/platouri-festive/platou-de-post-rece.png', name: 'Platou de Post Rece' },
    { image: '/images/platouri-festive/platou-afumaturi.png', name: 'Platou Afumături' },
  ];

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

        {/* Slider (ascuns până e gata) */}
        <div
          className={`
            relative z-10 w-full bg-white/60 mt-5 mb-5 pb-5 px-10 
            transition-opacity duration-500
            ${isReady ? 'opacity-100' : 'opacity-0'}
          `}
        >
        {/* Săgeți custom, vizibile peste tot */}
        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          className="
            absolute left-2 top-1/2 -translate-y-1/2 z-20 
            bg-black/50 rounded-full p-2 text-white
            hover:bg-black/70 transition
            md:p-3
          "
          aria-label="Slide anterior"
        >
          <ChevronDown className="rotate-90 w-5 h-5 md:w-6 md:h-6" />
        </button>

        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          className="
            absolute right-2 top-1/2 -translate-y-1/2 z-20
            bg-black/50 rounded-full p-2 text-white
            hover:bg-black/70 transition
            md:p-3
          "
          aria-label="Slide următor"
        >
          <ChevronDown className="-rotate-90 w-5 h-5 md:w-6 md:h-6" />
        </button>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          loop
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          spaceBetween={16}
          slidesPerView={5} // desktop default
          breakpoints={{
            0: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onAfterInit={() => {
            setIsReady(true);
            setIsVisible(true);
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Link href="/platouri" className="flex flex-col items-center text-center px-4 py-4">

                <div className="relative flex justify-center items-center">
                  <Image
                    src={slide.image}
                    alt={slide.name}
                    width={200}
                    height={200}
                    className={`
                      rounded-lg 
                      object-contain 
                      transition-all duration-500
                    `}
                  />
                </div>

                <h3 className="leading-none text-base md:text-xl font-bold text-charcoal mt-4">{slide.name}</h3>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex flex-row justify-center mt-4">
          <Link href="/platouri" className="primary-red text-xs md:text-base text-shadow-lg" aria-label="Precomandă produse pentru Crăciun și Revelion">
            PRECOMANDĂ PRODUSE PENTRU
            CRĂCIUN ȘI REVELION
          </Link>
        </div>
      </div>
      {/* Content */}
      <div
        className={`
          relative z-10 text-center text-white max-w-5xl mx-auto px-4
          transition-all duration-700
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
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
