import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import SocialButtons from "../SocialButtons";
import { pages } from "../../helpers/constants/pages";

export default function Footer() {
  const year = new Date().getFullYear();

  const mapsUrl = "https://maps.app.goo.gl/9CUhbpa2H8r6MjvP9";

  return (
    <footer role="contentinfo" className="bg-charcoal border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-playfair font-bold text-white mb-4">
              <Link
                href="/"
                className="inline-block hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 rounded-sm"
                aria-label="Pagina principală Drag Restaurant & Catering"
              >
                <span className="text-gold">Drag</span> Restaurant & Catering
              </Link>
            </h2>

            <p className="text-gray-300 mb-6 max-w-xl mx-auto md:mx-0">
              Meniuri proaspete zilnic și servicii excepționale pentru toate ocaziile tale speciale.
            </p>

            <div aria-label="Linkuri social media">
              <SocialButtons />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            {/* Linkuri rapide */}
          <nav aria-label="Linkuri rapide">
            <h3 className="font-semibold text-white mb-4">Linkuri rapide</h3>
            <ul className="space-y-2 text-gray-300">
              {pages.map((page) => (
                <li key={page.section}>
                  <Link
				  	        prefetch={false}
                    href={`/${page.section}`}
                    className="hover:text-gold/80 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 rounded-sm"
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <address className="not-italic text-gray-300 text-sm space-y-3">
              <p className="flex items-center justify-center md:justify-start">
                <Phone className="text-gold mr-2 w-4 h-4" aria-hidden="true" />
                <a
                  href="tel:+40741664241"
                  aria-label="Sună Drag Restaurant & Catering la +40 741 664 241"
                  className="hover:text-gold/80 transition-colors duration-200"
                >
                  +40 741 664 241
                </a>
              </p>

              <p className="flex items-center justify-center md:justify-start">
                <Mail className="text-gold mr-2 w-4 h-4" aria-hidden="true" />
                <a
                  href="mailto:dragcatering@gmail.com"
                  aria-label="Trimite email către Drag Restaurant & Catering"
                  className="hover:text-gold/80 transition-colors duration-200"
                >
                  dragcatering@gmail.com
                </a>
              </p>

              <p className="flex items-start justify-center md:justify-start">
                <MapPin className="text-gold mr-2 w-4 h-4 mt-1" aria-hidden="true" />
                <span>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold/80 transition-colors duration-200"
                    aria-label="Vezi locația Drag Restaurant & Catering pe Google Maps"
                    title="Deschide locația în Google Maps"
                  >
                    Bulevardul Poitiers 12
                    <br />
                    Iași 700671, România
                  </a>
                </span>
              </p>

              <div className="flex items-start justify-center md:justify-start">
                <Clock className="text-gold mr-2 w-4 h-4 mt-1" aria-hidden="true" />
                <div>
                  <div>
                    L–J <time dateTime="10:00">10:00</time> – <time dateTime="21:00">21:00</time>
                  </div>
                  <div>
                    V–D <time dateTime="10:00">10:00</time> – <time dateTime="22:00">22:00</time>
                  </div>
                </div>
              </div>
            </address>
          </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {year} Drag Restaurant & Catering. Toate drepturile sunt rezervate.</p>
		  {/* <Link href="/politica-confidentialitate" className="hover:text-gold/80">Politica de confidențialitate</Link>
		   {" "}|{" "}
		  <Link href="/termeni-si-conditii" className="hover:text-gold/80">Termeni și condiții</Link> */}
        </div>
      </div>
    </footer>
  );
}
