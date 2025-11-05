'use client';
import { useState, useEffect } from 'react';
import DailyMenuPlaceholder from '../daily-menu-placeholder/DailyMenuPlaceholder';
import { Phone } from "lucide-react"
import {sectionTopTitle, sectionWrapper, sectionTitle, sectionSubtitle} from '../../helpers/constants/styles';
import {days} from '../../helpers/constants/weekly-menu';
import MenuByDay from './components/MenuByDay'
import useIsMobile from '@/app/helpers/hooks/useIsMobile';

type Course = {
  type: string;
  name: string;
  description: string;
  ingredients: string;
  allergens: string[];
  image: string;
};

type Props = {
  currentDayName: string;
  foodForAllCurrentWeek: Course[][];
  currentDayAsDate: string;
};

export default function DailyMenu({currentDayName, currentDayAsDate, foodForAllCurrentWeek}: Props) {
  const [menuByDay, setMenuByDay] =  useState<Course[]>([]);
  const isMobile = useIsMobile();

  useEffect(() => {
      setMenuByDay(foodForAllCurrentWeek?.[days.map(day => day.toLowerCase()).indexOf(currentDayName.toLowerCase())]);
  }, [currentDayName, foodForAllCurrentWeek]);

  return (
    <section id="daily-menu" className="py-20">
        <div className={sectionWrapper}>
            <div className="text-center">
              <div className="px-6 py-2 mb-6">
                  <span className={sectionTopTitle}>Meniu Săptămânal</span>
              </div>
              <h2 className={sectionTitle}>
                  Selecții <span className="text-gold font-dancing">Zilnice</span> Proaspete
              </h2>
              <p className={sectionSubtitle}>
                  Meniul nostru se schimbă săptămânal cu ingrediente proaspete de sezon și specialitățile chef-ului
              </p>
          </div>

        <div className="mt-8 px-5 py-5 flex flex-col justify-center items-center bg-cream/70">
          {menuByDay?.length ? (
              <>
              <div className="mb-8">
                <div className="px-8 py-3 text-center">
                    <span className="text-gold font-bold text-2xl" data-price="35">Preț: 35 lei</span>
                </div>
                <h3 className="text-3xl font-playfair font-semibold text-center text-charcoal">
                    Meniul de Azi
                </h3>
                <h4 className="text-center text-gray-500">{currentDayAsDate}</h4>
              </div>
              {/*Food images*/}
              <MenuByDay menu={menuByDay} isMobile={isMobile} />
            </>
          ) : (
              <DailyMenuPlaceholder />
          )}
        </div>
        

        {/* Selected Day's Menu */}
        <div className="text-center mt-12">
          <a
            href="tel:+40741664241"
            className="primary"
          >
            <Phone className="w-5 h-5 mr-3" fill="currentColor" aria-hidden="true" />
            +40 741 664 241
          </a>
        </div>
      </div>
    </section>
  );
}