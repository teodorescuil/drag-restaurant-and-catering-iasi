import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import SocialButtons from "../SocialButtons";
import { pages } from "@/app/helpers/constants/pages";

export default function Footer() {
  const year = new Date().getFullYear();

  // TODO: înlocuiește cu link-urile reale când le ai
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
                aria-label="Pagina principală Drag Catering"
              >
                <span className="text-gold">Drag</span> Catering
              </Link>
            </h2>

            <p className="text-gray-300 mb-6 max-w-xl mx-auto md:mx-0">
              Meniuri proaspete zilnic și servicii excepționale pentru toate ocaziile tale speciale.
            </p>

            <div aria-label="Linkuri social media">
              <SocialButtons />
            </div>
          </div>

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
                  href="tel:+40754824625"
                  aria-label="Sună Drag Catering la +40 754 824 625"
                  className="hover:text-gold/80 transition-colors duration-200"
                >
                  +40 754 824 625
                </a>
              </p>

              <p className="flex items-center justify-center md:justify-start">
                <Mail className="text-gold mr-2 w-4 h-4" aria-hidden="true" />
                <a
                  href="mailto:info@dragcatering.ro"
                  aria-label="Trimite email către Drag Catering"
                  className="hover:text-gold/80 transition-colors duration-200"
                >
                  info@dragcatering.ro
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
                    aria-label="Vezi locația Drag Catering pe Google Maps"
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
                    L–J <time dateTime="10:00">10:00</time> – <time dateTime="22:00">22:00</time>
                  </div>
                  <div>
                    V–D <time dateTime="10:00">10:00</time> – <time dateTime="23:59">00:00</time>
                  </div>
                </div>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {year} Drag Catering. Toate drepturile sunt rezervate.</p>
		  <Link href="/politica-confidentialitate" className="hover:text-gold/80">Politica de confidențialitate</Link>
		   {" "}|{" "}
		  <Link href="/termeni-si-conditii" className="hover:text-gold/80">Termeni și condiții</Link>
        </div>
      </div>
    </footer>
  );
}
