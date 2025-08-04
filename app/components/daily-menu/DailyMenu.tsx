'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import {getCurrentWeek} from '../../utils/getCurrentWeek';
import {days, foodWeeklyMenu} from '../../constants/weekly-menu';
import {metadata} from '../../constants/metadata';
import {sectionTopTitle, sectionWrapper, sectionTitle, sectionSubtitle} from '../../constants/styles';
import { useRouter } from 'next/navigation';

export default function DailyMenu() {
  const router = useRouter();
  const {weeklyMenu} = metadata;
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
    <section id="daily-menu" className="py-20 bg-cream">
        <div className={sectionWrapper}>
            <div className="text-center mb-16">
              <div className="px-6 py-2 mb-6">
                  <span className={sectionTopTitle}>{weeklyMenu.topTitle}</span>
              </div>
              <h2 className={sectionTitle}>
                  {part1} <span className="text-gold font-dancing">{part2}</span> {part3}
              </h2>
              <p className={sectionSubtitle}>
                  {weeklyMenu.subtitle}
              </p>
              <div className="mt-6 bg-white/50 backdrop-blur-sm inline-block px-6 py-3 rounded-full shadow-sm">
                  <i className="fas fa-calendar-week mr-2 text-gold"></i>
                  <span className="text-charcoal font-semibold">{weeklyMenu.week} {currentWeek}</span>
              </div>
          </div>

          {/* Day Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {days.map((day, index) => (
              <button
                key={day}
                onClick={() => setSelectedDay(days[index])}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-500 ${
                  selectedDay.toLowerCase() === days[index].toLowerCase()
                    ? 'bg-gold text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gold/20 hover:text-gold/80'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

        {/* Selected Day's Menu */}
        <div className="mb-8">
            <div className="text-center">
                <div className="bg-gold/10 px-8 py-3">
                    <span className="text-gold font-bold text-2xl">{weeklyMenu.price}</span>
                </div>
            </div>
            <h3 className="text-3xl font-playfair font-semibold text-center text-charcoal mb-4">
                {weeklyMenu.menuText} {selectedDay.toLowerCase() === currentDay.toLowerCase() ? weeklyMenu.today : days[days.indexOf(selectedDay)]}
            </h3>
            <div className="text-center">
                <p className="text-gray-600 mt-4">Toate cele 3 feluri de mâncare sunt incluse</p>
            </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {foodWeeklyMenu.find(weekElement => weekElement.week === currentWeek)?.courses[selectedDayNumber].map((course, index) => (
            <div onClick={goToDailyMenu} key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group daily-menu-card">
                <Image 
                    // src={course.image}
                    src="/drag-logo-simple-colored.png"
                    alt={course.name}
                    className="w-48 h-48 object-cover group-hover:scale-105 transition-transform duration-300 mx-auto"
                    width={280}
                    height={20}
                />
                <div className="p-6">
                    <div className="mb-3">
                    <span className="inline-block bg-gold text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                        {course.type}
                    </span>
                    <h3 className="text-xl font-playfair font-semibold text-charcoal">{course.name}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{course.description}</p>
                </div>
            </div>
            )
          )}
          <div onClick={goToDailyMenu} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group daily-menu-card">
                <Image 
                    src="/drag-logo-simple-colored.png" 
                    alt="Desert"
                    className="w-48 h-48 object-cover group-hover:scale-105 transition-transform duration-300 mx-auto"
                    width={280}
                    height={20}
                />
                <div className="p-6">
                    <div className="mb-3">
                    <span className="inline-block bg-gold text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                        Desert
                    </span>
                    <h3 className="text-xl font-playfair font-semibold text-charcoal">Desert din partea casei</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Surpriza bucătarului</p>
                </div>
            </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${metadata.contact.phone}`}
              className="inline-flex items-center bg-gold text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold/90 transition-colors duration-200"
            >
              <i className="fas fa-phone mr-3"></i>
              {/* {weeklyMenu.buttons[0]}<br/> */}
              {/* {weeklyMenu.buttons[1]} */}
              {metadata.contact.phone}
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