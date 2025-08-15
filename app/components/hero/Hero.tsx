'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';
import {generalInfoLabels} from '../../helpers/constants/metadata';
import {primaryButtonWithScale, outlineButtonWithScale} from '../../helpers/constants/styles';
import {scrollToSection} from '../../helpers/utils/utils';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const {hero: {title, subtitle, buttons}} = generalInfoLabels;
  const titleArray = title.split(" ");

  useEffect(() => {
    setIsVisible(true)
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
            <Image
              src="/images/drag-food.jpg"
              alt="Drag Catering Hero Background"
              fill
              className="object-cover"
              priority
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-charcoal/50 to-black/70"></div>
      
        <div className={`relative z-10 text-center text-white max-w-4xl mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight drop-shadow-2xl">
                {titleArray[0]} <span className="text-gold font-dancing drop-shadow-2xl">{titleArray[1]}</span>
            <br />{titleArray[2]} {titleArray[3]} <span className="text-gold">{titleArray[4]}</span> {titleArray[5]} {titleArray[6]}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button onClick={() => scrollToSection('daily-menu')} className={primaryButtonWithScale}>
                  <i className="fas fa-calendar-day mr-2"></i> {buttons[0]}
              </button>
              <button onClick={() => scrollToSection('full-menu')} className={outlineButtonWithScale}>
                  <i className="fas fa-utensils mr-2"></i> {buttons[1]}
              </button>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
            <button onClick={() => scrollToSection('daily-menu')}>
              <i className="fas fa-chevron-down text-2xl"></i>
            </button>
        </div>
    </section>
  )
}