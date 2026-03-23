'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Tabs from '../tabs/tabs';

import { menuFood, menuDrinks } from '../../helpers/constants/menu';

type MenuItem = {
  id: string;
  name: string;
  weight: string | null;
  price: string;
  image: string | null;
  description?: string;
};

type MenuCategory = {
  id: string;
  label: string;
  subtitle?: string;
  items: MenuItem[];
};

type AnyCategory = MenuCategory & {
  type: 'cards' | 'list';
};

// Food = cards, Drinks = list
const mapFood = (categories: MenuCategory[]): AnyCategory[] =>
  categories.map((c) => ({ ...c, type: 'cards' as const }));

const mapDrinks = (categories: MenuCategory[]): AnyCategory[] =>
  categories.map((c) => ({ ...c, type: 'list' as const }));

export default function MenuTabs() {
  const foodCategories = mapFood(menuFood as MenuCategory[]);
  const drinkCategories = mapDrinks(menuDrinks as MenuCategory[]);

  const allCategories: AnyCategory[] = [...foodCategories, ...drinkCategories];

  const drinkCategoryIds = new Set(drinkCategories.map((c) => c.id));

  const [activeCategoryId, setActiveCategoryId] = useState<string>('');

  const activeCategory =
    allCategories.find((category) => category.id === activeCategoryId) ??
    allCategories[0];

  const isDrinksCategory = drinkCategoryIds.has(activeCategoryId);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && allCategories.some((c) => c.id === hash)) {
      setActiveCategoryId(hash);
    } else {
      setActiveCategoryId(allCategories[0].id);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update URL hash when activeCategoryId changes
  useEffect(() => {
    if (activeCategoryId) {
      window.location.hash = activeCategoryId;
    }
  }, [activeCategoryId]); 

  return (
    <>
      {/* Tabs */}
      <Tabs
        categories={allCategories}
        activeCategoryId={activeCategoryId}
        setActiveCategoryId={setActiveCategoryId}
        setExpandedCardId={() => {}}
      />

      {/* Subtitle */}
      {activeCategory?.subtitle && (
        <div className="text-center">
          <p className="text-gray-700 mb-10 italic">{activeCategory.subtitle}</p>
        </div>
      )}

      {/* 💧 LISTĂ PENTRU BĂUTURI: 1 coloană pe mobile, 2 coloane la lg */}
      {isDrinksCategory && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {activeCategory.items.map((item) => (
            <div
              key={item.id}
              className="flex items-start justify-between gap-3 border-b pb-3 border-gold/40"
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-playfair font-semibold text-charcoal break-words">
                  {item.name}
                </h3>

                {item.weight && (
                  <p className="text-sm text-gray-600">{item.weight}</p>
                )}

                {item.description && (
                  <p className="text-sm text-gray-700 mt-1">{item.description}</p>
                )}
              </div>

              <span className="flex-shrink-0 inline-flex items-center text-gold text-sm font-semibold whitespace-nowrap">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* 🍽️ MÂNCARE = CARDURI cu imagine în stânga */}
      {!isDrinksCategory && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {activeCategory.items.map((dish) => (
            <div
              key={dish.id}
              className="flex gap-4 border border-gold rounded-2xl p-3 lg:p-4 bg-cream/50"
            >
              {/* Imagine stânga */}
              <div className="flex-shrink-0">
                <Image
                  src={dish.image ?? '/icon.png'}
                  alt={dish.name}
                  width={120}
                  height={120}
                  className="rounded-2xl object-cover w-[100px] h-[100px] lg:w-[140px] lg:h-[140px]"
                />
              </div>

              {/* Text + Preț */}
              <div className="flex-1 flex flex-col justify-center gap-1">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-base lg:text-lg font-playfair font-semibold text-charcoal">
                      {dish.name}
                    </h3>

                    {dish.weight && (
                      <p className="text-sm text-gray-600">{dish.weight}</p>
                    )}
                  </div>

                  <span className="flex-shrink-0 inline-flex items-center rounded-full bg-gold/10 text-gold text-sm font-semibold px-3 py-1">
                    {dish.price}
                  </span>
                </div>

                {dish.description && (
                  <p className="text-sm text-gray-700 leading-relaxed mt-2 border-t border-gold/30 pt-2">
                    {dish.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
