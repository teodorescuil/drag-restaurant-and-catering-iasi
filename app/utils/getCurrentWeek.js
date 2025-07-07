'use client'
export const getCurrentWeek = () => {
    const today = new Date();
    // const currentDate = (today.toLocaleDateString('ro-RO', options));
    const currentDayName = today.toLocaleDateString('ro-RO', { weekday: 'long' });
    
    // Calculate current week
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay() + 1); // Monday
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // Sunday
    
    const weekString = `${startOfWeek.toLocaleDateString('ro-RO', { month: 'long', day: 'numeric' })} - ${endOfWeek.toLocaleDateString('ro-RO', { month: 'long', day: 'numeric' })}`;

    return {currentDayName, weekString};
}