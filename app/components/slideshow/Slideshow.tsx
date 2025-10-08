'use client'
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export type GalleryImage = {
  alt: string;
  title?: string;
  src: string;
  width?: number;
  height?: number;
};

type Props = {
  images: GalleryImage[];
  lcpIndex?: number;
};

export default function SlideShow({ images, lcpIndex = 0 }: Props) {
  const [currentSlide, setCurrentSlide] = useState(lcpIndex);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenIndex, setFullscreenIndex] = useState(lcpIndex);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  const openFullscreen = (startIndex: number) => {
    setFullscreenIndex(startIndex);
    setIsFullscreen(true);
    document.documentElement.classList.add('overflow-hidden');
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    document.documentElement.classList.remove('overflow-hidden');
  };

  const next = () => setCurrentSlide(s => (s === images.length - 1 ? 0 : s + 1));
  const prev = () => setCurrentSlide(s => (s === 0 ? images.length - 1 : s - 1));

  const nextFs = () => setFullscreenIndex(i => (i === images.length - 1 ? 0 : i + 1));
  const prevFs = () => setFullscreenIndex(i => (i === 0 ? images.length - 1 : i - 1));

  // A11y: global keydown doar când modalul e deschis
  useEffect(() => {
    if (!isFullscreen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeFullscreen();
      if (e.key === 'ArrowRight') nextFs();
      if (e.key === 'ArrowLeft') prevFs();
    };
    window.addEventListener('keydown', onKey);
    dialogRef.current?.focus();
    return () => window.removeEventListener('keydown', onKey);
  }, [isFullscreen]);

  const mainImg = images[currentSlide];

  return (
    <>
      <div className="space-y-4">
        {/* Main image: folosește fill (nu dimensiuni arbitrare) */}
        <figure className="relative aspect-[4/3] rounded-2xl overflow-hidden group mb-4">
          <Image
            src={mainImg.src}
            alt={mainImg.alt}
            fill
            sizes="(min-width:1280px) 900px, (min-width:768px) 80vw, 100vw"
            priority={currentSlide === lcpIndex}
            className="object-cover transition-all duration-500 cursor-pointer"
            onClick={() => openFullscreen(currentSlide)}
          />
          {/* Visible label for main image */}
          {(mainImg.title) && (
            <div className="absolute top-4 left-4 bg-gold text-white px-4 py-1 rounded-xl max-w-[80%]">
              <span className="text-base font-semibold">
                {mainImg.title}
              </span>
            </div>
          )}
          {mainImg.title && <figcaption className="sr-only">{mainImg.title}</figcaption>}

          <button
            type="button"
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
            aria-label="Imaginea anterioară"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
            aria-label="Imaginea următoare"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>

          <div className="absolute bottom-4 right-4 flex space-x-2" aria-label="Indicatori slide">
            {images.map((_, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Mergi la imaginea ${index + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-gold' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </figure>

        {/* Thumbnails: dimensiuni mici reale + lazy */}
        <div className="grid grid-cols-5 gap-2" aria-label="Miniaturi galerie">
          {images.map((img, index) => (
            <button
              type="button"
              key={`${img.src}-${index}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Afișează miniatura ${index + 1}: ${img.title}`}
              className={`aspect-[4/3] rounded-lg overflow-hidden transition-all duration-200 ${
                index === currentSlide ? 'ring-2 ring-gold ring-offset-2 opacity-100' : 'opacity-60 hover:opacity-80'
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={160}
                height={120}
                sizes="160px"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen dialog */}
      {isFullscreen && (
        <div
          ref={dialogRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label="Galerie în ecran complet"
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              type="button"
              onClick={closeFullscreen}
              className="absolute top-6 right-6 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10 transition-all duration-200"
              aria-label="Închide"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="relative max-w-6xl max-h-[90vh] mx-4">
              {/* În modal putem folosi dimensiunile reale dacă le ai; altfel rămânem pe fill + contain */}
              <div className="relative w-[90vw] max-w-[1024px] h-[70vh]">
                <Image
                  src={images[fullscreenIndex].src}
                  alt={images[fullscreenIndex].alt}
                  fill
                  sizes="(min-width:1024px) 1024px, 90vw"
                  className="object-contain rounded-lg"
                  priority
                />
                {/* Visible label for fullscreen image */}
                {(images[fullscreenIndex].title) && (
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-6 py-3 rounded-lg max-w-[80%]">
                    <span className="text-lg font-semibold">
                      {images[fullscreenIndex].title}
                    </span>
                    <span className="ml-4 text-sm opacity-80">
                      {fullscreenIndex + 1} din {images.length}
                    </span>
                  </div>
                )}
              </div>

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevFs}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-200"
                    aria-label="Imagine anterioară"
                  >
                    <ChevronLeft className="w-6 h-6" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={nextFs}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-200"
                    aria-label="Imagine următoare"
                  >
                    <ChevronRight className="w-6 h-6" aria-hidden="true" />
                  </button>
                </>
              )}

              {(images[fullscreenIndex].title) && (
                <div className="absolute bottom-6 left-6 bg-black/70 text-white px-6 py-3 rounded-lg">
                  <h3 className="text-xl font-semibold">
                    {images[fullscreenIndex].title}
                  </h3>
                  <p className="text-sm opacity-90">
                    {fullscreenIndex + 1} din {images.length}
                  </p>
                </div>
              )}

              {images.length > 1 && (
                <div className="absolute bottom-6 right-6 flex space-x-2 max-w-md overflow-x-auto">
                  {images.map((img, index) => (
                    <button
                      type="button"
                      key={`${img.src}-fs-${index}`}
                      onClick={() => setFullscreenIndex(index)}
                      className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden transition-all duration-200 ${
                        index === fullscreenIndex ? 'ring-2 ring-gold opacity-100' : 'opacity-60 hover:opacity-80'
                      }`}
                      aria-label={`Afișează imaginea ${index + 1}`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={64}
                        height={48}
                        sizes="64px"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* noscript: folosește <img>, nu next/image */}
      <noscript>
        <div>
          {images.slice(0, 3).map((img, i) => (
            <p key={`ns-${i}`}>
              <img src={img.src} alt={img.alt} width="800" height="600" />
            </p>
          ))}
        </div>
      </noscript>
    </>
  );
}
