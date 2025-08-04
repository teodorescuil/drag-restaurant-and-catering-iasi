'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import {pages} from '../../constants/pages';
import dragLogo from '../../../public/drag-logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '' || pathname === '/';

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
  const getBackgroundStyle = () => {
    if (isHome) {
      if (isScrolled && !isMenuOpen) {
        return 'bg-white/70 shadow-md backdrop-blur-sm'
      }
      if (isMenuOpen) {
        return 'bg-white';
      }
      return 'bg-transparent';
    } else {
      if (isMenuOpen) {
        return 'bg-white';
      }
      return 'shadow-md backdrop-blur-sm'
      // return 'bg-charcoal';
    }

  }

  const getStyleMobileButton = () => {
     if (isHome && !isScrolled && !isMenuOpen) {
      return 'text-white hover:text-gold/80'
     }
    if (isHome && isMenuOpen) {
      return 'text-charcoal hover:text-gold/80'
    }
    return 'text-charcoal hover:text-gold/80'
  }

  const getTextColor = () => {
    if (isScrolled || !isHome) {
      return 'text-charcoal';
    }
    return 'text-white';
  }

  const getPages = () => {
    if(isHome) {
      return pages.slice(1);
    } else {
      return pages;
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${getBackgroundStyle()}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex-shrink-0 flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200">
            <Image 
              src={dragLogo} 
              alt="Drag Catering Logo" 
              className="h-20 w-auto mt-[0px] mb-[0px]"
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden xl:block">
            <div className="ml-6 flex items-center space-x-6 whitespace-nowrap">
                {getPages().map(page => (
                    <Link
                        key={page.section}
                        href={`/${page.section}`}
                        className={`font-medium transition-colors duration-200 ${getTextColor()} hover:text-gold/80 whitespace-nowrap text-xl`}
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
              className={getStyleMobileButton()}
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`xl:hidden ${isMenuOpen ? 'block' : 'hidden'} h-screen`}>
          <div className="mt-4 px-2 pt-2 pb-3 space-y-2 sm:px-3 border-t border-gold ">
            {pages.map(page => (
                <Link
                    key={page.title}
                    href={`/${page.section}`}
                    className="block w-full text-left px-3 py-2 text-charcoal hover:bg-gold/30 rounded-10 focus:text-gold/80 transition-colors duration-200"
                    onClick={() => setTimeout(() => {setIsMenuOpen(false)}, 1500)}
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
