import Link from 'next/link';
import Script from 'next/script';
import {BookOpen } from 'lucide-react';
import { sectionTopTitle, sectionWrapper, sectionTitle, sectionSubtitle, sectionInfoContent } from '../../helpers/constants/styles';

const CATEGORIES = [
  { slug: 'platouri', label: 'Platouri' },
  { slug: 'aperitive', label: 'Aperitive' },
  { slug: 'feluri-principale', label: 'Feluri principale' },
  { slug: 'paste', label: 'Paste' },
  { slug: 'supe', label: 'Supe' },
  { slug: 'deserturi', label: 'Deserturi' },
];

export default function FullMenuPreview() {
  // JSON-LD: ItemList cu legături către secțiuni din meniul complet
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Categorii meniu",
    "itemListElement": CATEGORIES.map((c, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": c.label,
      "url": `https://dragcatering.ro/meniu#${c.slug}`
    }))
  };

  // Alternativ sau pe lângă, poți folosi și Menu/hasMenuSection la nivelul paginii /meniu
  // const menuLd = { "@context": "https://schema.org", "@type": "Menu", "name": "Meniu complet", "hasMenuSection": ... }

  return (
    <section id="full-menu" className="py-20 bg-cream/70" aria-labelledby="full-menu-title">
      <div className={sectionWrapper}>
        <div className={sectionInfoContent}>
          <div className="inline-block bg-gold/10 px-6 py-2 rounded-full mb-6">
            <span className={sectionTopTitle}>Selecție Completă</span>
          </div>

          <h2 id="full-menu-title" className={sectionTitle}>
            Descoperă <span className="text-gold font-dancing">Meniul</span> Nostru Complet
          </h2>

          <p className={sectionSubtitle}>
            O selecție variată de preparate pentru toate gusturile și ocaziile speciale din Iași
          </p>
        </div>

        <div className="text-center bg-white rounded-2xl p-12 shadow-lg">
          <div className="max-w-2xl mx-auto">

            {/* Icon decorativ → aria-hidden pentru a nu polua cititoarele de ecran */}

            <i className="fas fa-utensils text-6xl text-gold mb-6" aria-hidden="true"></i>

            <h3 className="text-2xl font-playfair font-semibold text-charcoal mb-4">
              Explorează meniul
            </h3>

            <p className="text-gray-600 mb-8">
              Descoperă selecția noastră completă, organizată pe categorii.<br/>
              Preparatele sunt gătite zilnic din ingrediente proaspete.
            </p>

            {/* Legături adânci către secțiuni – utile pentru SEO & UX */}
            <nav aria-label="Categorii meniu" className="mb-8">
              <ul className="flex flex-wrap gap-2 justify-center">
                {CATEGORIES.map(cat => (
                  <li key={cat.slug}>
                    <Link
                      href={`/meniu#${cat.slug}`}
                      className="inline-block border border-gold/40 text-charcoal hover:text-gold hover:border-gold px-4 py-2 rounded-full text-sm transition-colors duration-200"
                    >
                      {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/meniu"
                aria-label="Vezi meniul complet al restaurantului"
                className="inline-flex items-center bg-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-gold/90 transition-colors duration-200"
              >
                <BookOpen className="w-5 h-5 mr-3" aria-hidden="true"/>
                Vezi meniul complet
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD pentru lista de categorii */}
      <Script id="ld-itemlist-categorii" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
    </section>
  );
}
