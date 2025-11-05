import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
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
            Descoperă <span className="text-gold font-dancing">Meniul</span> și <span className="text-gold font-dancing">Platourile</span> Noastre
          </h2>

          <p className={sectionSubtitle}>
            O selecție variată de preparate pentru toate gusturile și ocaziile speciale din Iași
          </p>
        </div>

        <div className="text-center py-12 md:px-12">
          <div className="max-w-3xl mx-auto">

            {/* Icon decorativ → aria-hidden pentru a nu polua cititoarele de ecran */}

            {/* <i className="fas fa-utensils text-6xl text-gold mb-6" aria-hidden="true"></i> */}

            {/* <h3 className="text-xl md:text-2xl font-playfair font-semibold text-charcoal mb-4">
              Explorează meniul
            </h3> */}

            {/* <p className="text-sm md:text-md text-gray-600 mb-8">
              Descoperă selecția noastră completă, organizată pe categorii.<br/>
              Preparatele sunt gătite zilnic din ingrediente proaspete.
            </p> */}

            {/* Legături adânci către secțiuni – utile pentru SEO & UX */}
            {/* <nav aria-label="Categorii meniu" className="mb-8">
              <ul className="flex flex-wrap gap-2 justify-center">
                {CATEGORIES.map(cat => (
                  <li key={cat.slug}>
                    <Link
                      href={`/meniu#${cat.slug}`}
                      className="tertiary !border-0"
                    >
                      {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav> */}
            <div className='flex flex-col items-center gap-6'>
              <div className='flex flex-col md:flex-row justify-evenly items-center gap-6'>
                <Link
                  href="/meniu"
                  aria-label="Vezi meniul complet al restaurantului"
                  // className="primary"
                >
                  <Image className='rounded-2xl md:w-80' src="/images/menu-cover.png" alt="Meniu" width={200} height={200} />
                </Link>
                <Link
                  href="/platouri"
                  aria-label="Vezi platourile restaurantului"
                  // className="primary"
                >
                  <Image className='rounded-2xl md:w-80' src="/images/platter-cover.png" alt="Platouri" width={200} height={200} />
                </Link>
              </div>
              <p className='text-md italic'>Apasă pe imagini pentru a descoperi preparatele noastre.</p>
            </div>

            {/* <div className="items-center">
              <Link
                href="/meniu"
                aria-label="Vezi meniul complet al restaurantului"
                className="primary"
              >
                <BookOpen className="w-5 h-5 mr-3" aria-hidden="true"/>
                Vezi meniul complet
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      {/* JSON-LD pentru lista de categorii */}
      <Script id="ld-itemlist-categorii" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
    </section>
  );
}
