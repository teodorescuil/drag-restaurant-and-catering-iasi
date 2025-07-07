'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {pages} from '../../metadata/pages';
import dragLogo from '../../../public/drag-logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       const headerHeight = 80; // header height
//       const elementPosition = element.offsetTop - headerHeight;
//       window.scrollTo({
//         top: elementPosition,
//         behavior: 'smooth'
//       });
//     }
//     setIsMenuOpen(false);
//   };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-600 ${
        isScrolled
          ? "bg-white shadow-md backdrop-blur-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0 flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200 py-4">
            <Image 
              src={dragLogo} 
              alt="Drag Restaurant&Catering Logo" 
              className="h-25 w-80 mt-[0px] mb-[0px]"
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden xl:block">
            <div className="ml-6 flex items-center space-x-6 whitespace-nowrap">
                {pages.slice(1).map(page => (
                    <Link
                        key={page.section}
                        href={`/${page.section}`}
                        className="font-medium transition-colors duration-200 text-charcoal hover:text-gold/80 whitespace-nowrap"
                    >
                        {page.title}
                    </Link>
                ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="xl:hidden">
            <button 
              type="button" 
              onClick={() => setIsMenuOpen(prev => !prev)}
              className="text-charcoal hover:text-gold/80 focus:outline-none focus:text-gold/80 transition-colors duration-200"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`xl:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="mt-4 px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-white border-t border-gold">
            {pages.slice(1).map(page => (
                <Link
                    key={page.section}
                    href={`/${page.section}`}
                    className="block w-full text-left px-3 py-2 text-charcoal hover:bg-gold/30 rounded-10 focus:text-gold/80 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                >
                    {page.title}
                </Link>
            ))}
            <a 
              href="tel:0040754824625" 
              className="block mx-3 mt-4 bg-gold text-white px-6 py-3 rounded-full font-medium text-center"
            >
              <i className="fas fa-phone mr-2"></i>Sună acum
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
