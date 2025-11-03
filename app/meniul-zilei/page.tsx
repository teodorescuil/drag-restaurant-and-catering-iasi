/* eslint-disable @next/next/no-img-element */
'use client';
import { useState, useEffect } from 'react';
import { foodWeeklyMenu, days } from '../helpers/constants/weekly-menu';
import { getCurrentWeek } from '../helpers/utils/getCurrentWeek';
import { Phone, ChevronRight, ChevronDown } from 'lucide-react';
import useIsMobile from '../helpers/hooks/useIsMobile';
import DailyMenuPlaceholder from '../components/daily-menu-placeholder/DailyMenuPlaceholder';

type Course = {
  type: string;
  name: string;
  description: string;
  detailedDescription: string;
  ingredients: string;
  allergens: string[];
  image: string;
};

export default function WeeklyMenuDetailed() {
  const [currentDayName, setCurrentDayName] = useState<string>('');
  const [foodByCurrentDay, setFoodByCurrentDay] = useState<Course[]>([]);
  const [currentDayAsDate, setCurrentDayAsDate] = useState<string>('');
  const [weekMenu, setWeekMenu] = useState<Course[][]>([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    const { currentDayAsDate, weekString, currentDayName } = getCurrentWeek();
    setCurrentDayAsDate(currentDayAsDate);
    setCurrentDayName(currentDayName);
    setWeekMenu(
      foodWeeklyMenu.find((foodWeek) => foodWeek.week === weekString)?.days || []
    );
  }, []);

  useEffect(() => {
    setFoodByCurrentDay(
      weekMenu[days.map((day) => day.toLowerCase()).indexOf(currentDayName.toLowerCase())] || []
    );
  }, [weekMenu, currentDayName]);

  return (
    <section className="mt-20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block bg-gold/10 px-6 py-2 rounded-full mb-6">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Meniul de Azi Detaliat
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-charcoal mb-6">
            Selecții <span className="text-gold font-dancing">Culinare</span> Premium
          </h1>
          <p className="text-md md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Descoperă meniul nostru detaliat cu ingrediente premium, preparate autentice și descrieri complete pentru fiecare fel de mâncare
          </p>
        </div>

        {/* Daily Menu with dropdowns */}
        <div className="space-y-8">
          <div className={`bg-white rounded-3xl p-8 lg:p-12 ${!isMobile && 'shadow-xl border border-gray-100'}`}>
            {foodByCurrentDay?.length ? (
              <>
                <div className="text-center mb-12">
                  <div className="text-4xl font-bold text-gold mb-4">35 LEI</div>
                  <h2 className="text-2xl md:text-4xl font-playfair font-bold text-charcoal">
                    Meniul de Azi
                  </h2>
                  <h3 className="text-gray-600">{currentDayAsDate}</h3>
                </div>
                <div className="grid lg:grid-cols-3 gap-8">
                  {foodByCurrentDay.map((course, i) => (
                    <CourseDropdown key={i} course={course} index={i} isMobile={isMobile} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center">
                <DailyMenuPlaceholder />
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-28">
          <h3 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-6">
            Prospețime și Gust Autentic
          </h3>
          <p className="text-md md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Toate preparatele sunt realizate preponderent cu produse locale de sezon de la producători locali.
            Meniul se actualizează săptămânal pentru a asigura prospețimea ingredientelor de sezon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0754824625" className="primary">
              <Phone className="w-5 h-5 mr-3" fill="currentColor" aria-hidden="true" />
              Comandă prin Telefon
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseDropdown({
  course,
  index,
  isMobile,
}: {
  course: Course;
  index: number;
  isMobile: boolean;
}) {
  const [open, setOpen] = useState(false);
  const panelId = `course-panel-${index}`;

  // Closed header (mobile) – pill with arrow + type + name
  const MobileHeader = () => (
  <button
    type="button"
    onClick={() => setOpen((s) => !s)}
    className={`relative w-full bg-white rounded-full px-6 py-3 text-left items-start ${isMobile && !open && 'shadow-lg'}`}
    aria-expanded={open}
    aria-controls={panelId}
  >
    {/* Arrow out of flow so text has full width */}
    <span className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-7 h-7 rounded-full bg-neutral-100 shadow-sm">
      {open ? (
        <ChevronDown className="w-4 h-4" aria-hidden="true" />
      ) : (
        <ChevronRight className="w-4 h-4" aria-hidden="true" />
      )}
    </span>

    {/* Show type + name ONLY when closed */}
    {!open && (
      <span className="block pl-10 min-w-0">
        <span className="flex flex-col min-w-0">
          <span className="text-gold text-sm font-medium">
            {course.type}
          </span>
          <span className="mt-0.5 text-base font-medium text-charcoal whitespace-normal break-words">
            {course.name}
          </span>
        </span>
      </span>
    )}
  </button>
);


  // The full card content
  const Card = () => (
    <div className="rounded-2xl overflow-hidden">
      <div className="flex flex-row items-center justify-center">
        <img
          // src={course.image}
          src="../../drag-logo-simple-colored.png"
          alt={course.name}
          className="w-auto h-50 object-cover"
        />
      </div>
      <div className="p-6">
        <div className="mb-4">
          <span className="inline-block text-gold py-1 text-sm font-medium mb-2">
            {course.type}
          </span>
          <h3 className="text-2xl font-playfair font-bold text-charcoal mb-2">
            {course.name}
          </h3>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {course.detailedDescription}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-charcoal mb-2">Ingrediente:</h4>
            <p className="text-gray-600 text-sm">{course.ingredients}</p>
          </div>

          <div>
            <h4 className="font-bold text-charcoal mb-2">{course.allergens.length > 0 ? "Alergeni:" : ""}</h4>
            <div className="flex flex-wrap gap-2">
              {course.allergens.map((a, j) => (
                <span
                  key={j}
                  className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Desktop: always open (original card)
  if (!isMobile) {
    return <Card />;
  }

  // Mobile: dropdown
  return (
    <div className={`space-y-3  ${open && isMobile && 'rounded-2xl shadow-xl border border-gray-100'}`}>
      <MobileHeader />

      {/* Smooth collapse/expand using CSS grid trick */}
      <div
        id={panelId}
        aria-hidden={!open}
        className={`transition-[grid-template-rows] duration-300 ease-in-out grid ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <Card />
        </div>
      </div>
    </div>
  );
}
