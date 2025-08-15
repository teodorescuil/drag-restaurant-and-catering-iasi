'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { pages } from '../../helpers/constants/pages';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '' || pathname === '/';

  // Scroll effect + setare inițială
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Blochează scroll pe body când meniul mobil e deschis
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Închide meniul când se schimbă ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const getBackgroundStyle = () => {
    if (isHome) {
      if (isScrolled && !isMenuOpen) return 'bg-white/70 shadow-md backdrop-blur-sm';
      if (isMenuOpen) return 'bg-white';
      return 'bg-transparent';
    } else {
      if (isMenuOpen) return 'bg-white';
      return 'shadow-md backdrop-blur-sm';
    }
  };

  const getStyleMobileButton = () => {
    if (isHome && !isScrolled && !isMenuOpen) return 'text-white hover:text-gold/80';
    if (isHome && isMenuOpen) return 'text-charcoal hover:text-gold/80';
    return 'text-charcoal hover:text-gold/80';
  };

  const getTextColor = () => (isScrolled || !isHome ? 'text-charcoal' : 'text-white');

  const getPages = () => (isHome ? pages.slice(1) : pages);

  return (
    <header
      role="banner"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${getBackgroundStyle()}`}
    >
      <nav aria-label="Meniu principal" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-white text-black px-3 py-1 rounded"
        >
          Mergi direct la conținut
        </a>

        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
          >
            <Image
              src="/drag-logo.png"
              alt="Drag Catering – Restaurant și servicii de catering în Iași"
              className={`
                ${isScrolled ? 'h-10 sm:h-14 md:h-15' : 'h-14 sm:h-16 md:h-20'}
                w-auto mt-0 mb-0 
                transition-[height] duration-500 ease-in-out motion-reduce:transition-none
              `}
              width={500}
              height={250}
              priority={isHome}
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden xl:flex ml-6 items-center space-x-6 whitespace-nowrap">
            {getPages().map((page) => (
              <li key={page.section}>
                <Link
                  href={`/${page.section}`}
                  className={`font-medium transition-colors duration-200 ${getTextColor()} hover:text-gold/80 whitespace-nowrap text-xl ${
                    pathname === `/${page.section}`
                      ? 'underline underline-offset-8 decoration-gold'
                      : ''
                  }`}
                  aria-current={pathname === `/${page.section}` ? 'page' : undefined}
                >
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={`${getStyleMobileButton()} p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold`}
              aria-label={isMenuOpen ? 'Închide meniul' : 'Deschide meniul'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`xl:hidden fixed inset-x-0 top-[80px] bottom-0 bg-white z-40 overflow-y-auto transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="mt-4 px-2 pt-2 pb-3 space-y-2 sm:px-3 border-t border-gold">
            {pages.map((page) => (
              <Link
                key={page.section}
                href={`/${page.section}`}
                className={`block w-full text-left px-3 py-2 text-charcoal hover:bg-gold/30 rounded-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-colors duration-200 ${
                  pathname === `/${page.section}` ? 'bg-gold/10' : ''
                }`}
                aria-current={pathname === `/${page.section}` ? 'page' : undefined}
              >
                {page.title}
              </Link>
            ))}

            <a
              href="tel:+40754824625"
              className="block mx-3 mt-4 bg-gold text-white px-6 py-3 rounded-full font-medium text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold"
              aria-label="Hai să discutăm - Drag Catering"
            >
              <Phone className="w-4 h-4 inline-block mr-2" fill="currentColor" aria-hidden="true" />
              Hai să discutăm
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
