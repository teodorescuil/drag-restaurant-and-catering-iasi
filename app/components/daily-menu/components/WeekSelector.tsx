'use client';
import Link from 'next/link';
import {days} from '../../../helpers/constants/weekly-menu';
import { CalendarDays } from "lucide-react";

type Props = {
  setSelectedDay: (day: string) => void;
  selectedDay: string;
  currentDayAsDate: string;
  currentWeek: string;
};

export default function WeekSelector({setSelectedDay, selectedDay, currentWeek}: Props) {
    const getButtonStyle = (index: number) => (
        `px-6 py-3 rounded-full font-medium transition-all duration-500 ${
            selectedDay.toLowerCase() === days[index].toLowerCase()
            ? 'bg-gray-100 text-gold shadow-lg border-2 border-gold'
            : 'bg-gray-100 text-gray-700 border-2 border-gray-100 hover:bg-gold/20 hover:text-gold/80'
        }`
    );
    return (
        <div className='flex flex-col justify-center'>
            <div className="mb-8 mt-8 mx-auto flex flex-row items-center justify-center">
                <CalendarDays className="w-5 h-5 mr-2 text-gold" aria-hidden="true" />
                <span className="text-charcoal font-semibold text-lg">{currentWeek}</span>
            </div>
            <div role="tablist" aria-label={`Meniul săptămânii ${currentWeek}`} className="flex flex-wrap justify-center gap-2 mb-12">
                {days.map((day, index) => {
                    const sel = selectedDay.toLowerCase() === day.toLowerCase();
                    return (
                    <Link
                        key={day}
                        role="tab"
                        aria-selected={sel}
                        aria-controls={`menu-${day.toLowerCase()}`}
                        href={`/meniul-zilei/${day.toLowerCase()}`}
                        onClick={(e) => { /* păstrezi UX-ul tab-urilor */
                            e.preventDefault();
                            setSelectedDay(day);
                        }}
                        className={getButtonStyle(index)}
                    >
                        {day}
                    </Link>
                    );
                })}
            </div>
    </div>
        
    );
}
