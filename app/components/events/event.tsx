import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Info, ChevronRight, ChevronDown } from "lucide-react";

type EventItem = {
  title: string;
  description: string;
  features: string[];
  priceRange: string;
  image: string;
  href: string;
  capacity?: string;
};

type EventProps = {
  event: EventItem;
  isMobile?: boolean; // pass this from parent or use a media-query hook inside
};

export default function Event({ event, isMobile }: EventProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Mobile "dropdown" header button
  const MobileToggle = () => (
    <button
      type="button"
      onClick={() => setIsOpen((s) => !s)}
      className="flex items-center w-full px-4 py-3 text-left gap-3"
      aria-expanded={isOpen}
      aria-controls={`event-panel-${event.title}`}
    >
      {isOpen ? (
        <ChevronDown className="w-5 h-5 shrink-0" aria-hidden="true" color="#d3a56e"/>
      ) : (
        <ChevronRight className="w-5 h-5 shrink-0" aria-hidden="true" color="#d3a56e"/>
      )}

      {/* Show the title ONLY when closed */}
      {!isOpen && (
        <span className="text-base font-medium text-charcoal truncate">
          {event.title}
        </span>
      )}
    </button>
  );

  // The full card content (without the big title on mobile-open)
  const CardContent = () => (
    <>
      <div className="relative overflow-hidden">
        <div className="relative aspect-[16/10]">
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(max-width: 1024px) 100vw, 600px" // ajustează după layout
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            quality={85}
            priority={!!isMobile && isOpen} // când e deschis pe mobil, încarcă repede varianta bună
          />
        </div>

        {/* <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
          {event.priceRange}
        </div> */}
      </div>

      <div className="px-8 pt-8">
        {/* Desktop always shows title; mobile-open hides it */}
        <h3 className="text-2xl font-playfair font-semibold mb-4 text-center text-charcoal">
        {event.title}
        </h3>

        <p className="text-gray-400 text-sm mb-6 text-center leading-relaxed">
          {event.description}
        </p>

        {/* If you later need capacity/features, you can re-enable these with conditionals */}
        {/* <div className="mb-6"> ... </div> */}
        {/* <ul className="text-sm text-gray-700 space-y-3 mb-6"> ... </ul> */}
      </div>

      <div className="mt-auto flex justify-center border-t border-gray-200 mx-2 p-8">
        <Link href={event.href} className="labelButton">
          <Info className="w-5 h-5 mr-3" aria-hidden="true" />
          Vezi detalii
        </Link>
      </div>
    </>
  );

  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden group">
      {isMobile ? (
        // MOBILE MODE
        <>
          <MobileToggle />
          {/* Panel content (shown only when open) */}
          {isOpen && (
            <div id={`event-panel-${event.title}`} className="border-t border-gray-100">
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
