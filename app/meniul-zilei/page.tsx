/* eslint-disable @next/next/no-img-element */
'use client';
import { useState, useEffect } from 'react';
import {foodWeeklyMenu, days} from '../helpers/constants/weekly-menu';
import {getCurrentWeek} from '../helpers/utils/getCurrentWeek';

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
  // const [currentDay, setCurrentDay] = useState('');
  const [currentWeek, setCurrentWeek] = useState('');
  const [weekMenu, setWeekMenu] = useState<Course[][]>([]);

useEffect(() => {
    const {weekString} = getCurrentWeek();
    // const {currentDayName, weekString} = getCurrentWeek();
    // setCurrentDay(currentDayName);
    setCurrentWeek(weekString);
    setWeekMenu(foodWeeklyMenu.find(foodWeek => foodWeek.week === weekString)?.courses || []);
}, []);


  return (
    <section className="m-28 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gold/10 px-6 py-2 rounded-full mb-6">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">Meniu Complet Săptămânal</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-charcoal mb-6">
            Selecții <span className="text-gold font-dancing">Culinare</span> Premium
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Descoperă meniul nostru detaliat cu ingrediente premium, preparate autentice și descrieri complete pentru fiecare fel de mâncare
          </p>
          
          <div>
            {/* Price Section */}
            <div className="flex flex-col bg-gradient-to-r from-gold to-gold/90 px-12 py-6 rounded-2xl mb-6">
                <div className="text-center">
                    <div className="text-lg font-bold mb-2">Meniu Complet Zilnic</div>
                    <div className="text-4xl font-bold text-gold">30 LEI</div>
                    <div className="text-sm mt-2">3 feluri de mâncare</div>
                </div>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm inline-block px-8 py-4 rounded-full shadow-lg border border-gold/20">
                <i className="fas fa-calendar-week mr-3 text-gold text-lg"></i>
                <span className="text-charcoal font-bold text-lg">Săptămâna {currentWeek}</span>
            </div>
          </div>
        </div>

        {/* Weekly Overview Grid */}
        <div className="grid lg:grid-cols-7 md:grid-cols-3 sm:grid-cols-2 gap-6 mb-16">
            {
                weekMenu.map((dayMenu, dayIndex) => (
                  <div key={dayIndex} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                      <div className="text-center">
                          <h3 className="font-playfair font-bold text-lg text-charcoal mb-4">{days[dayIndex]}</h3>
                          <div className="space-y-2">
                              {
                                  dayMenu.map((course, courseIndex) => (
                                      <div key={courseIndex} className="text-xs text-gray-600">
                                          <span className="font-medium text-gold">{course.type}:</span>
                                          <div className="text-charcoal font-medium">{course.name}</div>
                                      </div>
                                  ))
                              }
                              <div key={`dessert-${dayIndex}`} className="text-xs text-gray-600">
                                  <span className="font-medium text-gold">Desert:</span>
                                  <div className="text-charcoal font-medium">Surpriza bucătarului</div>
                              </div>
                          </div>
                      </div>
                  </div>
              ))
            }
        </div>

        {/* Detailed Daily Menus */}
        <div className="space-y-16">
          {weekMenu.map((dayMenu, dayIndex) => (
            <div key={dayIndex} className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-playfair font-bold text-charcoal mb-4">
                    Meniul de {days[dayIndex]}
                  </h2>
                  <p className="text-gray-600">Meniu complet cu 3 feluri de mâncare</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {dayMenu.map((course, courseIndex) => (
                    <div key={courseIndex} className="bg-cream/30 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                      <img 
                        // src={course.image} 
                        src="../../drag-logo-simple-colored.png"
                        alt={course.name}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-6">
                        <div className="mb-4">
                          <span className="inline-block bg-gold text-white px-4 py-2 rounded-full text-sm font-bold mb-3">
                            {course.type}
                          </span>
                          <h3 className="text-2xl font-playfair font-bold text-charcoal mb-2">{course.name}</h3>
                          <p className="text-gray-700 mb-4">{course.description}</p>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-bold text-charcoal mb-2">Descriere detaliată:</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{course.detailedDescription}</p>
                          </div>

                          <div>
                            <h4 className="font-bold text-charcoal mb-2">Ingrediente:</h4>
                            <p className="text-gray-600 text-sm">{course.ingredients}</p>
                          </div>

                          <div>
                            <h4 className="font-bold text-charcoal mb-2">Alergeni:</h4>
                            <div className="flex flex-wrap gap-2">
                              {course.allergens.map((allergen, allergenIndex) => (
                                <span key={allergenIndex} className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                                  {allergen}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div key={`${dayIndex}-dessert`} className="bg-cream/30 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                      <img 
                        src="../../drag-logo-simple-colored.png"
                        alt="Desert"
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-6">
                        <div className="mb-4">
                          <span className="inline-block bg-gold text-white px-4 py-2 rounded-full text-sm font-bold mb-3">
                            Desert
                          </span>
                          <h3 className="text-2xl font-playfair font-bold text-charcoal mb-2">Desertul casei</h3>
                          <p className="text-gray-700 mb-4">Surpriza bucătarului</p>
                        </div>

                        {/* <div className="space-y-4">
                          <div>
                            <h4 className="font-bold text-charcoal mb-2">Descriere detaliată:</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{course.detailedDescription}</p>
                          </div>

                          <div>
                            <h4 className="font-bold text-charcoal mb-2">Ingrediente:</h4>
                            <p className="text-gray-600 text-sm">{course.ingredients}</p>
                          </div>

                          <div>
                            <h4 className="font-bold text-charcoal mb-2">Alergeni:</h4>
                            <div className="flex flex-wrap gap-2">
                              {course.allergens.map((allergen, allergenIndex) => (
                                <span key={allergenIndex} className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                                  {allergen}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                </div>
              </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-12">
          <h3 className="text-3xl font-playfair font-bold text-charcoal mb-6">
            Rezervă Acum Experiența Culinară Completă
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Toate preparatele sunt realizate cu ingrediente premium și tehnici culinare autentice. 
            Meniul se actualizează săptămânal pentru a asigura prospețimea ingredientelor de sezon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0754824625" 
              className="inline-flex items-center bg-gold text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold/90 transition-colors duration-200 shadow-lg"
            >
              <i className="fas fa-phone mr-3"></i>
              Comandă prin Telefon
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
