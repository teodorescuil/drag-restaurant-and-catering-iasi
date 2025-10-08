import DailyMenuClient from './DailyMenuClient';
import { foodWeeklyMenu } from '../../helpers/constants/weekly-menu';
import { getCurrentWeek } from '../../helpers/utils/getCurrentWeek';

export default function DailyMenuServer() {
    const { currentDayName, weekString, currentDayAsDate } = getCurrentWeek();
    const foodForAllCurrentWeek = foodWeeklyMenu.find(weekElement => weekElement.week === weekString)?.days ?? [];

    return (
        <DailyMenuClient
            currentDayName={currentDayName}
            foodForAllCurrentWeek={foodForAllCurrentWeek}
            currentDayAsDate={currentDayAsDate}
        />
    );
}
