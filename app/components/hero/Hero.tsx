'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';
import {metadata} from '../../metadata/hero';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const metadataArray = metadata.title.split(" ");

  useEffect(() => {
    setIsVisible(true)
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 64
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
            <Image
            src="/images/drag-food.png"
            alt="Drag Restaurant Hero Background"
            fill
            className="object-cover"
            priority
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-charcoal/50 to-black/70"></div>
      
        <div className={`relative z-10 text-center text-white max-w-4xl mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight drop-shadow-2xl">
                {metadataArray[0]} <span className="text-gold font-dancing drop-shadow-2xl">{metadataArray[1]}</span>
            <br />{metadataArray[2]} {metadataArray[3]} <span className="text-gold">{metadataArray[4]}</span> {metadataArray[5]} {metadataArray[6]}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            {metadata.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
                onClick={() => scrollToSection('meniul-zilei')}
                className="border-2 border-white hover:border-gold text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold/90 transition-all duration-200 transform hover:scale-105"
            >
                <i className="fas fa-calendar-day mr-2"></i> {metadata.buttons[0]}
            </button>
            <button 
                onClick={() => scrollToSection('meniu')}
                className="border-2 border-white hover:border-gold text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold/90 transition-all duration-200 transform hover:scale-105"
            >
                <i className="fas fa-utensils mr-2"></i> {metadata.buttons[1]}
            </button>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
            <i className="fas fa-chevron-down text-2xl"></i>
        </div>
    </section>
  )
}