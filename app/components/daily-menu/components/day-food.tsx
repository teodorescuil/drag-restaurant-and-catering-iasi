'use client';
import {days} from '../../../helpers/constants/weekly-menu';
import {generalInfoLabels} from '../../../helpers/constants/metadata';

const {weeklyMenu} = generalInfoLabels;

type Props = {
  setSelectedDay: (day: string) => void;
  selectedDay: string;
  currentWeek: string;
};

export default function WeekSelector({setSelectedDay, selectedDay, currentDay}: Props) {
    return (
        <div className='flex flex-col justify-center'>
            <div className="mb-8">
                <div className="text-center">
                    <div className="px-8 py-3">
                        <span className="text-gold font-bold text-2xl">{weeklyMenu.price}</span>
                    </div>
                </div>
                <h3 className="text-3xl font-playfair font-semibold text-center text-charcoal mb-4">
                    {weeklyMenu.menuText} {selectedDay.toLowerCase() === currentDay.toLowerCase() ? weeklyMenu.today : days[days.indexOf(selectedDay)]}
                </h3>
                <div className="text-center">
                    <p className="text-gray-600">Toate cele 3 feluri de mâncare sunt incluse</p>
                </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
            {/* {foodWeeklyMenu.find(weekElement => weekElement.week === currentWeek)?.courses[selectedDayNumber].map((course, index) => (
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
            )} */}
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
        </div>
        
    );
}
