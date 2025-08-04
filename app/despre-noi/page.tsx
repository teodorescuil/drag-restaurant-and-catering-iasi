'use client';
import { useState } from 'react';
import {restaurantImages, storyImages, teamImages} from './data';

export default function AboutDetailed() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStorySlide, setCurrentStorySlide] = useState(0);
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenImages, setFullscreenImages] = useState<Array<{src: string, alt: string, title: string}>>([]);
  const [fullscreenIndex, setFullscreenIndex] = useState(0);

  const openFullscreen = (images: Array<{src: string, alt: string, title: string}>, startIndex: number) => {
    setFullscreenImages(images);
    setFullscreenIndex(startIndex);
    setIsFullscreen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    document.body.style.overflow = 'auto';
  };

  const nextFullscreenImage = () => {
    setFullscreenIndex(fullscreenIndex === fullscreenImages.length - 1 ? 0 : fullscreenIndex + 1);
  };

  const prevFullscreenImage = () => {
    setFullscreenIndex(fullscreenIndex === 0 ? fullscreenImages.length - 1 : fullscreenIndex - 1);
  };

  return (
    <section className="mt-28 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block bg-gold/10 px-6 py-2 rounded-full mb-6">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">Povestea Noastră</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-charcoal mb-6">
            Despre <span className="text-gold font-dancing">Drag</span> Catering
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cu peste 15 ani de experiență în arta culinară, Drag Catering și Restaurantul Drag 
            din Iași aduc autenticitatea gusturilor românești și rafinamentul bucătăriei internaționale 
            atât în restaurantul nostru, cât și direct la masa dumneavoastră prin serviciile de catering.
          </p>
        </div>

        {/* Restaurant & Catering Images */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
              <img 
                src="./images/drag-1.jpg"
                alt="Interior elegant al Restaurantului Drag din Iași"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
              <img 
                src="./images/drag-2.jpg"
                alt="Echipa Drag Catering în bucătărie"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="bg-cream p-12 rounded-3xl">
            <div className="text-gold mb-6">
              <i className="fas fa-heart text-4xl"></i>
            </div>
            <h2 className="text-3xl font-playfair font-bold text-charcoal mb-6">Misiunea Noastră</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Credem că fiecare masă este o oportunitate de a crea amintiri de neuitat. 
              Misiunea noastră este să transformăm fiecare experiență culinară într-o poveste 
              memorabilă, fie că vă așteptăm în restaurantul nostru din Iași sau venim la dumneavoastră 
              prin serviciile de catering.
            </p>
            <p className="text-gray-700 leading-relaxed">
              De la cine intime în restaurantul nostru la nunți elegante, de la conferințe corporative 
              la petreceri private, aducem aceeași pasiune și atenție la detalii în fiecare preparat servit.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gold/5 to-gold/10 p-12 rounded-3xl">
            <div className="text-gold mb-6">
              <i className="fas fa-star text-4xl"></i>
            </div>
            <h2 className="text-3xl font-playfair font-bold text-charcoal mb-6">Viziunea Noastră</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Să devenim cea mai respectată companie de catering din România, recunoscută 
              pentru excelența culinară, serviciul impecabil și capacitatea de a depăși 
              așteptările clienților noștri.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Aspirăm să păstrăm și să promovăm tradițiile culinare românești, 
              îmbinându-le armonios cu tendințele moderne ale gastronomiei internaționale.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="">
          <h2 className="text-4xl font-playfair font-bold text-center text-charcoal">
            Valorile <span className="text-gold font-dancing">Care Ne Definesc</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-leaf text-2xl text-gold"></i>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-charcoal mb-4">Ingrediente Proaspete</h3>
              <p className="text-gray-600 leading-relaxed">
                Colaborăm exclusiv cu furnizori locali de încredere pentru a garanta 
                prospețimea și calitatea superioară a tuturor ingredientelor.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-users text-2xl text-gold"></i>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-charcoal mb-4">Echipă Profesionistă</h3>
              <p className="text-gray-600 leading-relaxed">
                Bucătarii și personalul nostru sunt cu adevărat pasionați de arta culinară 
                și se dedică creării unor experiențe culinare excepționale.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-handshake text-2xl text-gold"></i>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-charcoal mb-4">Serviciu Personalizat</h3>
              <p className="text-gray-600 leading-relaxed">
                Fiecare client este unic, și ne adaptăm serviciile pentru a răspunde 
                perfect nevoilor și preferințelor dumneavoastră specifice.
              </p>
            </div>
          </div>
        </div>

        {/* Restaurant Section */}
        <div className="bg-gradient-to-br from-gold/5 to-cream rounded-3xl p-12 md:p-16 mb-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-playfair font-bold text-center text-charcoal mb-12">
              Restaurantul <span className="text-gold font-dancing">Drag</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Situat în inima municipiului Iași pe Bulevardul Poitiers, Restaurantul Drag 
                  oferă o experiență culinară completă într-un ambient elegant și primitor. 
                  Spațiul nostru combină perfect tradițiile românești cu designul modern.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl">
                    <div className="text-gold mb-3">
                      <i className="fas fa-users text-2xl"></i>
                    </div>
                    <h4 className="font-semibold text-charcoal mb-2">Capacitate</h4>
                    <p className="text-gray-600">80 de locuri în interior + terasă de vară</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl">
                    <div className="text-gold mb-3">
                      <i className="fas fa-wine-glass text-2xl"></i>
                    </div>
                    <h4 className="font-semibold text-charcoal mb-2">Ambianță</h4>
                    <p className="text-gray-600">Elegant, intim, perfect pentru orice ocazie</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {/* Main Image Display */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                  <img 
                    src={restaurantImages[currentSlide].src}
                    alt={restaurantImages[currentSlide].alt}
                    className="w-full h-full object-cover transition-all duration-500 cursor-pointer"
                    onClick={() => openFullscreen(restaurantImages, currentSlide)}
                  />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={() => setCurrentSlide(currentSlide === 0 ? restaurantImages.length - 1 : currentSlide - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  
                  <button
                    onClick={() => setCurrentSlide(currentSlide === restaurantImages.length - 1 ? 0 : currentSlide + 1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                  
                  {/* Slide Indicators */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    {restaurantImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentSlide ? 'bg-gold' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Thumbnail Navigation */}
                <div className="grid grid-cols-5 gap-2">
                  {restaurantImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`aspect-[4/3] rounded-lg overflow-hidden transition-all duration-200 ${
                        index === currentSlide 
                          ? 'ring-2 ring-gold ring-offset-2 opacity-100' 
                          : 'opacity-60 hover:opacity-80'
                      }`}
                    >
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-playfair font-semibold text-charcoal mb-6 text-center">
                Servicii Restaurant
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-utensils text-xl text-gold"></i>
                  </div>
                  <h4 className="font-semibold text-charcoal mb-2">À la Carte</h4>
                  <p className="text-gray-600 text-sm">Meniu variat cu specialități românești și internaționale</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-birthday-cake text-xl text-gold"></i>
                  </div>
                  <h4 className="font-semibold text-charcoal mb-2">Evenimente Private</h4>
                  <p className="text-gray-600 text-sm">Sărbători, aniversări și petreceri private</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-business-time text-xl text-gold"></i>
                  </div>
                  <h4 className="font-semibold text-charcoal mb-2">Meniul zilei</h4>
                  <p className="text-gray-600 text-sm">Meniuri speciale pentru fiecare zi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-gray-50 rounded-3xl p-12 md:p-16 mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-playfair font-bold text-center text-charcoal mb-12">
              Povestea <span className="text-gold font-dancing">Drag</span> Catering
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-8 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Drag Catering s-a născut din pasiunea pentru bucătăria tradițională românească 
                  și dorința de a oferi experiențe culinare autentice. Începuturile noastre 
                  modeste s-au transformat treptat într-o poveste de succes, bazată pe dedicarea 
                  față de calitate și satisfacția clienților.
                </p>
                
                <p className="text-lg">
                  De-a lungul anilor, am avut privilegiul să fim partenerii culinari pentru 
                  mii de evenimente speciale - de la nunți elegante în palatele istorice 
                  până la conferințe corporative moderne.
                </p>
              </div>
              
              <div className="space-y-4">
                {/* Main Story Image Display */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                  <img 
                    src={storyImages[currentStorySlide].src}
                    alt={storyImages[currentStorySlide].alt}
                    className="w-full h-full object-cover transition-all duration-500 cursor-pointer"
                    onClick={() => openFullscreen(storyImages, currentStorySlide)}
                  />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={() => setCurrentStorySlide(currentStorySlide === 0 ? storyImages.length - 1 : currentStorySlide - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  
                  <button
                    onClick={() => setCurrentStorySlide(currentStorySlide === storyImages.length - 1 ? 0 : currentStorySlide + 1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                  
                  {/* Slide Indicators */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    {storyImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentStorySlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentStorySlide ? 'bg-gold' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Story Thumbnail Navigation */}
                <div className="grid grid-cols-5 gap-2">
                  {storyImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStorySlide(index)}
                      className={`aspect-[4/3] rounded-lg overflow-hidden transition-all duration-200 ${
                        index === currentStorySlide 
                          ? 'ring-2 ring-gold ring-offset-2 opacity-100' 
                          : 'opacity-60 hover:opacity-80'
                      }`}
                    >
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
              <div className="space-y-4 order-2 lg:order-1">
                {/* Team Slideshow */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                  <img 
                    src={teamImages[currentTeamSlide].src}
                    alt={teamImages[currentTeamSlide].alt}
                    className="w-full h-full object-cover transition-all duration-500 cursor-pointer"
                    onClick={() => openFullscreen(teamImages, currentTeamSlide)}
                  />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={() => setCurrentTeamSlide(currentTeamSlide === 0 ? teamImages.length - 1 : currentTeamSlide - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  
                  <button
                    onClick={() => setCurrentTeamSlide(currentTeamSlide === teamImages.length - 1 ? 0 : currentTeamSlide + 1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                  
                  {/* Slide Indicators */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    {teamImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTeamSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentTeamSlide ? 'bg-gold' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Team Thumbnail Navigation */}
                <div className="grid grid-cols-5 gap-2">
                  {teamImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTeamSlide(index)}
                      className={`aspect-[4/3] rounded-lg overflow-hidden transition-all duration-200 ${
                        index === currentTeamSlide 
                          ? 'ring-2 ring-gold ring-offset-2 opacity-100' 
                          : 'opacity-60 hover:opacity-80'
                      }`}
                    >
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-playfair font-semibold text-charcoal mb-6">
                  Excelența în Fiecare Detaliu
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Astăzi, echipa noastră de bucătari experimentați combină tehnicile culinare 
                  tradiționale cu inovațiile moderne, creând meniuri care satisfac cele mai 
                  rafinate gusturi.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Rămânem fideli originilor noastre, oferind întotdeauna preparate proaspete, 
                  savuroase și prezentate cu grijă pentru detalii. Fiecare farfurie spune 
                  o poveste de dedicare și măiestrie culinară.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>

     {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-gold/10 via-cream to-gold/10 p-12 rounded-2xl bg-cream">
          <h3 className="text-3xl font-playfair font-bold text-charcoal mb-6">
            Să creem împreună amintiri de neuitat
          </h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Contactați-ne astăzi pentru a discuta despre evenimentul dumneavoastră. 
            Echipa noastră este pregătită să transforme viziunea culinară în realitate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center bg-gold text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold/90 transition-colors duration-200"
            >
              <i className="fas fa-envelope mr-3"></i>
              Contactează-ne
            </a>
            <a 
              href="tel:0754824625" 
              className="inline-flex items-center border-2 border-gold text-gold px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold hover:text-white transition-colors duration-200"
            >
              <i className="fas fa-phone mr-3"></i>
              Sună Acum
            </a>
          </div>
        </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeFullscreen}
              className="absolute top-6 right-6 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10 transition-all duration-200"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
            
            {/* Main Fullscreen Image */}
            <div className="relative max-w-6xl max-h-[90vh] mx-4">
              <img 
                src={fullscreenImages[fullscreenIndex]?.src}
                alt={fullscreenImages[fullscreenIndex]?.alt}
                className="w-full h-full object-contain rounded-lg"
              />
              
              {/* Navigation Arrows */}
              {fullscreenImages.length > 1 && (
                <>
                  <button
                    onClick={prevFullscreenImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-200"
                  >
                    <i className="fas fa-chevron-left text-xl"></i>
                  </button>
                  
                  <button
                    onClick={nextFullscreenImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-200"
                  >
                    <i className="fas fa-chevron-right text-xl"></i>
                  </button>
                </>
              )}
              
              {/* Image Info */}
              <div className="absolute bottom-6 left-6 bg-black/70 text-white px-6 py-3 rounded-lg">
                <h3 className="text-xl font-semibold">{fullscreenImages[fullscreenIndex]?.title}</h3>
                <p className="text-sm opacity-90">{fullscreenIndex + 1} din {fullscreenImages.length}</p>
              </div>
              
              {/* Thumbnail Strip */}
              {fullscreenImages.length > 1 && (
                <div className="absolute bottom-6 right-6 flex space-x-2 max-w-md overflow-x-auto">
                  {fullscreenImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setFullscreenIndex(index)}
                      className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden transition-all duration-200 ${
                        index === fullscreenIndex 
                          ? 'ring-2 ring-gold opacity-100' 
                          : 'opacity-60 hover:opacity-80'
                      }`}
                    >
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}