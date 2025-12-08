'use client';
import { useState, useEffect } from 'react';
import DailyMenuPlaceholder from '../daily-menu-placeholder/DailyMenuPlaceholder';
import { Phone } from "lucide-react";
import { sectionTopTitle, sectionWrapper, sectionTitle, sectionSubtitle } from '../../helpers/constants/styles';
import { days } from '../../helpers/constants/weekly-menu';
import MenuByDay from './components/MenuByDay';
import useIsMobile from '../../helpers/hooks/useIsMobile';

type Course = {
  type: string;
  name: string;
  description: string;
  ingredients: string;
  allergens: string[];
  image: string;
};

type WeekEntry = {
  week: string;        // ex: "10 noiembrie - 16 noiembrie"
  days: Course[][];    // 7 array-uri (Luni..Duminică)
};

type Props = {
  // TOATĂ structura săptămânilor; alegem în client care e săptămâna curentă
  foodWeeklyMenu: WeekEntry[];
  // opțional: override pt. test (YYYY-MM-DD)
  overrideDateYmd?: string;
};

// === Helpers ===
function roNorm(s: string) {
  return s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().trim();
}

function getRoToday(overrideYmd?: string) {
  const tz = 'Europe/Bucharest';

  const ymd = overrideYmd ?? new Intl.DateTimeFormat('en-CA', {
    timeZone: tz, year:'numeric', month:'2-digit', day:'2-digit'
  }).format(new Date()); // "2025-11-13"

  const [y, m, d] = ymd.split('-').map(Number);
  const today = new Date(Date.UTC(y, m - 1, d, 12, 0, 0)); // anti-DST drift

  const currentDayName = new Intl.DateTimeFormat('ro-RO', {
    timeZone: tz, weekday: 'long'
  }).format(today);

  const currentDayAsDate = new Intl.DateTimeFormat('ro-RO', {
    timeZone: tz, day:'numeric', month:'long', year:'numeric'
  }).format(today);

  // calculăm intervalul luni–duminică (pentru comparat cu `week`)
  const weekdayShort = new Intl.DateTimeFormat('en-US', {
    timeZone: tz, weekday:'short'
  }).format(today); // Mon..Sun
  const toMonIdx: Record<string, number> = { Mon:1, Tue:2, Wed:3, Thu:4, Fri:5, Sat:6, Sun:7 };
  const dow = toMonIdx[weekdayShort] || 1;

  const start = new Date(today);
  start.setUTCDate(start.getUTCDate() - (dow - 1));
  const end = new Date(start);
  end.setUTCDate(end.getUTCDate() + 6);

  const dayFmt = new Intl.DateTimeFormat('ro-RO', { timeZone: tz, day:'numeric', month:'long' });
  const weekString = `${dayFmt.format(start)} - ${dayFmt.format(end)}`;

  return { currentDayName, currentDayAsDate, weekString };
}

export default function DailyMenuClient({ foodWeeklyMenu, overrideDateYmd }: Props) {
  const [menuByDay, setMenuByDay] = useState<Course[] | null>(null);
  const [currentDayAsDate, setCurrentDayAsDate] = useState<string>('');
  const isMobile = useIsMobile();

  useEffect(() => {
    // 1) calculăm în BROWSER ziua și stringul de săptămână
    const { currentDayName, currentDayAsDate, weekString } = getRoToday(overrideDateYmd);
    setCurrentDayAsDate(currentDayAsDate);

    // 2) găsim săptămâna curentă în structura statică
    const currentWeek = foodWeeklyMenu.find(w => roNorm(w.week) === roNorm(weekString));
    const foodForAllCurrentWeek = currentWeek?.days ?? [];

    // 3) găsim indexul zilei (luni..duminică)
    const idx = days.map(roNorm).findIndex(d => d === roNorm(currentDayName));
    const menu = idx >= 0 ? (foodForAllCurrentWeek[idx] ?? []) : [];

    setMenuByDay(menu);
  }, [foodWeeklyMenu, overrideDateYmd]);

  const isReady = menuByDay !== null && !!currentDayAsDate;

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
          {!isReady ? (
            <DailyMenuPlaceholder />
          ) : menuByDay && menuByDay.length ? (
            <>
              <div>
                <div className="mb-8">
                  <div className="px-8 py-3 text-center">
                    <span className="text-gold font-bold text-2xl" data-price="35">Preț: 35 lei</span>
                  </div>
                  <h3 className="text-3xl font-playfair font-semibold text-center text-charcoal">
                    Meniul de Azi
                  </h3>
                  <h4 className="text-center text-gray-500">{currentDayAsDate}</h4>
                </div>

                {/* Food images */}
                <MenuByDay menu={menuByDay.slice(0, 3)} isMobile={isMobile} />
              </div>

              {menuByDay.length > 3 && (
                <div>
                  <h3 className="mt-8 mb-4 text-3xl font-playfair font-semibold text-center text-charcoal">
                    Meniul de Post
                  </h3>
                  <MenuByDay menu={menuByDay.slice(3)} isMobile={isMobile} />
                </div>
              )}
            </>
          ) : (
            <DailyMenuPlaceholder />
          )}
        </div>

        <div className="text-center mt-12">
          <a href="tel:+40741664241" className="primary">
            <Phone className="w-5 h-5 mr-3" fill="currentColor" aria-hidden="true" />
            +40 741 664 241
          </a>
        </div>
      </div>
    </section>
  );
}
