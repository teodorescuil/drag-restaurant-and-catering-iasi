'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {generalInfoLabels} from '../../helpers/constants/metadata';
import {sectionTopTitle, sectionWrapper, sectionTitle, sectionSubtitle} from '../../helpers/constants/styles';
import {days, foodWeeklyMenu} from '../../helpers/constants/weekly-menu';
import {getCurrentWeek} from '../../helpers/utils/getCurrentWeek';
import WeekSelector from './components/week-selector';

export default function DailyMenu() {
  const router = useRouter();
  const {weeklyMenu} = generalInfoLabels;
  const [part1, part2, part3] = weeklyMenu.title.split(' ');
  const [currentWeek, setCurrentWeek] = useState('');
  const [selectedDay, setSelectedDay] = useState(days[0].toLowerCase());
  const [currentDay, setCurrentDay] = useState(days[0].toLowerCase());
  const [selectedDayNumber, setSelectedDayNumber] = useState(0);

  useEffect(() => {
      const {currentDayName, weekString} = getCurrentWeek();
      setCurrentDay(currentDayName);
      setSelectedDay(currentDayName);
      setCurrentWeek(weekString);
  }, []);

  useEffect(() => {
      setSelectedDayNumber(days.map(day => day.toLowerCase()).indexOf(selectedDay.toLowerCase()));
  }, [selectedDay]);


  const goToDailyMenu = () => {
    router.push('/meniul-zilei');
  }

  return (
    <section id="daily-menu" className="py-20">
        <div className={sectionWrapper}>
            <div className="text-center">
              <div className="px-6 py-2 mb-6">
                  <span className={sectionTopTitle}>{weeklyMenu.topTitle}</span>
              </div>
              <h2 className={sectionTitle}>
                  {part1} <span className="text-gold font-dancing">{part2}</span> {part3}
              </h2>
              <p className={sectionSubtitle}>
                  {weeklyMenu.subtitle}
              </p>
          </div>

        {/* Week and day Selector */}
        <WeekSelector setSelectedDay={setSelectedDay} selectedDay={selectedDay} currentWeek={currentWeek} />

        {/* Selected Day's Menu */}
        
        
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${generalInfoLabels.contact.phone}`}
              className="inline-flex items-center bg-gold text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold/90 transition-colors duration-200"
            >
              <i className="fas fa-phone mr-3"></i>
              {/* {weeklyMenu.buttons[0]}<br/> */}
              {/* {weeklyMenu.buttons[1]} */}
              {generalInfoLabels.contact.phone}
            </a>
            {/* <button className="inline-flex items-center border-2 border-gold text-gold px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold hover:text-white transition-colors duration-200">
              <i className="fas fa-download mr-3"></i>
              Descarcă Meniul Săptămânal
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}