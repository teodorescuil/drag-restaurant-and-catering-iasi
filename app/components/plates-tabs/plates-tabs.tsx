'use client';

import { useState } from 'react';
import { plates } from '../../helpers/constants/plates';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Tabs from '../tabs/tabs';

type CardItem = {
  id: string;
  name: string;
  weight: string;
  price: string;
  image: string | null;
  description: string;
};

type ListItem = {
  id: string;
  name: string;
  weight: string;
  price: string;
};

type CardCategory = {
  id: string;
  label: string;
  subtitle?: string;
  items: CardItem[];
};

type ListCategory = {
  id: string;
  label: string;
  subtitle?: string;
  items: ListItem[];
};

type AnyCategory = (CardCategory | ListCategory) & {
  type: 'cards' | 'list';
};

export default function PlatesTabs() {
  // extragem categoriile de tip cards și list din structura ta
  const cardCategories: CardCategory[] =
    (plates.find((p) => 'cards' in p) as { cards: CardCategory[] } | undefined)?.cards ?? [];

  const listCategories: ListCategory[] =
    (plates.find((p) => 'list' in p) as { list: ListCategory[] } | undefined)?.list ?? [];

  // facem un array comun, dar cu un field "type"
  const allCategories: AnyCategory[] = [
    ...cardCategories.map((c) => ({ ...c, type: 'cards' as const })),
    ...listCategories.map((c) => ({ ...c, type: 'list' as const })),
  ];

  const [activeCategoryId, setActiveCategoryId] = useState<string>(allCategories[0]?.id);
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const activeCategory =
    allCategories.find((category) => category.id === activeCategoryId) ?? allCategories[0];

  return (
    <>
      <Tabs categories={allCategories} setExpandedCardId={setExpandedCardId} activeCategoryId={activeCategoryId} setActiveCategoryId={setActiveCategoryId} />

      {activeCategory?.subtitle && (
        <div className="text-center">
          <p className="text-gray-700 mb-10 italic">{activeCategory.subtitle}</p>
        </div>
      )}

      {/* 🔀 Aici decidem layout-ul: cards vs list */}
      {activeCategory.type === 'cards' ? (
        <>
          {/* 🟡 MOBILE: dropdown / accordion list */}
          <div className="md:hidden space-y-3">
            {(activeCategory as CardCategory).items.map((dish) => {
              const isExpanded = expandedCardId === dish.id;

              return (
                <div
                  key={dish.id}
                  className="rounded-2xl border border-gold/20 bg-cream/50 overflow-hidden transition-all"
                >
                  {/* Header tapable */}
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedCardId((prev) => (prev === dish.id ? null : dish.id))
                    }
                    className="w-full flex items-center gap-3 px-4 py-3"
                  >
                    {/* imagine mică în stânga */}
                    <div className="flex-shrink-0">
                      <Image
                        src={dish.image ?? '/icon.png'}
                        alt={dish.name}
                        width={56}
                        height={56}
                        className="rounded-xl object-cover"
                      />
                    </div>

                    {/* nume + preț în dreapta */}
                    <div className="flex-1 flex items-center justify-between gap-2">
                      <div className="text-left">
                        <h3 className="text-sm font-playfair font-semibold text-charcoal">
                          {dish.name}
                        </h3>
                        <p className="text-xs text-gray-600">{dish.weight}</p>
                      </div>
                      <span className="inline-flex items-center rounded-full bg-gold/40 text-gold text-xs font-semibold px-2.5 py-1 whitespace-nowrap">
                        {dish.price}
                      </span>
                    </div>

                    {/* săgeată dinamică */}
                    <div className="ml-1 flex-shrink-0">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-gold transition-transform duration-200" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gold transition-transform duration-200" />
                      )}
                    </div>
                  </button>

                  {/* Conținut extins cu ANIMAȚIE + imagine mare */}
                  <div
                    className={`
                      px-4 pb-4 pt-1 border-t border-gold text-sm overflow-hidden
                      transition-all duration-300 ease-out
                      ${isExpanded ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'}
                    `}
                  >
                    {/* imagine mare vizibilă când e deschis */}
                    <div className="w-full flex justify-center mb-3 mt-2">
                      <Image
                        src={dish.image ?? '/icon.png'}
                        alt={dish.name}
                        width={320}
                        height={210}
                        className="rounded-2xl object-cover"
                      />
                    </div>

                    <p className="text-gray-700 mb-3">{dish.description}</p>

                    <div className="flex items-center justify-between pt-2 border-t border-gold mt-1">
                      <span className="text-[11px] text-gray-500">
                        Recomandat pentru{' '}
                        {dish.weight.includes('pers')
                          ? dish.weight.split('(')[1]?.replace(')', '')
                          : 'evenimente de familie'}
                      </span>
                      <span className="text-[11px] font-medium text-gold">
                        Precomandă cu min. 24h înainte
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 🟢 DESKTOP: grid de carduri ca înainte */}
          <div className="hidden md:grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {(activeCategory as CardCategory).items.map((dish) => (
              <article
                key={dish.id}
                className="group bg-cream/50 rounded-3xl overflow-hidden border border-gold/20 hover:border-gold/60 hover:shadow-md transition-all flex flex-col"
              >
                <div className="w-full flex justify-center pt-4">
                  <Image
                    src={dish.image ?? '/icon.png'}
                    alt={dish.name}
                    width={340}
                    height={220}
                    className="rounded-2xl object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col gap-3 flex-1">
                  <header className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-playfair font-bold text-charcoal mb-1">
                        {dish.name}
                      </h3>
                      <p className="text-sm text-gray-600">{dish.weight}</p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-gold/10 text-gold text-sm font-semibold px-3 py-1 whitespace-nowrap">
                      {dish.price}
                    </span>
                  </header>

                  <p className="text-sm text-gray-700 leading-relaxed flex-1">
                    {dish.description}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-gold/20 mt-1">
                    <span className="text-xs text-gray-500">
                      Recomandat pentru{' '}
                      {dish.weight.includes('pers')
                        ? dish.weight.split('(')[1]?.replace(')', '')
                        : 'evenimente de familie'}
                    </span>
                    <span className="text-xs font-medium text-gold">
                      Precomandă cu min. 24h înainte
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </>
      ) : (
        // 🟦 Layout pentru CATEGORII DE TIP LIST (masă festivă, afumături etc.)
        <div className="max-w-3xl mx-auto space-y-4">
            {(activeCategory as ListCategory).items.map((item) => (
                <div
                key={item.id}
                className="flex items-start justify-between gap-3 border-b border-gold pb-3"
                >
                {/* Nume + gramaj – lasă-l să facă wrap */}
                <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-charcoal font-playfair break-words">
                    {item.name}
                    </h3>
                    <p className="text-sm text-gray-600">{item.weight}</p>
                </div>

                {/* Preț – rămâne în dreapta, nu se rupe */}
                <div className="flex-shrink-0 text-right">
                    <span className="inline-flex items-center rounded-full bg-gold/5 text-gold text-sm font-semibold px-3 py-1">
                    {item.price}
                    </span>
                </div>
                </div>
            ))}
        </div>
      )}
    </>
  );
}
