import DailyMenuClient from './DailyMenuClient';
import { foodWeeklyMenu } from '../../helpers/constants/weekly-menu';
import { getCurrentWeek } from '../../helpers/utils/getCurrentWeek';

export default function DailyMenuServer() {
    const { currentDayName, weekString } = getCurrentWeek();
    const foodForAllCurrentWeek = foodWeeklyMenu.find(weekElement => weekElement.week === weekString)?.days ?? [];

    return (
        <DailyMenuClient
            currentDayName={currentDayName}
            currentWeek={weekString}
            foodForAllCurrentWeek={foodForAllCurrentWeek}
        />
    );
}
