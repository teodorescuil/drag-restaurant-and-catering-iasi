import {useState} from "react";
import { ChevronRight, ChevronDown, Phone } from "lucide-react";
import SlideShow from "../../components/slideshow/Slideshow";
import type { GalleryImage } from "../../components/slideshow/Slideshow";

type EventItem = {
    id: number;
    name: string;
    slug: string;
    description: string;
    detailedDescription: string;
    features: string[];
    capacity?: string;
    duration: string;
    priceRange: string;
    included: string[];
    gallery: GalleryImage[];
};
type EventProps = {
    index: number;
    event: EventItem;
    isMobile?: boolean; // pass this from parent or use a media-query hook inside
};

export default function Event({ index, event, isMobile }: EventProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Mobile "dropdown" header button
  const MobileToggle = () => (
    <button
      type="button"
      onClick={() => setIsOpen((s) => !s)}
      className="flex items-center w-full px-4 py-3 text-left gap-3"
      aria-expanded={isOpen}
      aria-controls={`event-panel-${event.name}`}
    >
      {isOpen ? (
        <ChevronDown className="w-5 h-5 shrink-0" aria-hidden="true" color="#d3a56e"/>
      ) : (
        <ChevronRight className="w-5 h-5 shrink-0" aria-hidden="true" color="#d3a56e"/>
      )}

      {/* Show the title ONLY when closed */}
      {!isOpen && (
        <span className="text-base font-medium text-charcoal truncate">
          {event.name}
        </span>
      )}
    </button>
  );

   // The full card content (without the big title on mobile-open)
  const CardContent = () => (
    <div key={event.id} id={event.slug} className={`p-4 scroll-mt-30 grid lg:grid-cols-2 gap-6 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
      {/* Images */}
      <SlideShow images={event.gallery} />

      {/* Content */}
      <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
        <h2 className="text-4xl font-playfair font-bold text-charcoal">{event.name}</h2>
        <p className="text-lg text-gray-700 mb-2">{event.description}</p>
        <div className="bg-cream/70 rounded-xl p-4">
          <p className="text-gray-600 leading-relaxed text-md text-justify">{event.detailedDescription}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="">
            <h4 className="font-bold text-charcoal mb-3">Servicii Incluse:</h4>
            <ul className="space-y-2">
              {event.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="text-gray-600 text-sm flex items-start">
                  <i className="fas fa-check text-gold mr-2 mt-0.5 text-xs"></i>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <h4 className="font-bold text-charcoal mb-3">Pachetul Include:</h4>
            <ul className="grid gap-4">
              {event.included.map((item, itemIndex) => (
                <li key={itemIndex} className="text-gray-700 text-sm flex items-start">
                  <i className="fas fa-star text-gold mr-2 mt-0.5 text-xs"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Capacitate:</span>
            <span className="font-semibold text-charcoal">{event.capacity}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Durată:</span>
            <span className="font-semibold text-charcoal">{event.duration}</span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-gold/20">
            <span className="text-lg font-bold text-charcoal">Preț:</span>
            <span className="text-xl font-bold text-gold">începând de la {event.priceRange}</span>
          </div>
        </div> */}
        <nav className="flex flex-row justify-start">
          <a 
            href="tel:0754824625" 
            className="secondary"
          >
            <Phone className="mr-3 w-5 h-5" fill="white" />
            Sună Acum
          </a>
        </nav>
      </div>
    </div>
  );

    return (
    <div className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden group">
      {isMobile ? (
        // MOBILE MODE
        <>
          <MobileToggle />
          {/* Panel content (shown only when open) */}
          {isOpen && (
            <div id={`event-panel-${event.name}`} className="border-t border-gray-100">
              <CardContent />
            </div>
          )}
        </>
      ) : (
        // DESKTOP MODE
        <CardContent />
      )}
    </div>
  );
}
