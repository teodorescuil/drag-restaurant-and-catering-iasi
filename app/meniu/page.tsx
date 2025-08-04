export default function FullMenu() {
  return (
    <section id="full-menu" className="mt-28 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gold/10 px-6 py-2 rounded-full mb-6">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">Meniu Complet</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-6">
            Descoperă <span className="text-gold font-dancing">Meniul</span> Nostru Complet
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            O selecție variată de preparate autentice pentru toate gusturile și ocaziile speciale
          </p>
        </div>
        <div className="pdf w-full max-w-6xl mx-auto">
          <iframe
            src="/meniu-drag.pdf#toolbar=0"
            className="w-full h-[calc(100vh-200px)] rounded-xl shadow-lg"
            title="Meniu Complet"
          />
        </div>
      </div>
    </section>
  );
}
