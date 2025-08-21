'use client';
import { useState, useEffect } from 'react';
import { Phone } from "lucide-react"
import {sectionTopTitle, sectionWrapper, sectionTitle, sectionSubtitle} from '../../helpers/constants/styles';
import {days} from '../../helpers/constants/weekly-menu';
import WeekSelector from './components/WeekSelector';
import MenuByDay from './components/MenuByDay'

type Course = {
  type: string;
  name: string;
  description: string;
  detailedDescription: string;
  ingredients: string;
  allergens: string[];
  image: string;
};

type Props = {
  currentDayName: string;
  currentWeek: string;
  foodForAllCurrentWeek: Course[][];
};

export default function DailyMenu({currentDayName, currentWeek, foodForAllCurrentWeek}: Props) {
  const [selectedDay, setSelectedDay] = useState(currentDayName);
  const [menuByDay, setMenuByDay] =  useState<Course[]>([]);

  useEffect(() => {
      setMenuByDay(foodForAllCurrentWeek?.[days.map(day => day.toLowerCase()).indexOf(selectedDay.toLowerCase())]);
  }, [selectedDay, foodForAllCurrentWeek]);

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

        {/* Week and day Selector */}
        <WeekSelector setSelectedDay={setSelectedDay} selectedDay={selectedDay} currentWeek={currentWeek} />
        
        <div className="px-5 py-5 flex flex-col justify-center items-center bg-cream/70">
          {menuByDay?.length ? (
              <>
              <div className="mb-8">
                <div className="text-center">
                    <div className="px-8 py-3">
                        <span className="text-gold font-bold text-2xl" data-price="35">Pret: 35 lei</span>
                    </div>
                </div>
                <h3 className="text-3xl font-playfair font-semibold text-center text-charcoal mb-4">
                    Meniul de {selectedDay.toLowerCase() === currentDayName.toLowerCase() ? "Azi" : days[days.indexOf(selectedDay)]}
                </h3>
                {/* <div className="text-center">
                    <p className="text-gray-600">Toate cele 3 feluri de mâncare sunt incluse</p>
                </div> */}
              </div>
              {/*Food images*/}
              <MenuByDay menu={menuByDay} />
            </>
          ) : (
            <p className="text-gray-600">Nu există meniu pentru această zi.</p>
          )}
        </div>
        

        {/* Selected Day's Menu */}
        <div className="text-center mt-12">
          <a
            href="tel:+40754824625"
            className="inline-flex items-center bg-gold text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold/90 transition-colors duration-200"
          >
            <Phone className="w-5 h-5 mr-3" fill="currentColor" aria-hidden="true" />
            +40 754 824 625
          </a>
        </div>
      </div>
    </section>
  );
}