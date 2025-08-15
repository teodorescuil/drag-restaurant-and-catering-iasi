'use client';
import {days} from '../../../helpers/constants/weekly-menu';
import {generalInfoLabels} from '../../../helpers/constants/metadata';

const {weeklyMenu} = generalInfoLabels;

type Props = {
  setSelectedDay: (day: string) => void;
  selectedDay: string;
  currentWeek: string;
};

export default function WeekSelector({setSelectedDay, selectedDay, currentWeek}: Props) {
    const getButtonStyle = (index: number) => (
        `px-6 py-3 rounded-full font-medium transition-all duration-500 ${
            selectedDay.toLowerCase() === days[index].toLowerCase()
            ? 'bg-gold text-white shadow-lg'
            : 'bg-gray-100 text-gray-700 hover:bg-gold/20 hover:text-gold/80'
        }`
    );
    return (
        <div className='flex flex-col justify-center'>
            <div className="mb-8 mt-8 mx-auto">
                <i className="fas fa-calendar-week mr-2 text-gold"></i>
                <span className="text-charcoal font-semibold text-lg">{weeklyMenu.week} {currentWeek}</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
                {days.map((day, index) => (
                    <button
                        key={day}
                        onClick={() => setSelectedDay(days[index])}
                        className={getButtonStyle(index)}>
                        {day}
                    </button>
                ))}
            </div>
        </div>
        
    );
}
